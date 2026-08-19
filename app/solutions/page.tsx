import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, SearchCheck } from 'lucide-react';
import { solutions } from './solutions';

export const metadata: Metadata = {
  title: 'AI Recruiting Solutions | Hiriq',
  description:
    'Explore Hiriq solutions for AI recruiting software, AI ATS workflows, automated interviews, resume screening, and regional hiring across the USA, UK, and Middle East.',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navigation />
      <main>
        <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <SearchCheck className="mr-2 h-4 w-4" />
                AI recruiting solutions
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Find the right Hiriq workflow for your hiring search intent.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Hiriq helps hiring teams screen resumes, run automated pre-screening interviews,
                manage applicant workflows, and build evidence-backed shortlists across the USA,
                UK, Middle East, and remote talent markets.
              </p>
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
                  Talk to sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700">
                  {solution.shortTitle}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{solution.metaDescription}</p>
                <div className="mt-5 inline-flex items-center text-sm font-semibold text-blue-600">
                  View solution
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
