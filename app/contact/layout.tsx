import { buildSeoMetadata, pageKeywords } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'Contact Hiriq | Sales, Support, and Demos',
  description:
    'Contact Hiriq in Edison, New Jersey for AI recruiting software demos, sales, and support. Serving hiring teams in the USA, UK, and Middle East.',
  path: '/contact',
  keywords: pageKeywords.contact,
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
