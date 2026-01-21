/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        '--tw-prose-body': 'var(--zinc-600)',
                        '--tw-prose-headings': 'var(--zinc-900)',
                        '--tw-prose-links': 'var(--teal-500)',
                        '--tw-prose-bold': 'var(--zinc-900)',
                        '--tw-prose-counters': 'var(--zinc-500)',
                        '--tw-prose-bullets': 'var(--zinc-300)',
                        '--tw-prose-hr': 'var(--zinc-100)',
                        '--tw-prose-quotes': 'var(--zinc-900)',
                        '--tw-prose-quote-borders': 'var(--zinc-200)',
                        '--tw-prose-captions': 'var(--zinc-500)',
                        '--tw-prose-code': 'var(--zinc-900)',
                        '--tw-prose-code-bg': 'var(--zinc-100)',
                        '--tw-prose-pre-code': 'var(--zinc-100)',
                        '--tw-prose-pre-bg': 'var(--zinc-900)',
                        '--tw-prose-pre-border': 'transparent',
                        '--tw-prose-th-borders': 'var(--zinc-300)',
                        '--tw-prose-td-borders': 'var(--zinc-200)',

                        '--tw-prose-invert-body': 'var(--zinc-400)',
                        '--tw-prose-invert-headings': 'var(--zinc-100)',
                        '--tw-prose-invert-links': 'var(--teal-400)',
                        '--tw-prose-invert-bold': 'var(--zinc-100)',
                        '--tw-prose-invert-counters': 'var(--zinc-400)',
                        '--tw-prose-invert-bullets': 'var(--zinc-600)',
                        '--tw-prose-invert-hr': 'var(--zinc-700)',
                        '--tw-prose-invert-quotes': 'var(--zinc-100)',
                        '--tw-prose-invert-quote-borders': 'var(--zinc-700)',
                        '--tw-prose-invert-captions': 'var(--zinc-400)',
                        '--tw-prose-invert-code': 'var(--zinc-100)',
                        '--tw-prose-invert-code-bg': 'var(--zinc-800)',
                        '--tw-prose-invert-pre-code': 'var(--zinc-300)',
                        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                        '--tw-prose-invert-pre-border': 'var(--zinc-200)',
                        '--tw-prose-invert-th-borders': 'var(--zinc-600)',
                        '--tw-prose-invert-td-borders': 'var(--zinc-700)',
                    },
                },
            },
        },
    },
}
