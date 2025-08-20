import { atom } from "nanostores"

export type Theme = "light" | "dark" | "system"

// Initialize theme from localStorage or default to system
const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "system"

  const stored = localStorage.getItem("theme") as Theme
  if (stored && ["light", "dark", "system"].includes(stored)) {
    return stored
  }
  return "system"
}

// Get the resolved theme (what should actually be applied)
const getResolvedTheme = (theme: Theme): "light" | "dark" => {
  if (theme === "system") {
    if (typeof window === "undefined") return "light"
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }
  return theme
}

export const themeStore = atom<Theme>(getInitialTheme())
export const resolvedThemeStore = atom<"light" | "dark">("light")

// Update resolved theme when theme changes
themeStore.subscribe((theme) => {
  const resolved = getResolvedTheme(theme)
  resolvedThemeStore.set(resolved)

  // Apply theme to document
  if (typeof window !== "undefined") {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(resolved)

    // Store preference
    localStorage.setItem("theme", theme)
  }
})

// Listen for system theme changes
if (typeof window !== "undefined") {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  mediaQuery.addEventListener("change", () => {
    if (themeStore.get() === "system") {
      const resolved = getResolvedTheme("system")
      resolvedThemeStore.set(resolved)

      const root = document.documentElement
      root.classList.remove("light", "dark")
      root.classList.add(resolved)
    }
  })

  // Set initial resolved theme
  const initialResolved = getResolvedTheme(themeStore.get())
  resolvedThemeStore.set(initialResolved)

  const root = document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(initialResolved)
}

export const setTheme = (theme: Theme) => {
  themeStore.set(theme)
}
