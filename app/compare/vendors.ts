// Neutral, publicly-stated positioning for platforms in the AI screening and
// interviewing category. Descriptions summarise how each vendor markets itself.
// No pricing, ratings, or performance claims are asserted here, because those
// change often and cannot be verified from a competitor's marketing site.

export type Vendor = {
  id: string;
  name: string;
  url: string;
  category: string;
  positioning: string;
  evaluates: string;
  format: string;
  bestFor: string;
  considerations: string;
  isHiriq?: boolean;
};

export const vendors: Record<string, Vendor> = {
  hiriq: {
    id: 'hiriq',
    name: 'Hiriq',
    url: 'https://hiriq.co',
    category: 'AI screening and live AI interviews',
    positioning:
      'Recruiting workflow that covers role criteria setup, resume match analysis, automated pre-screening, and a live conversational AI interview, with transcripts and per-answer scoring returned to the recruiter.',
    evaluates: 'The candidate, against criteria the recruiter defines before applications open',
    format: 'Branded application flow plus a live, adaptive AI interview session in the browser',
    bestFor:
      'Teams and agencies that want the qualification step, not just the interview recording, handled before a recruiter spends time',
    considerations:
      'A newer platform than the long-established enterprise suites, and focused on early-funnel screening rather than full HRIS or payroll functionality.',
    isHiriq: true,
  },
  hirevue: {
    id: 'hirevue',
    name: 'HireVue',
    url: 'https://www.hirevue.com',
    category: 'Enterprise video interviewing and assessments',
    positioning:
      'Long-established enterprise platform combining structured video interviews, game-based and skills assessments, and scheduling automation.',
    evaluates: 'The candidate, through structured interviews and assessment batteries',
    format: 'On-demand and live video interviews, plus separate assessment products',
    bestFor: 'Large enterprises with dedicated talent-assessment teams and heavy compliance requirements',
    considerations:
      'Built for enterprise scale and procurement cycles, which can be more platform than a small or mid-sized firm needs.',
  },
  paradox: {
    id: 'paradox',
    name: 'Paradox (Olivia)',
    url: 'https://www.paradox.ai',
    category: 'Conversational hiring assistant',
    positioning:
      'Conversational assistant focused on high-volume hourly hiring: capturing applicants over chat and text, asking knockout questions, and automating interview scheduling.',
    evaluates: 'Applicant eligibility and availability, largely through structured chat questions',
    format: 'Chat and SMS conversations, often embedded in career sites',
    bestFor: 'Retail, hospitality, warehousing, and other hourly hiring at very large scale',
    considerations:
      'Optimised for speed and scheduling throughput rather than deep evaluation of a candidate answer.',
  },
  sapia: {
    id: 'sapia',
    name: 'Sapia.ai',
    url: 'https://sapia.ai',
    category: 'Chat-based blind interviews',
    positioning:
      'Text-based structured interviews designed to reduce first-impression bias by removing video and voice from the initial stage.',
    evaluates: 'The candidate, from written answers to structured questions',
    format: 'Untimed chat interview, with personality and communication insights',
    bestFor: 'Organisations with a formal bias-reduction or fair-hiring mandate in the first round',
    considerations:
      'A text-only first round gives less signal on spoken communication for roles where that matters.',
  },
  sparkHire: {
    id: 'sparkHire',
    name: 'Spark Hire',
    url: 'https://www.sparkhire.com',
    category: 'One-way video interviewing',
    positioning:
      'Established one-way and live video interviewing tool aimed at small and mid-sized teams, with reviewer collaboration features.',
    evaluates: 'Nothing automatically. Humans review recorded answers.',
    format: 'Recorded answers to a fixed question set',
    bestFor: 'Teams that want asynchronous video to replace scheduling, with humans doing the scoring',
    considerations:
      'Recruiters still watch every video, so reviewer time scales with applicant volume.',
  },
  willo: {
    id: 'willo',
    name: 'Willo',
    url: 'https://www.willo.video',
    category: 'Async video interviewing',
    positioning:
      'Lightweight asynchronous video and audio interviewing with a simple setup and a low entry price point.',
    evaluates: 'Nothing automatically by default. Humans review submissions.',
    format: 'Recorded video, audio, or text answers to preset questions',
    bestFor: 'Small teams and agencies that need async video without a large platform commitment',
    considerations:
      'Deliberately narrow in scope. It is an interviewing tool rather than a screening workflow.',
  },
  hireflix: {
    id: 'hireflix',
    name: 'Hireflix',
    url: 'https://hireflix.com',
    category: 'One-way video interviewing',
    positioning: 'Focused one-way video interview product with ATS integrations and a straightforward reviewer experience.',
    evaluates: 'Nothing automatically. Humans review recorded answers.',
    format: 'Recorded answers to a fixed question set',
    bestFor: 'Teams that want async video that integrates cleanly with an existing ATS',
    considerations: 'Interview capture only. Resume screening and qualification live elsewhere.',
  },
  brighthire: {
    id: 'brighthire',
    name: 'BrightHire',
    url: 'https://brighthire.com',
    category: 'Interview intelligence',
    positioning:
      'Records, transcribes, and analyses live human interviews to improve interviewer consistency and hiring decisions.',
    evaluates: 'The interview itself, and increasingly the candidate through screening products',
    format: 'Recording and analysis layered on live interviews',
    bestFor: 'Teams improving the quality and consistency of interviews their own people run',
    considerations: 'Assumes a human is running the interview, so it does not remove first-round interviewer load.',
  },
  metaview: {
    id: 'metaview',
    name: 'Metaview',
    url: 'https://www.metaview.ai',
    category: 'Interview notes and intelligence',
    positioning: 'AI notetaking for recruiter and hiring-manager interviews, producing structured summaries and scorecards.',
    evaluates: 'The conversation, by documenting it. Scoring stays with the interviewer.',
    format: 'Notetaking layered on live interviews and calls',
    bestFor: 'Teams that want better interview records without changing who runs the interview',
    considerations: 'Documentation rather than screening. Applicant volume still reaches a human first.',
  },
  heymilo: {
    id: 'heymilo',
    name: 'HeyMilo',
    url: 'https://www.heymilo.ai',
    category: 'AI voice and video screening',
    positioning: 'AI agents that run voice or video screening conversations with candidates and pass results to the ATS.',
    evaluates: 'The candidate, through an automated conversation',
    format: 'AI-led voice or video interviews',
    bestFor: 'Staffing and high-volume teams wanting automated first-round conversations',
    considerations: 'Screening-stage focus, so requisition and pipeline management typically stay in a separate ATS.',
  },
  harver: {
    id: 'harver',
    name: 'Harver',
    url: 'https://harver.com',
    category: 'Pre-employment assessments',
    positioning: 'Assessment-led screening using job-fit, situational judgement, and skills tests earlier in the funnel.',
    evaluates: 'The candidate, through validated assessments rather than conversation',
    format: 'Assessment batteries, sometimes paired with video',
    bestFor: 'High-volume employers standardising on psychometric and situational assessment',
    considerations: 'Assessment completion adds a step that can affect drop-off in candidate-short markets.',
  },
  workable: {
    id: 'workable',
    name: 'Workable',
    url: 'https://www.workable.com',
    category: 'ATS with AI features',
    positioning: 'Full applicant tracking system with job distribution, pipeline management, and AI screening features built in.',
    evaluates: 'Candidates, through AI ranking layered on the ATS record',
    format: 'ATS workflow with AI assistance',
    bestFor: 'Teams that need a complete ATS of record first and AI screening second',
    considerations: 'Breadth across the whole hiring lifecycle rather than depth in the interview stage.',
  },
  eightfold: {
    id: 'eightfold',
    name: 'Eightfold.ai',
    url: 'https://eightfold.ai',
    category: 'Talent intelligence',
    positioning: 'Skills-based talent intelligence across hiring, internal mobility, and workforce planning.',
    evaluates: 'Candidate and employee skills profiles at an organisational level',
    format: 'Talent data platform with matching and recommendations',
    bestFor: 'Large enterprises running talent strategy, not just requisition-level hiring',
    considerations: 'An enterprise data platform, with the implementation effort that implies.',
  },
};

export const vendorList = Object.values(vendors);
