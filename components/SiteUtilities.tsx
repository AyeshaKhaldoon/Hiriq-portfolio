'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUp,
  Check,
  Cookie,
  Copy,
  Mail,
  MessageCircle,
  Search,
  X,
} from 'lucide-react';

const CONTACT_EMAIL = 'contact@hiriq.com';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

const searchItems = [
  {
    title: 'Hiring Platform',
    href: '/hiring-platform',
    description: 'AI resume screening, candidate matching, pre-screening, and recruiter workflows.',
    keywords: 'ats recruitment platform hiring candidate screening interviews automation',
  },
  {
    title: 'AI Recruiting Software',
    href: '/solutions/ai-recruiting-software',
    description: 'Recruiting automation for resume screening, AI interviews, and evidence-backed shortlists.',
    keywords: 'ai recruiting software recruitment platform hiring automation shortlist',
  },
  {
    title: 'AI ATS',
    href: '/solutions/ai-ats',
    description: 'Applicant tracking with AI screening, candidate ranking, and recruiter workflow support.',
    keywords: 'ai ats applicant tracking system candidate ranking recruiting software',
  },
  {
    title: 'AI Resume Screening',
    href: '/solutions/ai-resume-screening',
    description: 'Screen resumes against role criteria and build faster candidate shortlists.',
    keywords: 'ai resume screening cv screening candidate matching shortlist',
  },
  {
    title: 'AI Interview Platform',
    href: '/solutions/ai-interview-platform',
    description: 'Automated pre-screening interviews with transcripts, summaries, and evaluation context.',
    keywords: 'ai interview platform automated interviews pre screening transcript',
  },
  {
    title: 'Middle East AI Hiring',
    href: '/solutions/middle-east-ai-hiring',
    description: 'AI hiring workflows for teams operating across the UAE, Qatar, Pakistan, Saudi Arabia, and the wider Middle East.',
    keywords: 'ai hiring middle east uae qatar saudi pakistan recruitment',
  },
  {
    title: 'USA and UK AI Hiring',
    href: '/solutions/usa-uk-ai-hiring',
    description: 'AI recruiting workflows for hiring teams in the United States, United Kingdom, and remote markets.',
    keywords: 'ai hiring usa uk recruitment software ats interview screening',
  },
  {
    title: 'Industries',
    href: '/industries',
    description: 'Industry-specific hiring workflows for tech, healthcare, finance, logistics, retail, and sales.',
    keywords: 'industry workflows tech healthcare finance logistics retail sales',
  },
  {
    title: 'AI Interviews',
    href: '/automated-interviews',
    description: 'Structured automated interviews, transcripts, evaluation reports, and candidate evidence.',
    keywords: 'automated ai interviews transcript evaluation calls',
  },
  {
    title: 'Pricing',
    href: '/pricing',
    description: 'Starter, Teams, and Enterprise plans for different hiring volumes.',
    keywords: 'price pricing cost starter teams enterprise plan',
  },
  {
    title: 'Candidates',
    href: '/for-candidates',
    description: 'Interview practice, resume tools, and waitlist for job seekers.',
    keywords: 'candidate interview practice resume waitlist',
  },
  {
    title: 'Blog',
    href: '/blog',
    description: 'Recruiting trends, hiring best practices, and AI recruiting guides.',
    keywords: 'blog articles recruitment trends best practices',
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'Reach the Hiriq team for sales, support, demos, and partnerships.',
    keywords: 'contact support demo sales email phone',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy',
    description: 'How Hiriq handles personal data, cookies, analytics, and security.',
    keywords: 'privacy cookies data analytics security',
  },
  {
    title: 'Terms of Service',
    href: '/terms',
    description: 'Service terms, account responsibilities, usage rules, and legal information.',
    keywords: 'terms legal service agreement account password',
  },
];

export function getStoredUtmParams() {
  if (typeof window === 'undefined') return {};

  try {
    return JSON.parse(window.localStorage.getItem('hiriq_utm_params') || '{}') as Record<string, string>;
  } catch {
    return {};
  }
}

