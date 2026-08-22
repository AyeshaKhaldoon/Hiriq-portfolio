// FILE: src/data/blogPosts.ts
// Copy this entire file to your project at: src/data/blogPosts.ts

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-transforming-recruitment-2026',
    title: 'How AI is Transforming Recruitment in 2026',
    excerpt: 'Discover the latest trends in AI-powered recruiting and how automated screening is changing the hiring landscape.',
    category: 'Industry Trends',
    date: 'Jan 2, 2026',
    readTime: '5 min read',
    image: '/blog/ai-recruiting.jpg',
    author: {
      name: 'Sarah Johnson',
      avatar: '/authors/sarah.jpg'
    },
    content: `# How AI is Transforming Recruitment in 2026

The recruitment landscape has undergone a seismic shift over the past few years, and 2026 marks a pivotal moment where artificial intelligence has moved from experimental technology to essential infrastructure.

## The Death of Manual Resume Screening

Let's start with a hard truth: many hiring funnels create more applicant volume than recruiters can review with care. When resumes arrive faster than the team can compare them, strong candidates can be missed and weak-fit candidates can still consume live interview time.

AI-powered screening has evolved beyond simple keyword matching. Modern systems analyze:

- **Skills context and relevance** rather than just keywords
- **Career trajectory patterns** that indicate growth potential
- **Communication and role-context signals** that help recruiters prepare better follow-up questions
- **Review flags** where information needs clarification before a candidate moves forward

The result is a more structured first pass: recruiters get clearer evidence earlier, while final judgment stays with people who understand the role and hiring context.

## Automated Pre-Screening: The Game Changer

In 2026, the most innovative companies have eliminated the first-round phone screen entirely—not by skipping it, but by automating it with conversational AI.

The practical value is clearer when early screening becomes more structured:
- Less calendar friction before recruiter review
- More consistent candidate questions
- Cleaner transcripts and summaries
- Better context for human decision-makers

Ready to transform your hiring process? [Book a Hiriq demo](/contact) today.
    `
  }
];
