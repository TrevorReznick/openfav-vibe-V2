"use client"

import { useTheme as useNextTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useTheme() {
  const { theme, setTheme, resolvedTheme, themes } = useNextTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Enhanced theme utilities
  const isDark = resolvedTheme === "dark"
  const isLight = resolvedTheme === "light"
  const isSystem = theme === "system"

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const setLightTheme = () => setTheme("light")
  const setDarkTheme = () => setTheme("dark")
  const setSystemTheme = () => setTheme("system")

  return {
    theme,
    setTheme,
    resolvedTheme,
    themes,
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
