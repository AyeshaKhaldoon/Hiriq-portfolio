export interface BlogSection {
  heading: string;
  links?: Array<{ label: string; href: string }>;
  content: string;
  bulletPoints?: string[];
  stats?: Array<{ label: string; description: string }>;
  conclusion?: string;
  highlight?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  updated?: string;
  keywords?: string[];
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    type?: 'Person' | 'Organization';
  };
  content: {
    intro: string;
    sections: BlogSection[];
  };
}

// Blog posts data
export const legacyBlogPosts: BlogPost[] = [
  {
    slug: 'ai-transforming-recruitment-2026',
    title: 'How AI is Transforming Recruitment in 2026',
    excerpt: 'Discover the latest trends in AI-powered recruiting and how automated screening is changing the hiring landscape.',
    category: 'Industry Trends',
    date: '2026-01-02',
    updated: '2026-09-07',
    readTime: '5 min read',
    image: '/4.jpg',
    author: {
      name: 'Hiriq',
      avatar: '/Logo.png',
      type: 'Organization'
    },
    content: {
      intro: "The recruitment landscape has changed quickly as artificial intelligence moves from experimental tooling into everyday hiring workflows. If you're still manually screening large applicant pools or repeating the same preliminary calls, it is worth asking where structured automation can give recruiters better evidence earlier.",
      sections: [
        {
          heading: 'The Death of Manual Resume Screening',
          content: "Let's start with a practical truth: many hiring funnels create more applicant volume than recruiters can review with care. When resumes arrive faster than the team can compare them, strong candidates can be missed and weak-fit candidates can still consume live interview time.",
          bulletPoints: [
            'Skills context and relevance rather than just keywords',
            'Career trajectory patterns that indicate growth potential',
            'Communication and role-context signals that help recruiters prepare better follow-up questions',
            'Review flags where information needs clarification before a candidate moves forward'
          ],
          conclusion: 'The result is a more structured first pass: recruiters get clearer evidence earlier, while final judgment stays with people who understand the role and hiring context.'
        },
        {
          heading: 'Automated Pre-Screening: The Game Changer',
          content: "This is where automation becomes practical. Teams can move repetitive first-round qualification into structured conversational AI workflows, then reserve human time for the candidates who need deeper judgment and relationship-building.",
          stats: [
            { label: 'Faster review', description: 'when repetitive first screens move into structured workflows' },
            { label: 'More consistency', description: 'when candidates answer comparable role-specific questions' },
            { label: 'Clearer context', description: 'when transcripts and summaries are available before review' },
            { label: 'Less scheduling drag', description: 'when early screening is not blocked by calendar availability' }
          ]
        },
        {
          heading: 'The Bottom Line',
          content: "AI in recruitment is becoming a normal part of the modern hiring stack. The teams that use it well will combine speed with transparency: clear criteria, reviewable evidence, human oversight, and candidate communication that does not disappear into a black box."
        }
      ]
    }
  },
  {
    slug: 'reduce-time-to-hire',
    title: 'How to Reduce Time-to-Hire: Screening and Review',
    excerpt: 'Learn practical tactics to speed up your recruitment process without compromising candidate quality.',
    category: 'Best Practices',
    date: '2025-12-28',
    updated: '2026-09-07',
    readTime: '7 min read',
    image: '/5.webp',
    author: {
      name: 'Hiriq',
      avatar: '/Logo.png',
      type: 'Organization'
    },
    content: {
      intro: 'Time-to-hire can quietly damage recruitment performance. Every extra day a position remains open can affect productivity, projects, and team workload. These strategies focus on reducing avoidable delays while keeping candidate review thoughtful.',
      sections: [
        {
          heading: '1. Automate Resume Screening',
          content: 'The old way: recruiters manually sort applications, often searching for keywords and qualifications under time pressure. The better way: AI-assisted screening compares candidates against role criteria and gives recruiters structured fit evidence for review.',
          highlight: 'Best for roles with high applicant volume'
        },
        {
          heading: '2. Automate Initial Qualification with Pre-Screening',
          content: 'The traditional phone screen can become a scheduling bottleneck. Automated pre-screening lets candidates answer practical qualification questions earlier, then gives recruiters clearer context before deciding who needs a live conversation.',
          highlight: 'Best for early qualification and calendar-heavy workflows'
        },
        {
          heading: 'The Bottom Line',
          content: "Reducing time-to-hire isn't about cutting corners—it's about eliminating waste. The companies winning the war for talent in 2026 aren't necessarily the biggest or best-known. They're the fastest and most efficient. Every day you shave off your hiring process is a day you gain competitive advantage.",
          highlight: 'Pilot one role and measure review time, completion rates, and candidate progression.'
        }
      ]
    }
  },
  {
    slug: 'cost-of-bad-hire',
    title: 'The Real Cost of a Bad Hire (And How to Prevent It)',
    excerpt: "Bad hires cost companies thousands. Here's how AI-powered screening helps you avoid costly mistakes.",
    category: 'Recruiting Tips',
    date: '2025-12-20',
    updated: '2026-09-07',
    readTime: '6 min read',
    image: '/time.png',
    author: {
      name: 'Hiriq',
      avatar: '/Logo.png',
      type: 'Organization'
    },
    content: {
      intro: "Every recruiter has been there: you filled a role quickly, everyone was relieved to have someone in the seat, and then three months later you realize you've made a costly mistake. The person isn't performing, team morale is suffering, and now you have to start the whole process over again. The full cost depends on the role, compensation, ramp-up time, and the work delayed while the position is vacant.",
      sections: [
        {
          heading: 'The Obvious Costs',
          content: 'Most companies only calculate the direct, visible costs when measuring the impact of a bad hire. These are easy to quantify but represent just the tip of the iceberg.',
          bulletPoints: [
            'Recruiting costs: job advertising, recruiter fees, and interview hours',
            'Onboarding costs: training materials, trainer hours, and ramp-up time',
            'Separation costs: applicable administration and transition expenses',
            'Replacement costs: Another full recruiting cycle'
          ],
          highlight: 'Use your actual expenses and hours to estimate costs; avoid applying a universal multiplier.'
        },
        {
          heading: 'The Bottom Line',
          content: 'A bad hire doesn\'t just cost money—it costs momentum, morale, and market opportunity. In 2026\'s competitive talent landscape, you literally cannot afford to get hiring wrong. The companies winning the talent war are those that invest in preventing bad hires, not just filling seats quickly.',
          highlight: 'Compare screening costs with measured changes in review time and hiring outcomes.'
        }
      ]
    }
  }
];
