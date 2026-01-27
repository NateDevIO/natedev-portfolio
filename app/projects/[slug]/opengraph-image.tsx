import { ImageResponse } from 'next/og'
import { projects } from '@/data/projects'

export const runtime = 'edge'

export const alt = 'Project screenshot'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  const name = project?.name ?? 'Project'
  const tagline = project?.tagline ?? ''
  const category = project?.category ?? ''
  const techPreview = project?.tech.slice(0, 4).join(' / ') ?? ''

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
          fontFamily: 'system-ui, sans-serif',
          padding: 60,
        }}
      >
        {/* Accent gradient bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(90deg, #2563eb, #8b5cf6)',
          }}
        />

        {/* Top: category badge */}
        <div style={{ display: 'flex' }}>
          <div
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#60a5fa',
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
          >
            {category}
          </div>
        </div>

        {/* Middle: project name + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: '#fafafa',
              lineHeight: 1.1,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#a1a1aa',
            }}
          >
            {tagline}
          </div>
        </div>

        {/* Bottom: tech + branding */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ fontSize: 18, color: '#71717a' }}>{techPreview}</div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #60a5fa, #8b5cf6)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            NateDev.io
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
