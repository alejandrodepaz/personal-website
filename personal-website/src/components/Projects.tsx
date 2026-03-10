import { PROJECTS } from '../data'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-card-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="project-links">
              <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
                Live ↗
              </a>
              { project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="project-link">
                GitHub ↗
              </a>
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
