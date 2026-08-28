// FILE: src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsletterForm from '@/components/NewsletterForm';
import { siteUrl } from '@/app/seo';

import { blogPosts, getPostBySlug, getRelatedPosts } from '../blogPosts';

// SEO Metadata - FIXED FOR NEXT.JS 15

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Hiriq',
      description: 'The Hiriq article you are looking for could not be found.',
    };
  }

  return {
    title: `${post.title} | Hiriq`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: 'Hiriq',
      images: [{ url: post.image, alt: post.title }],
      publishedTime: post.isoDate,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}


// FIXED FOR NEXT.JS 15: params is now a Promise
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);
  const articleUrl = `${siteUrl}/blog/${post.slug}`;
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(post.title);
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.isoDate,
    dateModified: post.isoModified,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hiriq',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/Logo.png`,
      },
    },
    mainEntityOfPage: articleUrl,
    keywords: post.keywords.join(', '),
    about: [
      'AI recruiting software',
      'candidate screening',
      'recruiting automation',
      'AI interview platform',
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

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
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition"
                  aria-label="Share on X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition"
                  aria-label="Share by email"
                >
                  <Share2 className="w-4 h-4" />
                </a>
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

                {section.links && (
                  <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Referenced in this section
                    </p>
                    <ul className="mt-3 space-y-2">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
                            className="font-medium text-cyan-700 underline-offset-4 hover:underline"
                          >
                            {link.label}
                          </a>
                          {link.source && (
                            <span className="text-slate-500"> &mdash; {link.source}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
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
              See how Hiriq turns screening and interviews into structured recruiter evidence.
            </p>
            <Link href="https://calendly.com/ayesha786khaldoon/discovery-call-hiriq" className="inline-flex px-10 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Book a Demo →
            </Link>
            <p className="text-blue-100 text-sm mt-4">Review the workflow with the Hiriq team.</p>
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
          <NewsletterForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
