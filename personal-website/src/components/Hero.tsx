import { NAME, TAGLINE, BIO, EMAIL } from '../data'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
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
