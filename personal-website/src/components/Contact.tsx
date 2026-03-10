import { EMAIL, LINKEDIN_URL } from '../data'

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <h2 className="section-title">Let's Connect</h2>
      <p className="contact-sub">
        Whether it's a new opportunity, a collaboration, or just a hello —
        my inbox is open.
      </p>
      <div className="contact-links">
        <a href={`mailto:${EMAIL}`} className="btn btn-primary">
          Email Me
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">
          LinkedIn ↗
        </a>
      </div>
    </section>
  )
}
