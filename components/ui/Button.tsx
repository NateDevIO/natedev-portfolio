import { forwardRef } from 'react'
import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
}

const variants = {
  primary: 'bg-accent text-accent-foreground hover:bg-accent/90',
  secondary: 'bg-muted text-foreground hover:bg-muted/80',
  outline: 'border border-border bg-transparent hover:bg-muted',
  ghost: 'bg-transparent hover:bg-muted',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', href, external, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none'
    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedStyles}
          >
            {children}
          </a>
        )
      }
      return (
        <Link href={href} className={combinedStyles}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={combinedStyles} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
