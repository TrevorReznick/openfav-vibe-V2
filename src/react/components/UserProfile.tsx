"use client"

import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"

export function UserProfile() {
  const { user, signOut } = useAuth()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  console.log("[v0] UserProfile rendered - user:", user, "dropdownOpen:", isDropdownOpen)

  if (!user) {
    console.log("[v0] UserProfile - no user, not rendering")
    return null
  }

  const toggleDropdown = () => {
    console.log("[v0] UserProfile toggling dropdown from:", isDropdownOpen, "to:", !isDropdownOpen)
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleSignOut = () => {
    console.log("[v0] UserProfile signing out user")
    setIsDropdownOpen(false)
    signOut()
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 p-2 rounded-md hover:bg-accent transition-colors"
      >
        {user.avatar ? (
          <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-8 h-8 rounded-full" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}
        <span className="text-sm font-medium text-foreground hidden sm:block">{user.name}</span>
        <svg
          className={`w-4 h-4 text-muted-foreground transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg z-50">
          <div className="p-3 border-b border-border">
            <p className="text-sm font-medium text-foreground">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>

          <div className="py-1">
            <button
              onClick={() => {
                console.log("[v0] UserProfile navigating to profile settings")
                setIsDropdownOpen(false)
                // Navigate to profile page
              }}
              className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
            >
              Profile Settings
            </button>
            <button
              onClick={() => {
                console.log("[v0] UserProfile navigating to preferences")
                setIsDropdownOpen(false)
                // Navigate to preferences
              }}
              className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
            >
              Preferences
            </button>
            <hr className="my-1 border-border" />
            <button
              onClick={handleSignOut}
              className="w-full text-left px-3 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
