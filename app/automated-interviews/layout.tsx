import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fully Automated AI Interviews | Coming Soon | Hiriq',
  description:
    'End-to-end AI interview intelligence: structured delivery, multi-layer evaluation, integrity monitoring, and unified scoring. Join the waitlist for early access.',
};

export default function AutomatedInterviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
