import { buildSeoMetadata, pageKeywords } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'Fully Automated AI Interviews | Coming Soon | Hiriq',
  description:
    'End-to-end AI interview intelligence: structured delivery, multi-layer evaluation, integrity monitoring, and unified scoring. Join the waitlist for early access.',
  path: '/automated-interviews',
  keywords: pageKeywords.automatedInterviews,
});

export default function AutomatedInterviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
