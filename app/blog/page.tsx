'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

/* ================= BLOG DATA ================= */

const blogPosts = [
  {
    slug: 'ai-transforming-recruitment-2026',
    title: 'How AI is Transforming Recruitment in 2026',
    excerpt:
      'Discover the latest trends in AI-powered recruiting and how automated screening is changing the hiring landscape.',
    category: 'Industry Trends',
    date: 'Jan 2, 2026',
    readTime: '5 min read',
    image: '/4.jpg',
  },
  {
    slug: 'reduce-time-to-hire',
    title: '10 Proven Strategies to Reduce Time-to-Hire by 50%',
    excerpt:
      'Learn actionable tactics to speed up your recruitment process without compromising candidate quality.',
    category: 'Best Practices',
    date: 'Dec 28, 2025',
    readTime: '7 min read',
    image: '/5.webp',
  },
  {
    slug: 'cost-of-bad-hire',
    title: 'The Real Cost of a Bad Hire (And How to Prevent It)',
    excerpt:
      "Bad hires cost companies thousands. Here's how AI-powered screening helps you avoid costly mistakes.",
    category: 'Recruiting Tips',
    date: 'Dec 20, 2025',
    readTime: '6 min read',
    image: '/time.png',
  },
];

/* ================= PAGE ================= */

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const categories = [
    'All Posts',
    'Industry Trends',
    'Best Practices',
    'Recruiting Tips',
  ];

  const filteredPosts =
    selectedCategory === 'All Posts'
      ? blogPosts
      : blogPosts.filter((p) => p.category === selectedCategory);

  const featuredPost = blogPosts[0];

  /* ========== HANDLE NEWSLETTER SUBMIT ========== */
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    if (!email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email.');
      return;
    }

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage('🎉 Thanks for subscribing! Check your inbox for updates.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Subscription failed. Try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Subscription failed. Try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ================= NAV ================= */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent"
            >
              Hiriq
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/blog" className="text-blue-600 font-semibold">
                Blog
              </Link>
              <a
                href="mailto:contact@hiriq.com?subject=Demo%20Request%20-%20Hiriq%20AI%20Recruitment%20Platform&body=Dear%20Hiriq%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20personalized%20demo%20of%20your%20AI-powered%20recruitment%20platform.%0A%0AOrganization%20Details%3A%0A%E2%80%A2%20Company%20Name%3A%20%0A%E2%80%A2%20Industry%3A%20%0A%E2%80%A2%20Team%20Size%3A%20%0A%0AContact%20Information%3A%0A%E2%80%A2%20Full%20Name%3A%20%0A%E2%80%A2%20Job%20Title%3A%20%0A%E2%80%A2%20Phone%20Number%3A%20%0A%E2%80%A2%20Preferred%20Contact%20Method%3A%20%0A%0ASpecific%20Interests%3A%0A%E2%80%A2%20Primary%20Use%20Case%3A%20%0A%E2%80%A2%20Current%20Hiring%20Volume%3A%20%0A%E2%80%A2%20Timeline%20for%20Implementation%3A%20%0A%0APlease%20share%20your%20available%20time%20slots%20for%20a%2030-minute%20demo%20session.%0A%0ABest%20regards"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white rounded-lg hover:opacity-90 transition"
              >
                Contact for Demo
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            The Hiriq Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Insights, best practices, and trends in modern recruitment and hiring
          </p>
        </div>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full transition ${cat === selectedCategory
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ================= FEATURED POST ================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 p-12">
              <div className="text-white">
                <span className="inline-block px-4 py-1 bg-yellow-400 text-slate-900 rounded-full text-sm font-bold mb-4">
                  FEATURED
                </span>
                <h2 className="text-4xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-blue-100 text-lg mb-6">{featuredPost.excerpt}</p>
                <div className="flex gap-6 text-blue-100 mb-6">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  Read Article
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              <div className="relative w-full h-80 md:h-full rounded-xl overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group">
                  <div className="relative w-full h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex gap-4 text-sm text-slate-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated on Recruitment Trends</h2>
          <p className="text-xl text-blue-100 mb-8">Weekly insights, best practices, and product updates</p>

          <form onSubmit={handleSubscribe} className="flex max-w-md mx-auto gap-3 flex-col sm:flex-row">
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg focus:outline-none text-slate-900"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {/* Inline feedback message */}
          {message && (
            <p
              className={`mt-4 text-sm font-medium ${status === 'success' ? 'text-green-400' : 'text-red-400'
                }`}
            >
              {message}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
