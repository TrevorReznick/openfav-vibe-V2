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
  console.log("[v0] ThemeProvider rendered with theme:", theme, "defaultTheme:", defaultTheme)

  useEffect(() => {
    console.log("[v0] ThemeProvider initializing theme with default:", defaultTheme, "storageKey:", storageKey)
    initializeTheme(defaultTheme, storageKey)
  }, [defaultTheme, storageKey])

  useEffect(() => {
    console.log("[v0] ThemeProvider applying theme:", theme)
    const root = document.documentElement

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      console.log("[v0] ThemeProvider detected system theme:", systemTheme)
      root.classList.toggle("dark", systemTheme === "dark")
    } else {
      console.log("[v0] ThemeProvider applying manual theme:", theme)
      root.classList.toggle("dark", theme === "dark")
    }
  }, [theme])

  return <>{children}</>
}
