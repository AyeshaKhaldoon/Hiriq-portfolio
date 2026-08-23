'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, Moon, Search, Sun, X } from 'lucide-react';

const DEMO_URL = 'https://calendly.com/ayesha786khaldoon/discovery-call-hiriq';

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/hiring-platform', label: 'Hiring Platform' },
  { href: '/industries', label: 'Industries' },
  { href: '/automated-interviews', label: 'AI Interviews' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact Us' },
];

const secondaryLinks = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/blog', label: 'Blog' },
];

const mobileLinks = [...primaryLinks, ...secondaryLinks];

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
    window.localStorage.setItem('hiriq_theme_explicit_v2', 'true');
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
              <div className="flex h-10 w-[138px] items-center sm:h-12 sm:w-[168px]">
                <img
                  src="/Logo.png"
                  alt="Hiriq"
                  className="h-full w-full object-contain object-left"
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-4 text-sm lg:gap-5 lg:text-base">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-200 hover:text-cyan-600 ${pathname === link.href ? 'text-cyan-700' : 'text-slate-700'}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="ml-2 flex items-center gap-4 border-l border-slate-200 pl-5 lg:gap-5">
                {secondaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-semibold transition-colors duration-200 hover:text-cyan-600 ${pathname === link.href ? 'text-cyan-700' : 'text-slate-700'}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
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
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
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
              {mobileLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-lg px-3 py-2 font-medium transition-colors duration-200 hover:bg-cyan-50 hover:text-cyan-700 ${pathname === link.href ? 'bg-cyan-50 text-cyan-700' : 'text-slate-700'}`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
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
