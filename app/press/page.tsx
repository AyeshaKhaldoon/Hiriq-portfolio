'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUpRight, BookOpen, Building2, Mail, Quote } from 'lucide-react';
import { pressItems } from './pressItems';

const siteUrl = 'https://hiriq.co';

export default function PressPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/press#webpage`,
        url: `${siteUrl}/press`,
        name: 'Hiriq in the Press',
        description:
          'Media coverage, published founder commentary, and directory listings for Hiriq, an AI recruiting platform for screening and interviews.',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: pressItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: item.url,
            name: item.title,
          })),
        },
      },
      ...pressItems
        .filter((item) => item.type === 'Article')
        .map((item) => ({
          '@type': 'Article',
          '@id': `${siteUrl}/press#${item.id}`,
          headline: item.title,
          url: item.url,
          datePublished: item.datePublished,
          abstract: item.summary,
          about: { '@id': `${siteUrl}/#organization` },
          publisher: {
            '@type': 'Organization',
            name: item.outlet,
            url: item.outletUrl,
          },
          ...(item.author
            ? {
                author: {
                  '@type': 'Person',
                  name: item.author,
                  ...(item.author === 'Ayesha Khaldoon' ? { '@id': `${siteUrl}/#ayesha-khaldoon` } : {}),
                },
              }
            : {}),
        })),
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <section className="bg-gradient-to-br from-slate-50 via-white to-cyan-50 pt-28 pb-16 sm:pt-36">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-800">
            Press and coverage
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Hiriq in the press
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Published commentary from the Hiriq founding team, independent coverage, and directory
            listings. Journalists and analysts writing about AI recruiting, candidate screening, or
            staffing operations are welcome to reach out.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:contact@hiriq.co?subject=Press%20enquiry%20for%20Hiriq"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Press enquiries
            </a>
            <Link
              href="/resources/link-to-hiriq"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Company facts and boilerplate
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Coverage and published commentary</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Each entry links to the original publication. Hiriq does not republish full articles from
            other outlets.
          </p>

          <div className="mt-10 space-y-8">
            {pressItems.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-300 hover:shadow-md sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
                    {item.type === 'ProfilePage' ? (
                      <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                    ) : (
                      <Quote className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                    {item.outlet}
                  </span>
                  <span>{item.displayDate}</span>
                  <span className="hidden sm:inline" aria-hidden="true">
                    &middot;
                  </span>
                  <span>{item.topic}</span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener"
                    className="transition hover:text-cyan-700"
                  >
                    {item.title}
                  </a>
                </h3>

                {item.author && (
                  <p className="mt-2 text-sm font-medium text-slate-600">
                    By {item.author}
                    {item.authorRole ? `, ${item.authorRole}` : ''}
                  </p>
                )}

                <p className="mt-4 text-slate-600">{item.summary}</p>

                <ul className="mt-5 space-y-2">
                  {item.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex gap-3 text-sm text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-800"
                >
                  Read on {item.outlet}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Where the ideas continue</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            The themes in this coverage are covered in more depth across the Hiriq site.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: '/blog/time-to-qualify',
                title: 'Time-to-qualify explained',
                copy: 'The metric behind the Staffing Hub article, defined and instrumented.',
              },
              {
                href: '/solutions/staffing-agencies',
                title: 'Software for staffing agencies',
                copy: 'Qualification workflows for firms submitting to client requisitions.',
              },
              {
                href: '/solutions/high-volume-hiring',
                title: 'High-volume hiring',
                copy: 'Screening large applicant pools without adding headcount.',
              },
              {
                href: '/automated-interviews',
                title: 'Automated AI interviews',
                copy: 'How the conversational interview and scoring process works.',
              },
              {
                href: '/about',
                title: 'About Hiriq',
                copy: 'The team, the product philosophy, and how decisions stay with recruiters.',
              },
              {
                href: '/compare/best-ai-interview-software',
                title: 'AI interview software compared',
                copy: 'How the main platforms in this category differ.',
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-cyan-300 hover:shadow-sm"
              >
                <h3 className="font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{card.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer showSocialIcons />
    </div>
  );
}
