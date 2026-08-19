export type Solution = {
  slug: string;
  shortTitle: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  lead: string;
  market: string;
  primaryKeyword: string;
  searchTerms: string[];
  problems: string[];
  outcomes: string[];
  workflow: string[];
  faq: { q: string; a: string }[];
};

export const solutions: Solution[] = [
  {
    slug: 'ai-recruiting-software',
    shortTitle: 'AI Recruiting Software',
    title: 'AI recruiting software that screens, interviews, and shortlists candidates',
    metaTitle: 'AI Recruiting Software for Screening and Interviews | Hiriq',
    metaDescription:
      'Hiriq AI recruiting software helps hiring teams screen resumes, run automated interviews, rank candidates, and move faster from application to shortlist.',
    eyebrow: 'AI recruiting software',
    lead:
      'Hiriq gives recruiters one workflow for job setup, resume intelligence, candidate pre-screening, AI interviews, and evidence-based shortlists.',
    market: 'Built for hiring teams in the United States, United Kingdom, Middle East, and international markets.',
    primaryKeyword: 'AI recruiting software',
    searchTerms: [
      'AI recruiting software',
      'AI recruitment platform',
      'AI hiring software',
      'recruiting automation',
      'candidate screening AI',
    ],
    problems: [
      'Manual resume review slows down every open role.',
      'Recruiters lose context when interviews, notes, and candidate files live in different tools.',
      'Hiring managers need structured evidence instead of generic candidate summaries.',
    ],
    outcomes: [
      'Create role-specific screening criteria before resumes arrive.',
      'Rank candidates against the actual job requirements.',
      'Use automated interview evidence to focus recruiter time on qualified candidates.',
      'Keep application, screening, interview, and follow-up activity in a single hiring workflow.',
    ],
    workflow: [
      'Define the job, must-have criteria, and scoring rules.',
      'Collect applications through branded candidate flows.',
      'Screen resumes and match candidates to the role.',
      'Run automated pre-screening or interview steps.',
      'Review summaries, transcripts, scores, and next-step recommendations.',
    ],
    faq: [
      {
        q: 'Is Hiriq an AI recruiting software platform or only an interview tool?',
        a: 'Hiriq is a recruiting workflow platform. It supports resume screening, candidate matching, automated pre-screening, AI interviews, and recruiter review.',
      },
      {
        q: 'Can Hiriq work for teams outside the United States?',
        a: 'Yes. Hiriq is designed for web-based recruiting teams and can support teams hiring across the USA, UK, Middle East, Pakistan, and other international markets.',
      },
      {
        q: 'Does Hiriq make final hiring decisions?',
        a: 'No. Hiriq helps structure screening evidence and recommendations so recruiters and hiring managers can make better-informed decisions.',
      },
    ],
  },
  {
    slug: 'ai-ats',
    shortTitle: 'AI ATS',
    title: 'AI ATS for applicant tracking, screening, and recruiter workflows',
    metaTitle: 'AI ATS and Applicant Tracking System | Hiriq',
    metaDescription:
      'Use Hiriq as an AI ATS for applicant tracking, branded application pages, resume screening, candidate ranking, and automated interview workflows.',
    eyebrow: 'AI applicant tracking system',
    lead:
      'Hiriq combines applicant tracking with AI-powered screening so teams can move from job setup to qualified shortlist without spreadsheet-heavy recruiting.',
    market: 'Useful for startups, agencies, and growing teams hiring across the USA, UK, UAE, Qatar, Pakistan, and remote markets.',
    primaryKeyword: 'AI ATS',
    searchTerms: [
      'AI ATS',
      'AI applicant tracking system',
      'ATS software',
      'candidate tracking',
      'AI candidate ranking',
    ],
    problems: [
      'Traditional ATS tools store candidates but do not reduce screening work.',
      'Recruiting teams need faster qualification before scheduling live interviews.',
      'Applicant volume can hide strong candidates when review is manual.',
    ],
    outcomes: [
      'Track candidates through a structured hiring pipeline.',
      'Attach resume intelligence and screening evidence to each candidate.',
      'Reduce repetitive manual review for high-volume roles.',
      'Create a cleaner handoff from recruiter screening to hiring manager review.',
    ],
    workflow: [
      'Open a role and publish a branded application path.',
      'Capture candidate details, resumes, and screening answers.',
      'Use AI ranking to surface candidates that match role requirements.',
      'Advance qualified candidates into automated interviews or recruiter review.',
      'Keep candidate status, notes, and follow-up actions visible.',
    ],
    faq: [
      {
        q: 'What makes Hiriq different from a traditional ATS?',
        a: 'A traditional ATS mainly organizes applicants. Hiriq adds AI screening, matching, and interview evidence so recruiters can qualify candidates faster.',
      },
      {
        q: 'Can Hiriq replace our existing hiring spreadsheet?',
        a: 'For many early and growing teams, yes. Hiriq is designed to centralize applicant intake, screening, and review in one web platform.',
      },
      {
        q: 'Does Hiriq support branded application pages?',
        a: 'Yes. Hiriq can help teams collect candidates through branded application flows instead of scattered manual uploads.',
      },
    ],
  },
  {
    slug: 'ai-interview-platform',
    shortTitle: 'AI Interview Platform',
    title: 'AI interview platform for structured candidate pre-screening',
    metaTitle: 'AI Interview Platform for Automated Pre-Screening | Hiriq',
    metaDescription:
      'Hiriq helps recruiters run structured AI interviews, review transcripts, compare candidate evidence, and prioritize qualified applicants faster.',
    eyebrow: 'AI interview platform',
    lead:
      'Hiriq helps teams move early interviews from calendar bottlenecks into consistent, structured, always-available candidate evaluations.',
    market: 'Built for teams hiring across distributed regions, including the USA, UK, Middle East, and remote-first companies.',
    primaryKeyword: 'AI interview platform',
    searchTerms: [
      'AI interview platform',
      'automated interviews',
      'AI pre-screening interviews',
      'candidate interview automation',
      'AI interview screening',
    ],
    problems: [
      'Initial screening calls take recruiter time before fit is clear.',
      'Candidates wait for availability across time zones.',
      'Hiring managers often receive inconsistent interview notes.',
    ],
    outcomes: [
      'Run structured AI interview steps before live team interviews.',
      'Collect transcripts, summaries, and role-specific evaluation notes.',
      'Compare candidates using the same criteria.',
      'Keep recruiters focused on high-signal conversations.',
    ],
    workflow: [
      'Choose questions tied to the role and screening criteria.',
      'Invite candidates to complete the automated interview step.',
      'Review transcript, summary, score, and candidate signals.',
      'Advance top candidates into live interviews or next-stage review.',
    ],
    faq: [
      {
        q: 'Can candidates complete AI interviews outside business hours?',
        a: 'Yes. Automated interview workflows are designed to reduce scheduling friction and make early screening more flexible.',
      },
      {
        q: 'Can recruiters review the interview evidence?',
        a: 'Yes. Hiriq focuses on structured evidence such as transcripts, summaries, and scoring context for recruiter review.',
      },
      {
        q: 'Is Hiriq only for technical interviews?',
        a: 'No. Hiriq can support screening workflows across technical, operations, sales, support, healthcare, finance, retail, and other hiring categories.',
      },
    ],
  },
  {
    slug: 'ai-resume-screening',
    shortTitle: 'AI Resume Screening',
    title: 'AI resume screening software for faster candidate shortlists',
    metaTitle: 'AI Resume Screening Software and Candidate Matching | Hiriq',
    metaDescription:
      'Hiriq screens resumes against job criteria, highlights candidate fit, and helps recruiters build better shortlists for high-volume roles.',
    eyebrow: 'AI resume screening',
    lead:
      'Hiriq helps recruiters replace slow manual resume review with criteria-based screening, role matching, and clear shortlist evidence.',
    market: 'Designed for high-volume hiring teams, agencies, and companies recruiting across local and international markets.',
    primaryKeyword: 'AI resume screening software',
    searchTerms: [
      'AI resume screening',
      'resume screening software',
      'AI CV screening',
      'candidate matching software',
      'AI shortlist tool',
    ],
    problems: [
      'High applicant volume makes manual resume review inconsistent.',
      'Keyword-only screening can miss qualified candidates.',
      'Recruiters need explainable fit signals before sending candidates forward.',
    ],
    outcomes: [
      'Match resumes against role-specific requirements.',
      'Surface qualified candidates faster for recruiter review.',
      'Use structured evidence to support shortlist decisions.',
      'Pair resume screening with automated pre-screening for stronger signal.',
    ],
    workflow: [
      'Set required skills, experience, location, and role criteria.',
      'Upload or receive candidate resumes through the application flow.',
      'Review AI-generated matching signals and summaries.',
      'Advance stronger candidates into interview or hiring manager review.',
    ],
    faq: [
      {
        q: 'Does Hiriq use keyword-only resume screening?',
        a: 'No. Hiriq is positioned around role criteria, candidate fit, and recruiter review rather than simple keyword matching.',
      },
      {
        q: 'Can Hiriq help with high-volume hiring?',
        a: 'Yes. AI resume screening is especially useful when teams need to review many candidates without losing consistency.',
      },
      {
        q: 'Can screening results be reviewed by humans?',
        a: 'Yes. Hiriq is designed to support recruiter decisions with evidence, not remove human review.',
      },
    ],
  },
  {
    slug: 'candidate-screening-software',
    shortTitle: 'Candidate Screening Software',
    title: 'Candidate screening software for faster, evidence-backed shortlists',
    metaTitle: 'Candidate Screening Software for Recruiters | Hiriq',
    metaDescription:
      'Hiriq candidate screening software helps recruiters qualify applicants with resume screening, automated pre-screening, AI interviews, and structured shortlist evidence.',
    eyebrow: 'Candidate screening software',
    lead:
      'Hiriq helps hiring teams turn applicant volume into a cleaner shortlist by combining resume review, qualification criteria, and automated pre-screening in one workflow.',
    market: 'A practical fit for high-volume recruiting, staffing teams, startups, and companies hiring across the USA, UK, Middle East, and remote markets.',
    primaryKeyword: 'candidate screening software',
    searchTerms: [
      'candidate screening software',
      'candidate screening tools',
      'resume screening',
      'recruiting automation software',
      'AI candidate screening',
    ],
    problems: [
      'Recruiters spend too much time reviewing applicants who do not meet basic role criteria.',
      'Manual screening creates inconsistent notes and makes it harder to compare candidates fairly.',
      'Strong candidates can be missed when hiring teams rely on spreadsheets or disconnected inboxes.',
    ],
    outcomes: [
      'Screen candidates against the same role-specific criteria.',
      'Combine resume signals with automated pre-screening evidence.',
      'Prioritize candidates who are ready for recruiter or hiring manager review.',
      'Give hiring teams clearer context before live interviews.',
    ],
    workflow: [
      'Set role criteria and required qualification signals.',
      'Collect candidate applications and resumes.',
      'Run AI-assisted resume and profile screening.',
      'Invite candidates into automated pre-screening where useful.',
      'Review a structured shortlist with scores, summaries, and next steps.',
    ],
    faq: [
      {
        q: 'What is candidate screening software?',
        a: 'Candidate screening software helps recruiters review applicants against job criteria, identify stronger matches, and organize evidence before interviews.',
      },
      {
        q: 'How does Hiriq improve candidate screening?',
        a: 'Hiriq combines resume screening, role criteria, automated pre-screening, and interview evidence so teams can shortlist candidates faster.',
      },
      {
        q: 'Is candidate screening software useful for high-volume hiring?',
        a: 'Yes. It is especially useful when teams receive many applicants and need consistent, repeatable qualification before live interviews.',
      },
    ],
  },
  {
    slug: 'recruiting-automation-software',
    shortTitle: 'Recruiting Automation',
    title: 'Recruiting automation software that reduces manual screening work',
    metaTitle: 'Recruiting Automation Software for Hiring Teams | Hiriq',
    metaDescription:
      'Hiriq recruiting automation software helps teams automate candidate intake, resume screening, pre-screening interviews, and shortlist workflows.',
    eyebrow: 'Recruiting automation software',
    lead:
      'Hiriq removes repetitive recruiting work from the early funnel so recruiters can spend more time with qualified candidates and hiring managers.',
    market: 'Designed for growing teams, agencies, and operators that need faster hiring workflows without adding recruiter headcount.',
    primaryKeyword: 'recruiting automation software',
    searchTerms: [
      'recruiting automation software',
      'recruitment automation',
      'hiring automation software',
      'automated candidate screening',
      'AI recruiting automation',
    ],
    problems: [
      'Recruiting teams repeat the same screening, scheduling, and qualification tasks for every open role.',
      'Early-stage candidate workflows often slow down because recruiters are overloaded.',
      'Hiring managers need organized evidence, not fragmented notes from multiple tools.',
    ],
    outcomes: [
      'Automate repeatable screening and qualification steps.',
      'Move qualified candidates forward faster.',
      'Reduce recruiter time spent on low-signal manual review.',
      'Create a consistent workflow from application to shortlist.',
    ],
    workflow: [
      'Define the role and automation rules.',
      'Collect candidates through a structured application flow.',
      'Screen resumes and qualification signals automatically.',
      'Run automated interview or pre-screening steps.',
      'Send recruiters a prioritized shortlist with evidence.',
    ],
    faq: [
      {
        q: 'What recruiting tasks can Hiriq automate?',
        a: 'Hiriq can help automate candidate intake, resume screening, matching, pre-screening interviews, summaries, and shortlist preparation.',
      },
      {
        q: 'Does recruiting automation replace recruiters?',
        a: 'No. Hiriq automates repetitive early-funnel work so recruiters can focus on judgment, candidate relationships, and hiring manager alignment.',
      },
      {
        q: 'Is recruiting automation useful for small teams?',
        a: 'Yes. Small teams often benefit because automation helps them handle more applicants without immediately adding headcount.',
      },
    ],
  },
  {
    slug: 'middle-east-ai-hiring',
    shortTitle: 'Middle East AI Hiring',
    title: 'AI hiring platform for Middle East recruiting teams',
    metaTitle: 'AI Hiring Platform for the Middle East | Hiriq',
    metaDescription:
      'Hiriq helps teams hiring in the Middle East use AI resume screening, automated interviews, and structured candidate review across regional and remote roles.',
    eyebrow: 'Middle East AI hiring',
    lead:
      'Hiriq supports recruiting teams operating across the UAE, Qatar, Saudi Arabia, Pakistan, and wider Middle East talent markets.',
    market: 'Built for cross-border hiring, remote teams, agencies, and companies coordinating candidates across time zones.',
    primaryKeyword: 'AI hiring platform Middle East',
    searchTerms: [
      'AI hiring Middle East',
      'AI recruitment UAE',
      'AI hiring Qatar',
      'AI recruiting Saudi Arabia',
      'AI ATS Middle East',
    ],
    problems: [
      'Regional hiring often spans several countries, time zones, and candidate pools.',
      'Recruiters need consistent screening across local and remote applicants.',
      'Growing teams need a faster way to qualify candidates before live interviews.',
    ],
    outcomes: [
      'Run web-based hiring workflows for regional and international applicants.',
      'Use structured screening criteria across roles and locations.',
      'Reduce scheduling friction with automated pre-screening steps.',
      'Create clearer evidence for recruiter and hiring manager review.',
    ],
    workflow: [
      'Create the role and define regional requirements.',
      'Collect candidates through a branded application path.',
      'Screen resumes and qualification signals against the job.',
      'Use automated interviews to qualify candidates across time zones.',
      'Share a shortlist with structured evidence.',
    ],
    faq: [
      {
        q: 'Does Hiriq support Middle East hiring teams?',
        a: 'Yes. Hiriq can support teams recruiting across the UAE, Qatar, Saudi Arabia, Pakistan, and broader Middle East markets.',
      },
      {
        q: 'Can Hiriq help with cross-border recruiting?',
        a: 'Yes. Hiriq is web-based and suited for distributed hiring workflows where candidates and recruiters are not always in one location.',
      },
      {
        q: 'Is pricing available for Middle East teams?',
        a: 'Hiriq includes regional pricing logic on the website and offers sales conversations for teams that need a tailored plan.',
      },
    ],
  },
  {
    slug: 'usa-uk-ai-hiring',
    shortTitle: 'USA and UK AI Hiring',
    title: 'AI hiring platform for USA and UK recruiting teams',
    metaTitle: 'AI Hiring Platform for USA and UK Recruiting Teams | Hiriq',
    metaDescription:
      'Hiriq helps recruiting teams in the USA and UK automate resume screening, AI interviews, candidate ranking, and shortlist workflows.',
    eyebrow: 'USA and UK AI hiring',
    lead:
      'Hiriq helps US and UK hiring teams reduce manual screening, keep candidates moving, and give hiring managers clearer evidence.',
    market: 'Designed for startups, agencies, operators, and distributed recruiting teams hiring across US, UK, and global talent pools.',
    primaryKeyword: 'AI hiring platform USA UK',
    searchTerms: [
      'AI hiring platform USA',
      'AI recruitment software UK',
      'AI ATS USA',
      'AI interview software UK',
      'recruiting automation USA UK',
    ],
    problems: [
      'Recruiters lose hours on early resume and phone screening.',
      'US and UK teams often need faster candidate response across competitive roles.',
      'Hiring managers need consistent evaluation notes before live interviews.',
    ],
    outcomes: [
      'Move applicants from intake to shortlist faster.',
      'Use AI screening and automated interviews before expensive live interviews.',
      'Support remote, hybrid, and multi-location recruiting workflows.',
      'Create clearer candidate evidence for faster decision cycles.',
    ],
    workflow: [
      'Publish a role and application path.',
      'Screen resumes against job criteria.',
      'Run automated pre-screening or AI interview steps.',
      'Review ranked candidates, summaries, and transcripts.',
      'Book the strongest candidates for live interviews.',
    ],
    faq: [
      {
        q: 'Can Hiriq be used by US recruiting teams?',
        a: 'Yes. Hiriq is designed for web-based recruiting workflows and includes US-friendly contact, demo, and pricing paths.',
      },
      {
        q: 'Can Hiriq support UK hiring workflows?',
        a: 'Yes. UK hiring teams can use Hiriq for candidate intake, resume screening, automated interviews, and shortlist review.',
      },
      {
        q: 'Is Hiriq suitable for remote hiring?',
        a: 'Yes. Hiriq is especially useful when teams need to screen candidates across locations and time zones before live conversations.',
      },
    ],
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
