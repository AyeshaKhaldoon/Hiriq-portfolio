import { buildSeoMetadata, pageKeywords } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'About Hiriq | AI Recruitment Infrastructure',
  description:
    'Learn how Hiriq helps recruiting teams automate screening, structure interviews, and make faster hiring decisions with AI recruitment infrastructure.',
  path: '/about',
  keywords: pageKeywords.about,
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
