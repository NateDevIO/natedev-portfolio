'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { VT323 } from 'next/font/google'

const hackerFont = VT323({ weight: '400', subsets: ['latin'], variable: '--font-hacker' })

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
]

export default function HackerMode() {
  const [active, setActive] = useState(false)
  const [toast, setToast] = useState(false)
  const inputRef = useRef<string[]>([])
  const toastTimer = useRef<ReturnType<typeof setTimeout>>()

  const showToast = useCallback((duration: number) => {
    clearTimeout(toastTimer.current)
    setToast(true)
    toastTimer.current = setTimeout(() => setToast(false), duration)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const buf = [...inputRef.current, e.key].slice(-KONAMI_CODE.length)
      inputRef.current = buf

      if (buf.length === KONAMI_CODE.length &&
          buf.every((k, i) => k === KONAMI_CODE[i])) {
        inputRef.current = []
        setActive(prev => {
          const next = !prev
          document.documentElement.classList.toggle('hacker', next)
          document.documentElement.classList.toggle(hackerFont.variable, next)
          return next
        })
        showToast(3000)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [showToast])

  if (!toast) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] animate-fade-in-up">
      <div className={`px-6 py-3 rounded-lg font-mono text-sm shadow-lg border ${
        active
          ? 'bg-black text-green-400 border-green-500/50 shadow-green-500/20'
          : 'bg-card text-foreground border-border'
      }`}>
        {active ? '> ACCESS GRANTED // hacker mode on' : '> hacker mode off'}
      </div>
    </div>
  )
}
