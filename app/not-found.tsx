import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-7xl sm:text-9xl font-bold gradient-text">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
