'use client'

import { useEffect } from 'react'
import Button from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold gradient-text">Oops</h1>
        <h2 className="text-2xl font-semibold">Something went wrong</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          An unexpected error occurred. Try refreshing or head back home.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button onClick={() => reset()}>
            Try Again
          </Button>
          <Button href="/" variant="outline">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )
}
