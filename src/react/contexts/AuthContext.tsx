"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

interface User {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signUp: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>
  signOut: () => Promise<void>
  signInWithGoogle: () => Promise<{ success: boolean; error?: string }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const mockUser = localStorage.getItem("mockUser")
    if (mockUser) {
      setUser(JSON.parse(mockUser))
    }
    setLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    if (email && password) {
      const mockUser: User = {
        id: "1",
        email,
        name: email.split("@")[0],
        createdAt: new Date().toISOString(),
      }
      setUser(mockUser)
      localStorage.setItem("mockUser", JSON.stringify(mockUser))
      return { success: true }
    }
    return { success: false, error: "Invalid credentials" }
  }

  const signUp = async (email: string, password: string, name: string) => {
    if (email && password && name) {
      const mockUser: User = {
        id: Date.now().toString(),
        email,
        name,
        createdAt: new Date().toISOString(),
      }
      setUser(mockUser)
      localStorage.setItem("mockUser", JSON.stringify(mockUser))
      return { success: true }
    }
    return { success: false, error: "Please fill all fields" }
  }

  const signOut = async () => {
    setUser(null)
    localStorage.removeItem("mockUser")
  }

  const signInWithGoogle = async () => {
    const mockUser: User = {
      id: "google-1",
      email: "user@gmail.com",
      name: "Google User",
      avatar: "https://via.placeholder.com/40",
      createdAt: new Date().toISOString(),
    }
    setUser(mockUser)
    localStorage.setItem("mockUser", JSON.stringify(mockUser))
    return { success: true }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signOut,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
