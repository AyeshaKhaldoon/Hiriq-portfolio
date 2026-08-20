import { buildSeoMetadata, pageKeywords } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'Pricing | Hiriq Plans for Hiring Teams',
  description:
    'Compare Hiriq Starter, Teams, and Enterprise pricing for AI resume screening, pre-screening, interviews, and recruiter workflows.',
  path: '/pricing',
  keywords: pageKeywords.pricing,
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
