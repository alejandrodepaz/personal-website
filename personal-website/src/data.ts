// ─── Site Data ───────────────────────────────────────────────────────────────
// Update these values to personalize your site.

export const NAME = 'Alejandro De Paz'
export const TAGLINE = 'Software Engineer'
export const BIO =
  "Motivated software engineer with 5+ years of experience building and operating backend and frontend systems at scale, " + 
  "most recently at Amazon. I’ve led end-to-end delivery of production services -- from early scoping and design through " +
  "infrastructure bring-up, cross-service integrations, and long-term operational ownership. My work has focused on building " +
  "reliable, high-availability systems that sit on critical business paths. I enjoy working at the intersection of product, " +
  "system design, and operational excellence, and delivering robust solutions that last."

export const EMAIL = 'alejandro@alejandrodepaz.com'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/alejandrodepaz'
export const RESUME_URL = '/resume.pdf'

export interface SkillCategory {
  category: string
  items: string[]
}

export const SKILLS: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['Kotlin', 'Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    category: 'Frameworks / Libraries / Tools',
    items: [
      'AWS CDK', 'React', 'React Native', 'Node.js', 'Flask', 'Express',
      'JUnit', 'TestNG', 'Cypress', 'Material UI', 'Pandas', 'NumPy',
      'Scikit-Learn', 'Git', 'Docker',
    ],
  },
  {
    category: 'AWS Cloud Services',
    items: [
      'Lambda', 'API Gateway', 'DynamoDB', 'Step Functions', 'CloudFront',
      'WAF', 'SQS', 'SNS', 'SES', 'S3', 'Route 53', 'CloudFormation',
      'CloudWatch', 'VPC', 'IAM', 'EventBridge', 'Amazon Q',
    ],
  },
  {
    category: 'Software Architecture & Concepts',
    items: ['Distributed Systems', 'Microservices', 'REST APIs', 'CI/CD Pipelines', 'Agile', 'SCRUM'],
  },
]

export interface ExperienceEntry {
  role: string
  company: string
  period: string
  bullets: string[]
}

export interface EducationEntry {
  degree: string
  minor: string
  school: string
  year: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  url: string
  repo: string | undefined
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: 'Software Engineer I & II',
    company: 'Amazon',
    period: 'February 2021 – March 2025',
    bullets: [
      'Led end-to-end delivery of a greenfield billing platform for Amazon Just Walk Out, including core feature scoping, high-level and low-level designs, infrastructure bring-up, and implementation, reducing manual finance and accounting operations for billing third-party retailers by 80%',
      'Designed and delivered React frontend for Amazon Just Walk Out Privacy Portal, leveraging AWS CloudFront, S3, Lambda, and WAF to enable expansion into EU and Canadian markets by supporting international customer requests for data download and erasure in order to adhere to GDPR laws',
      'Held the role of Operational Excellence lead, running bi-weekly reviews of system health and performance metrics to identify operational bottlenecks, resolve security risks, improve CI/CD efficiency, complete remediation campaigns, and enrich runbook documentation across services',
      'Served in a weekly 24-hour on-call rotation covering all team services; led incident triage, root-cause analysis, and short and long-term remediation',
      'Produced comprehensive knowledge-transfer and operational documentation (system architecture, domain knowledge, service runbooks), and led onboarding sessions and product demos for new hires, leadership, and partner teams'
    ],
  },
  {
    role: 'Website Programmer',
    company: 'University of Oregon - Continuing and Professional Education',
    period: 'September 2019 – March 2020',
    bullets: [
      'Implemented responsive frontend components for large-scale web applications using JavaScript, HTML, and CSS, serving over 5,000 annual participants across schools, vendors, and national credentialing organizations',
      'Routinely collaborated with non-technical stakeholders on requirements gathering, feature scoping, and delivery planning to ensure accurate and timely delivery of feature requests',
    ],
  },
    {
    role: 'Data Science Intern',
    company: 'Weir ESCO',
    period: 'June 2019 – September 2019',
    bullets: [
      'Identified a novel extrapolation technique using robust statistical methods to overcome data censoring issues resulting from hardware limitations, improving reliability of automated monitoring logic',
      'Designed and implemented the custom real-time data processing algorithm leveraging Python, Pandas, and Numpy to significantly reducing false-positive and false-negative rates due to data censoring',
    ],
  },
]

export const EDUCATION: EducationEntry[] = [
  {
    degree: 'B.S. Computer & Information Science',
    minor: 'Mathematics, Computer Information Technology',
    school: 'University of Oregon',
    year: '2020',
  },
]

export const PROJECTS: Project[] = [
  {
    title: 'Privacy Portal - Amazon Just Walk Out',
    description:
      'A full-stack web application that enabled expansion of JWO technology into EU, Canadian, and Australian markets by supporting international customer requests for data download and erasure in order to adhere to GDPR laws.',
    tech: ['React', 'AWS CloudFront', 'AWS S3', 'AWS WAF', 'AWS Lambda', 'AWS API Gateway'],
    url: 'https://privacy.justwalkout.com/',
    repo: undefined,
  }
]
