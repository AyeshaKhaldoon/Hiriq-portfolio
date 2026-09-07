import { vendors, type Vendor } from './vendors';

export type Comparison = {
  slug: string;
  shortTitle: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  primaryKeyword: string;
  searchTerms: string[];
  intro: string;
  context: string[];
  criteria: { title: string; copy: string }[];
  vendorIds: string[];
  hiriqFit: string;
  faq: { q: string; a: string }[];
  relatedSlugs: string[];
  internalLinks: { href: string; label: string }[];
};

export const comparisonsUpdated = '2026-08-29';
export const comparisonsUpdatedDisplay = 'August 29, 2026';

const sharedCriteria = {
  evaluates: {
    title: 'What the tool actually evaluates',
    copy: 'Some platforms score the candidate, some only record the conversation, and some evaluate the interviewer. That single distinction decides whether recruiter review time goes down or simply moves.',
  },
  stage: {
    title: 'Which funnel stage it covers',
    copy: 'An interview tool that starts after shortlisting will not reduce resume review load. A screening workflow that starts at application will.',
  },
  volume: {
    title: 'Applicant volume it is designed for',
    copy: 'Tooling built for a hundred applicants a month behaves differently at ten thousand. Check where the vendor concentrates its own case studies.',
  },
  evidence: {
    title: 'Evidence a recruiter receives',
    copy: 'Transcripts, per-answer scores, and criteria mapping let a recruiter defend a decision. A single overall percentage does not.',
  },
  oversight: {
    title: 'Human oversight and auditability',
    copy: 'Ask whether a person can review the reasoning behind every advance or reject, and whether your team sets the criteria rather than inheriting a vendor model.',
  },
  effort: {
    title: 'Setup effort and time to value',
    copy: 'Enterprise assessment suites often need validation projects and procurement cycles. Smaller teams usually need something live within a week.',
  },
  integration: {
    title: 'Fit with your existing ATS',
    copy: 'Decide whether you want a system of record replaced or a screening layer that hands qualified candidates to the ATS you already run.',
  },
  candidate: {
    title: 'Candidate experience and drop-off',
    copy: 'Every extra step costs completions. In candidate-short markets, a long assessment battery can cost more applicants than it filters.',
  },
};

