import { newPosts } from './articles';

// Single source of truth for Hiriq blog content.
// Both /blog and /blog/[slug] read from this file so listings and articles
// can never drift apart.

export type BlogSection = {
  heading: string;
  content: string;
  bulletPoints?: string[];
  stats?: Array<{ label: string; description: string }>;
  conclusion?: string;
  highlight?: string;
  links?: Array<{ href: string; label: string; source?: string; external?: boolean }>;
};

export type BlogAuthor = {
  type?: 'Person' | 'Organization';
  name: string;
  role: string;
  avatar: string;
  profileUrl?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  isoDate: string;
  isoModified: string;
  readTime: string;
  image: string;
  keywords: string[];
  author: BlogAuthor;
  content: {
    intro: string;
    sections: BlogSection[];
  };
};

export const authors: Record<string, BlogAuthor> = {
  ayesha: {
    name: 'Ayesha Khaldoon',
    role: 'Co-Founder and CEO, Hiriq',
    avatar: '/team/ayesha-khaldoon.jpg',
    profileUrl: 'https://pk.linkedin.com/in/ayesha-khaldoon',
  },
  ahmad: {
    name: 'Muhammad Ahmad',
    role: 'Co-Founder and CTO, Hiriq',
    avatar: '/team/muhammad-ahmad.jpg',
  },
};

