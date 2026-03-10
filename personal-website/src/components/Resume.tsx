import { RESUME_URL, EXPERIENCE, EDUCATION, SKILLS } from '../data'

export default function Resume() {
  return (
    <section className="section" id="resume">
      <div className="section-header">
        <h2 className="section-title">Resume</h2>
        <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn btn-outline">
          Download PDF
        </a>
      </div>

      <div className="resume-grid">
        <div className="resume-col">
          <h3 className="resume-heading">Experience</h3>
          {EXPERIENCE.map((job) => (
            <div className="resume-card" key={job.role + job.company}>
              <div className="resume-card-header">
                <div>
                  <p className="resume-role">{job.role}</p>
                  <p className="resume-company">{job.company}</p>
                </div>
                <span className="resume-period">{job.period}</span>
              </div>
              <ul className="resume-bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="resume-col">
          <h3 className="resume-heading">Education</h3>
          {EDUCATION.map((edu) => (
            <div className="resume-card" key={edu.degree}>
              <div className="resume-card-header">
                <div>
                  <p className="resume-role">{edu.degree}</p>
                  <p className="resume-minor">{edu.minor}</p>
                  <p className="resume-company">{edu.school}</p>
                </div>
                <span className="resume-period">{edu.year}</span>
              </div>
            </div>
          ))}

          <h3 className="resume-heading" style={{ marginTop: '2rem' }}>Skills</h3>
          {SKILLS.map((group) => (
            <div className="skills-group" key={group.category}>
              <p className="skills-category">{group.category}</p>
              <div className="skills-grid">
                {group.items.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
