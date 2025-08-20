"use client"

import { SimpleHeader } from "../components/layout/SimpleHeader"
import { Footer } from "../components/layout/Footer"
import { Button } from "../components/ui/Button"
import { Card, CardContent } from "../components/ui/Card"

export function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SimpleHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Organize Your
              <span className="text-primary"> Digital Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              A modern web application designed to help you manage and organize your digital resources with powerful
              theme customization and seamless user authentication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <a href="/auth">Get Started</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="/features">Learn More</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to organize and manage your digital resources efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Theme System</h3>
                <p className="text-muted-foreground">
                  Light, dark, and system preference detection with smooth transitions and persistent storage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Authentication</h3>
                <p className="text-muted-foreground">
                  Email/password and social login with robust session management and protected routes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">High Performance</h3>
                <p className="text-muted-foreground">
                  Optimized with code splitting, lazy loading, and modern Astro + React architecture.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card border-y border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of users who are already organizing their digital resources with OpenFav.
              </p>
              <Button size="lg">
                <a href="/auth">Start Free Today</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
