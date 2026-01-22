'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Card } from '@/components/Card'

function CaseStudyIcon({ className }) {
    return (
        <div className={className}>
            <svg className="h-6 w-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        </div>
    )
}

function SearchIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function FilterButton({ active, children, onClick }) {
    return (
        <button
            onClick={onClick}
            className={clsx(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-all whitespace-nowrap',
                active
                    ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20'
                    : 'bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:bg-zinc-800/50 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 ring-1 ring-zinc-900/5 dark:ring-white/10'
            )}
        >
            {children}
        </button>
    )
}

export function CaseStudiesList({ caseStudies }) {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')

    // Extract unique categories
    const categories = useMemo(() => {
        const cats = new Set(caseStudies.map(s => s.category))
        return ['All', ...Array.from(cats).sort()]
    }, [caseStudies])

    // Filter case studies
    const filteredStudies = useMemo(() => {
        return caseStudies.filter(study => {
            const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory
            const searchLower = searchQuery.toLowerCase()
            const matchesSearch =
                study.name.toLowerCase().includes(searchLower) ||
                study.description.toLowerCase().includes(searchLower) ||
                study.category.toLowerCase().includes(searchLower)

            return matchesCategory && matchesSearch
        })
    }, [caseStudies, selectedCategory, searchQuery])

    return (
        <div className="mt-16 sm:mt-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="relative flex-1 max-w-md">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <SearchIcon className="h-5 w-5 text-zinc-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search case studies..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full rounded-full border-0 bg-white py-2 pl-10 pr-4 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:bg-zinc-800/50 dark:text-zinc-100 dark:ring-zinc-700 dark:placeholder:text-zinc-500 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mr-2 flex-none">
                    Filter by:
                </span>
                {categories.map(category => (
                    <FilterButton
                        key={category}
                        active={category === selectedCategory}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </FilterButton>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {filteredStudies.map((study) => (
                    <Card key={study.id}>
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <CaseStudyIcon className="h-6 w-6" />
                        </div>
                        <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                            <Card.Link href={`/case-studies/${study.id}`}>{study.name}</Card.Link>
                        </h2>
                        <Card.Description>{study.description}</Card.Description>
                        <div className="relative z-10 mt-6 flex flex-wrap items-center gap-2 text-sm font-medium text-zinc-400 dark:text-zinc-200">
                            <span className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-zinc-700">
                                {study.category}
                            </span>
                            <span className="text-xs text-zinc-400 dark:text-zinc-500">
                                {study.date}
                            </span>
                        </div>
                    </Card>
                ))}
            </div>

            {filteredStudies.length === 0 && (
                <div className="text-center py-20">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 mb-4">
                        <SearchIcon className="h-6 w-6 text-zinc-400" />
                    </div>
                    <h3 className="text-zinc-900 dark:text-zinc-100 font-medium text-lg">No case studies found</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                        No results found for "{searchQuery}" in {selectedCategory === 'All' ? 'any category' : selectedCategory}.
                        <br />Try adjusting your search or filters.
                    </p>
                    <button
                        onClick={() => { setSearchQuery(''); setSelectedCategory('All') }}
                        className="mt-6 text-sm font-medium text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
                    >
                        Clear all filters
                    </button>
                </div>
            )}
        </div>
    )
}
