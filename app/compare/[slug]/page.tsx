import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { ArrowRight, CalendarCheck, CheckCircle2, ExternalLink, ScanSearch, Scale } from 'lucide-react';
import {
  comparisons,
  comparisonsUpdated,
  comparisonsUpdatedDisplay,
  getComparison,
  getVendorsFor,
} from '../comparisons';

const siteUrl = 'https://hiriq.co';
const DEMO_URL = 'https://calendly.com/ayesha786khaldoon/discovery-call-hiriq';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);

  if (!comparison) {
    return { title: 'Comparison not found | Hiriq' };
  }

  const canonical = `/compare/${comparison.slug}`;

  return {
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    keywords: comparison.searchTerms,
    alternates: { canonical },
    openGraph: {
      title: comparison.metaTitle,
      description: comparison.metaDescription,
      url: `${siteUrl}${canonical}`,
      siteName: 'Hiriq',
      locale: 'en_US',
      type: 'article',
      images: [
        {
          url: '/123.png',
          width: 1200,
          height: 630,
          alt: `${comparison.shortTitle} comparison by Hiriq`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: comparison.metaTitle,
      description: comparison.metaDescription,
      images: ['/123.png'],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ComparePage({ params }: PageProps) {
  const { slug } = await params;
  const comparison = getComparison(slug);

  if (!comparison) {
    notFound();
  }

  const vendorRows = getVendorsFor(comparison);
  const related = comparison.relatedSlugs
    .map((relatedSlug) => getComparison(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/compare/${comparison.slug}#webpage`,
        url: `${siteUrl}/compare/${comparison.slug}`,
        name: comparison.metaTitle,
        description: comparison.metaDescription,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#software` },
        dateModified: comparisonsUpdated,
        publisher: { '@id': `${siteUrl}/#organization` },
        mainEntity: {
          '@type': 'ItemList',
          name: comparison.h1,
          itemListOrder: 'https://schema.org/ItemListUnordered',
          numberOfItems: vendorRows.length,
          itemListElement: vendorRows.map((vendor, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'SoftwareApplication',
              name: vendor.name,
              url: vendor.url,
              applicationCategory: 'BusinessApplication',
              description: vendor.positioning,
            },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/compare/${comparison.slug}#faq`,
        mainEntity: comparison.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
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
            {comparison.eyebrow}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            {comparison.h1}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">{comparison.intro}</p>

          <p className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Last reviewed {comparisonsUpdatedDisplay}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Book a Hiriq walkthrough
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            >
              See Hiriq pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 text-sm text-amber-900 sm:p-6">
            <p className="font-semibold">How to read this page</p>
            <p className="mt-2">
              Hiriq publishes this comparison and Hiriq is one of the platforms listed. Every other
              entry summarises how that vendor publicly positions its own product. We do not rank the
              list, invent scores, or quote competitor pricing, because those change frequently.
              Confirm current features and pricing on each vendor&rsquo;s own site before deciding.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-slate-900 sm:text-3xl">Before you compare</h2>
          <ul className="mt-6 space-y-3">
            {comparison.context.map((point) => (
              <li key={point} className="flex gap-3 text-slate-600">
                <ScanSearch className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            What to judge each platform on
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {comparison.criteria.map((criterion) => (
              <div key={criterion.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="flex items-center gap-2 font-semibold text-slate-900">
                  <Scale className="h-4 w-4 text-cyan-600" aria-hidden="true" />
                  {criterion.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{criterion.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">The platforms, side by side</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Sorted by category rather than by rank. The column that matters most is what each
            platform evaluates.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">Platform</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Category</th>
                  <th scope="col" className="px-5 py-4 font-semibold">What it evaluates</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Format</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Best suited to</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {vendorRows.map((vendor) => (
                  <tr key={vendor.id} className={vendor.isHiriq ? 'bg-cyan-50/60' : undefined}>
                    <th scope="row" className="px-5 py-4 align-top font-semibold text-slate-900">
                      {vendor.isHiriq ? (
                        <span className="inline-flex flex-col gap-1">
                          <span>{vendor.name}</span>
                          <span className="text-xs font-medium uppercase tracking-wide text-cyan-700">
                            Our product
                          </span>
                        </span>
                      ) : (
                        <a
                          href={vendor.url}
                          target="_blank"
                          rel="noopener nofollow"
                          className="inline-flex items-center gap-1 transition hover:text-cyan-700"
                        >
                          {vendor.name}
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      )}
                    </th>
                    <td className="px-5 py-4 align-top text-slate-600">{vendor.category}</td>
                    <td className="px-5 py-4 align-top text-slate-600">{vendor.evaluates}</td>
                    <td className="px-5 py-4 align-top text-slate-600">{vendor.format}</td>
                    <td className="px-5 py-4 align-top text-slate-600">{vendor.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 space-y-6">
            {vendorRows.map((vendor) => (
              <article
                key={`${vendor.id}-detail`}
                className={`rounded-2xl border p-6 ${
                  vendor.isHiriq ? 'border-cyan-300 bg-cyan-50/50' : 'border-slate-200 bg-white'
                }`}
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {vendor.name}
                  {vendor.isHiriq && (
                    <span className="ml-3 rounded-full bg-cyan-600 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
                      Our product
                    </span>
                  )}
                </h3>
                <p className="mt-3 text-slate-600">{vendor.positioning}</p>
                <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Best for</dt>
                    <dd className="mt-1 text-sm text-slate-600">{vendor.bestFor}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Worth checking
                    </dt>
                    <dd className="mt-1 text-sm text-slate-600">{vendor.considerations}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Where Hiriq fits</h2>
          <p className="mt-4 max-w-3xl text-slate-300">{comparison.hiriqFit}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {comparison.internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                {link.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {comparison.shortTitle}: common questions
          </h2>
          <div className="mt-8">
            <FAQAccordion items={comparison.faq} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900">Related comparisons</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/compare/${item.slug}`}
                  className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-cyan-300 hover:shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900">{item.shortTitle}</h3>
                  <p className="mt-2 flex items-center gap-1 text-sm text-cyan-700">
                    Read comparison
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </p>
                </Link>
              ))}
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-slate-500">
              <CheckCircle2 className="h-4 w-4 text-cyan-600" aria-hidden="true" />
              <Link href="/compare" className="font-semibold text-slate-700 underline-offset-4 hover:underline">
                See all Hiriq comparisons
              </Link>
            </p>
          </div>
        </section>
      )}

      <Footer showSocialIcons />
    </div>
  );
}
