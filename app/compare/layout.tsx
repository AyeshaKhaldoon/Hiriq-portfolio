import { buildSeoMetadata } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'AI Recruiting Software Comparisons and Alternatives | Hiriq',
  description:
    'Neutral comparisons of AI recruiting, screening, and interview platforms, sorted by what each tool evaluates and which part of the hiring funnel it covers.',
  path: '/compare',
  keywords: [
    'AI recruiting software comparison',
    'AI interview software alternatives',
    'candidate screening software comparison',
    'HireVue alternatives',
    'Paradox AI alternatives',
    'best AI interview software',
  ],
});

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return children;
}
