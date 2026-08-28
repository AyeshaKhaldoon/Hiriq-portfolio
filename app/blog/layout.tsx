import { buildSeoMetadata, pageKeywords } from '../seo';
import { siteUrl } from '../seo';
import { blogPosts } from './blogPosts';

export const metadata = buildSeoMetadata({
  title: 'Hiriq Blog | AI Recruiting Insights',
  description:
    'Guides on AI recruiting, time-to-qualify, candidate screening, hiring automation, and recruitment best practices.',
  path: '/blog',
  keywords: pageKeywords.blog,
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${siteUrl}/blog#blog`,
    url: `${siteUrl}/blog`,
    name: 'Hiriq Blog',
    description:
      'Guides on AI recruiting, candidate screening, hiring automation, and recruiting operations.',
    isPartOf: { '@id': `${siteUrl}/#website` },
    publisher: { '@id': `${siteUrl}/#organization` },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      '@id': `${siteUrl}/blog/${post.slug}#article`,
      headline: post.title,
      url: `${siteUrl}/blog/${post.slug}`,
      datePublished: post.isoDate,
      dateModified: post.isoModified,
      description: post.excerpt,
      author: { '@type': 'Person', name: post.author.name },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
