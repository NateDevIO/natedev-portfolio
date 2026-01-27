import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { socialLinks } from '@/data/social'

const footerLinks = [
  { name: 'GitHub', href: socialLinks.github, icon: Github },
  { name: 'LinkedIn', href: socialLinks.linkedin, icon: Linkedin },
  { name: 'Email', href: socialLinks.mailto, icon: Mail },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background transition-theme">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight"
            >
              <span className="gradient-text">NateDev</span>
              <span className="text-muted-foreground">.io</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {currentYear} Nate. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-accent transition-colors"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with Next.js, Tailwind CSS, and deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