export default function SiteUtilities() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = window.localStorage.getItem('hiriq_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    root.classList.toggle('dark', storedTheme ? storedTheme === 'dark' : prefersDark);
    setCookieVisible(window.localStorage.getItem('hiriq_cookie_consent') !== 'accepted');
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const captured: Record<string, string> = {};

    UTM_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) captured[key] = value;
    });

    if (Object.keys(captured).length > 0) {
      const existing = getStoredUtmParams();
      window.localStorage.setItem(
        'hiriq_utm_params',
        JSON.stringify({
          ...existing,
          ...captured,
          landing_page: window.location.pathname,
          captured_at: new Date().toISOString(),
        })
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
      setShowBackToTop(scrollTop > 600);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOpenSearch = () => setSearchOpen(true);
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen(true);
      }

      if (event.key === 'Escape') {
        setSearchOpen(false);
        setContactOpen(false);
      }
    };

    window.addEventListener('hiriq:open-search', handleOpenSearch);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('hiriq:open-search', handleOpenSearch);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchItems.slice(0, 6);

    return searchItems.filter((item) =>
      [item.title, item.description, item.keywords].some((value) =>
        value.toLowerCase().includes(normalized)
      )
    );
  }, [query]);

  const acceptCookies = () => {
    window.localStorage.setItem('hiriq_cookie_consent', 'accepted');
    setCookieVisible(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[60] h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 transition-[width] duration-150 print:hidden"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={() => setSearchOpen(true)}
        className="fixed bottom-5 left-5 z-40 hidden h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-lg shadow-slate-900/10 backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 md:flex print:hidden"
        aria-label="Search site"
      >
        <Search className="h-5 w-5" />
      </button>

      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-lg shadow-slate-900/10 backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 print:hidden"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <button
        type="button"
        onClick={() => setContactOpen(true)}
        className="fixed bottom-5 right-5 z-[55] hidden h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white shadow-xl shadow-cyan-900/20 transition hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-200 md:flex print:hidden"
        aria-label="Open contact options"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      <div className="fixed bottom-0 left-0 right-0 z-[55] border-t border-slate-200 bg-white/95 px-4 py-3 shadow-2xl shadow-slate-900/15 backdrop-blur md:hidden print:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          <a
            href="https://app.hiriq.co"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 flex-1 items-center justify-center rounded-xl bg-slate-900 px-4 text-sm font-semibold text-white"
          >
            Start trial
          </a>
          <Link
            href="/contact"
            className="flex h-11 flex-1 items-center justify-center rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-700"
          >
            Contact
          </Link>
        </div>
      </div>

      {cookieVisible && (
        <div className="fixed bottom-5 left-5 right-5 z-50 max-w-xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/15 md:left-auto print:hidden">
          <div className="flex gap-3">
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Cookie className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm font-bold text-slate-900">Cookie preferences</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Hiriq uses essential cookies and lightweight analytics to understand campaign
                traffic and improve the website.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={acceptCookies}
                  className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Accept
                </button>
                <Link
                  href="/privacy"
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[70] bg-slate-950/50 p-4 backdrop-blur-sm print:hidden" role="dialog" aria-modal="true" aria-label="Site search">
          <div className="mx-auto mt-20 max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3">
              <Search className="h-5 w-5 text-slate-400" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="h-11 flex-1 bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
                placeholder="Search Hiriq..."
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSearchOpen(false)}
                    className="block rounded-xl px-4 py-3 transition hover:bg-slate-50"
                  >
                    <div className="font-semibold text-slate-900">{item.title}</div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                  </Link>
                ))
              ) : (
                <p className="px-4 py-8 text-center text-sm text-slate-500">
                  No matches found. Try a product, pricing, blog, or contact search.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {contactOpen && (
        <div className="fixed inset-0 z-[70] flex items-end bg-slate-950/50 p-4 backdrop-blur-sm sm:items-center print:hidden" role="dialog" aria-modal="true" aria-label="Contact options">
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Contact Hiriq</h2>
                <p className="mt-1 text-sm text-slate-600">Choose how you want to reach the team.</p>
              </div>
              <button
                type="button"
                onClick={() => setContactOpen(false)}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close contact options"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              <Link
                href="/contact"
                onClick={() => setContactOpen(false)}
                className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-cyan-300 hover:bg-cyan-50/40"
              >
                <span className="font-semibold text-slate-900">Open contact form</span>
                <MessageCircle className="h-5 w-5 text-cyan-600" />
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Hiriq%20Inquiry`}
                className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-cyan-300 hover:bg-cyan-50/40"
              >
                <span className="font-semibold text-slate-900">Email the team</span>
                <Mail className="h-5 w-5 text-cyan-600" />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="flex w-full items-center justify-between rounded-xl border border-slate-200 p-4 text-left transition hover:border-cyan-300 hover:bg-cyan-50/40"
              >
                <span className="font-semibold text-slate-900">
                  {copied ? 'Email copied' : 'Copy email address'}
                </span>
                {copied ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5 text-cyan-600" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
