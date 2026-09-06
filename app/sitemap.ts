import type { MetadataRoute } from 'next';
import { solutions } from './solutions/solutions';
import { blogPosts } from './blog/articles';

const routes = [
  '',
  '/about',
  '/automated-interviews',
  '/blog',
  '/contact',
  '/demo-recruiters',
  '/for-candidates',
  '/for-recruiters',
  '/hiring-platform',
  '/industries',
  '/pricing',
  '/privacy',
  '/resources/link-to-hiriq',
  '/solutions',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hiriq.co';
  const solutionRoutes = solutions.map((solution) => `/solutions/${solution.slug}`);
  const allRoutes = [...routes, ...solutionRoutes];

  const pages: MetadataRoute.Sitemap = allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(route === '/blog' || route === '/contact' ? '2026-09-07' : '2026-08-23'),
    changeFrequency: route === '' || route === '/solutions' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/solutions') ? 0.85 : 0.7,
  }));
  return [...pages, ...blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))];
}
