"use client"

import { useState } from "react"
import { AuthForm } from "../components/AuthForm"
import { AppProviders } from "../providers/AppProviders"

export default function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin")

  const handleSuccess = () => {
    window.location.href = "/dashboard"
  }

  return (
    <AppProviders>
      <div className="min-h-screen flex items-center justify-center p-4">
        <AuthForm
          mode={mode}
          onToggleMode={() => setMode(mode === "signin" ? "signup" : "signin")}
          onSuccess={handleSuccess}
        />
      </div>
    </AppProviders>
  )
}
