import { blogPosts } from './blog/blogPosts';

export type SiteSearchItem = {
  title: string;
  href: string;
  description: string;
  keywords: string;
};

export const siteSearchItems: SiteSearchItem[] = [
  {
    title: 'Software Comparisons',
    href: '/compare',
    description: 'Neutral comparisons of AI recruiting, screening, and interview platforms.',
    keywords: 'compare comparison alternatives vs best ai interview software screening tools',
  },
  {
    title: 'Best AI Interview Software',
    href: '/compare/best-ai-interview-software',
    description: 'AI interview platforms compared by what each one actually evaluates.',
    keywords: 'best ai interview software ai interview tools automated interview platform comparison',
  },
  {
    title: 'HireVue Alternatives',
    href: '/compare/hirevue-alternatives',
    description: 'Eight HireVue alternatives compared on evaluation depth, funnel stage, and team size.',
    keywords: 'hirevue alternatives hirevue competitors video interview alternatives',
  },
  {
    title: 'Paradox AI Alternatives',
    href: '/compare/paradox-ai-alternatives',
    description: 'Alternatives to Paradox and Olivia for high-volume hiring and candidate evaluation.',
    keywords: 'paradox ai alternatives olivia alternatives conversational hiring assistant',
  },
  {
    title: 'Best AI Candidate Screening Tools',
    href: '/compare/best-ai-candidate-screening-tools',
    description: 'Resume screening, assessments, and conversational screening compared.',
    keywords: 'best ai candidate screening tools screening software comparison resume screening tools',
  },
  {
    title: 'Press and Coverage',
    href: '/press',
    description: 'Published commentary, media coverage, and directory listings for Hiriq.',
    keywords: 'press media coverage news hiriq ayesha khaldoon staffing hub interview',
  },
  {
    title: 'Hiring Platform',
    href: '/hiring-platform',
    description: 'AI resume screening, candidate matching, pre-screening, and recruiter workflows.',
    keywords: 'ats recruitment platform hiring candidate screening interviews automation',
  },
  {
    title: 'AI Recruiting Software',
    href: '/solutions/ai-recruiting-software',
    description: 'Recruiting automation for resume screening, AI interviews, and evidence-backed shortlists.',
    keywords: 'ai recruiting software recruitment platform hiring automation shortlist',
  },
  {
    title: 'AI ATS',
    href: '/solutions/ai-ats',
    description: 'Applicant tracking with AI screening, candidate ranking, and recruiter workflow support.',
    keywords: 'ai ats applicant tracking system candidate ranking recruiting software',
  },
  {
    title: 'AI Resume Screening',
    href: '/solutions/ai-resume-screening',
    description: 'Screen resumes against role criteria and build faster candidate shortlists.',
    keywords: 'ai resume screening cv screening candidate matching shortlist',
  },
  {
    title: 'Candidate Screening Software',
    href: '/solutions/candidate-screening-software',
    description: 'Qualify applicants with resume screening, automated pre-screening, and shortlist evidence.',
    keywords: 'candidate screening software candidate screening tools ai candidate screening',
  },
  {
    title: 'Candidate Pre-Screening Software',
    href: '/solutions/candidate-pre-screening-software',
    description: 'Qualify applicants on availability, requirements, experience, and role fit before deeper interviews.',
    keywords: 'candidate pre-screening software recruitment pre-screening automated qualification screening questions',
  },
  {
    title: 'Recruiting Automation Software',
    href: '/solutions/recruiting-automation-software',
    description: 'Automate candidate intake, resume screening, pre-screening interviews, and shortlist workflows.',
    keywords: 'recruiting automation software recruitment automation hiring automation',
  },
  {
    title: 'AI Interview Platform',
    href: '/solutions/ai-interview-platform',
    description: 'Live conversational AI interviews with adaptive follow-ups, scorecards, transcripts, and integrity flags.',
    keywords: 'ai interview platform live ai interviews conversational interviews transcript scorecard',
  },
  {
    title: 'Healthcare Recruitment Software',
    href: '/solutions/healthcare-staffing-agencies',
    description: 'Screen healthcare applicants and prepare recruiter-reviewed evidence for clinical and care-adjacent roles.',
    keywords: 'healthcare staffing software healthcare recruitment software nurse staffing candidate screening',
  },
  {
    title: 'ATS for Staffing Agencies',
    href: '/solutions/staffing-agencies',
    description: 'Screen, qualify, and prepare candidate evidence for staffing agency client submissions.',
    keywords: 'ats for staffing agencies staffing agency software recruitment agency software recruiter automation candidate submissions',
  },
  {
    title: 'High-Volume Hiring Software',
    href: '/solutions/high-volume-hiring',
    description: 'Apply consistent criteria across large applicant pools and build recruiter-ready shortlists.',
    keywords: 'high-volume hiring software high-volume recruitment bulk applicant screening hiring automation',
  },
  {
    title: 'Middle East ATS and AI Recruiting',
    href: '/solutions/middle-east-ai-hiring',
    description: 'Applicant tracking, CV screening, and live AI interviews for employers and agencies across the Gulf and wider Middle East.',
    keywords: 'ats applicant tracking ai hiring middle east uae qatar saudi arabia kuwait bahrain oman recruitment',
  },
  {
    title: 'US and UK AI Recruitment Software',
    href: '/solutions/usa-uk-ai-hiring',
    description: 'AI recruiting workflows for hiring teams in the United States, United Kingdom, and remote markets.',
    keywords: 'ai hiring usa uk recruitment software ats interview screening',
  },
  {
    title: 'Industries',
    href: '/industries',
    description: 'Industry-specific hiring workflows for tech, healthcare, finance, logistics, retail, and sales.',
    keywords: 'industry workflows tech healthcare finance logistics retail sales',
  },
  {
    title: 'AI Interviews',
    href: '/automated-interviews',
    description: 'Live 30-minute AI interviews with industry-specific questions, adaptive follow-ups, scoring, and recruiter oversight.',
    keywords: 'live ai interviews conversational interview engine integrity flags recruiter scorecard',
  },
  {
    title: 'Pricing',
    href: '/pricing',
    description: 'Starter, Teams, and Enterprise plans for different hiring volumes.',
    keywords: 'price pricing cost starter teams enterprise plan',
  },
  {
    title: 'Candidates',
    href: '/for-candidates',
    description: 'Interview practice, resume tools, and waitlist for job seekers.',
    keywords: 'candidate interview practice resume waitlist',
  },
  {
    title: 'Blog',
    href: '/blog',
    description: 'Recruiting trends, hiring best practices, and AI recruiting guides.',
    keywords: 'blog articles recruitment trends best practices',
  },
  {
    title: 'Link to Hiriq',
    href: '/resources/link-to-hiriq',
    description: 'Brand, citation, backlink, and directory listing resources for Hiriq.',
    keywords: 'backlinks citation resources media kit brand directory listing ai recruiting software',
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'Reach the Hiriq team for sales, support, demos, and partnerships.',
    keywords: 'contact support demo sales email phone',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy',
    description: 'How Hiriq handles personal data, cookies, analytics, and security.',
    keywords: 'privacy cookies data analytics security',
  },
  {
    title: 'Terms of Service',
    href: '/terms',
    description: 'Service terms, account responsibilities, usage rules, and legal information.',
    keywords: 'terms legal service agreement account password',
  },
  ...blogPosts.map((post) => ({
    title: post.title,
    href: `/blog/${post.slug}`,
    description: post.excerpt,
    keywords: (post.keywords || [post.category]).join(' '),
  })),
];
