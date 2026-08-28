export type PressItem = {
  id: string;
  type: 'Article' | 'ProfilePage';
  outlet: string;
  outletUrl: string;
  title: string;
  url: string;
  datePublished: string;
  displayDate: string;
  author?: string;
  authorRole?: string;
  summary: string;
  takeaways: string[];
  topic: string;
};

export const pressItems: PressItem[] = [
  {
    id: 'staffinghub-more-recruiters',
    type: 'Article',
    outlet: 'Staffing Hub',
    outletUrl: 'https://staffinghub.com',
    title: 'Why Adding More Recruiters Is Making Your Firm Fall Behind',
    url: 'https://staffinghub.com/guest-posts/why-adding-more-recruiters-is-making-your-firm-fall-behind/',
    datePublished: '2026-08-28',
    displayDate: 'August 28, 2026',
    author: 'Ayesha Khaldoon',
    authorRole: 'Co-Founder and CEO, Hiriq',
    summary:
      'Hiriq co-founder Ayesha Khaldoon argues in Staffing Hub that staffing firms are scaling headcount instead of fixing the qualification step, and that the metric worth managing is time-to-qualify rather than time-to-fill.',
    takeaways: [
      'Adding recruiters replicates a broken qualification workflow at a larger scale instead of removing the bottleneck.',
      'Time-to-qualify, the gap between application and verified candidate readiness, is the number that predicts submission speed.',
      'Verification and evaluation should be separate steps so recruiter conversations start at judgment, not discovery.',
      'Submission acceptance rate is a more honest quality signal than raw submission volume.',
    ],
    topic: 'Staffing operations and recruiter productivity',
  },
  {
    id: 'boardroompk-founder-interview',
    type: 'Article',
    outlet: 'Boardroom',
    outletUrl: 'https://boardroompk.com',
    title: 'Intelligent. Human-Centered. Hiring. | Ayesha Khaldoon | Founder of Hiriq',
    url: 'https://boardroompk.com/site/startups/intelligent-human-centered-hiring-ayesha-khaldoon-founder-of-hiriq',
    datePublished: '2026-01-01',
    displayDate: '2026',
    author: 'Boardroom',
    summary:
      'A founder interview covering why Hiriq was built, how AI screening should support recruiter judgment rather than replace it, and what human-centered hiring looks like in practice.',
    takeaways: [
      'Hiriq was built around recruiter oversight, transcripts, and reviewable evidence.',
      'The goal is structured early-funnel screening, not automated hiring decisions.',
    ],
    topic: 'Founder story and product philosophy',
  },
  {
    id: 'theorg-company-profile',
    type: 'ProfilePage',
    outlet: 'The Org',
    outletUrl: 'https://theorg.com',
    title: 'Hiriq company profile on The Org',
    url: 'https://theorg.com/org/hiriq',
    datePublished: '2026-01-01',
    displayDate: '2026',
    summary:
      'Hiriq is listed on The Org, the public directory of company org charts, with the company overview and leadership team.',
    takeaways: [
      'Hiriq is described as hiring infrastructure for teams that have outgrown manual recruiting.',
      'Ayesha Khaldoon is listed as Co-Founder and CEO.',
    ],
    topic: 'Company directory listing',
  },
];
