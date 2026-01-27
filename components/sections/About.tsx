'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Code2, Database } from 'lucide-react'

const highlights = [
  { icon: MapPin, label: 'Location', value: 'Greater St. Louis' },
  { icon: Briefcase, label: 'Focus', value: 'Cloud & AI Solutions' },
  { icon: Code2, label: 'Specialty', value: 'Python, React & AWS' },
  { icon: Database, label: 'Interest', value: 'Data & Tech Tinkering' },
]

export default function About() {
  return (
    <section id="about" className="py-24 transition-theme">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" aria-hidden="true" />
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              <div className="relative aspect-square max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-purple-500 rounded-2xl rotate-3" aria-hidden="true" />
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/profile.jpg"
                    alt="Nate - Software Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-3 space-y-6"
            >
              <p className="text-lg text-muted-foreground">
                I have an insatiable curiosity for how things work. Whether I&apos;m
                deploying cloud-native apps or modding hardware, I love the
                challenge of reverse-engineering a problem and building a
                solution from the ground up.
              </p>
              <p className="text-lg text-muted-foreground">
                My technical stack bridges data, AI, and infrastructure. I use
                Python and AWS to build scalable backends, and TypeScript/React
                to create intuitive user interfaces. I believe the best developers
                are the ones who never stop asking questions.
              </p>
              <p className="text-lg text-muted-foreground">
                Offline, that curiosity follows me into the kitchen, where I run
                a continuous science experiment with fermentation. I&apos;m also a dad,
                a sci-fi reader, and a firm believer in constant self-improvement.
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border"
                  >
                    <item.icon className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
