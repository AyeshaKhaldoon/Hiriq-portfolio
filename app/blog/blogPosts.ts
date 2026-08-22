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

Let's start with a hard truth: the traditional hiring funnel is broken. The average corporate job posting receives 250 applications, and recruiters spend just 6-7 seconds scanning each resume.

AI-powered screening has evolved beyond simple keyword matching. Modern systems analyze:

- **Skills context and relevance** rather than just keywords
- **Career trajectory patterns** that indicate growth potential
- **Cultural fit indicators** based on communication style and values alignment
- **Red flags** like unexplained employment gaps or inconsistent information

The result? What used to take 40+ hours of recruiter time per role now happens in minutes, with higher accuracy and zero unconscious bias.

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