export const comparisons: Comparison[] = [
  {
    slug: 'best-ai-interview-software',
    shortTitle: 'Best AI Interview Software',
    navLabel: 'Best AI interview software',
    metaTitle: 'Best AI Interview Software in 2026 Compared | Hiriq',
    metaDescription:
      'A neutral comparison of AI interview software in 2026, sorted by what each platform actually evaluates, which funnel stage it covers, and who it suits.',
    h1: 'Best AI interview software in 2026, compared by what each one actually evaluates',
    eyebrow: 'Category comparison',
    primaryKeyword: 'best AI interview software',
    searchTerms: [
      'best AI interview software',
      'AI interview software',
      'AI interview tools',
      'automated interview software',
      'AI interviewer platform',
    ],
    intro:
      'The phrase "AI interview software" covers three genuinely different products: tools that score the candidate, tools that record and summarise the conversation, and tools that coach the interviewer. Buying the wrong one is the most common reason an AI interview rollout does not reduce recruiter workload.',
    context: [
      'Sort candidates for the shortlist and you need a platform that evaluates answers against criteria you set.',
      'Improve the interviews your own team runs and you need interview intelligence, not an AI interviewer.',
      'Remove scheduling friction only, and asynchronous video is often enough and cheaper.',
    ],
    criteria: [sharedCriteria.evaluates, sharedCriteria.stage, sharedCriteria.evidence, sharedCriteria.oversight, sharedCriteria.integration],
    vendorIds: ['hiriq', 'hirevue', 'sapia', 'heymilo', 'sparkHire', 'willo', 'hireflix', 'brighthire', 'metaview'],
    hiriqFit:
      'Hiriq sits in the first group. The AI runs a live, adaptive interview, asks follow-up questions when an answer leaves a criterion unproven, and returns a transcript with per-answer scoring mapped to the requirements the recruiter defined before applications opened. The recruiter still decides who advances.',
    faq: [
      {
        q: 'What is the difference between AI interview software and interview intelligence?',
        a: 'AI interview software conducts the interview itself and evaluates the candidate. Interview intelligence tools such as BrightHire and Metaview sit on interviews your own team runs and improve the record and consistency of those conversations. Only the first category removes first-round interviewer time.',
      },
      {
        q: 'Does AI interview software replace recruiters?',
        a: 'It should not, and responsible platforms do not claim to. The value is in removing repetitive first-round qualification so recruiters spend their time on judgement, relationships, and closing. Final decisions stay with people.',
      },
      {
        q: 'Is asynchronous video interviewing the same as AI interviewing?',
        a: 'No. Asynchronous video tools record candidate answers to fixed questions and a human still reviews every submission. AI interviewing platforms conduct an adaptive conversation and return scored evidence, so review time does not scale linearly with applicant volume.',
      },
      {
        q: 'How should I evaluate AI interview software for bias risk?',
        a: 'Ask which criteria the model scores against, whether your team defines them, whether every score is traceable to a specific answer, and whether a recruiter reviews before any rejection. Prefer platforms that show reasoning over platforms that return a single unexplained fit percentage.',
      },
    ],
    relatedSlugs: ['best-ai-candidate-screening-tools', 'hirevue-alternatives', 'sapia-ai-alternatives'],
    internalLinks: [
      { href: '/automated-interviews', label: 'How Hiriq AI interviews work' },
      { href: '/solutions/ai-interview-platform', label: 'AI interview platform' },
      { href: '/pricing', label: 'Hiriq pricing' },
    ],
  },
  {
    slug: 'hirevue-alternatives',
    shortTitle: 'HireVue Alternatives',
    navLabel: 'HireVue alternatives',
    metaTitle: 'HireVue Alternatives in 2026: 8 Options Compared | Hiriq',
    metaDescription:
      'Compare eight HireVue alternatives by what each platform evaluates, which funnel stage it covers, and the team size it suits.',
    h1: 'HireVue alternatives in 2026',
    eyebrow: 'Alternatives',
    primaryKeyword: 'HireVue alternatives',
    searchTerms: [
      'HireVue alternatives',
      'HireVue competitors',
      'alternatives to HireVue',
      'HireVue vs',
      'video interview software alternatives',
    ],
    intro:
      'HireVue is one of the longest-established platforms in structured video interviewing and assessment, and it is built for enterprise scale. Teams usually start looking at alternatives for one of three reasons: the platform is heavier than their hiring volume justifies, they want the screening stage covered rather than only the interview, or they want a shorter path from decision to live.',
    context: [
      'If the requirement is enterprise assessment science with formal validation, few alternatives match that depth.',
      'If the requirement is reducing first-round recruiter load, look at platforms that score answers against your own criteria.',
      'If the requirement is simply removing scheduling friction, asynchronous video tools cost considerably less.',
    ],
    criteria: [sharedCriteria.evaluates, sharedCriteria.effort, sharedCriteria.volume, sharedCriteria.evidence, sharedCriteria.candidate],
    vendorIds: ['hiriq', 'sapia', 'heymilo', 'sparkHire', 'willo', 'hireflix', 'harver', 'brighthire'],
    hiriqFit:
      'Hiriq is worth a look if the reason for leaving HireVue is that recruiters are still doing qualification manually. Hiriq covers criteria setup, resume matching, and a live AI interview in one flow, and returns transcripts with per-answer scoring rather than an assessment report that needs interpretation.',
    faq: [
      {
        q: 'Why do companies look for HireVue alternatives?',
        a: 'The most common reasons are platform weight relative to hiring volume, a preference for covering resume screening and qualification rather than the interview alone, and wanting a faster implementation than an enterprise assessment rollout typically requires.',
      },
      {
        q: 'What is the closest alternative to HireVue for structured interviewing?',
        a: 'It depends on what you want scored. Sapia.ai keeps structured evaluation but moves it to text-based chat. Harver keeps the assessment-led approach. Hiriq and HeyMilo run AI-led conversations and return scored evidence. Spark Hire, Willo, and Hireflix keep the video format but leave scoring to humans.',
      },
      {
        q: 'Are there HireVue alternatives for small and mid-sized teams?',
        a: 'Yes. Willo, Hireflix, and Spark Hire are commonly chosen by smaller teams for asynchronous video, and Hiriq is built for teams and agencies that want the qualification step handled without an enterprise implementation.',
      },
      {
        q: 'Do I need to replace my ATS to move away from HireVue?',
        a: 'No. Most alternatives in this category are screening and interviewing layers that pass qualified candidates onward, so your system of record can stay in place.',
      },
    ],
    relatedSlugs: ['best-ai-interview-software', 'paradox-ai-alternatives', 'best-ai-candidate-screening-tools'],
    internalLinks: [
      { href: '/solutions/ai-interview-platform', label: 'AI interview platform' },
      { href: '/automated-interviews', label: 'Automated AI interviews' },
      { href: '/solutions/ai-recruiting-software', label: 'AI recruiting software' },
    ],
  },
  {
    slug: 'paradox-ai-alternatives',
    shortTitle: 'Paradox AI Alternatives',
    navLabel: 'Paradox alternatives',
    metaTitle: 'Paradox AI (Olivia) Alternatives in 2026 Compared | Hiriq',
    metaDescription:
      'Compare Paradox AI and Olivia alternatives for high-volume hiring, including platforms that evaluate answers rather than only capture and schedule applicants.',
    h1: 'Paradox AI alternatives in 2026',
    eyebrow: 'Alternatives',
    primaryKeyword: 'Paradox AI alternatives',
    searchTerms: [
      'Paradox AI alternatives',
      'Olivia AI alternatives',
      'Paradox competitors',
      'conversational hiring assistant alternatives',
      'high volume hiring software alternatives',
    ],
    intro:
      'Paradox built its reputation on conversational hiring for hourly roles: capture the applicant in chat, ask knockout questions, and book the interview without a recruiter touching the calendar. Teams look for alternatives when knockout questions and scheduling are not the bottleneck, and the real cost is the interviews that follow.',
    context: [
      'Paradox is strongest where the constraint is applicant capture and scheduling throughput.',
      'If unqualified candidates are still reaching live interviews, the gap is evaluation, not scheduling.',
      'Some teams also want a platform that works for salaried and professional roles, not only hourly.',
    ],
    criteria: [sharedCriteria.evaluates, sharedCriteria.stage, sharedCriteria.volume, sharedCriteria.evidence, sharedCriteria.integration],
    vendorIds: ['hiriq', 'heymilo', 'sapia', 'hirevue', 'harver', 'workable', 'sparkHire'],
    hiriqFit:
      'Hiriq is the alternative to consider when the scheduling problem is solved but recruiters still discover in the first live call that a candidate was never qualified. The AI interview covers that qualification step and hands over a transcript, per-answer scores, and criteria coverage before anyone books time.',
    faq: [
      {
        q: 'What does Paradox AI do best?',
        a: 'Paradox is strongest at conversational applicant capture and automated scheduling for high-volume hourly hiring, particularly in retail, hospitality, and logistics where speed to first contact drives conversion.',
      },
      {
        q: 'What is the main limitation teams cite with conversational screening assistants?',
        a: 'Knockout questions confirm eligibility and availability, but they do not evaluate the quality of an answer. Candidates who pass the questions can still be unqualified, and that only surfaces in a live interview.',
      },
      {
        q: 'Is there a Paradox alternative for professional and salaried roles?',
        a: 'Yes. Platforms built around evaluation rather than throughput, including Hiriq, HireVue, and Sapia.ai, are more commonly used for salaried and professional hiring where depth of answer matters more than time to first contact.',
      },
      {
        q: 'Can I use an AI interview platform alongside Paradox?',
        a: 'In many stacks, yes. Applicant capture and scheduling can stay where they are while a screening layer handles evaluation, provided both hand off cleanly to your ATS.',
      },
    ],
    relatedSlugs: ['best-ai-candidate-screening-tools', 'hirevue-alternatives', 'best-ai-recruiting-software-for-staffing-agencies'],
    internalLinks: [
      { href: '/solutions/high-volume-hiring', label: 'High-volume hiring software' },
      { href: '/solutions/candidate-pre-screening-software', label: 'Candidate pre-screening software' },
      { href: '/solutions/recruiting-automation-software', label: 'Recruiting automation software' },
    ],
  },
  {
    slug: 'sapia-ai-alternatives',
    shortTitle: 'Sapia.ai Alternatives',
    navLabel: 'Sapia.ai alternatives',
    metaTitle: 'Sapia.ai Alternatives in 2026 Compared | Hiriq',
    metaDescription:
      'Compare Sapia.ai alternatives for structured first-round screening, including AI interview platforms that assess spoken answers while keeping scoring reviewable.',
    h1: 'Sapia.ai alternatives in 2026',
    eyebrow: 'Alternatives',
    primaryKeyword: 'Sapia.ai alternatives',
    searchTerms: [
      'Sapia.ai alternatives',
      'Sapia competitors',
      'chat interview software alternatives',
      'blind screening software',
      'structured interview software',
    ],
    intro:
      'Sapia.ai takes a distinctive position: a text-based, untimed chat interview that removes video and voice from the first round to limit first-impression bias. Teams look for alternatives when a written-only first round does not give enough signal, particularly for customer-facing, clinical, and sales roles where spoken communication is part of the job.',
    context: [
      'A blind text round is a deliberate trade: less bias surface, less signal on spoken communication.',
      'If communication quality is a genuine job requirement, evaluating it in round one is defensible and useful.',
      'The bias question does not disappear with format. It moves to the criteria, so ask who defines them.',
    ],
    criteria: [sharedCriteria.evaluates, sharedCriteria.evidence, sharedCriteria.oversight, sharedCriteria.candidate, sharedCriteria.stage],
    vendorIds: ['hiriq', 'hirevue', 'heymilo', 'harver', 'sparkHire', 'brighthire'],
    hiriqFit:
      'Hiriq keeps the structured-interview discipline that draws teams to Sapia.ai but runs it as a live conversation, so spoken communication is observable. Criteria are defined by the recruiter, each score maps to a specific answer in the transcript, and a person reviews before anyone is rejected.',
    faq: [
      {
        q: 'Why do some platforms use text-only first-round interviews?',
        a: 'Removing video and voice removes some of the surface for appearance and accent-based first impressions. It is a structural approach to reducing bias in the earliest stage.',
      },
      {
        q: 'What is lost in a text-only screening interview?',
        a: 'Evidence about spoken communication, listening, and real-time reasoning. For customer-facing, clinical, and sales roles, those are often core requirements rather than nice to have.',
      },
      {
        q: 'How do AI interview platforms handle bias if they use voice and video?',
        a: 'The defensible approach is to score against explicit, job-related criteria that the hiring team defines, to tie every score to a quoted answer, and to require human review before any rejection. Ask any vendor to show the reasoning behind a score.',
      },
      {
        q: 'Can structured interviewing and reduced bias coexist with a live AI interview?',
        a: 'Yes, provided every candidate is assessed against the same criteria, the questions follow the same structure, and the evidence trail is open to review.',
      },
    ],
    relatedSlugs: ['best-ai-interview-software', 'hirevue-alternatives', 'best-ai-candidate-screening-tools'],
    internalLinks: [
      { href: '/automated-interviews', label: 'How Hiriq AI interviews work' },
      { href: '/solutions/candidate-screening-software', label: 'Candidate screening software' },
      { href: '/solutions/ai-interview-platform', label: 'AI interview platform' },
    ],
  },
  {
    slug: 'spark-hire-alternatives',
    shortTitle: 'Spark Hire Alternatives',
    navLabel: 'Spark Hire alternatives',
    metaTitle: 'Spark Hire Alternatives in 2026 Compared | Hiriq',
    metaDescription:
      'Compare Spark Hire alternatives for video interviewing, including platforms that score candidate answers so reviewer time stops scaling with applicant volume.',
    h1: 'Spark Hire alternatives in 2026',
    eyebrow: 'Alternatives',
    primaryKeyword: 'Spark Hire alternatives',
    searchTerms: [
      'Spark Hire alternatives',
      'Spark Hire competitors',
      'one way video interview software',
      'async video interview alternatives',
      'video interview platform comparison',
    ],
    intro:
      'Spark Hire is a well-established one-way video interviewing tool, and it does that job well. The limitation teams eventually hit is arithmetic: someone still watches every submitted video, so reviewer hours grow in step with applicant volume. That is usually what sends teams looking for an alternative.',
    context: [
      'One-way video removes scheduling cost, not review cost.',
      'At low volume that trade is fine. At high volume the review queue becomes the new bottleneck.',
      'The alternative that changes the arithmetic is a platform that evaluates the answer, not one that records it more cheaply.',
    ],
    criteria: [sharedCriteria.evaluates, sharedCriteria.volume, sharedCriteria.evidence, sharedCriteria.effort, sharedCriteria.integration],
    vendorIds: ['hiriq', 'willo', 'hireflix', 'heymilo', 'hirevue', 'sapia', 'metaview'],
    hiriqFit:
      'Hiriq is the alternative for teams whose problem is the review queue rather than the price of video hosting. Because the AI conducts and scores the interview, recruiters open the transcripts for candidates who cleared the criteria instead of watching every submission in order.',
    faq: [
      {
        q: 'What is the cheapest Spark Hire alternative?',
        a: 'Willo and Hireflix are commonly chosen by smaller teams looking for asynchronous video at a lower entry price. Pricing changes regularly, so confirm current plans directly with each vendor.',
      },
      {
        q: 'Is one-way video interviewing still worth using in 2026?',
        a: 'Yes, at moderate volume and where a human reviewer is the point. It becomes inefficient when applicant numbers make watching every submission impractical.',
      },
      {
        q: 'What replaces one-way video for high applicant volume?',
        a: 'An AI-led interview that evaluates answers against defined criteria and returns transcripts with scoring, so recruiter attention goes to a qualified subset rather than to the full queue in submission order.',
      },
      {
        q: 'Will candidates accept an AI interview instead of recorded video?',
        a: 'Completion generally depends on clarity and length rather than format. Tell candidates what to expect, keep the session proportionate to the role, and make sure a human reviews the outcome.',
      },
    ],
    relatedSlugs: ['best-ai-interview-software', 'hirevue-alternatives', 'best-ai-candidate-screening-tools'],
    internalLinks: [
      { href: '/solutions/ai-interview-platform', label: 'AI interview platform' },
      { href: '/solutions/high-volume-hiring', label: 'High-volume hiring software' },
      { href: '/automated-interviews', label: 'Automated AI interviews' },
    ],
  },
  {
    slug: 'best-ai-candidate-screening-tools',
    shortTitle: 'Best AI Candidate Screening Tools',
    navLabel: 'Best AI screening tools',
    metaTitle: 'Best AI Candidate Screening Tools in 2026 Compared | Hiriq',
    metaDescription:
      'A practical comparison of AI candidate screening tools in 2026, covering resume screening, pre-screening conversations, assessments, and what evidence each returns.',
    h1: 'Best AI candidate screening tools in 2026',
    eyebrow: 'Category comparison',
    primaryKeyword: 'best AI candidate screening tools',
    searchTerms: [
      'best AI candidate screening tools',
      'AI candidate screening software',
      'AI resume screening tools',
      'candidate screening software comparison',
      'automated screening tools',
    ],
    intro:
      'Candidate screening tools split by the evidence they work from. Resume screeners read a document. Assessment platforms administer a test. Conversational screeners ask the candidate directly. Each answers a different question, and the right choice depends on which unknown is actually costing your team time.',
    context: [
      'A resume tells you what someone claims. It does not confirm availability, salary fit, work authorisation, or depth.',
      'Assessments confirm a specific skill but add a step that costs completions.',
      'A conversation confirms the qualification facts and the reasoning behind the claims, in one pass.',
    ],
    criteria: [sharedCriteria.evaluates, sharedCriteria.stage, sharedCriteria.evidence, sharedCriteria.candidate, sharedCriteria.oversight],
    vendorIds: ['hiriq', 'hirevue', 'sapia', 'harver', 'heymilo', 'workable', 'eightfold', 'paradox'],
    hiriqFit:
      'Hiriq runs both halves of screening in sequence: resume match analysis against role criteria, then an AI interview that closes the gaps the resume left open. The recruiter receives a ranked shortlist with the transcript and score for each answer that produced it.',
    faq: [
      {
        q: 'What is the difference between resume screening and candidate screening?',
        a: 'Resume screening ranks documents against role requirements. Candidate screening verifies the things a resume cannot confirm, including availability, salary expectation, work authorisation, and the depth behind a claimed skill. Most teams need both.',
      },
      {
        q: 'Can AI screening tools reject candidates automatically?',
        a: 'Technically many can. Whether they should is a policy decision, and the defensible practice is human review before rejection, with a documented reason tied to job-related criteria.',
      },
      {
        q: 'How accurate is AI resume screening?',
        a: 'Accuracy depends almost entirely on the criteria supplied. Vague requirements produce vague ranking. Tools that let you define explicit must-haves and thresholds, and that show which requirement each candidate met, are far more reliable than a single unexplained match percentage.',
      },
      {
        q: 'Do AI screening tools work with an existing ATS?',
        a: 'Most are designed as a layer that passes qualified candidates and their evidence onward, so you can keep your system of record. Confirm the specific integration path before committing.',
      },
    ],
    relatedSlugs: ['best-ai-interview-software', 'paradox-ai-alternatives', 'best-ai-recruiting-software-for-staffing-agencies'],
    internalLinks: [
      { href: '/solutions/candidate-screening-software', label: 'Candidate screening software' },
      { href: '/solutions/ai-resume-screening', label: 'AI resume screening' },
      { href: '/solutions/candidate-pre-screening-software', label: 'Candidate pre-screening software' },
    ],
  },
  {
    slug: 'best-ai-recruiting-software-for-staffing-agencies',
    shortTitle: 'Best AI Software for Staffing Agencies',
    navLabel: 'Best AI software for agencies',
    metaTitle: 'Best AI Recruiting Software for Staffing Agencies (2026) | Hiriq',
    metaDescription:
      'Compare AI recruiting software for staffing agencies in 2026, judged on time-to-qualify, submission quality, and the evidence clients accept.',
    h1: 'Best AI recruiting software for staffing agencies in 2026',
    eyebrow: 'Category comparison',
    primaryKeyword: 'AI recruiting software for staffing agencies',
    searchTerms: [
      'AI recruiting software for staffing agencies',
      'staffing agency software',
      'recruitment agency software',
      'AI software for recruiters',
      'staffing agency automation',
    ],
    intro:
      'Agencies are judged on submission quality and speed, not on how many resumes a system can parse. The tooling question is therefore narrower than it looks: does this platform shorten time-to-qualify, the gap between an application arriving and a candidate being verified as submittable, without weakening the evidence a client will accept?',
    context: [
      'Adding recruiters scales a qualification workflow rather than fixing it.',
      'Submission acceptance rate is the metric that reflects qualification quality. Submission volume is not.',
      'Client-facing evidence matters. A transcript and a criteria map travel better than a recruiter summary.',
    ],
    criteria: [sharedCriteria.evaluates, sharedCriteria.evidence, sharedCriteria.volume, sharedCriteria.effort, sharedCriteria.integration],
    vendorIds: ['hiriq', 'heymilo', 'paradox', 'hirevue', 'sparkHire', 'workable', 'sapia'],
    hiriqFit:
      'Hiriq is built around exactly this metric. Criteria are set from the client requisition, resume matching narrows the pool, the AI interview verifies the facts and the depth, and the recruiter receives evidence that can be attached to a submission rather than reconstructed from memory.',
    faq: [
      {
        q: 'What is time-to-qualify and why does it matter more than time-to-fill for agencies?',
        a: 'Time-to-qualify is the elapsed time between an application arriving and that candidate being verified as ready to submit. It is the part of the process an agency actually controls. Time-to-fill also depends on client interview speed and candidate decisions, which no software can compress.',
      },
      {
        q: 'Does AI recruiting software reduce submission quality?',
        a: 'It does the opposite when the criteria come from the requisition and every score is traceable to an answer. Quality drops when a tool is used to submit faster without verifying anything, which is a process choice rather than a software limitation.',
      },
      {
        q: 'Do agencies need to replace their ATS or CRM to use AI screening?',
        a: 'Usually not. Most agencies keep the ATS or CRM as the system of record and add a screening layer in front of it that hands over qualified candidates with their evidence.',
      },
      {
        q: 'What should an agency measure after adopting AI screening?',
        a: 'Track time-to-qualify, submission acceptance rate, and recruiter hours spent on first-round discovery. If acceptance rate holds while qualification time falls, the change is working.',
      },
    ],
    relatedSlugs: ['paradox-ai-alternatives', 'best-ai-candidate-screening-tools', 'best-ai-interview-software'],
    internalLinks: [
      { href: '/solutions/staffing-agencies', label: 'Software for staffing agencies' },
      { href: '/solutions/healthcare-staffing-agencies', label: 'Healthcare staffing software' },
      { href: '/blog/time-to-qualify', label: 'Time-to-qualify, explained' },
    ],
  },
];

export function getComparison(slug: string) {
  return comparisons.find((comparison) => comparison.slug === slug);
}

export function getVendorsFor(comparison: Comparison): Vendor[] {
  return comparison.vendorIds.map((id) => vendors[id]).filter(Boolean);
}
