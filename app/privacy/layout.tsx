import { buildSeoMetadata, pageKeywords } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'Privacy Policy | Hiriq',
  description:
    'Review how Hiriq handles personal information, candidate data, cookies, analytics, privacy controls, and AI recruiting data security.',
  path: '/privacy',
  keywords: pageKeywords.privacy,
});

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
