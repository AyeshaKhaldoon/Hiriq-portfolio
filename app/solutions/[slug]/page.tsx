import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { ArrowRight, CheckCircle2, ClipboardCheck, Globe2, SearchCheck } from 'lucide-react';
import { getSolution, solutions } from '../solutions';

const siteUrl = 'https://hiriq.com';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return {
      title: 'Solution Not Found | Hiriq',
    };
  }

  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    keywords: [solution.primaryKeyword, ...solution.searchTerms],
    alternates: {
      canonical: `/solutions/${solution.slug}`,
    },
    openGraph: {
      title: solution.metaTitle,
      description: solution.metaDescription,
      url: `${siteUrl}/solutions/${solution.slug}`,
      siteName: 'Hiriq',
      type: 'website',
      images: [
        {
          url: '/123.png',
          width: 1200,
          height: 783,
          alt: 'Hiriq AI recruiting platform dashboard',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: solution.metaTitle,
      description: solution.metaDescription,
      images: ['/123.png'],
    },
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) notFound();

  const pageUrl = `${siteUrl}/solutions/${solution.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: solution.metaTitle,
        description: solution.metaDescription,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: {
          '@type': 'SoftwareApplication',
          '@id': `${siteUrl}/#software`,
          name: 'Hiriq',
        },
        inLanguage: 'en',
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: solution.faq.map((item) => ({
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
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <SearchCheck className="mr-2 h-4 w-4" />
                {solution.eyebrow}
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {solution.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">{solution.lead}</p>
              <p className="mt-4 text-base leading-7 text-slate-500">{solution.market}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://app.hiriq.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-6 font-semibold text-white transition hover:bg-slate-800"
                >
                  Start free trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 px-6 font-semibold text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                >
                  Book a demo
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Relevant searches</h2>
                  <p className="text-sm text-slate-600">Terms this page is built to answer clearly.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {solution.searchTerms.map((term) => (
                  <span
                    key={term}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-600">
                Problems Hiriq solves
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Built around recruiter pain, not keyword stuffing.
              </h2>
              <div className="mt-8 space-y-4">
                {solution.problems.map((problem) => (
                  <div key={problem} className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="leading-7 text-slate-700">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-cyan-600">
                What teams can do
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Clear outcomes for recruiting teams and hiring managers.
              </h2>
              <div className="mt-8 space-y-4">
                {solution.outcomes.map((outcome) => (
                  <div key={outcome} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-5">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <p className="leading-7 text-slate-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-600">
                Recruiting workflow
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                From job setup to shortlist in one evidence-backed flow.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {solution.workflow.map((step, index) => (
                <div key={step} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium leading-6 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                <ClipboardCheck className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Practical answers for teams comparing Hiriq with ATS, AI screening, and interview automation tools.
              </p>
            </div>
            <FAQAccordion items={solution.faq} />
          </div>
        </section>

        <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Ready to improve your hiring funnel?</h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                Show us your current screening workflow and Hiriq will help map where AI can remove manual work.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://app.hiriq.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 font-semibold text-slate-900 transition hover:bg-cyan-50"
              >
                Start free trial
              </a>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-6 font-semibold text-white transition hover:bg-white/10"
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
