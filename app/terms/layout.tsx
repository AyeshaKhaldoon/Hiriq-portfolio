import { buildSeoMetadata, pageKeywords } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'Terms of Service | Hiriq',
  description:
    'Read Hiriq terms covering account responsibilities, acceptable use, service access, data ownership, AI recruiting workflows, and legal information.',
  path: '/terms',
  keywords: pageKeywords.terms,
});

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
