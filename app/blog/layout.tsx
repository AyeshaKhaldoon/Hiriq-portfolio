import { buildSeoMetadata, pageKeywords } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'Hiriq Blog | AI Recruiting Insights',
  description:
    'Read Hiriq guides on AI recruiting, time-to-hire, candidate screening, hiring automation, and recruitment best practices.',
  path: '/blog',
  keywords: pageKeywords.blog,
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
