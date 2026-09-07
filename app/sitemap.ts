import type { MetadataRoute } from 'next';
import { solutions } from './solutions/solutions';
import { comparisons, comparisonsUpdated } from './compare/comparisons';
import { blogPosts } from './blog/blogPosts';

const siteUrl = 'https://hiriq.co';

// Routes that do not come from a content registry.
const staticRoutes = [
  '',
  '/about',
  '/automated-interviews',
  '/blog',
  '/compare',
  '/contact',
  '/demo-recruiters',
  '/for-candidates',
  '/for-recruiters',
  '/hiring-platform',
  '/industries',
  '/press',
  '/pricing',
  '/privacy',
  '/resources/link-to-hiriq',
  '/solutions',
  '/terms',
];

const structuralLastModified = '2026-08-29';
const solutionLastModified: Record<string, string> = {
  'ai-recruiting-software': '2026-09-07',
  'candidate-screening-software': '2026-09-07',
  'recruiting-automation-software': '2026-09-07',
  'healthcare-staffing-agencies': '2026-09-07',
};

function priorityFor(route: string) {
  if (route === '') return 1;
  if (route === '/solutions' || route === '/compare') return 0.9;
  if (route.startsWith('/solutions/') || route.startsWith('/compare/')) return 0.85;
  if (route.startsWith('/blog/')) return 0.6;
  return 0.7;
}

function changeFrequencyFor(route: string): MetadataRoute.Sitemap[number]['changeFrequency'] {
  if (route === '' || route === '/solutions' || route === '/compare' || route === '/blog') {
    return 'weekly';
  }
  return 'monthly';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Array<{ route: string; lastModified: string }> = [
    ...staticRoutes.map((route) => ({ route, lastModified: ['/blog', '/contact', '/hiring-platform', '/for-recruiters'].includes(route) ? '2026-09-07' : structuralLastModified })),
    ...solutions.map((solution) => ({
      route: `/solutions/${solution.slug}`,
      lastModified: solutionLastModified[solution.slug] || structuralLastModified,
    })),
    ...comparisons.map((comparison) => ({
      route: `/compare/${comparison.slug}`,
      lastModified: comparisonsUpdated,
    })),
    ...blogPosts.map((post) => ({
      route: `/blog/${post.slug}`,
      lastModified: post.isoModified,
    })),
  ];

  return entries.map(({ route, lastModified }) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(lastModified),
    changeFrequency: changeFrequencyFor(route),
    priority: priorityFor(route),
  }));
}
