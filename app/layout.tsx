import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import HackerMode from '@/components/providers/HackerMode'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://natedev.io'),
  title: 'Nate | Software Developer',
  description: 'Software developer and data enthusiast building tools that solve real problems. Explore my portfolio of AI-powered applications, data visualization tools, and full-stack projects.',
  keywords: ['software developer', 'full-stack', 'React', 'TypeScript', 'data analyst', 'AI', 'portfolio'],
  authors: [{ name: 'Nate' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Nate | Software Developer',
    description: 'Software developer and data enthusiast building tools that solve real problems.',
    url: 'https://natedev.io',
    siteName: 'NateDev.io',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nate | Software Developer',
    description: 'Software developer and data enthusiast building tools that solve real problems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.className=t}}catch(e){}})()`,
        }} />
        <ThemeProvider>
          <HackerMode />
          <div className="flex flex-col min-h-screen">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-md focus:font-medium"
            >
              Skip to main content
            </a>
            <Header />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
