import { buildSeoMetadata, pageKeywords } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'Contact Hiriq | Sales, Support, and Demos',
  description:
    'Contact Hiriq for AI recruiting software demos, sales questions, support, partnerships, and recruiting workflow advice.',
  path: '/contact',
  keywords: pageKeywords.contact,
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
