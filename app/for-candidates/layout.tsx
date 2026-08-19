import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Candidates | AI Interview Practice by Hiriq',
  description: 'Join the Hiriq candidate waitlist for AI-powered interview practice, resume tools, feedback, and early access.',
};

export default function ForCandidatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
