'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full max-w-[100vw] z-50 transition-all duration-300 pt-safe ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-cyan-200/50 shadow-lg shadow-cyan-500/5' : 'bg-white/80 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center group cursor-pointer min-w-0">
            <div className="relative flex items-center min-w-0">
              <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-500 absolute -top-0.5 -left-0.5 sm:-top-1 sm:-left-1 animate-pulse flex-shrink-0" />
              <span className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent ml-5 sm:ml-6 truncate">
                Hiriq
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg">
            <Link href="/" className="text-slate-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link href="/hiring-platform" className="text-slate-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
              Hiring Platform
            </Link>
            <Link href="/industries" className="text-slate-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
              Industries
            </Link>
            <Link href="/automated-interviews" className="text-slate-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
              AI Interviews
            </Link>
            <Link href="/pricing" className="text-slate-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
              Pricing
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
              Contact Us
            </Link>
            <Link href="/blog" className="text-slate-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
              Blog
            </Link>
            <a
              href="mailto:contact@hiriq.com?subject=Demo%20Request%20-%20Hiriq%20AI%20Recruitment%20Platform&body=Dear%20Hiriq%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20personalized%20demo%20of%20your%20AI-powered%20recruitment%20platform.%0A%0AOrganization%20Details%3A%0A%E2%80%A2%20Company%20Name%3A%20%0A%E2%80%A2%20Industry%3A%20%0A%E2%80%A2%20Team%20Size%3A%20%0A%0AContact%20Information%3A%0A%E2%80%A2%20Full%20Name%3A%20%0A%E2%80%A2%20Job%20Title%3A%20%0A%E2%80%A2%20Phone%20Number%3A%20%0A%E2%80%A2%20Preferred%20Contact%20Method%3A%20%0A%0ASpecific%20Interests%3A%0A%E2%80%A2%20Primary%20Use%20Case%3A%20%0A%E2%80%A2%20Current%20Hiring%20Volume%3A%20%0A%E2%80%A2%20Timeline%20for%20Implementation%3A%20%0A%0APlease%20share%20your%20available%20time%20slots%20for%20a%2030-minute%20demo%20session.%0A%0ABest%20regards"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Contact for Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-4 pl-safe pr-safe text-lg">
            <Link href="/" className="block text-slate-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link href="/hiring-platform" className="block text-slate-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
              Hiring Platform
            </Link>
            <Link href="/industries" className="block text-slate-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
              Industries
            </Link>
            <Link href="/automated-interviews" className="block text-slate-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
              AI Interviews
            </Link>
            <Link href="/pricing" className="block text-slate-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
              Pricing
            </Link>
            <Link href="/contact" className="block text-slate-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
              Contact Us
            </Link>
            <Link href="/blog" className="block text-slate-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
              Blog
            </Link>
            <a
              href="mailto:contact@hiriq.com?subject=Demo%20Request%20-%20Hiriq%20AI%20Recruitment%20Platform&body=Dear%20Hiriq%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20personalized%20demo%20of%20your%20AI-powered%20recruitment%20platform.%0A%0AOrganization%20Details%3A%0A%E2%80%A2%20Company%20Name%3A%20%0A%E2%80%A2%20Industry%3A%20%0A%E2%80%A2%20Team%20Size%3A%20%0A%0AContact%20Information%3A%0A%E2%80%A2%20Full%20Name%3A%20%0A%E2%80%A2%20Job%20Title%3A%20%0A%E2%80%A2%20Phone%20Number%3A%20%0A%E2%80%A2%20Preferred%20Contact%20Method%3A%20%0A%0ASpecific%20Interests%3A%0A%E2%80%A2%20Primary%20Use%20Case%3A%20%0A%E2%80%A2%20Current%20Hiring%20Volume%3A%20%0A%E2%80%A2%20Timeline%20for%20Implementation%3A%20%0A%0APlease%20share%20your%20available%20time%20slots%20for%20a%2030-minute%20demo%20session.%0A%0ABest%20regards"
              className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white rounded-xl font-semibold text-center"
            >
              Contact for Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}