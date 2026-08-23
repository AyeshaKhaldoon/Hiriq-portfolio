import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  FileSearch,
  Globe2,
  HeartPulse,
  Layers3,
  MessageSquareText,
  Route,
  SearchCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import { solutions } from './solutions';
import { buildSeoMetadata, pageKeywords } from '../seo';

const DEMO_URL = 'https://calendly.com/ayesha786khaldoon/discovery-call-hiriq';

export const metadata = buildSeoMetadata({
  title: 'AI Recruiting Solutions | Hiriq',
  description:
    'Explore Hiriq solutions for AI recruiting software, AI ATS workflows, automated interviews, resume screening, and regional hiring across the USA, UK, and Middle East.',
  path: '/solutions',
  keywords: pageKeywords.solutions,
});

const featuredPaths = [
  {
    title: 'Platform buyers',
    copy: 'Start here if the team wants one workflow for intake, screening, interviews, and shortlist review.',
    href: '/solutions/ai-recruiting-software',
    icon: Sparkles,
    accent: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    title: 'Applicant tracking',
    copy: 'Use this path when the main problem is tracking applicants and keeping evidence with each candidate.',
    href: '/solutions/ai-ats',
    icon: Layers3,
    accent: 'bg-slate-50 text-slate-800 border-slate-200',
  },
  {
    title: 'Screening volume',
    copy: 'Use this path when recruiters need faster resume and candidate qualification before live interviews.',
    href: '/solutions/candidate-screening-software',
    icon: FileSearch,
    accent: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    title: 'Healthcare staffing',
    copy: 'Use this path when clinical role-fit, availability, and structured recruiter evidence matter.',
    href: '/solutions/healthcare-staffing-agencies',
    icon: HeartPulse,
    accent: 'bg-rose-50 text-rose-700 border-rose-200',
  },
  {
    title: 'Interview bottlenecks',
    copy: 'Use this path when scheduling first screens and comparing early answers slows the team down.',
    href: '/solutions/ai-interview-platform',
    icon: MessageSquareText,
    accent: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  },
];

const intentGroups = [
  {
    label: 'Core workflows',
    description: 'Product pages focused on what Hiriq does inside the recruiting funnel.',
    slugs: ['ai-recruiting-software', 'ai-ats', 'candidate-screening-software', 'ai-resume-screening', 'candidate-pre-screening-software'],
  },
  {
    label: 'Automation and interviews',
    description: 'Pages for buyers looking specifically at repeatable screening tasks and structured AI interviews.',
    slugs: ['ai-interview-platform', 'recruiting-automation-software', 'high-volume-hiring'],
  },
  {
    label: 'Industries and agencies',
    description: 'Pages for commercial buyers searching by hiring model or specialist staffing need.',
    slugs: ['healthcare-staffing-agencies', 'staffing-agencies'],
  },
  {
    label: 'Regional search',
    description: 'Pages for teams searching by market, region, or distributed hiring setup.',
    slugs: ['middle-east-ai-hiring', 'usa-uk-ai-hiring'],
  },
];

const solutionLookup = new Map(solutions.map((solution) => [solution.slug, solution]));

