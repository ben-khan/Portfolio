'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function AcademicCapIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 14l9-5-9-5-9 5 9 5z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function DocumentIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function MapPinIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function FadeInSection({ children, delay = 0 }) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
        }
      })
    })

    const currentRef = domRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  return (
    <div
      ref={domRef}
      className={clsx(
        'transition-all duration-500 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      )}
    >
      {children}
    </div>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-5 w-5 fill-zinc-500 transition hover:fill-zinc-700 dark:fill-zinc-400 dark:hover:fill-zinc-300" />
    </Link>
  )
}

function SectionHeading({ icon: Icon, children }) {
  return (
    <h2 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <Icon className="h-5 w-5" />
      <span>{children}</span>
    </h2>
  )
}

function Card({ children, className = '' }) {
  return (
    <div className={clsx(
      "rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-700/60 dark:bg-zinc-900",
      className
    )}>
      {children}
    </div>
  )
}

function ContactInfo() {
  return (
    <FadeInSection delay={100}>
      <Card>
        <SectionHeading icon={MailIcon}>Contact</SectionHeading>
        <dl className="mt-6 space-y-4 text-sm">
          <div className="flex items-start gap-4">
            <dt className="flex-none w-20 text-zinc-500 dark:text-zinc-400">Email</dt>
            <dd>
              <a
                href="mailto:beneshkhn@gmail.com"
                className="text-zinc-900 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-zinc-300"
              >
                beneshkhn@gmail.com
              </a>
            </dd>
          </div>
          <div className="flex items-start gap-4">
            <dt className="flex-none w-20 text-zinc-500 dark:text-zinc-400">Location</dt>
            <dd className="text-zinc-900 dark:text-zinc-100">Islamabad, Pakistan</dd>
          </div>
        </dl>
        <div className="mt-6 flex gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-700/60">
          <SocialLink href="https://twitter.com/beneshkhan" aria-label="Follow on X" icon={XIcon} />
          <SocialLink href="https://www.instagram.com/beneshkhan" aria-label="Follow on Instagram" icon={InstagramIcon} />
          <SocialLink href="https://github.com/beneshkhan" aria-label="Follow on GitHub" icon={GitHubIcon} />
          <SocialLink href="https://www.linkedin.com/in/beneshkhan" aria-label="Follow on LinkedIn" icon={LinkedInIcon} />
        </div>
      </Card>
    </FadeInSection>
  )
}

function Education() {
  const education = [
    {
      degree: 'Master of Science in Clinical Psychology',
      institution: 'SZABIST, Islamabad',
      period: '2022 - 2025',
      gpa: 'CGPA: 3.07 / 4.0',
      details: [
        'Authored 30 comprehensive clinical case reports with DSM-5-TR-based diagnosis',
        'Utilized standardized assessments: MMSE, DAST, BDI, HTP, RISB, BGT',
        'Core areas: Abnormal Psychology, Cognitive Psychology, Developmental Psychology',
      ],
    },
    {
      degree: 'Bachelor of Science in Applied Psychology',
      institution: 'SZABIST, Islamabad',
      period: '2015 - 2020',
      details: [
        'Thesis: Tendencies of Narcissism in Youth',
        'Conducted original research on narcissistic traits among young adults',
        'Completed supervised clinical practicum and psychological assessment training',
      ],
    },
  ]

  return (
    <FadeInSection delay={0}>
      <Card id="education">
        <SectionHeading icon={AcademicCapIcon}>Education</SectionHeading>
        <ol className="mt-6 space-y-8">
          {education.map((edu, index) => (
            <li key={index} className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-700">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {edu.degree}
                </h3>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  {edu.institution} • {edu.period}
                </div>
                {edu.gpa && (
                  <div className="inline-block px-2 py-1 text-xs font-medium bg-zinc-100 text-zinc-700 rounded dark:bg-zinc-800 dark:text-zinc-300">
                    {edu.gpa}
                  </div>
                )}
                <ul className="mt-3 space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-zinc-400 dark:text-zinc-500">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Card>
    </FadeInSection>
  )
}

function Experience() {
  const experiences = [
    {
      title: 'Early Years Educator',
      company: 'EDOPIA',
      location: 'Islamabad, Pakistan',
      period: 'June 2025 - Present',
      current: true,
      responsibilities: [
        'Design and deliver developmentally appropriate, play-based curricula',
        'Apply psychological principles to foster emotional regulation and social skills',
        'Collaborate with parents and specialists for early intervention',
      ],
    },
    {
      title: 'Psychologist Intern',
      company: 'Multiple Hospitals & Rehabilitation Centers',
      location: 'Rawalpindi/Islamabad',
      period: 'July 2018 - Dec 2025',
      responsibilities: [
        'Conducted psychological assessments using standardized tools',
        'Assisted in CBT, play therapy, and family therapy sessions',
        'Documented patient progress and prepared comprehensive case reports',
      ],
    },
    {
      title: 'Assistant Professor',
      company: 'FIMS',
      location: 'Abbottabad, Pakistan',
      period: 'Feb 2019 - Nov 2023',
      responsibilities: [
        'Taught undergraduate courses in Psychology and English',
        'Mentored students and integrated psychological concepts into pedagogy',
      ],
    },
  ]

  return (
    <FadeInSection delay={100}>
      <Card id="experience">
        <SectionHeading icon={BriefcaseIcon}>Professional Experience</SectionHeading>
        <ol className="mt-6 space-y-8">
          {experiences.map((exp, index) => (
            <li key={index} className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-700">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {exp.title}
                  </h3>
                  {exp.current && (
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-zinc-900 text-white rounded dark:bg-zinc-100 dark:text-zinc-900">
                      Current
                    </span>
                  )}
                </div>
                <div className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  {exp.company}
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  {exp.location} • {exp.period}
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-zinc-400 dark:text-zinc-500">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Card>
    </FadeInSection>
  )
}

function CaseStudies() {
  const studies = [
    { name: 'OCD - Exposure Response Prevention', description: 'Implemented ERP therapy for hand-washing compulsions' },
    { name: 'Specific Phobia Treatment', description: 'Applied systematic desensitization for spider phobia' },
    { name: 'Autism Spectrum Disorder', description: 'Developed social skills training program' },
    { name: 'Speech & Language Therapy', description: 'Enhanced articulation and fluency in children' },
    { name: 'Substance Use Rehabilitation', description: 'Conducted group and individual CBT sessions' },
  ]

  return (
    <FadeInSection delay={200}>
      <Card>
        <SectionHeading icon={DocumentIcon}>Case Studies</SectionHeading>
        <ul className="mt-6 space-y-4">
          {studies.map((study, idx) => (
            <li key={idx} className="border-b border-zinc-100 pb-4 last:border-0 last:pb-0 dark:border-zinc-800">
              <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                {study.name}
              </h4>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {study.description}
              </p>
            </li>
          ))}
        </ul>
      </Card>
    </FadeInSection>
  )
}

function Skills() {
  const skillCategories = [
    { category: 'Clinical Assessment', skills: ['DSM-5-TR', 'Report Writing', 'Documentation'] },
    { category: 'Therapeutic Modalities', skills: ['CBT', 'ERP', 'Play Therapy'] },
    { category: 'Research Methods', skills: ['Design', 'SPSS', 'Analysis'] },
    { category: 'Education', skills: ['Curriculum', 'Early Childhood', 'Intervention'] },
  ]

  return (
    <FadeInSection delay={100}>
      <Card>
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Skills & Competencies
        </h3>
        <div className="space-y-4">
          {skillCategories.map((cat, idx) => (
            <div key={idx}>
              <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2">{cat.category}</div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="inline-block px-3 py-1 text-xs bg-zinc-100 text-zinc-700 rounded dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </FadeInSection>
  )
}

function ResearchInterests() {
  const interests = [
    'Comparative cognition & cross-species behavior',
    'Behavioral measurement & psychometrics',
    'Developmental cognition & individual differences',
    'Child developmental psychology & early intervention',
    'Clinical interventions: CBT/ERP approaches',
    'Psychological informatics & statistical analysis',
  ]

  return (
    <FadeInSection delay={300}>
      <Card>
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Research Interests
        </h3>
        <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
          {interests.map((interest, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-zinc-400 dark:text-zinc-500">•</span>
              <span>{interest}</span>
            </li>
          ))}
        </ul>
      </Card>
    </FadeInSection>
  )
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <FadeInSection>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              Benesh Khan
            </h1>
            <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
              Clinical Psychologist, Educator & Mental Health Advocate
            </p>
            <p className="mt-6 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Highly motivated Clinical Psychology graduate with a Master's degree from SZABIST, Islamabad,
              and extensive hands-on training in psychological assessment, therapy, and mental health education.
              Demonstrated expertise in conducting clinical case studies, applying evidence-based interventions
              (CBT, ERP, systematic desensitization), and utilizing standardized tools.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:beneshkhn@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                <MailIcon className="h-4 w-4" />
                Get in Touch
              </a>
              <button
                onClick={() => scrollToSection('experience')}
                className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                View Experience
                <span>→</span>
              </button>
            </div>
          </div>
        </FadeInSection>
      </Container>

      <Container className="mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <Education />
            <Experience />
          </div>
          <div className="space-y-6">
            <ContactInfo />
            <Skills />
            <CaseStudies />
            <ResearchInterests />
            <FadeInSection delay={400}>
              <Card className="text-center">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  Language Proficiency
                </h3>
                <div className="inline-block px-4 py-2 text-sm font-semibold bg-zinc-100 text-zinc-900 rounded dark:bg-zinc-800 dark:text-zinc-100">
                  IELTS Academic: 6.5
                </div>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </Container>

      <Container className="mt-16 mb-16">
        <FadeInSection delay={500}>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-700/60 dark:bg-zinc-800/50">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Open to Opportunities
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto">
              Currently seeking positions in clinical psychology, research, and early childhood education
            </p>
            <div className="mt-6">
              <a
                href="mailto:beneshkhn@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                <MailIcon className="h-4 w-4" />
                Contact Me
              </a>
            </div>
          </div>
        </FadeInSection>
      </Container>
    </>
  )
}
