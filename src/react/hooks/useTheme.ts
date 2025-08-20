"use client"

import { useStore } from "@nanostores/react"
import { themeStore, setTheme as setThemeStore } from "../../stores/theme"
import { useEffect, useState } from "react"

export function useTheme() {
  const theme = useStore(themeStore)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Enhanced theme utilities
  const resolvedTheme =
    theme === "system"
      ? typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme

  const isDark = resolvedTheme === "dark"
  const isLight = resolvedTheme === "light"
  const isSystem = theme === "system"

  const toggleTheme = () => {
    if (theme === "light") {
      setThemeStore("dark")
    } else if (theme === "dark") {
      setThemeStore("system")
    } else {
      setThemeStore("light")
    }
  }

  const setLightTheme = () => setThemeStore("light")
  const setDarkTheme = () => setThemeStore("dark")
  const setSystemTheme = () => setThemeStore("system")

  return {
    theme,
    setTheme: setThemeStore,
    resolvedTheme,
    themes: ["light", "dark", "system"],
    mounted,
    isDark,
    isLight,
    isSystem,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    setSystemTheme,
  }
}
