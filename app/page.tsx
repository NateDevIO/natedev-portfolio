import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import { socialLinks } from '@/data/social'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nate',
  url: socialLinks.website,
  jobTitle: 'Software Developer',
  sameAs: [socialLinks.github, socialLinks.linkedin],
  knowsAbout: ['React', 'TypeScript', 'Python', 'AWS', 'AI', 'Data Analytics'],
}

export default function Home() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Grid pattern with mask fade - no visible banding */}
      <div
        className="absolute inset-0 grid-pattern opacity-30 animate-grid-fade pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 100%)'
        }}
      />

      {/* Page content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
