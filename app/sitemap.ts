import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((project) => ({
    url: `https://natedev.io/projects/${project.slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: 'https://natedev.io',
      lastModified: new Date(),
    },
    ...projectUrls,
  ]
}
