import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Search } from 'lucide-react';
import { buildSeoMetadata, siteUrl } from '@/app/seo';
import { siteSearchItems } from '@/app/siteSearch';

export const metadata = buildSeoMetadata({
  title: 'Search Hiriq | AI Recruiting Software, ATS, Screening, and Interviews',
  description:
    'Search Hiriq pages for AI recruiting software, AI ATS, candidate screening, resume screening, automated interviews, pricing, and contact information.',
  path: '/search',
  keywords: [
    'search Hiriq',
    'Hiriq AI recruiting software',
    'Hiriq AI ATS',
    'Hiriq candidate screening',
    'Hiriq AI interview platform',
  ],
});

type SearchPageProps = {
  searchParams?: Promise<{ q?: string }>;
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SearchResultsPage',
  '@id': `${siteUrl}/search#webpage`,
  url: `${siteUrl}/search`,
  name: 'Search Hiriq',
  description: 'Search important Hiriq pages and AI recruiting resources.',
  isPartOf: { '@id': `${siteUrl}/#website` },
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params?.q?.trim() || '';
  const normalized = query.toLowerCase();
  const results = normalized
    ? siteSearchItems.filter((item) =>
        [item.title, item.description, item.keywords].some((value) =>
          value.toLowerCase().includes(normalized)
        )
      )
    : siteSearchItems;

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 pb-14 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Search className="mr-2 h-4 w-4" />
              Site search
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Search Hiriq pages and recruiting resources.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Find Hiriq pages for AI recruiting software, AI ATS, candidate screening,
              resume screening, automated interviews, pricing, and contact information.
            </p>
            <form action="/search" className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
              <label htmlFor="site-search-query" className="sr-only">
                Search Hiriq
              </label>
              <input
                id="site-search-query"
                name="q"
                defaultValue={query}
                className="min-h-12 flex-1 rounded-xl border border-slate-200 px-4 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-6 font-semibold text-white transition hover:bg-slate-800"
              >
                Search
              </button>
            </form>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
                  {query ? `Results for "${query}"` : 'Recommended pages'}
                </p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {results.length} {results.length === 1 ? 'page' : 'pages'} found
                </h2>
              </div>
              <Link href="/solutions" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-cyan-700">
                Browse all solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4">
              {results.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-50"
                >
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
                  <p className="mt-3 text-sm font-semibold text-blue-600">{`${siteUrl}${item.href}`}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
