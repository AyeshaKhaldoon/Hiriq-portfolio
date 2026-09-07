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
      'AI talent acquisition software',
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
        a: 'Yes. Hiriq supports web-based recruiting workflows for employers and agencies in the United States, United Kingdom, and Middle East.',
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
    title: 'AI applicant tracking system for recruiting teams',
    metaTitle: 'AI ATS and Applicant Tracking System | Hiriq',
    metaDescription:
      'Use Hiriq as an AI ATS for applicant tracking, branded application pages, resume screening, candidate ranking, and automated interview workflows.',
    eyebrow: 'AI applicant tracking system',
    lead:
      'Hiriq combines applicant tracking with AI-powered screening so teams can move from job setup to qualified shortlist without spreadsheet-heavy recruiting.',
    market: 'For startups, staffing agencies, and growing hiring teams in the US, UK, and Middle East.',
    primaryKeyword: 'AI ATS',
    searchTerms: [
      'AI ATS',
      'AI applicant tracking system',
      'ATS software',
      'ATS for small business',
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
    title: 'Live AI interview platform for recruiters and hiring teams',
    metaTitle: 'AI Interview Platform for Recruiters | Live Interviews | Hiriq',
    metaDescription:
      'Hiriq runs live conversational AI interviews with adaptive follow-ups, industry-specific questions, integrity flags, transcripts, and recruiter-controlled scoring.',
    eyebrow: 'AI interview platform',
    lead:
      'Hiriq gives recruiters a fully integrated AI interview engine for 30-minute conversational interviews, role-specific probing, structured scoring, and human-reviewed recommendations.',
    market: 'Built for teams hiring across distributed regions, including the USA, UK, Middle East, and remote-first companies.',
    primaryKeyword: 'AI interview platform',
    searchTerms: [
      'AI interview platform',
      'live AI interviews',
      'conversational AI interviews',
      'AI technical interview platform',
      'AI interview scoring',
    ],
    problems: [
      'Recruiters spend too much time running repetitive first-round interviews before deeper fit is clear.',
      'Recorded or text-only interviews do not probe weak answers, missing evidence, or role-specific scenarios.',
      'Hiring managers need per-topic scoring, transcripts, and integrity context instead of generic interview notes.',
    ],
    outcomes: [
      'Run live conversational interviews that adapt question by question based on candidate answers.',
      'Evaluate technical, behavioral, scenario, and communication signals against a custom scoring engine.',
      'Review subtopic scores, per-turn answer ratings, transcripts, recommendations, and interview flags.',
      'Save recruiter time while keeping final hiring decisions under human oversight.',
    ],
    workflow: [
      'Configure the role, industry, scoring weights, and interview focus areas.',
      'Invite candidates into a live 30-minute conversational AI interview.',
      'Ask adaptive follow-up questions when answers lack depth, evidence, or clarity.',
      'Apply integrity monitoring for copy-paste attempts, tab switching, focus changes, background voices, and multi-face signals.',
      'Review the scorecard, transcript, per-turn ratings, flags, and AI recommendation before deciding next steps.',
    ],
    faq: [
      {
        q: 'Is Hiriq AI Interview just a recorded interview?',
        a: 'No. Hiriq is designed for live conversational interviews. It can ask adaptive follow-up questions based on the candidate answer instead of only collecting one-way recordings.',
      },
      {
        q: 'What does the recruiter receive after an AI interview?',
        a: 'Recruiters can review subtopic scores, per-turn answer ratings, summaries, transcripts, interview integrity flags, and an AI recommendation. The recruiter remains responsible for the final decision.',
      },
      {
        q: 'Is Hiriq only for technical interviews?',
        a: 'No. Hiriq supports industry-specific interview workflows across technology, healthcare, BFSI, operations, retail and hospitality, and sales and BPO roles.',
      },
      {
        q: 'Does Hiriq store face embeddings or continuous facial video?',
        a: 'No. Interview integrity signals are designed for recruiter review, and Hiriq does not store face embeddings or continuous candidate facial video.',
      },
    ],
  },
  {
    slug: 'ai-resume-screening',
    shortTitle: 'AI Resume Screening',
    title: 'AI resume and CV screening software for recruiters',
    metaTitle: 'AI Resume & CV Screening Software for Recruiters | Hiriq',
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
      'CV screening software',
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
        a: 'Hiriq compares documented skills and experience against role criteria and returns matching evidence for recruiter review. Recruiters can inspect the original resume and clarify missing information in pre-screening.',
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
      'AI candidate screening',
      'automated candidate screening',
      'applicant screening software',
      'HR screening software',
      'candidate evaluation software',
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
      {
        q: 'What should recruiters look for in automated candidate screening software?',
        a: 'Look for role-specific criteria, reviewable evidence, consistent applicant comparison, clear handoffs, and human control over every hiring decision. Avoid systems that return a score without showing the evidence behind it.',
      },
      {
        q: 'How is candidate screening different from resume screening?',
        a: 'Resume screening evaluates the experience and skills documented in a resume. Candidate screening can add qualification answers, pre-screening evidence, interview results, and recruiter review before a shortlist is finalized.',
      },
    ],
  },
  {
    slug: 'recruiting-automation-software',
    shortTitle: 'Recruiting Automation',
    title: 'Recruiting automation software for screening and qualification',
    metaTitle: 'Recruiting & Recruitment Automation Software | Hiriq',
    metaDescription:
      'Hiriq recruiting automation software helps teams automate candidate intake, resume screening, pre-screening interviews, and shortlist workflows.',
    eyebrow: 'Recruiting automation software',
    lead:
      'Hiriq recruitment automation software connects candidate intake, resume screening, pre-screening, AI interviews, and shortlist preparation so recruiters can spend more time on qualified candidates.',
    market: 'Designed for growing teams, agencies, and operators that need faster hiring workflows without adding recruiter headcount.',
    primaryKeyword: 'recruiting automation software',
    searchTerms: [
      'recruiting automation software',
      'recruitment automation software',
      'recruitment automation',
      'hiring automation software',
      'automated candidate screening',
      'recruitment automation tools',
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
        q: 'What is recruitment automation software?',
        a: 'Recruitment automation software handles repeatable hiring tasks such as candidate intake, resume screening, qualification, interview workflows, summaries, and shortlist preparation while recruiters retain control of decisions.',
      },
      {
        q: 'Does recruiting automation replace recruiters?',
        a: 'No. Hiriq automates repetitive early-funnel work so recruiters can focus on judgment, candidate relationships, and hiring manager alignment.',
      },
      {
        q: 'Is recruiting automation useful for small teams?',
        a: 'Yes. Small teams often benefit because automation helps them handle more applicants without immediately adding headcount.',
      },
      {
        q: 'How can recruitment automation save recruiter time?',
        a: 'It reduces repeated first-pass review and qualification work, then gives recruiters organized evidence for the candidates who need human attention. The exact time saved depends on applicant volume, role criteria, and the workflow being replaced.',
      },
      {
        q: 'Can staffing agencies use recruiting automation across client roles?',
        a: 'Yes. Agencies can configure role-specific criteria and workflows for different clients, then review the resulting candidate evidence before making a submission.',
      },
    ],
  },
  {
    slug: 'middle-east-ai-hiring',
    shortTitle: 'Middle East AI Hiring',
    title: 'ATS and AI recruiting software for the Middle East',
    metaTitle: 'ATS & AI Recruiting Software for the Middle East | Hiriq',
    metaDescription:
      'Track applicants, screen CVs, and run live AI interviews with Hiriq. Built for employers and recruitment agencies in the UAE, Saudi Arabia, Qatar, and Gulf markets.',
    eyebrow: 'Middle East AI hiring',
    lead:
      'Hiriq brings applicant tracking, CV screening, candidate pre-screening, and live AI interviews into one workflow for Middle East hiring teams.',
    market: 'For employers and agencies in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and the wider Middle East.',
    primaryKeyword: 'AI hiring platform Middle East',
    searchTerms: [
      'AI hiring Middle East',
      'AI recruitment UAE',
      'AI hiring Qatar',
      'AI recruiting Saudi Arabia',
      'AI ATS Middle East',
      'applicant tracking system',
      'ATS software',
      'CV screening software',
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
        a: 'Yes. Employers and recruitment agencies in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and the wider Middle East can use Hiriq for applicant tracking, screening, interviews, and recruiter review.',
      },
      {
        q: 'Can Hiriq help with cross-border recruiting?',
        a: 'Yes. Hiriq is web-based and suited for distributed hiring workflows where candidates and recruiters are not always in one location.',
      },
      {
        q: 'Is pricing available for Middle East teams?',
        a: 'Hiriq includes regional pricing logic on the website and offers sales conversations for teams that need a tailored plan.',
      },
      {
        q: 'What can Gulf hiring teams manage in the applicant tracking system?',
        a: 'Teams can set role requirements, collect applications, track candidate stages, screen CVs, and review pre-screening answers and AI interview reports. Recruiters decide who moves forward.',
      },
    ],
  },
  {
    slug: 'healthcare-staffing-agencies',
    shortTitle: 'Healthcare Staffing',
    title: 'Healthcare recruitment software for clinical candidate screening',
    metaTitle: 'Healthcare Recruitment Software for Screening | Hiriq',
    metaDescription:
      'Hiriq helps healthcare staffing and recruitment teams screen resumes, verify role-fit evidence, run structured AI interviews, and prepare recruiter-reviewed shortlists.',
    eyebrow: 'Healthcare recruitment software',
    lead:
      'Hiriq helps healthcare recruiters review clinical experience, collect practical qualification answers, and inspect role-specific interview evidence before preparing a shortlist.',
    market: 'Built for healthcare staffing agencies, care providers, and recruiting teams hiring nurses, allied health, support, and operations roles across regional or remote markets.',
    primaryKeyword: 'healthcare recruitment software',
    searchTerms: [
      'healthcare recruitment software',
      'healthcare recruiting software',
      'healthcare staffing recruitment software',
      'nurse staffing software',
      'healthcare candidate screening',
      'medical recruiting software',
    ],
    problems: [
      'Healthcare recruiters often need to compare applicants across credentials, role requirements, availability, and communication signals.',
      'Generic ATS workflows can hide the details that matter for clinical and care-adjacent roles.',
      'Recruiters need structured evidence before sending candidates to facilities or hiring managers.',
    ],
    outcomes: [
      'Screen resumes against role-specific clinical, operational, and availability criteria.',
      'Use pre-screening to collect practical qualification context before recruiter review.',
      'Run structured AI interviews for deeper scenario, technical, and communication evidence where appropriate.',
      'Keep recruiters in control of every final shortlist and hiring recommendation.',
    ],
    workflow: [
      'Define role requirements, required experience, location, shift, and availability signals.',
      'Collect applications and resumes through a consistent candidate flow.',
      'Review AI-assisted fit summaries against the healthcare role criteria.',
      'Use pre-screening or AI interviews to gather deeper evidence for qualified candidates.',
      'Share a recruiter-reviewed shortlist with notes, transcript context, and next-step guidance.',
    ],
    faq: [
      {
        q: 'Is Hiriq only for general business hiring?',
        a: 'No. Hiriq can support healthcare staffing and healthcare recruitment workflows where teams need structured resume screening, qualification evidence, and interview review.',
      },
      {
        q: 'Does Hiriq replace credentialing or compliance systems?',
        a: 'No. Hiriq helps with recruiting screening and interview evidence. Teams should continue using their required credentialing, compliance, and employment verification processes.',
      },
      {
        q: 'Can Hiriq support nurse staffing workflows?',
        a: 'Yes. Hiriq can help screen candidates against nursing or care-role requirements, then give recruiters structured context before facility or hiring-manager review.',
      },
      {
        q: 'Is Hiriq a healthcare credentialing system?',
        a: 'No. Hiriq supports applicant tracking, recruiting screening, pre-screening, and interview review. Formal license, credential, background, and compliance verification should remain in the systems and processes required by the employer.',
      },
      {
        q: 'Can healthcare recruitment software support high-volume hiring?',
        a: 'Yes. Hiriq can apply role-specific criteria across larger applicant pools and organize qualification evidence before a healthcare recruiter or hiring manager reviews the shortlist.',
      },
    ],
  },
  {
    slug: 'staffing-agencies',
    shortTitle: 'Staffing Agencies',
    title: 'ATS for staffing agencies with screening and AI interviews',
    metaTitle: 'ATS for Staffing Agencies | Screening & AI Interviews | Hiriq',
    metaDescription:
      'Hiriq helps staffing and recruitment agencies qualify candidates with resume screening, pre-screening, AI interviews, and recruiter-ready shortlist evidence.',
    eyebrow: 'Staffing agency software',
    lead:
      'Hiriq gives staffing agencies a cleaner way to turn inbound applicants into client-ready candidate evidence, while recruiters keep ownership of submission quality.',
    market: 'Useful for recruitment agencies, staffing firms, boutique search teams, and multi-role hiring teams across the USA, UK, Middle East, and remote markets.',
    primaryKeyword: 'staffing agency software',
    searchTerms: [
      'staffing agency software',
      'ATS for staffing agencies',
      'recruitment agency software',
      'recruiting automation for staffing agencies',
      'candidate screening for staffing agencies',
      'recruiter automation software',
    ],
    problems: [
      'Agency recruiters need to qualify applicants quickly without sending weak evidence to clients.',
      'Candidate notes, resumes, screening answers, and interview context are often split across tools.',
      'Recruiters need repeatable workflows across many open roles without making every role feel generic.',
    ],
    outcomes: [
      'Standardize intake and qualification across agency roles.',
      'Build stronger candidate submissions with resume, screening, and interview evidence.',
      'Reduce repetitive early-funnel work before recruiter judgment is needed.',
      'Support client-facing shortlists with clearer candidate context.',
    ],
    workflow: [
      'Create role criteria based on the client requirement.',
      'Collect applicants and resumes through a structured application path.',
      'Screen candidate fit and qualification evidence.',
      'Run pre-screening or AI interviews for candidates who need deeper review.',
      'Prepare recruiter-reviewed shortlists for client or hiring-manager conversations.',
    ],
    faq: [
      {
        q: 'Can staffing agencies use Hiriq across multiple client roles?',
        a: 'Yes. Hiriq is designed around role-specific criteria, so agencies can create different screening workflows for different client requirements.',
      },
      {
        q: 'Does Hiriq write final client submissions automatically?',
        a: 'No. Hiriq organizes candidate evidence and recommendations so recruiters can review, edit, and decide what to send forward.',
      },
      {
        q: 'Is Hiriq useful for boutique recruitment agencies?',
        a: 'Yes. Smaller agencies can use Hiriq to reduce repetitive screening work while keeping a high-touch recruiter review process.',
      },
    ],
  },
  {
    slug: 'high-volume-hiring',
    shortTitle: 'High-Volume Hiring',
    title: 'High-volume hiring software for consistent candidate screening',
    metaTitle: 'High-Volume Hiring Software for Screening | Hiriq',
    metaDescription:
      'Hiriq helps high-volume hiring teams screen applicants, prioritize qualified candidates, and review structured evidence before live interviews.',
    eyebrow: 'High-volume hiring software',
    lead:
      'Hiriq helps teams handle applicant volume with repeatable criteria, early qualification, and shortlist evidence instead of manual sorting alone.',
    market: 'Designed for recruiters hiring across operations, healthcare, sales, BPO, retail, support, technology, and multi-location teams.',
    primaryKeyword: 'high-volume hiring software',
    searchTerms: [
      'high-volume hiring software',
      'high-volume recruitment software',
      'high-volume candidate screening',
      'bulk applicant screening',
      'AI hiring automation',
    ],
    problems: [
      'Applicant volume can overwhelm recruiters before they reach qualified candidates.',
      'Manual first-pass screening is hard to keep consistent across many similar applications.',
      'Hiring managers need faster shortlists without losing visibility into why candidates were advanced.',
    ],
    outcomes: [
      'Apply the same job criteria across large applicant pools.',
      'Prioritize candidates who meet role requirements and practical qualification signals.',
      'Use automated pre-screening to reduce low-signal live calls.',
      'Give recruiters and hiring managers evidence they can inspect before next steps.',
    ],
    workflow: [
      'Define must-have and nice-to-have criteria before applications are reviewed.',
      'Collect resumes and answers in one candidate flow.',
      'Screen large applicant pools against the role criteria.',
      'Route stronger candidates into pre-screening, AI interviews, or recruiter review.',
      'Review shortlist evidence before scheduling live conversations.',
    ],
    faq: [
      {
        q: 'What makes Hiriq useful for high-volume hiring?',
        a: 'Hiriq helps teams apply consistent criteria, organize candidate evidence, and reduce repetitive early-funnel review across large applicant pools.',
      },
      {
        q: 'Can Hiriq handle different role types?',
        a: 'Yes. Recruiters can define role-specific criteria so high-volume workflows do not become one generic filter.',
      },
      {
        q: 'Does Hiriq automatically reject candidates?',
        a: 'Hiriq is designed to support recruiter review and recommendations. Hiring teams remain responsible for decisions and candidate communication.',
      },
    ],
  },
  {
    slug: 'candidate-pre-screening-software',
    shortTitle: 'Pre-Screening',
    title: 'Candidate pre-screening software before AI interviews',
    metaTitle: 'Candidate Pre-Screening Software for Recruiters | Hiriq',
    metaDescription:
      'Hiriq candidate pre-screening software helps recruiters qualify applicants on availability, requirements, experience, and role fit before deeper interviews.',
    eyebrow: 'Candidate pre-screening software',
    lead:
      'Hiriq separates quick qualification from deeper AI interviews, so recruiters can confirm practical fit before spending time on longer interview evidence.',
    market: 'Useful for recruiters, founders, agencies, and hiring teams that need faster early qualification across remote or regional candidate pools.',
    primaryKeyword: 'candidate pre-screening software',
    searchTerms: [
      'candidate pre-screening software',
      'recruitment pre-screening software',
      'automated candidate pre-screening',
      'pre-employment screening questions',
      'AI candidate qualification',
    ],
    problems: [
      'Recruiters lose time scheduling candidates who miss practical requirements for the role.',
      'Early qualification questions are often repeated manually across every applicant.',
      'Teams need a clear separation between quick pre-screening and deeper structured interviews.',
    ],
    outcomes: [
      'Collect availability, work setup, experience, compensation, and requirement-fit context earlier.',
      'Route only stronger candidates into AI interviews or recruiter conversations.',
      'Give recruiters a compact qualification summary before next-step decisions.',
      'Keep AI interviews focused on deeper technical, behavioral, and scenario evidence.',
    ],
    workflow: [
      'Define practical qualification questions for the role.',
      'Invite applicants into a short pre-screening step.',
      'Collect structured answers before live recruiter calls.',
      'Review fit signals and decide who should enter AI interviews or human interviews.',
      'Keep the final decision with the recruiter or hiring manager.',
    ],
    faq: [
      {
        q: 'How is pre-screening different from an AI interview?',
        a: 'Pre-screening confirms practical role fit such as availability, requirements, and basic qualification signals. Hiriq AI Interviews are deeper live conversational interviews with adaptive follow-ups and scorecards.',
      },
      {
        q: 'Can Hiriq use pre-screening before resume review?',
        a: 'Teams can use pre-screening alongside resume review depending on the hiring workflow and the information they need first.',
      },
      {
        q: 'Does pre-screening make hiring decisions?',
        a: 'No. It gathers structured qualification evidence for recruiter and hiring-manager review.',
      },
    ],
  },
  {
    slug: 'usa-uk-ai-hiring',
    shortTitle: 'USA and UK AI Hiring',
    title: 'AI recruitment software for US and UK hiring teams',
    metaTitle: 'AI Recruitment Software for US & UK Hiring Teams | Hiriq',
    metaDescription:
      'Hiriq helps US and UK employers track applicants, screen resumes and CVs, qualify candidates, and run live AI interviews with recruiter-reviewed evidence.',
    eyebrow: 'USA and UK AI hiring',
    lead:
      'Hiriq connects applicant tracking, resume and CV screening, practical pre-screening, and live AI interviews for US and UK recruiting teams.',
    market: 'For US employers, UK recruitment agencies, and distributed hiring teams coordinating applications across locations and time zones.',
    primaryKeyword: 'AI hiring platform USA UK',
    searchTerms: [
      'AI hiring platform USA',
      'AI recruitment software UK',
      'recruitment software UK',
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
      {
        q: 'Can US and UK recruiters use the same applicant tracking workflow?',
        a: 'Yes. Teams can track applications, review resumes or CVs, and collect interview evidence in one workflow while setting requirements for each role. Recruiters review results before deciding the next step.',
      },
    ],
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
