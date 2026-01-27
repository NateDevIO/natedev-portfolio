'use client'

import { useTheme } from '@/components/providers/ThemeProvider'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-muted text-muted-foreground"
        aria-label="Toggle theme"
      >
        <Sun size={18} />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </motion.div>
    </button>
  )
}
