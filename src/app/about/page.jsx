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
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
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

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex items-center gap-3 text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
      >
        <Icon className="h-5 w-5 fill-zinc-500 dark:fill-zinc-400" />
        <span>{children}</span>
      </Link>
    </li>
  )
}

function TimelineItem({ period, title, subtitle, children }) {
  return (
    <div className="relative pl-6 pb-8 last:pb-0 border-l-2 border-zinc-200 dark:border-zinc-700">
      <div className="space-y-2">
        <time className="inline-block px-2 py-1 text-xs font-medium bg-zinc-100 text-zinc-700 rounded dark:bg-zinc-800 dark:text-zinc-300">
          {period}
        </time>
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            {subtitle}
          </p>
        )}
        <div className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4 text-center dark:border-zinc-700/60 dark:bg-zinc-900">
      <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        {value}
      </div>
      <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
        {label}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <FadeInSection>
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
            About Me
          </h1>
          <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Dedicated to advancing mental health care through evidence-based practice,
            research, and education. Based in Islamabad, Pakistan.
          </p>
        </div>
      </FadeInSection>

      {/* Stats Section */}
      <FadeInSection delay={100}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-16">
          <StatCard value="30+" label="Clinical Cases" />
          <StatCard value="7+" label="Years Experience" />
          <StatCard value="5+" label="Modalities" />
          <StatCard value="6.5" label="IELTS Score" />
        </div>
      </FadeInSection>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
        {/* Journey & Story - 2 columns */}
        <div className="space-y-8 lg:col-span-2">
          <FadeInSection delay={200}>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-700/60 dark:bg-zinc-900">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
                My Journey
              </h2>

              <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  My journey into psychology began with a deep curiosity about the human mind and behavior.
                  At SZABIST, Islamabad, I conducted research on <em>Tendencies of Narcissism in Youth</em>,
                  exploring personality development and its implications for early intervention strategies.
                </p>

                <p>
                  During my Master's in Clinical Psychology, I authored 30 comprehensive clinical case reports,
                  integrating detailed assessments, DSM-5-TR-based diagnoses, and evidence-based treatment planning.
                  I gained hands-on experience with standardized tools including MMSE, DAST, BDI, and various projective
                  assessments across diverse clinical settings.
                </p>

                <p>
                  My clinical work has been incredibly rewarding. I've implemented Exposure and Response Prevention (ERP)
                  therapy for OCD, systematic desensitization for phobias, and social skills training for children with autism.
                  At Nishan Rehab Centre, I facilitated group CBT sessions, conducted individual therapy, and engaged families
                  in the recovery process.
                </p>

                <p>
                  Currently, I work as an Early Years Educator at EDOPIA, where I apply psychological principles to foster
                  holistic child development. I design play-based curricula that support emotional regulation, social skills,
                  and cognitive growth.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={250}>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-700/60 dark:bg-zinc-900">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
                Career Timeline
              </h2>

              <div className="space-y-0">
                <TimelineItem
                  period="2025 - Present"
                  title="Early Years Educator"
                  subtitle="EDOPIA, Islamabad"
                >
                  <p>
                    Designing developmentally appropriate curricula and applying psychological principles
                    to foster holistic child development.
                  </p>
                </TimelineItem>

                <TimelineItem
                  period="2022 - 2025"
                  title="Master of Science"
                  subtitle="Clinical Psychology, SZABIST"
                >
                  <p>
                    Authored 30 clinical case reports. CGPA: 3.07/4.0. Specialized in DSM-5-TR diagnosis
                    and evidence-based interventions.
                  </p>
                </TimelineItem>

                <TimelineItem
                  period="2019 - 2023"
                  title="Assistant Professor"
                  subtitle="FIMS, Abbottabad"
                >
                  <p>
                    Taught undergraduate Psychology and English, mentoring students and integrating
                    psychological concepts into pedagogy.
                  </p>
                </TimelineItem>

                <TimelineItem
                  period="2018 - 2025"
                  title="Psychology Intern"
                  subtitle="Multiple Hospitals & Rehabilitation Centers"
                >
                  <p>
                    Conducted assessments, assisted in therapy sessions, and gained experience in
                    addiction treatment, mood disorders, and developmental conditions.
                  </p>
                </TimelineItem>

                <TimelineItem
                  period="2015 - 2020"
                  title="Bachelor of Science"
                  subtitle="Applied Psychology, SZABIST"
                >
                  <p>
                    Research thesis on Tendencies of Narcissism in Youth. Completed clinical practicum
                    and assessment training.
                  </p>
                </TimelineItem>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Sidebar - Contact & Back - 1 column */}
        <div className="space-y-8">
          <FadeInSection delay={300}>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-700/60 dark:bg-zinc-900">
              <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
                Contact Information
              </h2>

              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1">Email</dt>
                  <dd>
                    <a
                      href="mailto:beneshkhn@gmail.com"
                      className="text-zinc-900 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-zinc-300"
                    >
                      beneshkhn@gmail.com
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1">Location</dt>
                  <dd className="text-zinc-900 dark:text-zinc-100">
                    Islamabad, Pakistan
                  </dd>
                </div>
              </dl>

              <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-700/60">
                <h3 className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-4">Connect</h3>
                <ul role="list" className="space-y-3">
                  <SocialLink href="https://twitter.com/beneshkhan" icon={XIcon}>
                    Twitter / X
                  </SocialLink>
                  <SocialLink href="https://www.instagram.com/beneshkhan" icon={InstagramIcon}>
                    Instagram
                  </SocialLink>
                  <SocialLink href="https://github.com/beneshkhan" icon={GitHubIcon}>
                    GitHub
                  </SocialLink>
                  <SocialLink href="https://www.linkedin.com/in/beneshkhan" icon={LinkedInIcon}>
                    LinkedIn
                  </SocialLink>
                </ul>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={350}>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700/60 dark:bg-zinc-800/50">
              <a
                href="/"
                className="flex items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
              >
                <span>←</span>
                <span>Back to Home</span>
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </Container>
  )
}
