import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { projects } from '@/data/projects'
import Button from '@/components/ui/Button'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.name} | Nate`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <header className="mb-12">
          <p className="text-sm font-medium text-accent mb-2">{project.category}</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.name}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.tagline}</p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button href={project.liveUrl} external>
                <ExternalLink size={16} />
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} external variant="outline">
                <Github size={16} />
                View Code
              </Button>
            )}
          </div>
        </header>

        {/* Project Image */}
        <div className="aspect-video bg-muted rounded-xl border border-border mb-12 overflow-hidden relative">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-border/50 flex items-center justify-center">
                  <span className="text-3xl font-bold gradient-text">
                    {project.name.charAt(0)}
                  </span>
                </div>
                <p className="text-muted-foreground">Project screenshot coming soon</p>
              </div>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </section>

            {project.features && project.features.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-3 text-muted-foreground">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.challenges && (
              <section>
                <h2 className="text-2xl font-semibold mb-4">Challenges & Solutions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenges}
                </p>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-mono bg-muted rounded-md border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-4">Project Type</h3>
              <p className="text-muted-foreground">{project.category}</p>
            </section>

            {project.featured && (
              <section>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-accent text-accent-foreground rounded-full">
                  Featured Project
                </span>
              </section>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <ArrowLeft size={16} />
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