export default function SolutionsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Navigation />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="fade-in-up max-w-3xl">
              <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <SearchCheck className="mr-2 h-4 w-4" />
                AI recruiting solutions
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Pick the Hiriq page by the hiring problem you need to solve.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                These pages are split by real search intent: full recruiting platform, AI ATS,
                resume screening, candidate screening, interview automation, and regional hiring.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-slate-900 px-6 font-semibold text-white transition hover:bg-slate-800"
                >
                  Book a demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 px-6 font-semibold text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                >
                  Talk to sales
                </Link>
              </div>
            </div>

            <div className="fade-in-up animation-delay-200 rounded-lg border border-cyan-200 bg-white/80 p-6 shadow-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase text-cyan-700">Directory map</p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">From applicant to shortlist</h2>
                </div>
                <Route className="h-6 w-6 text-cyan-700" />
              </div>
              <div className="grid gap-3 sm:grid-cols-5">
                {['Role', 'Apply', 'Screen', 'Interview', 'Review'].map((step, index) => (
                  <div key={step} className="relative rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
                    <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm font-bold text-slate-800">{step}</p>
                    {index < 4 && <div className="absolute -right-3 top-8 hidden h-0.5 w-6 bg-blue-200 sm:block" aria-hidden="true" />}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4">
                <div className="flex items-start gap-3">
                  <Bot className="mt-1 h-5 w-5 flex-shrink-0 text-blue-700" />
                  <p className="text-sm leading-6 text-slate-700">
                    Each page below is written for a different buyer question, so internal links help
                    search engines understand which Hiriq URL should answer which query.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-600">Fast paths</p>
              <h2 className="text-3xl font-bold text-slate-900">Choose by bottleneck, not by buzzword.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {featuredPaths.map((path, index) => {
                const Icon = path.icon;
                return (
                  <Link
                    key={path.href}
                    href={path.href}
                    className={`group rounded-lg border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${path.accent}`}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <Icon className="h-6 w-6" />
                      <span className="text-xs font-bold uppercase opacity-70">0{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{path.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{path.copy}</p>
                    <div className="mt-5 inline-flex items-center text-sm font-semibold text-blue-700">
                      Open path
                      <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-cyan-700">Grouped search intent</p>
                <h2 className="text-3xl font-bold text-slate-900">Every solution page has its own job.</h2>
              </div>
              <p className="leading-7 text-slate-600">
                The directory separates platform, ATS, screening, automation, interview, and regional pages
                so the site does not make every page compete for the exact same terms.
              </p>
            </div>

            <div className="space-y-6">
              {intentGroups.map((group) => (
                <div key={group.label} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{group.label}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{group.description}</p>
                    </div>
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {group.slugs.map((slug) => {
                      const solution = solutionLookup.get(slug);
                      if (!solution) return null;

                      return (
                        <Link
                          key={solution.slug}
                          href={`/solutions/${solution.slug}`}
                          className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-50"
                        >
                          <h4 className="font-bold text-slate-900">{solution.shortTitle}</h4>
                          <p className="mt-3 text-sm leading-6 text-slate-600">{solution.metaDescription}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {solution.searchTerms.slice(0, 2).map((term) => (
                              <span key={term} className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
                                {term}
                              </span>
                            ))}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
              <Globe2 className="mb-5 h-7 w-7 text-blue-700" />
              <h2 className="text-2xl font-bold text-slate-900">Regional pages</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Middle East, USA, and UK pages focus on distributed hiring coordination rather than repeating the same product page.
              </p>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6">
              <FileSearch className="mb-5 h-7 w-7 text-emerald-700" />
              <h2 className="text-2xl font-bold text-slate-900">Screening pages</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Resume and candidate screening pages stay focused on criteria, evidence, and shortlist quality.
              </p>
            </div>
            <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-6">
              <MessageSquareText className="mb-5 h-7 w-7 text-cyan-700" />
              <h2 className="text-2xl font-bold text-slate-900">Interview pages</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Interview automation pages explain structured interviews, transcripts, and recruiter review.
              </p>
            </div>
            <div className="rounded-lg border border-rose-200 bg-rose-50 p-6">
              <HeartPulse className="mb-5 h-7 w-7 text-rose-700" />
              <h2 className="text-2xl font-bold text-slate-900">Healthcare pages</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Healthcare staffing pages target clinical role-fit and structured screening evidence without fake compliance claims.
              </p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-6">
              <BriefcaseBusiness className="mb-5 h-7 w-7 text-amber-700" />
              <h2 className="text-2xl font-bold text-slate-900">Agency pages</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Staffing agency pages focus on client-ready candidate evidence and recruiter-reviewed submissions.
              </p>
            </div>
            <div className="rounded-lg border border-violet-200 bg-violet-50 p-6">
              <UsersRound className="mb-5 h-7 w-7 text-violet-700" />
              <h2 className="text-2xl font-bold text-slate-900">Volume pages</h2>
              <p className="mt-3 leading-7 text-slate-600">
                High-volume and pre-screening pages separate quick qualification from deeper AI interview evidence.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
