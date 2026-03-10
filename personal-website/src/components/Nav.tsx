import { NAME, LINKEDIN_URL } from '../data'

export default function Nav() {
  return (
    <nav className="nav">
      <span className="nav-logo">{NAME.split(' ')[0]}</span>
      <div className="nav-links">
        <a href="#resume">Resume</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="nav-linkedin">
          LinkedIn ↗
        </a>
      </div>
    </nav>
  )
}
