'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects, allCategories } from '@/data/projects'

export default function Projects() {
  const [filter, setFilter] = useState<string>('All')

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 transition-theme">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects I&apos;ve built, from AI-powered tools to
              data visualization dashboards.
            </p>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setFilter('All')}
              aria-pressed={filter === 'All'}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                filter === 'All'
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              All
            </button>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  filter === category
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects in this category yet.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
