"use client"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function LoadingSpinner({ size = "md", className = "" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  return (
    <div
      className={`animate-spin rounded-full border-2 border-muted border-t-primary ${sizeClasses[size]} ${className}`}
    />
  )
}

interface LoadingStateProps {
  message?: string
  size?: "sm" | "md" | "lg"
}

export function LoadingState({ message = "Loading...", size = "md" }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <LoadingSpinner size={size} />
      <p className="text-muted-foreground text-sm">{message}</p>
    </div>
  )
}
