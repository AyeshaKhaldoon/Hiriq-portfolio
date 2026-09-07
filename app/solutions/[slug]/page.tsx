import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileSearch,
  Gauge,
  Globe2,
  Layers3,
  ListChecks,
  MapPin,
  MessageSquareText,
  Route,
  SearchCheck,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  UsersRound,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { getSolution, solutions } from '../solutions';

const siteUrl = 'https://hiriq.co';
const DEMO_URL = 'https://calendly.com/ayesha786khaldoon/discovery-call-hiriq';

type PageProps = {
  params: Promise<{ slug: string }>;
};

type SolutionTheme = {
  hero: string;
  eyebrow: string;
  accent: string;
  icon: string;
  panel: string;
  ring: string;
  border: string;
  soft: string;
};

type VariantMode =
  | 'command'
  | 'pipeline'
  | 'interview'
  | 'resume'
  | 'screening'
  | 'automation'
  | 'region'
  | 'markets';

type VariantCard = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
};

type SolutionVariant = {
  mode: VariantMode;
  kicker: string;
  sectionTitle: string;
  sectionCopy: string;
  cards: VariantCard[];
  lensTitle: string;
  lensItems: string[];
  workflowTitle: string;
  workflowCopy: string;
  relatedSlugs: string[];
  guide?: { href: string; label: string };
  ctaTitle: string;
  ctaCopy: string;
};

const solutionThemes: Record<string, SolutionTheme> = {
  'ai-recruiting-software': {
    hero: 'from-blue-50 via-white to-cyan-50',
    eyebrow: 'bg-blue-100 text-blue-700',
    accent: 'text-blue-600',
    icon: 'bg-blue-50 text-blue-700',
    panel: 'border-blue-200 bg-blue-50/50',
    ring: 'bg-blue-500',
    border: 'border-blue-200',
    soft: 'bg-blue-50',
  },
  'ai-ats': {
    hero: 'from-slate-50 via-white to-sky-50',
    eyebrow: 'bg-slate-900 text-white',
    accent: 'text-slate-700',
    icon: 'bg-slate-100 text-slate-800',
    panel: 'border-slate-200 bg-slate-50',
    ring: 'bg-slate-900',
    border: 'border-slate-300',
    soft: 'bg-slate-100',
  },
  'ai-interview-platform': {
    hero: 'from-cyan-50 via-white to-teal-50',
    eyebrow: 'bg-cyan-100 text-cyan-700',
    accent: 'text-cyan-600',
    icon: 'bg-cyan-50 text-cyan-700',
    panel: 'border-cyan-200 bg-cyan-50/50',
    ring: 'bg-cyan-500',
    border: 'border-cyan-200',
    soft: 'bg-cyan-50',
  },
  'ai-resume-screening': {
    hero: 'from-emerald-50 via-white to-cyan-50',
    eyebrow: 'bg-emerald-100 text-emerald-700',
    accent: 'text-emerald-600',
    icon: 'bg-emerald-50 text-emerald-700',
    panel: 'border-emerald-200 bg-emerald-50/50',
    ring: 'bg-emerald-500',
    border: 'border-emerald-200',
    soft: 'bg-emerald-50',
  },
  'candidate-screening-software': {
    hero: 'from-sky-50 via-white to-blue-50',
    eyebrow: 'bg-sky-100 text-sky-700',
    accent: 'text-sky-600',
    icon: 'bg-sky-50 text-sky-700',
    panel: 'border-sky-200 bg-sky-50/50',
    ring: 'bg-sky-500',
    border: 'border-sky-200',
    soft: 'bg-sky-50',
  },
  'recruiting-automation-software': {
    hero: 'from-indigo-50 via-white to-cyan-50',
    eyebrow: 'bg-indigo-100 text-indigo-700',
    accent: 'text-indigo-600',
    icon: 'bg-indigo-50 text-indigo-700',
    panel: 'border-indigo-200 bg-indigo-50/50',
    ring: 'bg-indigo-500',
    border: 'border-indigo-200',
    soft: 'bg-indigo-50',
  },
  'middle-east-ai-hiring': {
    hero: 'from-teal-50 via-white to-blue-50',
    eyebrow: 'bg-teal-100 text-teal-700',
    accent: 'text-teal-600',
    icon: 'bg-teal-50 text-teal-700',
    panel: 'border-teal-200 bg-teal-50/50',
    ring: 'bg-teal-500',
    border: 'border-teal-200',
    soft: 'bg-teal-50',
  },
  'healthcare-staffing-agencies': {
    hero: 'from-rose-50 via-white to-emerald-50',
    eyebrow: 'bg-rose-100 text-rose-700',
    accent: 'text-rose-600',
    icon: 'bg-rose-50 text-rose-700',
    panel: 'border-rose-200 bg-rose-50/50',
    ring: 'bg-rose-500',
    border: 'border-rose-200',
    soft: 'bg-rose-50',
  },
  'staffing-agencies': {
    hero: 'from-amber-50 via-white to-sky-50',
    eyebrow: 'bg-amber-100 text-amber-800',
    accent: 'text-amber-700',
    icon: 'bg-amber-50 text-amber-800',
    panel: 'border-amber-200 bg-amber-50/50',
    ring: 'bg-amber-500',
    border: 'border-amber-200',
    soft: 'bg-amber-50',
  },
  'high-volume-hiring': {
    hero: 'from-violet-50 via-white to-cyan-50',
    eyebrow: 'bg-violet-100 text-violet-700',
    accent: 'text-violet-600',
    icon: 'bg-violet-50 text-violet-700',
    panel: 'border-violet-200 bg-violet-50/50',
    ring: 'bg-violet-500',
    border: 'border-violet-200',
    soft: 'bg-violet-50',
  },
  'candidate-pre-screening-software': {
    hero: 'from-lime-50 via-white to-cyan-50',
    eyebrow: 'bg-lime-100 text-lime-800',
    accent: 'text-lime-700',
    icon: 'bg-lime-50 text-lime-800',
    panel: 'border-lime-200 bg-lime-50/50',
    ring: 'bg-lime-500',
    border: 'border-lime-200',
    soft: 'bg-lime-50',
  },
  'usa-uk-ai-hiring': {
    hero: 'from-blue-50 via-white to-slate-50',
    eyebrow: 'bg-blue-100 text-blue-700',
    accent: 'text-blue-600',
    icon: 'bg-blue-50 text-blue-700',
    panel: 'border-blue-200 bg-white',
    ring: 'bg-blue-500',
    border: 'border-blue-200',
    soft: 'bg-blue-50',
  },
};

