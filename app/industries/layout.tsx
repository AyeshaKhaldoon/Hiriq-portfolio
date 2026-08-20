import { buildSeoMetadata, pageKeywords } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'Industries We Serve | Hiriq - AI Hiring by Industry',
  description:
    'From tech to healthcare, BFSI, logistics, sales, and retail, Hiriq adapts AI screening, evaluation, and interview intelligence to your industry.',
  path: '/industries',
  keywords: pageKeywords.industries,
});

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
