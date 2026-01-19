'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Users, CheckCircle, Brain, Calendar, TrendingUp, Shield, CheckSquare, Sparkles, Menu, X, Star } from 'lucide-react';

export default function Home() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/40 to-cyan-400/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/40 to-sky-400/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-sky-400/30 to-blue-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-cyan-200/50 shadow-lg shadow-cyan-500/5' : 'bg-white/80 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center group cursor-pointer">
              <div className="relative">
                <Sparkles className="w-7 h-7 text-cyan-500 absolute -top-1 -left-1 animate-pulse" />
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent ml-6">
                  Hiriq
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/for-recruiters" className="text-slate-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
                For Recruiters
              </Link>
              <Link href="/for-candidates" className="text-slate-700 hover:text-purple-600 transition-colors duration-200 font-medium">
                For Candidates
              </Link>
              <Link href="/pricing" className="text-slate-700 hover:text-purple-600 transition-colors duration-200 font-medium">
                Pricing
              </Link>
              <Link href="/blog" className="text-slate-700 hover:text-purple-600 transition-colors duration-200 font-medium">
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
            <div className="md:hidden pb-6 space-y-4">
              <Link href="/for-recruiters" className="block text-slate-700 hover:text-purple-600 transition-colors duration-200 font-medium">
                For Recruiters
              </Link>
              <Link href="/for-candidates" className="block text-slate-700 hover:text-purple-600 transition-colors duration-200 font-medium">
                For Candidates
              </Link>
              <Link href="/pricing" className="block text-slate-700 hover:text-purple-600 transition-colors duration-200 font-medium">
                Pricing
              </Link>
              <Link href="/blog" className="block text-slate-700 hover:text-purple-600 transition-colors duration-200 font-medium">
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-100 via-cyan-100 to-sky-100 border border-cyan-200 rounded-full mb-8 backdrop-blur-sm shadow-lg">
              <Zap className="w-4 h-4 text-cyan-600 mr-2 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">AI-Powered Recruitment Platform</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Hire Smarter, Not Harder with{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                AI-Powered ATS
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
              From automated candidate screening to AI-driven pre-screening calls,
              <br className="hidden md:block" />
              Hiriq transforms your recruitment process with intelligent automation.
            </p>

            {/* Dual CTA Cards with Enhanced Design */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
              {/* Recruiter Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <Link href="/for-recruiters" className="block">
                  <div className="relative bg-white/90 backdrop-blur-xl p-8 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">For Recruiters</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Smart ATS with AI-powered screening, automated pre-screening calls, and intelligent candidate matching.
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Explore Recruiting Solutions
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Candidate Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <Link href="/for-candidates" className="block">
                  <div className="relative bg-white/90 backdrop-blur-xl p-8 rounded-2xl border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-sky-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">For Candidates</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      AI-powered mock interviews and practice sessions to ace your next technical or behavioral interview.
                    </p>
                    <div className="flex items-center text-cyan-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Prepare for Interviews
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border-2 border-blue-200 p-8 rounded-2xl transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-blue-300">
                <div className="flex items-center justify-center mb-4">
                  <Zap className="w-12 h-12 text-blue-600 mr-3 animate-pulse" />
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    90%
                  </div>
                </div>
                <div className="text-slate-900 font-semibold mb-2 text-lg text-center">
                  Potential Time Savings per Hire
                </div>
                <div className="text-sm text-slate-600 text-center">
                  Automate screening and initial interviews
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border-2 border-cyan-200 p-8 rounded-2xl transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-cyan-300">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-12 h-12 text-cyan-600 mr-3 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="text-6xl font-bold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent">
                    100%
                  </div>
                </div>
                <div className="text-slate-900 font-semibold mb-2 text-lg text-center">
                  Customizable Flows
                </div>
                <div className="text-sm text-slate-600 text-center">
                  Tailor every step to your needs
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border-2 border-green-200 p-8 rounded-2xl transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-green-300">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="w-12 h-12 text-green-600 mr-3 animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Enterprise
                  </div>
                </div>
                <div className="text-slate-900 font-semibold mb-2 text-lg text-center">
                  Enterprise-Ready
                </div>
                <div className="text-sm text-slate-600 text-center">
                  Secure & Scalable Architecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything You Need to Revolutionize Hiring
            </h2>
            <p className="text-xl text-slate-600">
              Powerful features designed for modern recruitment teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: 'Smart Resume Parsing',
                description: 'Automatically extract and structure candidate information from resumes with 99% accuracy.',
                gradient: 'from-blue-500 to-cyan-500',
                border: 'border-blue-200',
                hoverBorder: 'hover:border-cyan-400'
              },
              {
                icon: Brain,
                title: 'AI Criteria Matching',
                description: 'Intelligent algorithms match candidates to job requirements, surfacing the best fits instantly.',
                gradient: 'from-cyan-500 to-sky-500',
                border: 'border-cyan-200',
                hoverBorder: 'hover:border-cyan-400'
              },
              {
                icon: Calendar,
                title: 'Automated Pre-Screening',
                description: 'AI conducts initial screening calls on your behalf. No scheduling conflicts, available 24/7.',
                gradient: 'from-green-500 to-emerald-500',
                border: 'border-green-200',
                hoverBorder: 'hover:border-green-400'
              },
              {
                icon: TrendingUp,
                title: 'Analytics Dashboard',
                description: 'Track hiring metrics, pipeline health, and team performance in real-time.',
                gradient: 'from-orange-500 to-red-500',
                border: 'border-orange-200',
                hoverBorder: 'hover:border-orange-400'
              },
              {
                icon: Zap,
                title: 'Instant Shortlisting',
                description: 'Reduce time-to-hire by 60% with automated candidate ranking and recommendations.',
                gradient: 'from-yellow-500 to-orange-500',
                border: 'border-yellow-200',
                hoverBorder: 'hover:border-yellow-400'
              },
              {
                icon: Users,
                title: 'Collaboration Tools',
                description: 'Built-in feedback loops, shared evaluations, and seamless team collaboration.',
                gradient: 'from-blue-500 to-cyan-500',
                border: 'border-blue-200',
                hoverBorder: 'hover:border-cyan-400'
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className={`relative bg-white/80 backdrop-blur-xl border-2 ${feature.border} ${feature.hoverBorder} p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 h-full shadow-lg hover:shadow-xl`}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-md`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Infinite Slider */}
      <section className="relative py-20 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-slate-600 text-lg">Trusted by innovative companies across the globe</p>
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .testimonial-track:hover .animate-scroll {
            animation-play-state: paused;
          }
        `}</style>

        <div className="testimonial-track relative">
          <div className="flex animate-scroll">
            {[
              {
                quote: "Hiriq reduced our time-to-hire by 75%. The AI screening is incredibly accurate and saves us countless hours every week.",
                author: "Sarah Mitchell",
                role: "Head of Talent Acquisition",
                company: "TechVentures Inc."
              },
              {
                quote: "The automated pre-screening calls saved us hundreds of hours. Game changer for our recruitment process!",
                author: "Ahmed Al-Kuwari",
                role: "HR Director",
                company: "Doha Digital Solutions"
              },
              {
                quote: "Best ATS we've used. The candidate matching is spot-on every time. Highly recommend to all recruiters.",
                author: "Maria Santos",
                role: "VP of People Operations",
                company: "Global Tech Partners"
              },
              {
                quote: "Implementation was smooth and the ROI was immediate. Our hiring process is now 3x faster than before.",
                author: "Khalid Rahman",
                role: "Recruitment Manager",
                company: "Pearl Innovations Qatar"
              },
              {
                quote: "The AI interviews are incredibly natural. Candidates actually enjoy the experience and we get better insights.",
                author: "Jennifer Park",
                role: "Talent Director",
                company: "NextGen Solutions"
              },
              {
                quote: "We've scaled from 10 to 100 employees in 6 months, all thanks to Hiriq's automation. Absolutely essential tool!",
                author: "Omar Hassan",
                role: "Co-Founder & CEO",
                company: "Crescent Technologies"
              },
              {
                quote: "The analytics dashboard gives us insights we never had before. Data-driven hiring has improved our quality by 40%.",
                author: "Lisa Chen",
                role: "People Analytics Lead",
                company: "DataFlow Systems"
              },
              {
                quote: "Outstanding support team. They helped us customize workflows perfectly for our industry-specific needs.",
                author: "Fatima Al-Thani",
                role: "HR Manager",
                company: "Gulf Star Enterprises"
              },
              // Duplicate set for infinite scroll
              {
                quote: "Hiriq reduced our time-to-hire by 75%. The AI screening is incredibly accurate and saves us countless hours every week.",
                author: "Sarah Mitchell",
                role: "Head of Talent Acquisition",
                company: "TechVentures Inc."
              },
              {
                quote: "The automated pre-screening calls saved us hundreds of hours. Game changer for our recruitment process!",
                author: "Ahmed Al-Kuwari",
                role: "HR Director",
                company: "Doha Digital Solutions"
              },
              {
                quote: "Best ATS we've used. The candidate matching is spot-on every time. Highly recommend to all recruiters.",
                author: "Maria Santos",
                role: "VP of People Operations",
                company: "Global Tech Partners"
              },
              {
                quote: "Implementation was smooth and the ROI was immediate. Our hiring process is now 3x faster than before.",
                author: "Khalid Rahman",
                role: "Recruitment Manager",
                company: "Pearl Innovations Qatar"
              },
              {
                quote: "The AI interviews are incredibly natural. Candidates actually enjoy the experience and we get better insights.",
                author: "Jennifer Park",
                role: "Talent Director",
                company: "NextGen Solutions"
              },
              {
                quote: "We've scaled from 10 to 100 employees in 6 months, all thanks to Hiriq's automation. Absolutely essential tool!",
                author: "Omar Hassan",
                role: "Co-Founder & CEO",
                company: "Crescent Technologies"
              },
              {
                quote: "The analytics dashboard gives us insights we never had before. Data-driven hiring has improved our quality by 40%.",
                author: "Lisa Chen",
                role: "People Analytics Lead",
                company: "DataFlow Systems"
              },
              {
                quote: "Outstanding support team. They helped us customize workflows perfectly for our industry-specific needs.",
                author: "Fatima Al-Thani",
                role: "HR Manager",
                company: "Gulf Star Enterprises"
              }
            ].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-96 mx-4">
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-xl border-2 border-cyan-200 hover:border-cyan-300 p-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl h-full flex flex-col">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-4 italic leading-relaxed text-sm flex-grow">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{testimonial.author}</p>
                      <p className="text-xs text-slate-600">{testimonial.role}</p>
                      <p className="text-xs text-cyan-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-sky-600/10 backdrop-blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Start your 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.hiriq.co"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white rounded-xl font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="mailto:contact@hiriq.com?subject=Demo%20Request%20-%20Hiriq%20AI%20Recruitment%20Platform&body=Dear%20Hiriq%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20personalized%20demo%20of%20your%20AI-powered%20recruitment%20platform.%0A%0AOrganization%20Details%3A%0A%E2%80%A2%20Company%20Name%3A%20%0A%E2%80%A2%20Industry%3A%20%0A%E2%80%A2%20Team%20Size%3A%20%0A%0AContact%20Information%3A%0A%E2%80%A2%20Full%20Name%3A%20%0A%E2%80%A2%20Job%20Title%3A%20%0A%E2%80%A2%20Phone%20Number%3A%20%0A%E2%80%A2%20Preferred%20Contact%20Method%3A%20%0A%0ASpecific%20Interests%3A%0A%E2%80%A2%20Primary%20Use%20Case%3A%20%0A%E2%80%A2%20Current%20Hiring%20Volume%3A%20%0A%E2%80%A2%20Timeline%20for%20Implementation%3A%20%0A%0APlease%20share%20your%20available%20time%20slots%20for%20a%2030-minute%20demo%20session.%0A%0ABest%20regards"
              className="px-8 py-4 bg-white/80 backdrop-blur-xl border-2 border-cyan-300 text-slate-900 rounded-xl font-semibold hover:bg-white hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-blue-900 via-cyan-900 to-sky-900 text-white py-16 z-10 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <Sparkles className="w-6 h-6 text-cyan-400 mr-2 animate-pulse" />
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-400">
                  Hiriq
                </h3>
              </div>
              <p className="text-gray-300 text-sm">
                AI-powered recruitment platform for modern teams.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/for-recruiters" className="hover:text-cyan-400 transition-colors">For Recruiters</Link></li>
                <li><Link href="/for-candidates" className="hover:text-yellow-400 transition-colors">For Candidates</Link></li>
                <li><Link href="/pricing" className="hover:text-yellow-400 transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link></li>

              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cyan-600 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Hiriq. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}