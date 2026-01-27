import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'NateDev.io - Software Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
          fontFamily: 'system-ui, sans-serif',
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

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #60a5fa, #8b5cf6)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            NateDev.io
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#a1a1aa',
              maxWidth: 600,
              textAlign: 'center',
            }}
          >
            Software Developer & Data Enthusiast
          </div>
          <div
            style={{
              marginTop: 16,
              width: 80,
              height: 4,
              borderRadius: 4,
              background: 'linear-gradient(90deg, #2563eb, #8b5cf6)',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
