import { buildSeoMetadata, pageKeywords } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'For Candidates | AI Interview Practice by Hiriq',
  description:
    'Join the Hiriq candidate waitlist for AI-powered interview practice, resume feedback, job interview preparation, and early access.',
  path: '/for-candidates',
  keywords: pageKeywords.candidates,
});

export default function ForCandidatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
