"use client"

import { ThemeProvider as NextThemeProvider } from "next-themes"
import type { ReactNode } from "react"

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: string
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "openfav-theme",
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem
      disableTransitionOnChange={false}
      storageKey={storageKey}
      themes={["light", "dark", "system"]}
      {...props}
    >
      {children}
    </NextThemeProvider>
  )
}
