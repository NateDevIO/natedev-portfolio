'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import Button from '@/components/ui/Button'
import { socialLinks } from '@/data/social'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Greeting */}
          <p className="text-accent font-mono text-sm sm:text-base mb-4">
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Nate</span>
          </h1>

          {/* Tagline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground mb-6">
            I build tools that solve real problems.
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I&apos;m a developer who focuses on utility first. I strip away complexity
            to build applications that solve actual problems for real users.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button href="#projects" size="lg">
              View My Work
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-accent transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-xs mb-2">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
