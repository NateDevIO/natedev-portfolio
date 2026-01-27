'use client'

import { motion } from 'framer-motion'

interface SkillBadgeProps {
  name: string
  index?: number
}

export default function SkillBadge({ name, index = 0 }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="inline-flex items-center px-3 py-1.5 text-sm font-mono bg-muted text-foreground rounded-md border border-border hover:border-accent hover:text-accent transition-colors cursor-default"
    >
      {name}
    </motion.span>
  )
}
