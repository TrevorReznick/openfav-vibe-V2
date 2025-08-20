"use client"

import { useState } from "react"
import { ThemeToggle } from "../ThemeToggle"
import { Button } from "../ui/Button"

interface SimpleHeaderProps {
  showAuth?: boolean
}

export function SimpleHeader({ showAuth = true }: SimpleHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">OF</span>
              </div>
              <span className="font-semibold text-foreground text-xl">OpenFav</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {showAuth && (
              <div className="hidden sm:flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <a href="/auth">Sign In</a>
                </Button>
                <Button size="sm">
                  <a href="/auth">Get Started</a>
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </a>

              {showAuth && (
                <div className="flex flex-col gap-2 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm">
                    <a href="/auth">Sign In</a>
                  </Button>
                  <Button size="sm">
                    <a href="/auth">Get Started</a>
                  </Button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
