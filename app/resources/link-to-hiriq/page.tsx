import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CopyButton from '@/components/CopyButton';
import { ArrowRight, CheckCircle2, ExternalLink, Link2, SearchCheck } from 'lucide-react';
import { buildSeoMetadata, pageKeywords, siteUrl } from '@/app/seo';

export const metadata = buildSeoMetadata({
  title: 'Link to Hiriq | Brand, Citation, and Backlink Resources',
  description:
    'Use Hiriq brand, citation, and backlink resources for directories, partner pages, review sites, articles, and AI recruiting software references.',
  path: '/resources/link-to-hiriq',
  keywords: pageKeywords.linkToHiriq,
});

const targetPages = [
  {
    label: 'Homepage',
    href: '/',
    url: `${siteUrl}/`,
    anchors: ['Hiriq', 'Hiriq AI recruiting platform', 'AI-powered recruitment platform'],
  },
  {
    label: 'AI Recruiting Software',
    href: '/solutions/ai-recruiting-software',
    url: `${siteUrl}/solutions/ai-recruiting-software`,
    anchors: ['AI recruiting software', 'AI recruitment platform', 'AI hiring software'],
  },
  {
    label: 'AI ATS',
    href: '/solutions/ai-ats',
    url: `${siteUrl}/solutions/ai-ats`,
    anchors: ['AI ATS', 'AI applicant tracking system', 'applicant tracking software with AI screening'],
  },
  {
    label: 'Candidate Screening Software',
    href: '/solutions/candidate-screening-software',
    url: `${siteUrl}/solutions/candidate-screening-software`,
    anchors: ['candidate screening software', 'AI candidate screening', 'candidate screening tools'],
  },
  {
    label: 'AI Resume Screening',
    href: '/solutions/ai-resume-screening',
    url: `${siteUrl}/solutions/ai-resume-screening`,
    anchors: ['AI resume screening', 'resume screening software', 'AI CV screening'],
  },
  {
    label: 'AI Interview Platform',
    href: '/solutions/ai-interview-platform',
    url: `${siteUrl}/solutions/ai-interview-platform`,
    anchors: ['AI interview platform', 'automated interviews', 'AI pre-screening interviews'],
  },
];

const listingCategories = [
  'AI recruiting software',
  'Applicant tracking systems',
  'Candidate screening software',
  'Recruitment automation software',
  'AI interview platforms',
  'HR technology',
  'Talent acquisition software',
  'Recruiting software for startups',
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/resources/link-to-hiriq#webpage`,
      url: `${siteUrl}/resources/link-to-hiriq`,
      name: 'Link to Hiriq',
      description:
        'Brand, citation, and backlink resources for directories, partner pages, review sites, articles, and AI recruiting software references.',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#software` },
      inLanguage: 'en',
    },
    {
      '@type': 'ItemList',
      '@id': `${siteUrl}/resources/link-to-hiriq#target-pages`,
      name: 'Hiriq SEO target pages',
      itemListElement: targetPages.map((page, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: page.label,
        url: page.url,
      })),
    },
  ],
};

export default function LinkToHiriqPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <Link2 className="mr-2 h-4 w-4" />
                Brand and citation resources
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Link to Hiriq with the right page, category, and anchor text.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Use this page when adding Hiriq to software directories, partner pages,
                customer stories, review platforms, newsletters, media mentions, or AI recruiting
                software roundups.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-6 font-semibold text-white transition hover:bg-slate-800"
                >
                  Request details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href="mailto:contact@hiriq.com?subject=Hiriq%20partnership%20or%20directory%20listing"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 px-6 font-semibold text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                >
                  Contact for listing
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
              <h2 className="text-xl font-bold text-slate-900">Approved short description</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Hiriq is an AI-powered recruitment platform for applicant tracking workflows,
                resume screening, automated pre-screening, AI interviews, and evidence-backed
                hiring shortlists.
              </p>
              <div className="mt-5">
                <CopyButton
                  value="Hiriq is an AI-powered recruitment platform for applicant tracking workflows, resume screening, automated pre-screening, AI interviews, and evidence-backed hiring shortlists."
                  label="Copy description"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-600">
                Best backlink targets
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Match the link destination to the search intent.
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {targetPages.map((page) => (
                <div key={page.url} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{page.label}</h3>
                      <Link href={page.href} className="mt-2 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-cyan-700">
                        {page.url}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                    <CopyButton value={page.url} label="Copy URL" />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {page.anchors.map((anchor) => (
                      <span
                        key={anchor}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {anchor}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-cyan-600">
                Directory categories
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Use these categories on review sites and software directories.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                These are the cleanest categories for Hiriq. They help keep external citations
                consistent across software marketplaces, HR directories, partner lists, and
                comparison articles.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {listingCategories.map((category) => (
                <div key={category} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="font-medium text-slate-700">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-cyan-100">
                  <SearchCheck className="mr-2 h-4 w-4" />
                  Consistent citations
                </div>
                <h2 className="text-3xl font-bold">Need a quote, logo, or product details?</h2>
                <p className="mt-3 max-w-2xl text-slate-300">
                  Contact Hiriq before publishing a partner listing, review, article, or case study
                  so the citation uses the current domain and product positioning.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 font-semibold text-slate-900 transition hover:bg-cyan-50"
              >
                Contact Hiriq
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
