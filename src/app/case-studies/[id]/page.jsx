import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { caseStudies } from '@/lib/caseStudies'

function ArrowLeftIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function Section({ title, children }) {
    if (!children || (Array.isArray(children) && children.length === 0)) return null;

    return (
        <div className="border-b border-zinc-200 dark:border-zinc-700/50 py-12 first:pt-0 last:border-0">
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-teal-500 flex-none" />
                {title}
            </h2>
            <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-4">
                {children}
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        id: study.id,
    }))
}

export async function generateMetadata({ params }) {
    const { id } = await params
    const study = caseStudies.find((s) => s.id === id)

    if (!study) {
        return {}
    }

    return {
        title: `${study.name} - Case Study`,
        description: study.description,
    }
}

export default async function CaseStudy({ params }) {
    const { id } = await params
    const study = caseStudies.find((s) => s.id === id)

    if (!study) {
        notFound()
    }

    return (
        <Container className="mt-16 lg:mt-32">
            <div className="xl:relative grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <Link
                        href="/case-studies"
                        className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                    >
                        <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
                    </Link>

                    <article>
                        <header className="flex flex-col mb-10">
                            <div className="flex items-center gap-3 text-sm font-medium text-teal-500 mb-4">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
                                </span>
                                {study.category} Case Study
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl leading-tight">
                                {study.name}
                            </h1>
                            <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
                                " {study.description} "
                            </p>
                        </header>

                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-700/50 mb-12">
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Identifying Data</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 m-0">{study.details.identifyingData}</p>
                            </div>

                            <Section title="Presenting Complaints">
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                                    {study.details.presentingComplaints.map((complaint, index) => (
                                        <li key={index} className="flex gap-2 items-start text-zinc-600 dark:text-zinc-400 p-3 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-100 dark:border-zinc-800/50">
                                            <span className="text-teal-500 mt-1">•</span>
                                            {complaint}
                                        </li>
                                    ))}
                                </ul>
                            </Section>

                            <Section title="Clinical History">
                                <p className="leading-7">{study.details.history}</p>
                            </Section>

                            <Section title="Assessment & Diagnosis">
                                <div className="space-y-4">
                                    <div className="p-4 rounded-lg bg-teal-50/50 dark:bg-teal-900/10 border-l-4 border-teal-500">
                                        <h4 className="font-semibold text-teal-900 dark:text-teal-100 text-sm uppercase tracking-wider mb-1">Formal Diagnosis</h4>
                                        <p className="text-lg font-medium text-teal-800 dark:text-teal-200">{study.details.diagnosis}</p>
                                    </div>
                                    <div className="text-zinc-600 dark:text-zinc-400">
                                        <strong>Assessment Findings:</strong> {study.details.assessment}
                                    </div>
                                </div>
                            </Section>

                            <Section title="Intervention Plan">
                                {Array.isArray(study.details.intervention) ? (
                                    <div className="space-y-2 mt-4">
                                        {study.details.intervention.map((item, index) => (
                                            <div key={index} className="flex gap-3 items-center text-zinc-700 dark:text-zinc-300">
                                                <div className="h-6 w-6 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs font-bold flex-none">
                                                    {index + 1}
                                                </div>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>{study.details.intervention}</p>
                                )}
                            </Section>

                            <Section title="Clinical Outcome">
                                <p className="leading-7">{study.details.outcome}</p>
                            </Section>
                        </div>

                        <div className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                            <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center max-w-2xl mx-auto italic">
                                Disclaimer: Details have been altered to preserve anonymity. This case study is for educational and portfolio demonstration purposes only.
                            </p>
                        </div>
                    </article>
                </div>

                <div className="hidden lg:block">
                    <div className="sticky top-32 space-y-8">
                        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700/50 p-6 bg-white dark:bg-zinc-900 shadow-sm">
                            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Case Metadata</h3>
                            <dl className="space-y-4 text-sm">
                                <div>
                                    <dt className="text-zinc-500 dark:text-zinc-400">Date recorded</dt>
                                    <dd className="font-medium text-zinc-900 dark:text-zinc-100">{study.date}</dd>
                                </div>
                                <div>
                                    <dt className="text-zinc-500 dark:text-zinc-400">Category</dt>
                                    <dd className="font-medium text-zinc-900 dark:text-zinc-100">{study.category}</dd>
                                </div>
                                <div>
                                    <dt className="text-zinc-500 dark:text-zinc-400">ID</dt>
                                    <dd className="font-mono text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">{study.id.slice(0, 8)}</dd>
                                </div>
                            </dl>
                            <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 text-xs font-medium text-green-700 dark:text-green-400">
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                    Case Closed
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
