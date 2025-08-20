"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AuthProvider } from "../contexts/AuthContext"
import { type ReactNode, useState } from "react"
import { Toaster as Sonner } from "sonner"
import { ErrorBoundary } from "react-error-boundary"
import { useStore } from "@nanostores/react"
import { resolvedThemeStore } from "../../stores/theme"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
})

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-destructive mb-4">Something went wrong</h2>
        <p className="text-muted-foreground mb-4">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Reload page
        </button>
      </div>
    </div>
  )
}

export function AppProviders({ children }: { children: ReactNode }) {
  const [client] = useState(() => queryClient)
  const resolvedTheme = useStore(resolvedThemeStore)

  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onError={(error) => console.error("[v0] Error caught by boundary:", error)}
        >
          {children}
          <Sonner
            position="top-right"
            theme={resolvedTheme}
            richColors
            closeButton
            toastOptions={{
              style: {
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                color: "hsl(var(--card-foreground))",
              },
            }}
          />
        </ErrorBoundary>
      </AuthProvider>
    </QueryClientProvider>
  )
}
