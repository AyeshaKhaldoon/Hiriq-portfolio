import { buildSeoMetadata, pageKeywords } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'Thank You | Hiriq',
  description: 'Thank you for contacting Hiriq. Our team will follow up on your recruiting workflow inquiry soon.',
  path: '/thank-you',
  keywords: pageKeywords.thankYou,
  noIndex: true,
});

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
