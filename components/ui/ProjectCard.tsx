'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/projects/${project.slug}`)
  }

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <article
      onClick={handleCardClick}
      className="group relative bg-card rounded-xl border border-border overflow-hidden card-glow transition-theme cursor-pointer"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-md">
          Featured
        </div>
      )}

      {/* Project Image */}
      <div className="aspect-video bg-muted relative overflow-hidden">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-border/50 flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text">
                  {project.name.charAt(0)}
                </span>
              </div>
              <p className="text-sm">Screenshot coming soon</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <p className="text-xs font-medium text-accent mb-2">{project.category}</p>

        {/* Title & Tagline */}
        <h3 className="text-lg font-semibold text-card-foreground mb-1 group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{project.tagline}</p>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-mono bg-muted text-muted-foreground rounded"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 text-xs font-mono text-muted-foreground">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          {project.liveUrl && (
            <button
              onClick={(e) => handleLinkClick(e, project.liveUrl!)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors relative z-10"
            >
              <ExternalLink size={14} />
              Live Demo
            </button>
          )}
          {project.githubUrl && (
            <button
              onClick={(e) => handleLinkClick(e, project.githubUrl!)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors relative z-10"
            >
              <Github size={14} />
              Code
            </button>
          )}
          <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-accent">
            Details
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </article>
  )
}
