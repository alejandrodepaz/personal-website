import { useState, useEffect } from 'react'
import { NAME, TAGLINE, BIO, EMAIL } from '../data'

const GREETING = "Hi, I'm"

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (displayed.length < GREETING.length) {
      const t = setTimeout(() => setDisplayed(GREETING.slice(0, displayed.length + 1)), 80)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setShowCursor(false), 1500)
    return () => clearTimeout(t)
  }, [displayed])

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">
          {displayed}
          {showCursor && <span className="hero-cursor" />}
        </p>
        <h1 className="hero-name">{NAME}</h1>
        <p className="hero-tagline">{TAGLINE}</p>
        <p className="hero-bio">{BIO}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href={`mailto:${EMAIL}`} className="btn btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
