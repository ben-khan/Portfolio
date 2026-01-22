import logoPlanetaria from '@/images/logos/planetaria.svg' // Placeholder if needed

export const caseStudies = [
    {
        id: 'bipolar-1-current-mania',
        name: 'Bipolar I Disorder: Current Mania',
        category: 'Mood Disorders',
        date: '2024',
        description:
            'Comprehensive analysis of acute manic episode management, focusing on mood stabilization, pharmacological adherence, and behavioral interventions to reduce risk-taking behaviors.',
        details: {
            identifyingData: 'Anonymized Adult Male, Age 28, Single, Employed in Creative Arts.',
            presentingComplaints: [
                'Decreased need for sleep (2-3 hours/night)',
                'Rapid, pressured speech',
                'Grandiosity and impulsive spending',
                'Psychomotor agitation',
            ],
            history: 'Patient has a history of depressive episodes starting at age 20. First manic episode occurred 2 weeks prior to admission following a period of high work stress. No history of substance abuse.',
            assessment: 'Mental Status Examination (MSE) revealed euphoric mood, labile affect, and flight of ideas. Insight and judgment were impaired. Young Mania Rating Scale (YMRS) score: 38 (Severe Mania).',
            diagnosis: 'Bipolar I Disorder, Current Episode Manic, Severe, Without Psychotic Features (DSM-5 296.43).',
            intervention: [
                'Pharmacological: Initiation of Mood Stabilizers (Lithium) and atypical antipsychotics.',
                'Psychological: Psychoeducation on circadian rhythms, "Dark Therapy" for sleep regulation.',
                'Behavioral: Limit setting and stimulus control.',
            ],
            outcome: 'Discharged after 3 weeks. YMRS score reduced to 12. Patient demonstrated improved insight into early warning signs of mania.',
        },
    },
    {
        id: 'major-depressive-disorder',
        name: 'Major Depressive Disorder (Recurrent)',
        category: 'Mood Disorders',
        date: '2023',
        description:
            'Application of Cognitive Behavioral Therapy (CBT) and Behavioral Activation for a patient with recurrent severe depression, targeting cognitive distortions and social withdrawal.',
        details: {
            identifyingData: 'Anonymized Adult Female, Age 42, Married, Accountant.',
            presentingComplaints: [
                'Persistent sadness and anhedonia',
                'Fatigue and hypersomnia',
                'Feelings of worthlessness',
                'Difficulty concentrating',
            ],
            history: 'Three prior episodes of major depression. Current episode triggered by empty-nest transition. Family history of depression (Mother).',
            assessment: 'Beck Depression Inventory (BDI-II) score: 28 (Severe). Mental Status Exam showed psychomotor retardation and restricted affect.',
            diagnosis: 'Major Depressive Disorder, Recurrent, Severe, Without Psychotic Features (DSM-5 296.33).',
            intervention: [
                'CBT: Cognitive restructuring of "failure" core beliefs.',
                'Behavioral Activation: Scheduling pleasurable and mastery activities.',
                'Mindfulness-Based Cognitive Therapy (MBCT) for relapse prevention.',
            ],
            outcome: 'Remission of symptoms after 16 sessions. BDI-II score reduced to 8. Patient returned to full-time work.',
        },
    },
    {
        id: 'generalized-anxiety-disorder',
        name: 'Generalized Anxiety Disorder (GAD)',
        category: 'Anxiety Disorders',
        date: '2024',
        description:
            'A study on the efficacy of CBT in managing excessive worry and physiological arousal, incorporating mindfulness-based stress reduction (MBSR) techniques.',
        details: {
            identifyingData: 'Anonymized Young Adult Female, Age 24, Student.',
            presentingComplaints: [
                'Excessive, uncontrollable worry about minimal events',
                'Muscle tension and restlessness',
                'Sleep disturbance (difficulty falling asleep)',
                'Irritability',
            ],
            history: 'Symptoms present for >6 months. "Worrier" since childhood. High academic pressure.',
            assessment: 'GAD-7 Score: 18 (Severe Anxiety). Hamilton Anxiety Rating Scale (HAM-A) indicated high somatic anxiety.',
            diagnosis: 'Generalized Anxiety Disorder (DSM-5 300.02).',
            intervention: [
                'CBT: Worry exposure and scheduling "worry time".',
                'Relaxation Training: Progressive Muscle Relaxation (PMR).',
                'Cognitive: Challenging probability estimation errors.',
            ],
            outcome: 'Significant reduction in worry frequency. GAD-7 score: 6. Improved academic performance.',
        },
    },
    {
        id: 'panic-disorder-agoraphobia',
        name: 'Panic Disorder with Agoraphobia',
        category: 'Anxiety Disorders',
        date: '2023',
        description:
            'Intervention using Interoceptive Exposure and panic control treatment to reduce panic attack frequency and avoidance behaviors.',
        details: {
            identifyingData: 'Anonymized Adult Male, Age 35, Remote Worker.',
            presentingComplaints: ['Recurrent unexpected panic attacks', 'Fear of leaving home alone', 'Palpitations and shortness of breath'],
            history: 'Onset 2 years ago after a panic attack on a subway. Progressively restricted travel radius.',
            assessment: 'Panic Disorder Severity Scale (PDSS). Behavioral Avoidance Test.',
            diagnosis: 'Panic Disorder (DSM-5 300.01) with Agoraphobia (300.22).',
            intervention: ['Interoceptive Exposure (inducing physical sensations of panic in session).', 'In vivo exposure hierarchy (walking to mailbox, driving to store).', 'Breathing retraining.'],
            outcome: 'Panic attacks ceased. Patient able to travel independently within city limits.',
        },
    },
    {
        id: 'schizophrenia-paranoid',
        name: 'Schizophrenia (Paranoid Type)',
        category: 'Psychotic Disorders',
        date: '2022',
        description:
            'Longitudinal case management focusing on family psychoeducation, social skills training, and medication compliance to maintain remission.',
        details: {
            identifyingData: 'Anonymized Adult Male, Age 22, Unemployed.',
            presentingComplaints: ['Auditory hallucinations (commenting voices)', 'Persecutory delusions (FBI surveillance)', 'Social withdrawal'],
            history: 'Prodromal symptoms started at age 19. Grading decline. Cannabis use history.',
            assessment: 'PANSS (Positive and Negative Syndrome Scale). Urine Toxicology Screen.',
            diagnosis: 'Schizophrenia (DSM-5 295.90).',
            intervention: ['Antipsychotic medication adherence support.', 'Family Therapy: Reducing Expressed Emotion (EE).', 'Social Skills Training group.'],
            outcome: 'Maintained on medication for 18 months without hospitalization. Independent living achieved.',
        },
    },
    {
        id: 'borderline-personality-disorder',
        name: 'Borderline Personality Disorder',
        category: 'Personality Disorders',
        date: '2023',
        description:
            'Utilization of Dialectical Behavior Therapy (DBT) skills training to address emotional dysregulation, self-harm urges, and interpersonal instability.',
        details: {
            identifyingData: 'Anonymized Adult Female, Age 26, Artist.',
            presentingComplaints: ['Chronic feelings of emptiness', 'Recurrent non-suicidal self-injury', 'Fear of abandonment', 'Mood reactivity'],
            history: 'History of unstable relationships. Childhood emotional invalidation.',
            assessment: 'Zanarini Rating Scale for Borderline Personality Disorder (ZAN-BPD).',
            diagnosis: 'Borderline Personality Disorder (DSM-5 301.83).',
            intervention: ['DBT Skills: Mindfulness, Distress Tolerance, Emotion Regulation, Interpersonal Effectiveness.', 'Chain Analysis of problem behaviors.'],
            outcome: 'Self-harm behaviors ceased for >6 months. Improved relationship stability.',
        },
    },
    {
        id: 'ptsd-childhood-trauma',
        name: 'PTSD - Childhood Trauma',
        category: 'Trauma & Stressor',
        date: '2024',
        description: 'Trauma-Focused CBT implementation for an adult survivor of childhood abuse, addressing flashbacks, hyperarousal, and avoidance symptoms.',
        details: {
            identifyingData: 'Anonymized Adult Female, 30 years old.',
            presentingComplaints: ['Nightmares', 'Hypervigilance', 'Avoidance of triggers'],
            history: 'History of childhood abuse.',
            assessment: 'PCL-5 Score indicating severe PTSD.',
            diagnosis: 'Post-Traumatic Stress Disorder (DSM-5 309.81).',
            intervention: ['Trauma-Focused CBT', 'Imaginal Exposure', 'Cognitive Processing'],
            outcome: 'Significant reduction in PCL-5 score. Improved sleep quality.'
        }
    },
    {
        id: 'ocd-erp',
        name: 'OCD - Exposure Response Prevention',
        category: 'Obsessive-Compulsive',
        date: '2023',
        description:
            'Implementation of Exposure and Response Prevention (ERP) therapy for severe hand-washing compulsions and intrusive thoughts.',
        details: {
            identifyingData: 'Anonymized Adult Male, Age 19, Student.',
            presentingComplaints: ['Fear of contamination', 'Compulsive hand washing (4 hours/day)', 'Chapped, bleeding hands'],
            history: 'Symptoms started age 12. Worsened during exams.',
            assessment: 'Yale-Brown Obsessive Compulsive Scale (Y-BOCS): Score 28 (Severe).',
            diagnosis: 'Obsessive-Compulsive Disorder (DSM-5 300.3).',
            intervention: ['ERP: Touching "contaminated" objects without washing.', 'Delaying rituals.', 'Cognitive work on "magical thinking".'],
            outcome: 'Y-BOCS score reduced to 10 (Mild). Hand washing normalized.',
        },
    },
    {
        id: 'specific-phobia',
        name: 'Specific Phobia Treatment',
        category: 'Anxiety Disorders',
        date: '2024',
        description:
            'Systematic desensitization protocol for arachnophobia, utilizing graded exposure therapy to overcome specific fear.',
        details: {
            identifyingData: 'Anonymized Adult Female, Age 29.',
            presentingComplaints: ['Intense fear of spiders', 'Avoidance of basements/outdoors'],
            assessment: 'Behavioral Avoidance Test.',
            diagnosis: 'Specific Phobia, Animal Type (DSM-5 300.29).',
            intervention: ['Systematic Desensitization', 'Graded Exposure', 'Relaxation Techniques'],
            outcome: 'Patient able to tolerate presence of spider in room without panic.'
        }
    },
    {
        id: 'autism-spectrum-disorder',
        name: 'Autism Spectrum Disorder',
        category: 'Developmental',
        date: '2023',
        description:
            'Social skills training program for early childhood, focusing on improving peer interaction and emotional recognition.',
        details: {
            identifyingData: 'Male child, Age 5.',
            presentingComplaints: ['Difficulty interacting with peers', 'Poor eye contact', 'Repetitive behaviors'],
            assessment: 'CARS-2 (Childhood Autism Rating Scale).',
            diagnosis: 'Autism Spectrum Disorder, Level 1 (DSM-5 299.00).',
            intervention: ['Social Skills Training', 'Applied Behavior Analysis (ABA) principles', 'Parent Training'],
            outcome: 'Improved eye contact and peer play frequency.'
        }
    },
    {
        id: 'speech-language-therapy',
        name: 'Speech & Language Therapy',
        category: 'Developmental',
        date: '2024',
        description:
            'Intervention strategies for enhancing articulation and fluency in pediatric cases, addressing specific speech delays.',
        details: {
            identifyingData: 'Female child, Age 6.',
            presentingComplaints: ['Difficulty pronouncing /r/ and /s/ sounds', 'Low speech intelligibility'],
            diagnosis: 'Speech Sound Disorder.',
            intervention: ['Articulation Therapy', 'Phonological Awareness Training'],
            outcome: 'Age-appropriate articulation achieved.'
        }
    },
    {
        id: 'substance-use-rehabilitation',
        name: 'Substance Use Rehabilitation',
        category: 'Addiction',
        date: '2022',
        description:
            'Longitudinal study of group and individual CBT sessions for relapse prevention and recovery maintenance.',
        details: {
            identifyingData: 'Adult Male, Age 40.',
            presentingComplaints: ['Alcohol dependence', 'Job loss due to drinking'],
            diagnosis: 'Alcohol Use Disorder, Severe.',
            intervention: ['CBT for Relapse Prevention', 'Group Therapy', 'Motivational Interviewing'],
            outcome: 'Sustained sobriety for 12 months. Re-employed.'
        }
    },
    {
        id: 'adhd-combined-presentation',
        name: 'ADHD: Combined Presentation',
        category: 'Neurodevelopmental',
        date: '2024',
        description: 'Multimodal treatment approach for a school-aged child exhibiting severe inattention and hyperactivity/impulsivity affecting academic performance.',
        details: {
            identifyingData: 'Anonymized Male Child, Age 9, Grade 4.',
            presentingComplaints: ['Unable to sit still in class', 'Frequent careless mistakes', 'Difficulty organizing tasks', 'Interrupting others'],
            history: 'Teachers reporting disruptive behavior since Grade 1. Parents describe "motor driven" behavior at home.',
            assessment: 'Conners-3 Rating Scale (Parent & Teacher) indicated T-scores > 70 for Inattention and Hyperactivity. WISC-V showed average IQ but low Processing Speed.',
            diagnosis: 'Attention-Deficit/Hyperactivity Disorder, Combined Presentation (DSM-5 314.01).',
            intervention: ['Parent Management Training (PMT) to establish structure.', 'School-based accommodations (preferential seating, chunking tasks).', 'Behavioral modification plan.'],
            outcome: 'Significant reduction in disruptive classroom incidents. Improvement in homework completion rates.',
        },
    },
    {
        id: 'conduct-disorder-adolescent',
        name: 'Conduct Disorder (Adolescent-Onset)',
        category: 'Disruptive Disorders',
        date: '2023',
        description: 'Systemic family therapy and individual cognitive-behavioral interventions for an adolescent displaying aggression and rule violation.',
        details: {
            identifyingData: 'Anonymized Male Adolescent, Age 15.',
            presentingComplaints: ['Truancy from school', 'Physical aggression towards peers', 'Vandalism', 'Lack of remorse'],
            history: 'Behavioral issues escalated over past 12 months following parental divorce. History of Oppositional Defiant Disorder.',
            assessment: 'Clinical Interview. Collateral information from school.',
            diagnosis: 'Conduct Disorder, Adolescent-Onset Type (DSM-5 312.82).',
            intervention: ['Multisystemic Therapy (MST) principles.', 'Cognitive Problem-Solving Skills Training (PSST).', 'Family Therapy to improve supervision and communication.'],
            outcome: 'Truancy resolved. No new legal or disciplinary incidents in 6 months. Improved emotional regulation reported by mother.',
        },
    },
    {
        id: 'social-anxiety-disorder',
        name: 'Social Anxiety Disorder',
        category: 'Anxiety Disorders',
        date: '2024',
        description: 'CBT group therapy intervention focusing on social exposure assignments and cognitive restructuring for performance anxiety.',
        details: {
            identifyingData: 'Anonymized Female Young Adult, Age 20, University Student.',
            presentingComplaints: ['Fear of public speaking', 'Avoidance of social gatherings', 'Physical symptoms (trembling, blushing) in social situations'],
            history: 'Shyness in childhood. Exacerbated by transition to university.',
            assessment: 'Liebowitz Social Anxiety Scale (LSAS): Score 85 (Severe).',
            diagnosis: 'Social Anxiety Disorder (Social Phobia) (DSM-5 300.23).',
            intervention: ['Cognitive Restructuring of "spotlight effect".', 'Graded Exposure hierarchy (asking questions in class, attending parties).', 'Social Skills Training.'],
            outcome: 'LSAS score reduced to 45 (Moderate). Patient successfully delivered a class presentation.',
        },
    },
]
