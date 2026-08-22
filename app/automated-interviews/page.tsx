'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useInView } from '@/hooks/useInView';
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Clock3,
  Eye,
  FileText,
  Gauge,
  MessageSquareText,
  Mic2,
  Scale,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from 'lucide-react';

const INTERVIEW_FLOW = [
  {
    title: 'Role and industry setup',
    copy: 'Recruiters define the job, interview focus areas, scoring weights, seniority, and the industry workflow before candidates enter the interview.',
    icon: Building2,
  },
  {
    title: '30-minute live AI interview',
    copy: 'The candidate speaks with a conversational AI interviewer. It asks follow-ups based on the previous answer when evidence is missing or unclear.',
    icon: Mic2,
  },
  {
    title: 'Scenario and technical probing',
    copy: 'Questions can cover role-specific terms, tools, edge cases, scenario judgment, and practical "what would you do if..." decision points.',
    icon: BrainCircuit,
  },
  {
    title: 'Integrity and focus signals',
    copy: 'The session can flag copy-paste attempts, tab switching, background voices, multiple faces, and focus changes for recruiter review.',
    icon: ShieldCheck,
  },
  {
    title: 'Recruiter evidence package',
    copy: 'Recruiters receive subtopic scores, per-turn answer ratings, transcript access, behavioral notes, integrity flags, and an AI recommendation.',
    icon: BarChart3,
  },
];

const VALUE_PROPS = [
  {
    title: 'Replace repetitive first-round interviews',
    copy: 'Recruiters can reserve live time for the candidates with stronger evidence instead of spending hours asking the same screening questions.',
    icon: Clock3,
  },
  {
    title: 'Probe deeper than a recorded interview',
    copy: 'Hiriq does not just collect one-way video answers. It follows the candidate response and asks targeted follow-ups when the answer needs more detail.',
    icon: MessageSquareText,
  },
  {
    title: 'Make interviews comparable',
    copy: 'Every candidate is evaluated against the same role-specific scorecard, so hiring managers get cleaner evidence instead of scattered notes.',
    icon: Gauge,
  },
];

const INDUSTRIES = [
  'Technology',
  'Healthcare',
  'BFSI',
  'Operations',
  'Retail and hospitality',
  'Sales and BPO',
];

const REPORT_ITEMS = [
  'Overall recommendation with recruiter override',
  'Subtopic and competency scores',
  'Per-turn answer ratings',
  'Full transcript for deep review',
  'Scenario, technical, and behavioral evidence',
  'Interview integrity flags',
];

const ETHICS = [
  'Human decision stays with the recruiter',
  'Candidate consent and clear process design',
  'No continuous facial video or face embeddings stored',
  'Integrity signals are review context, not automatic rejection',
  'Structured scoring instead of black-box decisions',
];

