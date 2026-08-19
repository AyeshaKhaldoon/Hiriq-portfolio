import type { MetadataRoute } from 'next';

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
  '/solutions',
  '/solutions/ai-ats',
  '/solutions/ai-interview-platform',
  '/solutions/ai-recruiting-software',
  '/solutions/ai-resume-screening',
  '/solutions/middle-east-ai-hiring',
  '/solutions/usa-uk-ai-hiring',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hiriq.com';

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-08-20'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
