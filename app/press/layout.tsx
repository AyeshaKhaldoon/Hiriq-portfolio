import { buildSeoMetadata } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'Hiriq in the Press | Media Coverage and Founder Commentary',
  description:
    'Press coverage, published commentary, and directory listings for Hiriq, including Ayesha Khaldoon on why time-to-qualify beats time-to-fill for staffing firms.',
  path: '/press',
  keywords: [
    'Hiriq press',
    'Hiriq media coverage',
    'Ayesha Khaldoon Hiriq',
    'Hiriq news',
    'AI recruiting company press',
    'Hiriq founder interview',
  ],
});

export default function PressLayout({ children }: { children: React.ReactNode }) {
  return children;
}
