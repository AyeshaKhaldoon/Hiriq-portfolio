import type { MetadataRoute } from 'next';
import { solutions } from './solutions/solutions';

const routes = [
  '',
  '/about',
  '/automated-interviews',
  '/blog',
  '/blog/ai-transforming-recruitment-2026',
  '/blog/reduce-time-to-hire',
  '/blog/cost-of-bad-hire',
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

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-08-23'),
    changeFrequency: route === '' || route === '/solutions' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/solutions') ? 0.85 : 0.7,
  }));
}
