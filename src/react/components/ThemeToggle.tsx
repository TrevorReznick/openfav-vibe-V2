"use client"

import { useState, useEffect } from "react"
import { useStore } from "@nanostores/react"
import { Sun, Moon, Monitor, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { themeStore, resolvedThemeStore, setTheme, type Theme } from "../../stores/theme"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const theme = useStore(themeStore)
  const resolvedTheme = useStore(resolvedThemeStore)

  console.log("[v0] ThemeToggle mounted:", mounted, "theme:", theme, "resolvedTheme:", resolvedTheme)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10 rounded-md border border-border bg-background animate-pulse" />
  }

  const getIcon = (themeName: Theme) => {
    switch (themeName) {
      case "light":
        return <Sun className="h-4 w-4" />
      case "dark":
        return <Moon className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  const getCurrentIcon = () => {
    return getIcon(theme)
  }

  const themeOptions = [
    { value: "light" as Theme, label: "Light", icon: Sun },
    { value: "dark" as Theme, label: "Dark", icon: Moon },
    { value: "system" as Theme, label: "System", icon: Monitor },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-border bg-background hover:bg-secondary transition-all duration-200 text-sm font-medium"
          aria-label="Toggle theme"
        >
          {getCurrentIcon()}
          <span className="hidden sm:inline capitalize">{theme === "system" ? "System" : theme}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={5} className="min-w-[160px]">
        {themeOptions.map((option) => {
          const Icon = option.icon
          const isActive = theme === option.value
          const isSystemActive = theme === "system" && resolvedTheme === option.value

          return (
            <DropdownMenuItem
              key={option.value}
              onClick={() => {
                console.log("[v0] ThemeToggle changing theme to:", option.value)
                setTheme(option.value)
              }}
              className="flex items-center gap-2"
            >
              <Icon className="h-4 w-4" />
              <span className="flex-1">{option.label}</span>
              {isActive && <div className="w-2 h-2 rounded-full bg-primary" />}
              {isSystemActive && option.value !== "system" && (
                <span className="text-xs text-muted-foreground">(active)</span>
              )}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
