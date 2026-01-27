'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Github, Linkedin, Loader2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { socialLinks } from '@/data/social'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [cooldown, setCooldown] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (honeypot) return
    setStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/xaykojad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, _gotcha: honeypot }),
      })
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setCooldown(true)
        setTimeout(() => setCooldown(false), 5000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 transition-theme">
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Let&apos;s Connect</h3>
                <p className="text-muted-foreground">
                  Whether you have a project in mind, want to collaborate, or
                  just want to say hi, I&apos;d love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={socialLinks.mailto}
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <div className="p-2 bg-card rounded-lg border border-border">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">{socialLinks.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 bg-card rounded-lg border border-border">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Greater St. Louis</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">Find me on</p>
                <div className="flex gap-3">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6 sm:p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Honeypot field - hidden from humans, catches bots */}
                <input
                  type="text"
                  name="_gotcha"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute opacity-0 top-0 left-0 h-0 w-0 z-[-1]"
                />

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or just say hi..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === 'loading' || cooldown}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {status === 'success' && (
                  <p className="text-sm text-green-500 text-center">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-500 text-center">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