const solutionVariants: Record<string, SolutionVariant> = {
  'ai-recruiting-software': {
    mode: 'command',
    kicker: 'Whole recruiting workflow',
    sectionTitle: 'Bring applicant tracking, screening, and interviews together.',
    sectionCopy:
      'Hiriq AI recruitment software keeps role requirements, applications, qualification answers, and interview reports in one workflow. Recruiters can review the candidate record before choosing the next step.',
    cards: [
      { label: 'Intake', value: 'Role criteria', detail: 'Define must-haves before screening begins.', icon: SlidersHorizontal },
      { label: 'Evidence', value: 'Resume + interview', detail: 'Keep candidate signals tied to the job.', icon: ClipboardCheck },
      { label: 'Decision', value: 'Recruiter review', detail: 'Support human decisions with clearer context.', icon: ShieldCheck },
    ],
    lensTitle: 'What your team can review',
    lensItems: ['Candidate status and role requirements', 'Resume and pre-screening evidence', 'Interview scorecards and transcripts'],
    workflowTitle: 'A complete early-funnel command view',
    workflowCopy: 'Set the role requirements once, then keep the supporting evidence with the applicant as they move through screening, interviews, and review.',
    relatedSlugs: ['ai-ats', 'candidate-screening-software', 'ai-interview-platform'],
    ctaTitle: 'Map your current hiring funnel to Hiriq.',
    guide: { href: '/solutions/usa-uk-ai-hiring', label: 'Recruitment software for US and UK teams' },
    ctaCopy: 'Start with the parts that cost recruiter time first: resume review, early qualification, and handoff notes.',
  },
  'ai-ats': {
    mode: 'pipeline',
    kicker: 'Applicant tracking plus intelligence',
    sectionTitle: 'Keep every applicant and their evidence in one pipeline.',
    sectionCopy:
      'Hiriq applicant tracking software brings applications, candidate stages, resume matches, and screening results together. Small hiring teams can see who needs attention without reconciling separate spreadsheets.',
    cards: [
      { label: 'Capture', value: 'Applications', detail: 'Collect candidate details in a consistent flow.', icon: FileSearch },
      { label: 'Track', value: 'Pipeline stages', detail: 'Keep every applicant tied to status and context.', icon: Layers3 },
      { label: 'Advance', value: 'Qualified review', detail: 'Move stronger candidates with supporting evidence.', icon: Route },
    ],
    lensTitle: 'Applicant tracking essentials',
    lensItems: ['Can it track applicants?', 'Can it reduce manual review?', 'Can hiring managers see useful context?'],
    workflowTitle: 'Pipeline-first applicant tracking',
    workflowCopy: 'Follow each candidate from application to recruiter review, with qualification evidence available at each handoff.',
    relatedSlugs: ['ai-recruiting-software', 'candidate-screening-software', 'recruiting-automation-software'],
    ctaTitle: 'Turn applicant tracking into applicant qualification.',
    guide: { href: '/blog/ai-ats-buyers-checklist', label: 'Evaluate an AI applicant tracking system' },
    ctaCopy: 'Use Hiriq when storing candidates is not enough and the team needs clearer screening evidence.',
  },
  'ai-interview-platform': {
    mode: 'interview',
    kicker: 'Structured interview evidence',
    sectionTitle: 'Get deeper candidate evidence before your next interview.',
    sectionCopy:
      'Hiriq runs live conversational AI interviews for hiring teams. During a 30-minute session, role-specific technical and scenario questions adapt to the candidate\'s answers. Recruiters receive topic scores and the transcript for review.',
    cards: [
      { label: 'Candidate', value: 'Live conversation', detail: 'Answer adaptive questions in a structured interview flow.', icon: Clock3 },
      { label: 'Recruiter', value: 'Scorecard + transcript', detail: 'Review per-turn ratings, subtopic scores, flags, and recommendation.', icon: MessageSquareText },
      { label: 'Manager', value: 'Comparable evidence', detail: 'See technical, behavioral, and scenario signals before live rounds.', icon: ClipboardCheck },
    ],
    lensTitle: 'Evidence for your hiring team',
    lensItems: ['Can it ask follow-up questions?', 'Does it score by subtopic?', 'Can recruiters inspect transcripts and integrity flags?'],
    workflowTitle: 'Live interview flow from role setup to scorecard',
    workflowCopy: 'Review the summary first, then inspect individual answers and topic scores where more detail is needed. Integrity flags provide context for review; recruiters decide how to proceed.',
    relatedSlugs: ['recruiting-automation-software', 'candidate-screening-software', 'ai-resume-screening'],
    ctaTitle: 'Turn first-round interviews into structured evidence.',
    guide: { href: '/blog/live-ai-interviews-vs-one-way-video', label: 'Compare live AI interviews and one-way video interviews' },
    ctaCopy: 'Give recruiters technical depth, behavioral context, transcript access, and integrity flags before deciding who deserves live team time.',
  },
  'ai-resume-screening': {
    mode: 'resume',
    kicker: 'Resume matching and shortlist evidence',
    sectionTitle: 'Find relevant experience in every resume or CV.',
    sectionCopy:
      'Compare documented skills, experience, and projects against your vacancy. Hiriq AI resume and CV screening gives recruiters role-fit evidence and highlights areas to clarify during pre-screening.',
    cards: [
      { label: 'Criteria', value: 'Role fit', detail: 'Match resumes against requirements, not generic keywords.', icon: SearchCheck },
      { label: 'Summary', value: 'Readable context', detail: 'Give recruiters a faster way to understand fit.', icon: FileSearch },
      { label: 'Next step', value: 'Shortlist', detail: 'Move stronger candidates into review or screening.', icon: CheckCircle2 },
    ],
    lensTitle: 'Before you shortlist',
    lensItems: ['Can it reduce manual CV review?', 'Does it explain why a candidate matches?', 'Can humans review the results?'],
    workflowTitle: 'Resume review as a scorecard',
    workflowCopy: 'Define the requirements, review the matching evidence, and check missing context against the original resume before advancing the candidate.',
    relatedSlugs: ['candidate-screening-software', 'ai-ats', 'ai-interview-platform'],
    ctaTitle: 'Make resume review easier to trust.',
    guide: { href: '/blog/ai-resume-screening-vs-keyword-filtering', label: 'Evaluate AI resume screening beyond keyword matches' },
    ctaCopy: 'Use role criteria and readable summaries before deciding who should move forward.',
  },
  'candidate-screening-software': {
    mode: 'screening',
    kicker: 'Candidate qualification',
    sectionTitle: 'Qualify applicants before committing interview time.',
    sectionCopy:
      'Automated candidate screening combines resume evidence with answers about practical role requirements. Hiriq helps recruiters compare applicants against the same criteria and see what still needs a follow-up.',
    cards: [
      { label: 'Volume', value: 'Many applicants', detail: 'Apply the same role criteria across incoming candidates.', icon: UsersRound },
      { label: 'Signal', value: 'Evidence stack', detail: 'Combine profile, resume, and pre-screening context.', icon: Layers3 },
      { label: 'Review', value: 'Cleaner shortlist', detail: 'Give hiring teams fewer, better-informed choices.', icon: ListChecks },
    ],
    lensTitle: 'Shortlist review questions',
    lensItems: ['How do we compare applicants consistently?', 'How do we avoid missing good candidates?', 'How do we prepare hiring managers faster?'],
    workflowTitle: 'Qualification funnel instead of manual sorting',
    workflowCopy: 'Combine documented experience with pre-screening answers, review unresolved requirements, and decide which candidates should enter deeper interviews.',
    relatedSlugs: ['ai-resume-screening', 'ai-interview-platform', 'recruiting-automation-software'],
    ctaTitle: 'Build a shortlist recruiters can actually use.',
    guide: { href: '/compare/best-ai-candidate-screening-tools', label: 'Compare candidate screening tools and evaluation criteria' },
    ctaCopy: 'Combine criteria, candidate context, and structured review before live interviews begin.',
  },
  'recruiting-automation-software': {
    mode: 'automation',
    kicker: 'Repeatable recruiting operations',
    sectionTitle: 'Move applications forward with fewer repetitive tasks.',
    sectionCopy:
      'Recruitment automation connects intake, resume review, practical qualification, and interview reports. Give recruiters the evidence they need to make a decision without repeating the same first-pass work for every applicant.',
    cards: [
      { label: 'Trigger', value: 'New applicant', detail: 'Start review from a structured intake event.', icon: Workflow },
      { label: 'Automate', value: 'Early funnel', detail: 'Reduce repetitive screening and qualification work.', icon: Bot },
      { label: 'Notify', value: 'Recruiter review', detail: 'Send organized evidence to the people deciding next steps.', icon: CheckCircle2 },
    ],
    lensTitle: 'Plan your automation',
    lensItems: ['Which recruiting tasks can be automated?', 'Will recruiters stay in control?', 'Can small teams handle more applicants?'],
    workflowTitle: 'Automation as a controlled sequence',
    workflowCopy: 'Choose which screening steps a role needs, collect the resulting evidence, and give recruiters a clear point to review and decide.',
    relatedSlugs: ['ai-recruiting-software', 'ai-ats', 'candidate-screening-software'],
    ctaTitle: 'Automate the work that keeps repeating.',
    guide: { href: '/blog/high-volume-hiring-automation-playbook', label: 'Plan a high-volume hiring automation workflow' },
    ctaCopy: 'Start with the early-funnel steps that slow recruiters down before judgment is even needed.',
  },
  'middle-east-ai-hiring': {
    mode: 'region',
    kicker: 'Regional and cross-border hiring',
    sectionTitle: 'Run applicant tracking and screening across Gulf hiring teams.',
    sectionCopy:
      'Hiriq supports employers and recruitment agencies in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman. Track applicants, review CVs, confirm role requirements, and assess interview evidence in a shared web-based workflow.',
    cards: [
      { label: 'Markets', value: 'UAE, Qatar, KSA', detail: 'Support teams coordinating across regional hiring markets.', icon: MapPin },
      { label: 'Timing', value: 'Time zones', detail: 'Reduce scheduling friction with automated early screens.', icon: Clock3 },
      { label: 'Review', value: 'Consistent evidence', detail: 'Use the same criteria across local and remote candidates.', icon: Globe2 },
    ],
    lensTitle: 'Coordinate regional hiring',
    lensItems: ['Can it support distributed hiring?', 'Can regional teams review candidates consistently?', 'Can it work across time zones?'],
    workflowTitle: 'Regional hiring playbook',
    workflowCopy: 'Record the role location, work setup, availability, and required experience before screening. Share the candidate evidence with the responsible recruiter across offices and time zones.',
    relatedSlugs: ['ai-ats', 'ai-resume-screening', 'ai-interview-platform'],
    guide: { href: '/solutions/usa-uk-ai-hiring', label: 'Explore recruiting workflows for US and UK teams' },
    ctaTitle: 'Coordinate regional hiring with clearer evidence.',
    ctaCopy: 'Use Hiriq to structure early screening before candidates and teams move into live conversations.',
  },
  'healthcare-staffing-agencies': {
    mode: 'resume',
    kicker: 'Healthcare recruiting evidence',
    sectionTitle: 'Bring clinical role requirements into candidate review.',
    sectionCopy:
      'Healthcare recruiters can review experience, availability, and candidate-reported qualifications before a longer interview. Role-specific scenarios then help the hiring team inspect clinical reasoning alongside the transcript.',
    cards: [
      { label: 'Role fit', value: 'Clinical criteria', detail: 'Compare resumes against role requirements, experience, and availability signals.', icon: ClipboardCheck },
      { label: 'Screening', value: 'Early qualification', detail: 'Collect practical candidate context before longer recruiter conversations.', icon: SearchCheck },
      { label: 'Interview', value: 'Scenario evidence', detail: 'Use deeper AI interviews for role-specific technical and communication review.', icon: MessageSquareText },
    ],
    lensTitle: 'Healthcare screening essentials',
    lensItems: ['Can it support nurse staffing?', 'Can recruiters inspect the evidence?', 'Does it avoid replacing credentialing systems?'],
    workflowTitle: 'Healthcare screening from role requirement to reviewed shortlist',
    workflowCopy: 'Collect practical qualification answers first, then use deeper interview evidence for recruiter review. Complete formal credential verification through your established process.',
    relatedSlugs: ['candidate-pre-screening-software', 'ai-interview-platform', 'ai-resume-screening'],
    ctaTitle: 'Screen healthcare candidates with clearer role-fit evidence.',
    guide: { href: '/blog/healthcare-candidate-pre-screening-checklist', label: 'Review the healthcare pre-screening checklist' },
    ctaCopy: 'Use Hiriq before facility or hiring-manager review to organize resumes, qualification context, interview transcripts, and recruiter notes.',
  },
  'staffing-agencies': {
    mode: 'pipeline',
    kicker: 'Agency recruiting workflow',
    sectionTitle: 'Prepare candidate submissions your recruiters can explain.',
    sectionCopy:
      'An ATS for staffing agencies needs to keep each client role and its candidate evidence organized. Hiriq connects applicant tracking, qualification, and interviews so recruiters can review the record before preparing a client submission.',
    cards: [
      { label: 'Client role', value: 'Requirement intake', detail: 'Turn client requirements into screening criteria before applicants are reviewed.', icon: SlidersHorizontal },
      { label: 'Candidate', value: 'Evidence profile', detail: 'Attach resume, pre-screening, and interview context to each shortlist choice.', icon: UsersRound },
      { label: 'Submission', value: 'Recruiter review', detail: 'Support client-facing recommendations without automating away judgment.', icon: ShieldCheck },
    ],
    lensTitle: 'Before sending a submission',
    lensItems: ['Can it qualify applicants across client roles?', 'Can it improve submission quality?', 'Can recruiters review before sending?'],
    workflowTitle: 'Agency pipeline from client requirement to reviewed candidate evidence',
    workflowCopy: 'Translate the client brief into criteria, qualify applicants against that role, and inspect the evidence before recommending a candidate.',
    relatedSlugs: ['high-volume-hiring', 'candidate-screening-software', 'recruiting-automation-software'],
    ctaTitle: 'Give recruiters better evidence before client submissions.',
    ctaCopy: 'Use Hiriq to standardize screening while keeping the agency relationship and final recommendation human-led.',
  },
  'high-volume-hiring': {
    mode: 'screening',
    kicker: 'Applicant volume control',
    sectionTitle: 'Keep applicant volume from becoming a screening backlog.',
    sectionCopy:
      'Apply consistent requirements across larger applicant pools, collect practical qualification answers, and prioritize the candidates who need recruiter attention. Keep criteria specific to each vacancy.',
    cards: [
      { label: 'Volume', value: 'Large applicant pools', detail: 'Apply consistent role criteria across many candidates.', icon: UsersRound },
      { label: 'Routing', value: 'Next-best step', detail: 'Send stronger candidates to pre-screening, AI interviews, or recruiter review.', icon: Route },
      { label: 'Review', value: 'Shortlist evidence', detail: 'Give teams context they can inspect before making decisions.', icon: ListChecks },
    ],
    lensTitle: 'Keep screening consistent',
    lensItems: ['Can it reduce repetitive screening?', 'Can it keep criteria consistent?', 'Can humans inspect the shortlist?'],
    workflowTitle: 'High-volume screening without turning every role into the same filter',
    workflowCopy: 'Review candidates against the same role requirements, inspect uncertain results, and advance applicants with evidence that supports the next stage.',
    relatedSlugs: ['candidate-screening-software', 'candidate-pre-screening-software', 'ai-resume-screening'],
    ctaTitle: 'Move from applicant overload to a recruiter-ready shortlist.',
    ctaCopy: 'Use Hiriq to focus live recruiter time on candidates with stronger role-fit evidence.',
  },
  'candidate-pre-screening-software': {
    mode: 'automation',
    kicker: 'Before the full interview',
    sectionTitle: 'Confirm practical fit before a full interview.',
    sectionCopy:
      'Pre-screening is intentionally narrower than Hiriq AI Interviews. It helps recruiters confirm practical fit early so the longer live AI interview can focus on technical, behavioral, and scenario evidence.',
    cards: [
      { label: 'Questions', value: 'Practical fit', detail: 'Ask about availability, requirements, work setup, and baseline experience.', icon: ClipboardCheck },
      { label: 'Routing', value: 'Qualified next step', detail: 'Decide who should move into AI interviews or recruiter conversations.', icon: Route },
      { label: 'Context', value: 'Compact summary', detail: 'Give recruiters a short evidence snapshot before spending live time.', icon: FileSearch },
    ],
    lensTitle: 'Choose the right screening stage',
    lensItems: ['How is this different from AI interviews?', 'Can it reduce unqualified calls?', 'Does the recruiter still decide?'],
    workflowTitle: 'Pre-screening as the qualification layer before deeper interviews',
    workflowCopy: 'Use pre-screening to clarify availability and baseline requirements. Reserve the live AI interview for deeper technical and scenario questions once practical fit is understood.',
    relatedSlugs: ['ai-interview-platform', 'candidate-screening-software', 'recruiting-automation-software'],
    ctaTitle: 'Qualify practical fit before spending interview time.',
    ctaCopy: 'Use pre-screening for availability and baseline requirements, then reserve AI interviews for deeper role evidence.',
  },
  'usa-uk-ai-hiring': {
    mode: 'markets',
    kicker: 'USA and UK hiring workflows',
    sectionTitle: 'Connect US and UK recruiting teams around candidate evidence.',
    sectionCopy:
      'Use the same applicant tracking workflow for US resumes and UK CVs, with requirements tailored to each vacancy. Recruiters can inspect screening answers and interview reports before arranging the next conversation.',
    cards: [
      { label: 'USA', value: 'Fast response', detail: 'Keep applicants moving before live interviews are booked.', icon: Gauge },
      { label: 'UK', value: 'Structured review', detail: 'Give teams comparable candidate evidence.', icon: Building2 },
      { label: 'Remote', value: 'Distributed hiring', detail: 'Screen candidates across locations and schedules.', icon: Globe2 },
    ],
    lensTitle: 'Hiring across the US and UK',
    lensItems: ['Can it help competitive roles move faster?', 'Can US and UK teams share the same workflow?', 'Can remote candidates be screened earlier?'],
    workflowTitle: 'Two-market hiring view',
    workflowCopy: 'Confirm role location, work setup, and availability during pre-screening, then share interview evidence across US and UK teams for review.',
    relatedSlugs: ['middle-east-ai-hiring', 'ai-ats', 'recruiting-automation-software'],
    ctaTitle: 'Give USA and UK recruiters cleaner early-stage evidence.',
    guide: { href: '/blog/ai-ats-buyers-checklist', label: 'Compare applicant tracking and screening requirements' },
    ctaCopy: 'Use structured screening and interview context before committing time to live interview loops.',
  },
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
          height: 630,
          alt: 'Hiriq recruiter dashboard and candidate pipeline interface',
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

function HeroVisual({
  mode,
  theme,
  capabilities,
  workflow,
}: {
  mode: VariantMode;
  theme: SolutionTheme;
  capabilities: string[];
  workflow: string[];
}) {
  if (mode === 'pipeline') {
    return (
      <div className={`fade-in-up animation-delay-200 border p-5 shadow-xl ${theme.panel} rounded-lg`}>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className={`text-sm font-bold uppercase ${theme.accent}`}>Live pipeline</p>
            <h2 className="mt-1 text-xl font-bold text-slate-900">Applicant stages</h2>
          </div>
          <Layers3 className={`h-6 w-6 ${theme.accent}`} />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {['Applied', 'Screened', 'Review'].map((stage, index) => (
            <div key={stage} className="min-h-44 rounded-lg border border-white/80 bg-white p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-800">{stage}</span>
                <span className={`h-2.5 w-2.5 rounded-full ${theme.ring} animate-soft-pulse`} />
              </div>
              {[0, 1, 2].map((item) => (
                <div key={item} className="mb-3 rounded-md border border-slate-100 bg-slate-50 p-3">
                  <div className="h-2 w-20 rounded-full bg-slate-300" />
                  <div className={`mt-2 h-1.5 rounded-full ${item === 0 ? 'w-24' : item === 1 ? 'w-16' : 'w-28'} ${theme.ring} opacity-50`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (mode === 'interview') {
    return (
      <div className={`fade-in-up animation-delay-200 border p-6 shadow-xl ${theme.panel} rounded-lg`}>
        <div className="mb-6 flex items-center gap-3">
          <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${theme.icon}`}>
            <MessageSquareText className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Interview evidence</h2>
            <p className="text-sm text-slate-600">Questions, answers, and review context.</p>
          </div>
        </div>
        <div className="space-y-4">
          {['Role-specific question', 'Candidate response', 'Recruiter summary'].map((item, index) => (
            <div key={item} className={`max-w-[92%] rounded-lg border bg-white p-4 ${index === 1 ? 'ml-auto border-cyan-200' : 'border-slate-200'}`}>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-800">{item}</span>
                <span className="text-xs font-semibold text-slate-500">0{index + 1}</span>
              </div>
              <div className="flex items-end gap-1.5" aria-hidden="true">
                {[18, 28, 14, 34, 22, 30, 16, 26].map((height, barIndex) => (
                  <span
                    key={`${height}-${barIndex}`}
                    className={`w-full rounded-full ${theme.ring} opacity-60 animate-sound-bar`}
                    style={{ height: `${height}px`, animationDelay: `${barIndex * 80}ms` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (mode === 'resume') {
    return (
      <div className={`fade-in-up animation-delay-200 border p-6 shadow-xl ${theme.panel} rounded-lg`}>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className={`text-sm font-bold uppercase ${theme.accent}`}>Resume fit review</p>
            <h2 className="mt-1 text-xl font-bold text-slate-900">Criteria scorecard</h2>
          </div>
          <FileSearch className={`h-7 w-7 ${theme.accent}`} />
        </div>
        <div className="space-y-4">
          {[
            ['Required skills', 'w-[88%]'],
            ['Relevant experience', 'w-[74%]'],
            ['Location or work setup', 'w-[62%]'],
            ['Recruiter review needed', 'w-[46%]'],
          ].map(([label, width], index) => (
            <div key={label} className="rounded-lg border border-white/80 bg-white p-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-800">{label}</span>
                <span className="text-slate-500">Signal {index + 1}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100">
                <div className={`h-full rounded-full ${theme.ring} ${width} origin-left animate-progress-fill`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (mode === 'automation') {
    return (
      <div className={`fade-in-up animation-delay-200 border p-6 shadow-xl ${theme.panel} rounded-lg`}>
        <div className="mb-6 flex items-center gap-3">
          <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${theme.icon}`}>
            <Workflow className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Automation route</h2>
            <p className="text-sm text-slate-600">Repeatable steps with recruiter control.</p>
          </div>
        </div>
        <div className="relative space-y-4">
          <div className={`absolute bottom-8 left-5 top-8 w-0.5 ${theme.ring} opacity-30`} aria-hidden="true" />
          {workflow.slice(0, 4).map((step, index) => (
            <div key={step} className="relative flex gap-4 rounded-lg border border-white/80 bg-white p-4">
              <span className={`relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white ${theme.ring}`}>
                {index + 1}
              </span>
              <p className="text-sm font-medium leading-6 text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (mode === 'region' || mode === 'markets') {
    const labels = mode === 'region' ? ['UAE', 'Saudi Arabia', 'Qatar', 'Gulf teams'] : ['USA', 'UK', 'Remote', 'Global'];
    return (
      <div className={`fade-in-up animation-delay-200 border p-6 shadow-xl ${theme.panel} rounded-lg`}>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className={`text-sm font-bold uppercase ${theme.accent}`}>Market coverage</p>
            <h2 className="mt-1 text-xl font-bold text-slate-900">Hiring coordination view</h2>
          </div>
          <Globe2 className={`h-7 w-7 ${theme.accent}`} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {labels.map((label, index) => (
            <div key={label} className="rounded-lg border border-white/80 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-bold text-slate-900">{label}</span>
                <MapPin className={`h-4 w-4 ${theme.accent}`} />
              </div>
              <div className="h-2 rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${theme.ring} origin-left animate-progress-fill`}
                  style={{ width: `${48 + index * 12}%`, animationDelay: `${index * 120}ms` }}
                />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase text-slate-500">Screen before scheduling</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (mode === 'screening') {
    return (
      <div className={`fade-in-up animation-delay-200 border p-6 shadow-xl ${theme.panel} rounded-lg`}>
        <div className="mb-6 flex items-center gap-3">
          <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${theme.icon}`}>
            <UsersRound className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Screening funnel</h2>
            <p className="text-sm text-slate-600">From applicant pool to recruiter-ready shortlist.</p>
          </div>
        </div>
        <div className="space-y-3">
          {['Applicant pool', 'Criteria matched', 'Evidence reviewed', 'Shortlist'].map((label, index) => (
            <div key={label} className="flex items-center gap-3 rounded-lg border border-white/80 bg-white p-4">
              <div
                className={`h-10 rounded-lg ${theme.ring} ${index === 0 ? 'opacity-30' : index === 1 ? 'opacity-50' : index === 2 ? 'opacity-70' : 'opacity-100'}`}
                style={{ width: `${132 - index * 22}px` }}
              />
              <span className="text-sm font-bold text-slate-800">{label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`fade-in-up animation-delay-200 border p-6 shadow-xl ${theme.panel} rounded-lg`}>
      <div className="mb-5 flex items-center gap-3">
        <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${theme.icon}`}>
          <Globe2 className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">Your recruiting workflow</h2>
          <p className="text-sm text-slate-600">Keep the role, candidate evidence, and next step together.</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {capabilities.map((term) => (
          <span key={term} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700">
            {term}
          </span>
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {workflow.slice(0, 3).map((step, index) => (
          <div key={step} className="rounded-lg border border-white/80 bg-white/80 p-4">
            <span className={`mb-3 flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white ${theme.ring}`}>
              {index + 1}
            </span>
            <p className="text-sm leading-6 text-slate-700">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function InsightSection({ variant, theme }: { variant: SolutionVariant; theme: SolutionTheme }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="sticky top-24">
          <p className={`mb-3 text-sm font-bold uppercase tracking-wide ${theme.accent}`}>{variant.kicker}</p>
          <h2 className="text-3xl font-bold text-slate-900">{variant.sectionTitle}</h2>
          <p className="mt-5 leading-7 text-slate-600">{variant.sectionCopy}</p>
        </div>
        <div className={`grid gap-4 ${variant.mode === 'pipeline' || variant.mode === 'region' || variant.mode === 'markets' ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
          {variant.cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className={`group relative overflow-hidden rounded-lg border bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${theme.border}`}
              >
                <div className={`absolute left-0 top-0 h-1 ${theme.ring} animate-progress-fill`} style={{ width: `${52 + index * 18}%` }} aria-hidden="true" />
                <div className="mb-5 flex items-center justify-between">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${theme.icon}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold uppercase text-slate-400">{card.label}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{card.value}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.detail}</p>
              </div>
            );
          })}
          <div className={`rounded-lg border p-5 ${theme.panel} ${variant.mode === 'pipeline' || variant.mode === 'region' || variant.mode === 'markets' ? 'md:col-span-3' : 'md:col-span-2'}`}>
            <div className="flex items-start gap-3">
              <Sparkles className={`mt-1 h-5 w-5 flex-shrink-0 ${theme.accent}`} />
              <div>
                <h3 className="font-bold text-slate-900">{variant.lensTitle}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {variant.lensItems.map((item) => (
                    <span key={item} className="rounded-full border border-white/80 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowSection({
  solution,
  theme,
  variant,
}: {
  solution: NonNullable<ReturnType<typeof getSolution>>;
  theme: SolutionTheme;
  variant: SolutionVariant;
}) {
  if (variant.mode === 'pipeline') {
    return (
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className={`mb-3 text-sm font-bold uppercase tracking-wide ${theme.accent}`}>Recruiting workflow</p>
            <h2 className="text-3xl font-bold text-slate-900">{variant.workflowTitle}</h2>
            <p className="mt-4 leading-7 text-slate-600">{variant.workflowCopy}</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {solution.workflow.map((step, index) => (
              <div key={step} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className={`mb-4 h-1 rounded-full ${theme.ring} origin-left animate-progress-fill`} style={{ animationDelay: `${index * 100}ms` }} />
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-sm font-medium leading-6 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant.mode === 'interview') {
    return (
      <section className="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-cyan-300">Recruiting workflow</p>
            <h2 className="text-3xl font-bold">{variant.workflowTitle}</h2>
            <p className="mt-4 leading-7 text-slate-300">{variant.workflowCopy}</p>
          </div>
          <div className="space-y-4">
            {solution.workflow.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-lg border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-400 text-sm font-bold text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7 text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${variant.mode === 'resume' || variant.mode === 'screening' ? 'bg-white' : 'bg-slate-50'} px-4 py-20 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className={`mb-3 text-sm font-bold uppercase tracking-wide ${theme.accent}`}>Recruiting workflow</p>
          <h2 className="text-3xl font-bold text-slate-900">{variant.workflowTitle}</h2>
          <p className="mt-4 leading-7 text-slate-600">{variant.workflowCopy}</p>
        </div>
        <div className={`mt-10 grid gap-4 ${variant.mode === 'region' || variant.mode === 'markets' ? 'md:grid-cols-2 lg:grid-cols-5' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
          {solution.workflow.map((step, index) => (
            <div key={step} className={`rounded-lg border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${theme.border}`}>
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white ${theme.ring}`}>
                {index + 1}
              </div>
              <p className="text-sm font-medium leading-6 text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) notFound();

  const pageUrl = `${siteUrl}/solutions/${solution.slug}`;
  const theme = solutionThemes[solution.slug] || solutionThemes['ai-recruiting-software'];
  const variant = solutionVariants[solution.slug] || solutionVariants['ai-recruiting-software'];
  const relatedSolutions = variant.relatedSlugs
    .map((relatedSlug) => getSolution(relatedSlug))
    .filter((item): item is NonNullable<ReturnType<typeof getSolution>> => Boolean(item));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: solution.metaTitle,
        description: solution.metaDescription,
        keywords: [solution.primaryKeyword, ...solution.searchTerms].join(', '),
        isPartOf: { '@id': `${siteUrl}/#website` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${siteUrl}/123.png`,
        },
        about: {
          '@type': 'SoftwareApplication',
          '@id': `${siteUrl}/#software`,
          name: 'Hiriq',
        },
        inLanguage: 'en',
        relatedLink: [
          ...relatedSolutions.map((item) => `${siteUrl}/solutions/${item.slug}`),
          ...(variant.guide ? [`${siteUrl}${variant.guide.href}`] : []),
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Solutions',
            item: `${siteUrl}/solutions`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: solution.shortTitle,
            item: pageUrl,
          },
        ],
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
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <section className={`relative overflow-hidden bg-gradient-to-br ${theme.hero} px-4 pb-20 pt-32 sm:px-6 lg:px-8`}>
          <div className={`absolute right-8 top-48 hidden h-2 w-40 origin-left rounded-full ${theme.ring} opacity-70 animate-progress-fill lg:block`} aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="fade-in-up">
              <div className={`mb-6 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${theme.eyebrow}`}>
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
                  Contact Hiriq
                </Link>
              </div>
            </div>

            <HeroVisual mode={variant.mode} theme={theme} capabilities={variant.cards.map((card) => card.value)} workflow={solution.workflow} />
          </div>
        </section>

        <InsightSection variant={variant} theme={theme} />

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className={`mb-3 text-sm font-bold uppercase tracking-wide ${theme.accent}`}>Hiring challenges</p>
              <h2 className="text-3xl font-bold text-slate-900">
                Specific pain points for {solution.shortTitle.toLowerCase()}.
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {solution.problems.map((problem, index) => (
                  <div key={problem} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <span className={`mb-4 flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white ${theme.ring}`}>
                      {index + 1}
                    </span>
                    <p className="leading-7 text-slate-700">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`rounded-lg border p-6 ${theme.panel}`}>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">Outcomes</p>
              <h2 className="text-2xl font-bold text-slate-900">What should improve in the workflow</h2>
              <div className="mt-6 space-y-4">
                {solution.outcomes.map((outcome) => (
                  <div key={outcome} className="flex gap-3 rounded-lg border border-white/80 bg-white p-4">
                    <CheckCircle2 className={`mt-1 h-5 w-5 flex-shrink-0 ${theme.accent}`} />
                    <p className="text-sm leading-6 text-slate-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <WorkflowSection solution={solution} theme={theme} variant={variant} />

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg ${theme.icon}`}>
                <ClipboardCheck className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Answers about candidate evidence, workflow setup, and recruiter control.
              </p>
            </div>
            <FAQAccordion items={solution.faq} />
          </div>
        </section>

        <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className={`mb-3 text-sm font-bold uppercase tracking-wide ${theme.accent}`}>Explore Hiriq</p>
              <h2 className="text-3xl font-bold text-slate-900">
                Find the next step in your hiring workflow.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {relatedSolutions.map((item) => (
                <Link
                  key={item.slug}
                  href={`/solutions/${item.slug}`}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-50"
                >
                  <h3 className="font-bold text-slate-900">{item.shortTitle}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.metaDescription}</p>
                </Link>
              ))}
            </div>
            {variant.guide && (
              <Link
                href={variant.guide.href}
                className={`mt-6 inline-flex items-center gap-2 font-semibold underline underline-offset-4 ${theme.accent}`}
              >
                {variant.guide.label}
                <ArrowRight className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              </Link>
            )}
          </div>
        </section>

        <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">{variant.ctaTitle}</h2>
              <p className="mt-3 max-w-2xl text-slate-300">{variant.ctaCopy}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 font-semibold text-slate-900 transition hover:bg-cyan-50"
              >
                Book a demo
              </a>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 px-6 font-semibold text-white transition hover:bg-white/10"
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
