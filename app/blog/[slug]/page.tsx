// FILE: src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Metadata } from 'next';

// Type definitions
interface BlogSection {
  heading: string;
  content: string;
  bulletPoints?: string[];
  stats?: Array<{ label: string; description: string }>;
  conclusion?: string;
  highlight?: string;
}

interface BlogPost {
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
  content: {
    intro: string;
    sections: BlogSection[];
  };
}

// Blog posts data
const blogPosts: BlogPost[] = [
  {
    slug: 'ai-transforming-recruitment-2026',
    title: 'How AI is Transforming Recruitment in 2026',
    excerpt: 'Discover the latest trends in AI-powered recruiting and how automated screening is changing the hiring landscape.',
    category: 'Industry Trends',
    date: 'Jan 2, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=0E7490&color=fff'
    },
    content: {
      intro: "The recruitment landscape has undergone a seismic shift over the past few years, and 2026 marks a pivotal moment where artificial intelligence has moved from experimental technology to essential infrastructure. If you're still manually screening hundreds of resumes or conducting preliminary phone calls, you're not just behind the curve—you're actively losing top talent to faster, smarter competitors.",
      sections: [
        {
          heading: 'The Death of Manual Resume Screening',
          content: "Let's start with a hard truth: the traditional hiring funnel is broken. The average corporate job posting receives 250 applications, and recruiters spend just 6-7 seconds scanning each resume. This isn't a process—it's a lottery where great candidates slip through the cracks because their resume didn't include the exact keyword you searched for.",
          bulletPoints: [
            'Skills context and relevance rather than just keywords',
            'Career trajectory patterns that indicate growth potential',
            'Cultural fit indicators based on communication style and values alignment',
            'Red flags like unexplained employment gaps or inconsistent information'
          ],
          conclusion: 'The result? What used to take 40+ hours of recruiter time per role now happens in minutes, with higher accuracy and zero unconscious bias.'
        },
        {
          heading: 'Automated Pre-Screening: The Game Changer',
          content: "Here's where things get really interesting. In 2026, the most innovative companies have eliminated the first-round phone screen entirely—not by skipping it, but by automating it with conversational AI. These aren't robotic, frustrating phone trees. Modern AI interviewers conduct natural, empathetic conversations that feel remarkably human.",
          stats: [
            { label: '85% reduction', description: 'in time-to-first-interview' },
            { label: '3x increase', description: 'in candidate satisfaction scores' },
            { label: '60% decrease', description: 'in early-stage dropoff rates' },
            { label: 'Zero conflicts', description: 'scheduling or timezone issues' }
          ]
        },
        {
          heading: 'The Bottom Line',
          content: "AI in recruitment isn't the future—it's the present. Companies that embrace these tools in 2026 will dominate the talent market. Those that don't will find themselves perpetually playing catch-up, losing top candidates to faster, smarter competitors. The question isn't whether to adopt AI-powered recruitment. It's whether you can afford not to."
        }
      ]
    }
  },
  {
    slug: 'reduce-time-to-hire',
    title: '10 Proven Strategies to Reduce Time-to-Hire by 50%',
    excerpt: 'Learn actionable tactics to speed up your recruitment process without compromising candidate quality.',
    category: 'Best Practices',
    date: 'Dec 28, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    author: {
      name: 'Michael Chen',
      avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=0E7490&color=fff'
    },
    content: {
      intro: 'Time-to-hire is the silent killer of recruitment success. Every extra day a position remains unfilled costs your company money in lost productivity, delayed projects, and burnt-out team members covering the gap. The average time-to-hire in 2026 is 36 days, but top-performing companies are doing it in 18 days or less. Here are 10 proven strategies to cut your hiring time in half.',
      sections: [
        {
          heading: '1. Automate Resume Screening',
          content: 'The old way: Your recruiter spends 40 hours screening 250 applications, manually searching for keywords and qualifications. The smart way: AI-powered screening analyzes all 250 applications in 10 minutes, ranking candidates by actual fit—not just keyword presence.',
          highlight: 'Time Saved: 35+ hours per role'
        },
        {
          heading: '2. Replace Initial Phone Screens with AI Interviews',
          content: 'The traditional phone screen is a bottleneck nightmare. Scheduling alone can add 5-7 days to your process. Automated pre-screening interviews that candidates complete on their schedule eliminate scheduling conflicts and speed up the process dramatically.',
          highlight: 'Time Saved: 15+ hours per role + 5-7 days in scheduling'
        },
        {
          heading: 'The Bottom Line',
          content: "Reducing time-to-hire isn't about cutting corners—it's about eliminating waste. The companies winning the war for talent in 2026 aren't necessarily the biggest or best-known. They're the fastest and most efficient. Every day you shave off your hiring process is a day you gain competitive advantage.",
          highlight: 'Start with strategies 1-2 this week. You\'ll see immediate results.'
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
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=0E7490&color=fff'
    },
    content: {
      intro: "Every recruiter has been there: you filled a role quickly, everyone was relieved to have someone in the seat, and then three months later you realize you've made a costly mistake. The person isn't performing, team morale is suffering, and now you have to start the whole process over again. But here's what most companies don't realize: the real cost of that bad hire is 10-15 times higher than you think.",
      sections: [
        {
          heading: 'The Obvious Costs',
          content: 'Most companies only calculate the direct, visible costs when measuring the impact of a bad hire. These are easy to quantify but represent just the tip of the iceberg.',
          bulletPoints: [
            'Recruiting and hiring costs: $15,000-$25,000 (job ads, recruiter fees, interview time)',
            'Training and onboarding: $3,000-$5,000 (materials, trainer time, lost productivity)',
            'Separation costs: $5,000-$10,000 (severance, unemployment insurance, legal fees)',
            'Replacement costs: Another full recruiting cycle'
          ],
          highlight: 'Conservative estimate: $25,000-$40,000 in direct costs'
        },
        {
          heading: 'The Bottom Line',
          content: 'A bad hire doesn\'t just cost money—it costs momentum, morale, and market opportunity. In 2026\'s competitive talent landscape, you literally cannot afford to get hiring wrong. The companies winning the talent war are those that invest in preventing bad hires, not just filling seats quickly.',
          highlight: 'Every dollar spent on better screening saves $100 in bad hire costs.'
        }
      ]
    }
  }
];

function getPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}

function getRelatedPosts(currentSlug: string) {
  return blogPosts.filter(post => post.slug !== currentSlug).slice(0, 2);
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Hiriq Blog`,
    description: post.excerpt,
  };
}



export default function BlogPostPage(
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }
  const relatedPosts = getRelatedPosts(slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hiriq
            </Link>
            <Link href="/blog" className="text-slate-700 hover:text-blue-600 transition flex items-center gap-2 font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="pt-16">
        <div className="relative h-[400px] w-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      </div>

      {/* Article */}
      <article className="relative -mt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              {post.category}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-600 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full ring-2 ring-blue-100"
                />
                <div>
                  <div className="font-semibold text-slate-900">{post.author.name}</div>
                  <div className="text-sm text-slate-500">Author</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="pt-6 flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-700">Share:</span>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <p className="text-xl text-slate-700 leading-relaxed mb-12 font-light">
              {post.content.intro}
            </p>

            {post.content.sections.map((section, idx) => (
              <div key={idx} className="mb-12 last:mb-0">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  {section.heading}
                </h2>
                
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  {section.content}
                </p>

                {section.bulletPoints && (
                  <ul className="space-y-3 mb-6 ml-6">
                    {section.bulletPoints.map((point, i) => (
                      <li key={i} className="text-slate-700 flex items-start gap-3">
                        <span className="text-blue-600 mt-1.5 flex-shrink-0">●</span>
                        <span className="text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.stats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    {section.stats.map((stat, i) => (
                      <div key={i} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 text-center border border-blue-100">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {stat.label}
                        </div>
                        <div className="text-sm text-slate-600">
                          {stat.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.highlight && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 my-6">
                    <p className="text-xl font-semibold text-center">
                      {section.highlight}
                    </p>
                  </div>
                )}

                {section.conclusion && (
                  <p className="text-lg text-slate-700 leading-relaxed mt-6">
                    {section.conclusion}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Hiring?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 1,000+ companies using Hiriq to hire faster and smarter with AI-powered recruitment
            </p>
            <button className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Free Trial →
            </button>
            <p className="text-blue-100 text-sm mt-4">No credit card required • 14-day free trial</p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Continue Reading
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full">
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-3">
                      {relatedPost.category}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                      {relatedPost.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {relatedPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {relatedPost.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Hiring Trends
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get weekly insights on AI recruitment, hiring strategies, and industry news
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border-2 border-slate-700 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
