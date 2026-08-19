'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, Moon, Search, Sparkles, Sun, X } from 'lucide-react';

const DEMO_MAILTO =
  'mailto:contact@hiriq.com?subject=Demo%20Request%20-%20Hiriq%20AI%20Recruitment%20Platform&body=Dear%20Hiriq%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20personalized%20demo%20of%20your%20AI-powered%20recruitment%20platform.%0A%0AOrganization%20Details%3A%0A%E2%80%A2%20Company%20Name%3A%20%0A%E2%80%A2%20Industry%3A%20%0A%E2%80%A2%20Team%20Size%3A%20%0A%0AContact%20Information%3A%0A%E2%80%A2%20Full%20Name%3A%20%0A%E2%80%A2%20Job%20Title%3A%20%0A%E2%80%A2%20Phone%20Number%3A%20%0A%E2%80%A2%20Preferred%20Contact%20Method%3A%20%0A%0ASpecific%20Interests%3A%0A%E2%80%A2%20Primary%20Use%20Case%3A%20%0A%E2%80%A2%20Current%20Hiring%20Volume%3A%20%0A%E2%80%A2%20Timeline%20for%20Implementation%3A%20%0A%0APlease%20share%20your%20available%20time%20slots%20for%20a%2030-minute%20demo%20session.%0A%0ABest%20regards';

const links = [
  { href: '/', label: 'Home' },
  { href: '/hiring-platform', label: 'Hiring Platform' },
  { href: '/industries', label: 'Industries' },
  { href: '/automated-interviews', label: 'AI Interviews' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/blog', label: 'Blog' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    document.documentElement.classList.toggle('dark', next);
    window.localStorage.setItem('hiriq_theme', next ? 'dark' : 'light');
    setDarkMode(next);
  };

  const openSearch = () => {
    window.dispatchEvent(new Event('hiriq:open-search'));
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 w-full max-w-[100vw] z-50 transition-all duration-300 pt-safe print:hidden ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-cyan-200/50 shadow-lg shadow-cyan-500/5' : 'bg-white/80 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 overflow-x-hidden">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link href="/" className="flex items-center group cursor-pointer min-w-0" aria-label="Hiriq home">
              <div className="relative flex items-center min-w-0">
                <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-500 absolute -top-0.5 -left-0.5 sm:-top-1 sm:-left-1 animate-pulse flex-shrink-0" />
                <span className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent ml-5 sm:ml-6 truncate">
                  Hiriq
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-6 text-base lg:text-lg">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-200 hover:text-cyan-600 ${pathname === link.href ? 'text-cyan-700' : 'text-slate-700'}`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={openSearch}
                className="rounded-full p-2 text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                aria-label="Search site"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={toggleDarkMode}
                className="rounded-full p-2 text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <a
                href={DEMO_MAILTO}
                className="px-5 py-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Contact for Demo
              </a>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={openSearch}
                className="rounded-full p-2 text-slate-800 transition hover:bg-cyan-50"
                aria-label="Search site"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={toggleDarkMode}
                className="rounded-full p-2 text-slate-800 transition hover:bg-cyan-50"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                type="button"
                className="rounded-full p-2 text-slate-800 transition hover:bg-cyan-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-6 pt-2 space-y-2 pl-safe pr-safe text-lg">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-lg px-3 py-2 font-medium transition-colors duration-200 hover:bg-cyan-50 hover:text-cyan-700 ${pathname === link.href ? 'bg-cyan-50 text-cyan-700' : 'text-slate-700'}`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={DEMO_MAILTO}
                className="mt-3 block w-full px-6 py-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white rounded-xl font-semibold text-center shadow-lg"
              >
                Contact for Demo
              </a>
            </div>
          )}
        </div>
      </nav>
      <span id="main-content" tabIndex={-1} className="sr-only">
        Main content
      </span>
    </>
  );
}