export const blogPosts: BlogPost[] = [
  ...newPosts,
  {
    slug: 'time-to-qualify',
    title: 'Time-to-Qualify: The Metric That Predicts Hiring Speed',
    excerpt:
      'Time-to-fill measures things you do not control. Time-to-qualify measures the one stage you do. Here is how to define it, instrument it, and shorten it.',
    category: 'Best Practices',
    date: 'Aug 29, 2026',
    isoDate: '2026-08-29',
    isoModified: '2026-08-29',
    readTime: '9 min read',
    image: '/time.png',
    keywords: [
      'time to qualify',
      'time to fill vs time to qualify',
      'recruiting metrics',
      'staffing agency metrics',
      'submission acceptance rate',
      'recruiter productivity',
    ],
    author: authors.ayesha,
    content: {
      intro:
        'Almost every recruiting dashboard leads with time-to-fill. It is the wrong headline number, because most of it is outside your control. A req stays open while a client reschedules a panel, while a hiring manager takes a week to review, while a candidate finishes another process. None of that is a recruiting performance problem, and no amount of recruiter effort compresses it. Time-to-qualify is different: it measures the stretch between an application arriving and that candidate being verified as ready to submit. That stretch belongs entirely to your team, and it is where hiring speed is actually won or lost.',
      sections: [
        {
          heading: 'Defining the metric precisely',
          content:
            'Time-to-qualify is the elapsed time between an application landing in your pipeline and a recruiter having enough verified evidence to submit or advance that candidate with confidence. It ends at verified readiness, not at first contact and not at a recruiter having skimmed a resume. The distinction matters, because a fast first response with nothing verified simply defers the work.',
          bulletPoints: [
            'Starts when the application is received, not when a recruiter opens it',
            'Ends when availability, compensation expectation, work authorisation, and core competency are all confirmed',
            'Measured per candidate, then reported as a median rather than a mean so a few stalled records do not distort it',
            'Tracked separately for sourced candidates and inbound applicants, because the starting evidence differs',
          ],
          conclusion:
            'If you cannot say what "qualified" means for a given role in writing, the metric cannot be measured, which is usually the first thing this exercise exposes.',
        },
        {
          heading: 'Why time-to-fill hides the problem',
          content:
            'Time-to-fill aggregates your work and your client’s work into one number, so improvements in one can be masked by delays in the other. A team that halves its qualification time can watch time-to-fill stay flat because the client’s interview loop absorbed the gain. The team concludes the change did not work and reverts. Splitting the metric prevents that.',
          stats: [
            {
              label: 'Inside your control',
              description:
                'Application to verified readiness. Screening depth, criteria clarity, recruiter availability, and how quickly a candidate can be reached.',
            },
            {
              label: 'Outside your control',
              description:
                'Client or hiring-manager review speed, panel scheduling, offer approval cycles, and the candidate’s own decision timeline.',
            },
          ],
          conclusion:
            'Report both. Improve the half you own, and use the other half as evidence when a client asks why a role is still open.',
        },
        {
          heading: 'The four practices that shorten it',
          content:
            'Firms that qualify quickly tend to share the same operating habits, and none of them require more headcount. This is the argument I made in a guest article for Staffing Hub, and it holds across agency and in-house teams alike.',
          bulletPoints: [
            'Define qualification criteria before the role opens, in writing, with thresholds rather than adjectives',
            'Separate verification from evaluation, so factual checks never consume a recruiter’s judgement time',
            'Start recruiter conversations at judgement rather than discovery, with the basics already confirmed',
            'Track submission acceptance rate alongside qualification speed, so faster never quietly means looser',
          ],
          highlight:
            'Adding recruiters to a slow qualification process reproduces the process at a larger scale. It does not fix it.',
          links: [
            {
              href: 'https://staffinghub.com/guest-posts/why-adding-more-recruiters-is-making-your-firm-fall-behind/',
              label: 'Why Adding More Recruiters Is Making Your Firm Fall Behind',
              source: 'Staffing Hub',
              external: true,
            },
          ],
        },
        {
          heading: 'Instrumenting it without new software',
          content:
            'You can measure this from your existing ATS before changing any tooling. Pick one high-volume role, export the last sixty applications, and record two timestamps for each: when the application arrived and when a recruiter first had verified evidence on all four qualification facts. The median gap is your baseline. Most teams are surprised by it, and the surprise is usually the queue time before anyone looked, not the screening call itself.',
          bulletPoints: [
            'Baseline one role before rolling the measurement out broadly',
            'Record queue time separately from active screening time, because they have different fixes',
            'Re-measure monthly rather than continuously, so the metric drives decisions instead of dashboards',
          ],
          conclusion:
            'Once queue time is visible, the case for automating verification usually makes itself.',
        },
        {
          heading: 'What good looks like',
          content:
            'A healthy target is verified readiness within one business day of application for volume roles, and within two for specialised ones, with submission acceptance rate holding steady or improving. If acceptance rate falls while qualification time drops, the process has become faster at the cost of rigour, and the criteria need tightening rather than the pace slowing.',
          highlight:
            'Faster qualification is only a win when submission acceptance rate holds. Track them together or not at all.',
        },
      ],
    },
  },
  {
    slug: 'how-to-screen-resumes-with-ai',
    title: 'How to Screen Resumes With AI Without Losing Talent',
    excerpt:
      'A practical method for AI resume screening: writing criteria a model can apply, setting thresholds, handling edge cases, and auditing what the ranking actually did.',
    category: 'Best Practices',
    date: 'Aug 29, 2026',
    isoDate: '2026-08-29',
    isoModified: '2026-08-29',
    readTime: '8 min read',
    image: '/4.jpg',
    keywords: [
      'how to screen resumes with AI',
      'AI resume screening',
      'resume screening software',
      'automated resume screening',
      'AI candidate ranking',
    ],
    author: authors.ahmad,
    content: {
      intro:
        'Most disappointing AI resume screening projects fail for the same reason: the criteria handed to the system were never precise enough for a human to apply consistently either. The model then produces confident-looking rankings from vague inputs, and the team loses trust in the output. The fix is unglamorous and it happens before any software is involved.',
      sections: [
        {
          heading: 'Write criteria a stranger could apply',
          content:
            'The test is simple. Give your requirements to someone outside the team and ask them to sort ten resumes. If their ordering differs sharply from yours, the criteria are underspecified, and no screening tool will resolve that ambiguity for you.',
          bulletPoints: [
            'Replace "strong communication skills" with the observable evidence you would accept as proof',
            'State must-haves and nice-to-haves separately, and mark which are genuinely disqualifying',
            'Give thresholds numerically where the requirement is numeric, such as years in a named environment',
            'Name acceptable equivalents explicitly, so adjacent experience is not silently penalised',
          ],
          conclusion:
            'This step alone improves human screening consistency, which is why it is worth doing whether or not you automate.',
        },
        {
          heading: 'Rank, do not reject',
          content:
            'A resume is a claim document, not a verified record. It is reliable evidence of what a candidate chose to present and unreliable evidence of what they can do. Treat AI resume screening as a prioritisation layer that decides review order, not as a gate that removes people from the process without a human ever looking.',
          bulletPoints: [
            'Use scores to order the queue rather than to auto-reject below a cutoff',
            'Require a documented, job-related reason for every rejection, tied to a stated criterion',
            'Review a sample from below the threshold each week to catch systematic misreads',
          ],
          highlight:
            'The candidates a resume screener misjudges most often are career changers and people whose experience is described in another industry’s vocabulary.',
        },
        {
          heading: 'Close the gap the resume cannot close',
          content:
            'Four facts decide most early-stage rejections and none of them appear reliably on a resume: current availability, compensation expectation, work authorisation for the role’s location, and the actual depth behind a listed skill. Screening that stops at the document leaves all four unresolved, which is why the first recruiter call so often turns into discovery instead of assessment.',
          bulletPoints: [
            'Confirm the four facts before a recruiter spends live time, through a structured pre-screen',
            'Ask depth questions on the two or three skills that genuinely differentiate performance in the role',
            'Keep a transcript, so the answer is reviewable later rather than remembered approximately',
          ],
          conclusion:
            'A ranked shortlist where those four facts are already verified is a materially different artefact from a ranked list of resumes.',
        },
        {
          heading: 'Audit the ranking on a schedule',
          content:
            'Screening criteria drift as roles evolve, and a threshold that was right in January can quietly exclude a viable pool by June. Build a short, recurring review rather than trusting the configuration indefinitely.',
          bulletPoints: [
            'Check monthly whether the qualified rate has moved sharply in either direction',
            'Compare screened-in candidates against who actually performed well after hiring',
            'Re-read the criteria whenever a role’s responsibilities change, not only when hiring volume changes',
          ],
          highlight:
            'If nobody can explain why a specific candidate scored the way they did, the system is not ready to influence decisions.',
        },
      ],
    },
  },
  {
    slug: 'ai-hiring-compliance-checklist',
    title: 'An AI Hiring Compliance Checklist for Recruiting Teams',
    excerpt:
      'Transparency, human review, record-keeping, and candidate rights: the operational questions to settle before AI touches your hiring funnel.',
    category: 'Industry Trends',
    date: 'Aug 29, 2026',
    isoDate: '2026-08-29',
    isoModified: '2026-08-29',
    readTime: '7 min read',
    image: '/5.webp',
    keywords: [
      'AI hiring compliance',
      'AI recruiting regulations',
      'automated employment decision tools',
      'AI interview transparency',
      'responsible AI hiring',
    ],
    author: authors.ayesha,
    content: {
      intro:
        'Rules covering automated tools in hiring differ by jurisdiction and continue to change, so nothing here is legal advice and none of it substitutes for counsel who knows the markets you hire in. What does transfer across jurisdictions is the operational posture regulators keep asking for: tell candidates what is happening, keep a person accountable for decisions, and be able to show your working afterwards. A team that can do those three things is in a defensible position almost anywhere.',
      sections: [
        {
          heading: 'Tell candidates what is happening',
          content:
            'Disclosure costs nothing and removes the most common complaint. Candidates who know an AI interview is part of the process, and what it is assessing, complete it at reasonable rates. Candidates who discover it mid-session do not, and some of them post about it.',
          bulletPoints: [
            'State on the application page which stages involve automated assessment',
            'Explain in plain language what is being evaluated and roughly how long it takes',
            'Publish a route to request a human review or an alternative format',
            'Name a contact for questions about the process',
          ],
        },
        {
          heading: 'Keep a person accountable for every outcome',
          content:
            'The distinction that matters is whether software makes decisions or produces evidence for a person who decides. Keep rejection authority with a named human, and make sure the reasoning behind an outcome is visible to them before they exercise it.',
          bulletPoints: [
            'Require human review before any rejection, especially at the automated stages',
            'Make every score traceable to a specific answer or stated criterion',
            'Record who reviewed each decision and when',
          ],
          highlight:
            'A single overall fit percentage with no visible reasoning is the hardest possible artefact to defend if a decision is ever challenged.',
        },
        {
          heading: 'Be able to show your working',
          content:
            'Most enquiries about an automated hiring process are answered by good records rather than by argument. The records worth keeping are the ones that reconstruct what the process assessed and why a given candidate did or did not proceed.',
          bulletPoints: [
            'Retain criteria as they existed at the time of each hiring round, including later changes',
            'Retain transcripts and scoring alongside the outcome',
            'Log configuration changes with dates and the reason for the change',
            'Set a retention period that matches your obligations, and apply it consistently',
          ],
        },
        {
          heading: 'Accessibility and accommodation',
          content:
            'Any interview format creates barriers for some candidates. Timed sessions, video requirements, and background noise sensitivity all affect people differently, and a documented alternative path is both the fair answer and the practical one.',
          bulletPoints: [
            'Offer an accommodation route that is visible before the session starts, not only on request afterwards',
            'Avoid making integrity signals decisive on their own, since they can reflect environment rather than conduct',
            'Check that the candidate experience works on low bandwidth and on mobile devices',
          ],
          conclusion:
            'Treat integrity flags as context for a human reviewer rather than as automatic disqualification, because that is what they can reliably support.',
        },
        {
          heading: 'Questions worth asking any vendor',
          content:
            'Before adopting a tool, the answers to these questions determine how much of the compliance burden lands on your team rather than the platform’s.',
          bulletPoints: [
            'Who defines the criteria the system scores against, us or you?',
            'Can we see the reasoning behind every individual score?',
            'What is retained, for how long, and where is it stored?',
            'What happens to a candidate record if they ask for deletion?',
            'Can a candidate request human review, and what does that path look like?',
          ],
          highlight:
            'If a vendor cannot answer where data is stored and how scoring is explained, that is the answer.',
        },
      ],
    },
  },
{
    slug: 'ai-transforming-recruitment-2026',
    title: 'How AI is Transforming Recruitment in 2026',
    excerpt: 'Discover the latest trends in AI-powered recruiting and how automated screening is changing the hiring landscape.',
    category: 'Industry Trends',
    date: 'Jan 2, 2026',
    isoDate: '2026-01-02',
    isoModified: '2026-08-29',
    keywords: ['AI recruiting trends 2026', 'AI recruitment software', 'automated candidate screening', 'AI hiring platform', 'recruitment automation'],
    readTime: '5 min read',
    image: '/4.jpg',
    author: authors.ayesha,
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
    date: 'Dec 28, 2025',
    isoDate: '2025-12-28',
    isoModified: '2026-09-07',
    keywords: ['reduce time to hire', 'time to hire strategies', 'AI resume screening', 'automated pre-screening', 'recruiting workflow automation'],
    readTime: '7 min read',
    image: '/5.webp',
    author: authors.ayesha,
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
    date: 'Dec 20, 2025',
    isoDate: '2025-12-20',
    isoModified: '2026-09-07',
    keywords: ['cost of a bad hire', 'prevent bad hires', 'candidate screening software', 'AI candidate matching', 'structured hiring process'],
    readTime: '6 min read',
    image: '/time.png',
    author: authors.ahmad,
    content: {
      intro: "Every recruiter has been there: you filled a role quickly, everyone was relieved to have someone in the seat, and then three months later you realize you've made a costly mistake. The person isn't performing, team morale is suffering, and now you have to start the whole process over again. The full cost depends on the role, compensation, ramp-up time, and the work delayed while the position is vacant.",
      sections: [
        {
          heading: 'The Obvious Costs',
          content: 'Most companies only calculate the direct, visible costs when measuring the impact of a bad hire. These are easy to quantify but represent just the tip of the iceberg.',
          bulletPoints: [
            'Recruiting and hiring costs: job advertising, agency or recruiter fees, and the interview hours spent by everyone involved',
            'Training and onboarding: materials, trainer time, and the productivity lost while the role ramps',
            'Separation costs: notice periods, any severance owed, administrative time, and re-opening the role',
            'Replacement costs: Another full recruiting cycle'
          ],
          highlight: 'Build this model with your own salary bands and recruiting costs. The point is not a benchmark figure, it is that the total is larger than the screening effort that would have prevented it.'
        },
        {
          heading: 'The Bottom Line',
          content: 'A bad hire doesn\'t just cost money—it costs momentum, morale, and market opportunity. In 2026\'s competitive talent landscape, you literally cannot afford to get hiring wrong. The companies winning the talent war are those that invest in preventing bad hires, not just filling seats quickly.',
          highlight: 'Screening effort is cheap relative to a mis-hire. Run the numbers for your own roles rather than trusting a headline multiplier.'
        }
      ]
    }
  }];

export const blogCategories = [
  'All Posts',
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 2) {
  const current = getPostBySlug(currentSlug);
  const others = blogPosts.filter((post) => post.slug !== currentSlug);
  if (!current) return others.slice(0, limit);

  const sameCategory = others.filter((post) => post.category === current.category);
  return [...sameCategory, ...others.filter((post) => post.category !== current.category)].slice(0, limit);
}
