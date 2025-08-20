"use client"

import type { ReactNode } from "react"
import { useEffect } from "react"
import { useStore } from "@nanostores/react"
import { themeStore, initializeTheme } from "../../stores/theme"

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: string
  storageKey?: string
}

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "openfav-theme" }: ThemeProviderProps) {
  const theme = useStore(themeStore)

  useEffect(() => {
    initializeTheme(defaultTheme, storageKey)
  }, [defaultTheme, storageKey])

  useEffect(() => {
    const root = document.documentElement

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.toggle("dark", systemTheme === "dark")
    } else {
      root.classList.toggle("dark", theme === "dark")
    }
  }, [theme])

  return <>{children}</>
}
