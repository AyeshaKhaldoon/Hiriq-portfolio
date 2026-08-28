import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import { comparisons, comparisonsUpdatedDisplay } from './comparisons';

const siteUrl = 'https://hiriq.co';

export default function CompareHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/compare#webpage`,
    url: `${siteUrl}/compare`,
    name: 'AI recruiting software comparisons',
    description:
      'Neutral comparisons of AI recruiting, screening, and interview platforms published by Hiriq.',
    isPartOf: { '@id': `${siteUrl}/#website` },
    publisher: { '@id': `${siteUrl}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: comparisons.map((comparison, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}/compare/${comparison.slug}`,
        name: comparison.shortTitle,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <section className="bg-gradient-to-br from-slate-50 via-white to-cyan-50 pt-28 pb-14 sm:pt-36">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Comparisons
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            AI recruiting software, compared honestly
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Most comparison pages in this category are ranked lists written to sell one product.
            These are sorted by what each platform actually evaluates and which part of the funnel it
            covers, because that is the distinction that decides whether recruiter workload goes
            down. Hiriq appears in these lists and is labelled as our product every time.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Last reviewed {comparisonsUpdatedDisplay}
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {comparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/compare/${comparison.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-cyan-300 hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                  {comparison.eyebrow}
                </span>
                <h2 className="mt-3 text-xl font-bold text-slate-900">{comparison.shortTitle}</h2>
                <p className="mt-3 flex-1 text-sm text-slate-600">{comparison.metaDescription}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
                  Read the comparison
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Prefer to look at the product directly?</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { href: '/solutions', label: 'All Hiriq solutions' },
              { href: '/automated-interviews', label: 'How AI interviews work' },
              { href: '/hiring-platform', label: 'The hiring platform' },
              { href: '/pricing', label: 'Pricing' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-800"
              >
                {link.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer showSocialIcons />
    </div>
  );
}
