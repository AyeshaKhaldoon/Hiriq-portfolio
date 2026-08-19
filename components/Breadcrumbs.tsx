'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const labels: Record<string, string> = {
  about: 'About',
  'automated-interviews': 'AI Interviews',
  blog: 'Blog',
  contact: 'Contact',
  'demo-recruiters': 'Recruiter Demo',
  'for-candidates': 'For Candidates',
  'for-recruiters': 'For Recruiters',
  'hiring-platform': 'Hiring Platform',
  industries: 'Industries',
  pricing: 'Pricing',
  privacy: 'Privacy',
  terms: 'Terms',
  'thank-you': 'Thank You',
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`;
    return {
      href,
      label: labels[segment] || segment.replace(/-/g, ' '),
    };
  });

  return (
    <nav className="fixed left-0 right-0 top-16 z-40 hidden border-b border-slate-200 bg-white/90 backdrop-blur sm:top-20 sm:block print:hidden" aria-label="Breadcrumb">
      <ol className="mx-auto flex h-10 max-w-7xl items-center gap-2 overflow-x-auto px-4 text-sm text-slate-500 sm:px-6 lg:px-8">
        <li>
          <Link href="/" className="font-medium text-slate-600 transition hover:text-cyan-700">
            Home
          </Link>
        </li>
        {crumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center gap-2 whitespace-nowrap">
            <span aria-hidden="true">/</span>
            {index === crumbs.length - 1 ? (
              <span className="capitalize text-slate-900">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="capitalize transition hover:text-cyan-700">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