export default function AutomatedInterviewsPage() {
  const valueInView = useInView();
  const flowInView = useInView();
  const reportInView = useInView();
  const ethicsInView = useInView();

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Navigation />

      <main>
        <section className="relative overflow-hidden bg-slate-950 px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8 lg:pb-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="opacity-0 animate-slide-up [animation-fill-mode:forwards] animate-stagger-1">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100">
                <Sparkles className="h-4 w-4" />
                Live conversational AI interviews
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                AI interviews that feel like structured real-world interviews.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Hiriq runs integrated, live conversational interviews that adapt to each answer,
                probe role-specific depth, score evidence by subtopic, and keep final decisions with recruiters.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-lg bg-white px-7 font-semibold text-slate-950 transition hover:bg-cyan-50"
                >
                  Book an AI interview demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/solutions/ai-interview-platform"
                  className="inline-flex h-14 items-center justify-center rounded-lg border border-white/20 px-7 font-semibold text-white transition hover:bg-white/10"
                >
                  View platform details
                </Link>
              </div>
              <p className="mt-6 text-sm font-medium text-slate-400">
                Built for 30-minute structured interviews, industry-specific evaluation, and recruiter-controlled decisions.
              </p>
            </div>

            <div className="opacity-0 animate-slide-up [animation-fill-mode:forwards] animate-stagger-2">
              <div className="rounded-lg border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase text-cyan-300">Interview engine</p>
                    <h2 className="mt-1 text-2xl font-bold">Adaptive question path</h2>
                  </div>
                  <Mic2 className="h-7 w-7 text-cyan-300" />
                </div>
                <div className="space-y-4">
                  {['Question 1', 'Candidate answer', 'Evidence gap detected', 'Follow-up question', 'Scored response'].map((item, index) => (
                    <div key={item} className={`rounded-lg border p-4 ${index % 2 === 0 ? 'border-cyan-400/25 bg-cyan-400/10' : 'border-white/10 bg-white/5'}`}>
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-semibold text-white">{item}</span>
                        <span className="text-xs font-bold text-slate-400">0{index + 1}</span>
                      </div>
                      <div className="mt-3 flex items-end gap-1.5" aria-hidden="true">
                        {[18, 30, 14, 36, 22, 28, 16, 32].map((height, barIndex) => (
                          <span
                            key={`${item}-${barIndex}`}
                            className="w-full origin-bottom rounded-full bg-cyan-300/70 animate-sound-bar"
                            style={{ height: `${height}px`, animationDelay: `${barIndex * 70}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={valueInView.ref} className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className={`mx-auto mb-12 max-w-3xl text-center ${valueInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}`}>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-cyan-700">Business value</p>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                More signal before recruiters spend live interview time.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Pre-screening can collect basic qualification. Hiriq AI Interviews go deeper:
                technical depth, scenario judgment, behavioral evidence, communication quality, and integrity context.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {VALUE_PROPS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-50 hover:shadow-xl ${valueInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}`}
                    style={{ animationDelay: `${120 + index * 100}ms` }}
                  >
                    <Icon className="mb-5 h-7 w-7 text-cyan-700" />
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section ref={flowInView.ref} className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className={flowInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-600">How it works</p>
              <h2 className="text-3xl font-bold text-slate-900">From role setup to recruiter-ready evidence.</h2>
              <p className="mt-5 leading-7 text-slate-600">
                The interview adapts turn by turn. If a candidate gives a shallow answer, Hiriq can ask
                for an example, a scenario response, a technical explanation, or a deeper clarification.
              </p>
              <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-5">
                <p className="text-sm font-semibold uppercase text-blue-700">Example</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  For an ICU nursing role, the interview can probe medical terminology, anatomy,
                  blood and bone concepts, chest pathology, and clinical scenario management.
                </p>
              </div>
            </div>

            <div className="relative space-y-4">
              <div className="absolute bottom-8 left-5 top-8 hidden w-0.5 bg-cyan-200 sm:block" aria-hidden="true" />
              {INTERVIEW_FLOW.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`relative flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg ${flowInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}`}
                    style={{ animationDelay: `${120 + index * 90}ms` }}
                  >
                    <span className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <Icon className="h-5 w-5 text-cyan-700" />
                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="text-sm leading-6 text-slate-600">{item.copy}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-emerald-700">Six industry workflows</p>
                <h2 className="text-3xl font-bold text-slate-900">Industry-focused interviews, not generic question lists.</h2>
              </div>
              <p className="leading-7 text-slate-600">
                Each industry uses different evaluation logic and scoring emphasis, so recruiters can test
                the knowledge, scenarios, and communication patterns that matter for the role.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES.map((industry) => (
                <div key={industry} className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50">
                  <CheckCircle2 className="mb-4 h-6 w-6 text-emerald-700" />
                  <h3 className="font-bold text-slate-900">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={reportInView.ref} className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className={reportInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-cyan-300">Recruiter report</p>
              <h2 className="text-3xl font-bold sm:text-4xl">The value is not just the interview. It is the evidence after it.</h2>
              <p className="mt-5 leading-7 text-slate-300">
                Hiriq packages the interview into a decision-ready report so recruiters can see what
                happened, why the score was assigned, and where they may want to deep dive.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {REPORT_ITEMS.map((item, index) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400 text-xs font-bold text-slate-950">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`rounded-lg border border-white/10 bg-white/5 p-6 ${reportInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}`} style={{ animationDelay: '180ms' }}>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase text-cyan-300">Candidate evidence</p>
                  <h3 className="mt-1 text-2xl font-bold">Subtopic scorecard</h3>
                </div>
                <FileText className="h-7 w-7 text-cyan-300" />
              </div>
              {['Technical accuracy', 'Scenario judgment', 'Communication clarity', 'Integrity review'].map((label, index) => (
                <div key={label} className="mb-5">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-semibold text-white">{label}</span>
                    <span className="text-slate-400">Review signal</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div
                      className="h-full origin-left rounded-full bg-cyan-300 animate-progress-fill"
                      style={{ width: `${86 - index * 12}%`, animationDelay: `${index * 120}ms` }}
                    />
                  </div>
                </div>
              ))}
              <div className="mt-6 rounded-lg border border-cyan-400/20 bg-cyan-400/10 p-4">
                <div className="flex gap-3">
                  <UserCheck className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-300" />
                  <p className="text-sm leading-6 text-slate-200">
                    The AI can recommend next steps, but the recruiter can inspect the transcript,
                    review flags, and make the final decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={ethicsInView.ref} className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className={ethicsInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-white">
                <Scale className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Fair, consistent, and human-reviewed.</h2>
              <p className="mt-5 leading-7 text-slate-600">
                Integrity signals and analysis are designed to help recruiters review the interview,
                not to automatically reject candidates without human judgment.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {ETHICS.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:border-cyan-300 hover:bg-cyan-50 ${ethicsInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}`}
                  style={{ animationDelay: `${120 + index * 80}ms` }}
                >
                  <Eye className="mb-4 h-5 w-5 text-cyan-700" />
                  <p className="font-medium leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">See how Hiriq interviews save recruiter time.</h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                Walk through one role and see how the interview engine turns a 30-minute conversation into a structured recruiter report.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 font-semibold text-slate-900 transition hover:bg-cyan-50"
            >
              Book a demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
