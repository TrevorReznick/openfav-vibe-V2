"use client"

import type React from "react"
import { useAuth } from "../contexts/AuthContext"

interface ProtectedRouteProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const { user, loading } = useAuth()

  console.log("[v0] ProtectedRoute - user:", user, "loading:", loading)

  if (loading) {
    console.log("[v0] ProtectedRoute showing loading state")
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    console.log("[v0] ProtectedRoute access denied - no user")
    return (
      fallback || (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Access Denied</h2>
            <p className="text-muted-foreground">Please sign in to access this page.</p>
          </div>
        </div>
      )
    )
  }

  console.log("[v0] ProtectedRoute access granted for user:", user.email)
  return <>{children}</>
}
