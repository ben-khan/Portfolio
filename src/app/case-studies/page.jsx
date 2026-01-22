import { SimpleLayout } from '@/components/SimpleLayout'
import { caseStudies } from '@/lib/caseStudies'
import { CaseStudiesList } from './CaseStudiesList'

export const metadata = {
    title: 'Case Studies',
    description: 'In-depth analysis of clinical cases and therapeutic interventions.',
}

export default function CaseStudiesPage() {
    return (
        <SimpleLayout
            title="Clinical Case Studies & Research."
            intro="A collection of case studies demonstrating diagnostic accuracy, evidence-based treatment planning, and therapeutic outcomes. Personal details have been strictly anonymized to ensure patient confidentiality."
        >
            <CaseStudiesList caseStudies={caseStudies} />
        </SimpleLayout>
    )
}
