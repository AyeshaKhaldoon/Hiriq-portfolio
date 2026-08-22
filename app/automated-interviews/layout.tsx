import { buildSeoMetadata, pageKeywords } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'Live Conversational AI Interviews | Hiriq',
  description:
    'Run live conversational AI interviews with adaptive follow-ups, industry-specific evaluation, integrity signals, transcripts, and recruiter-controlled scoring.',
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
