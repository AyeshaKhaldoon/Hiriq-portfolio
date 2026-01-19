"use client";
import Link from 'next/link';
import { CheckCircle, Zap, Clock, Target, Users, TrendingUp, Calendar, Shield, ArrowRight, FileText, CheckSquare, MessageSquare, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const LOCATION_CONFIG = {
  US: { currency: 'USD', symbol: '$', multiplier: 1, name: 'United States' },
  PK: { currency: 'PKR', symbol: 'Rs', multiplier: 280, name: 'Pakistan', discount: 0.6 },
  QA: { currency: 'QAR', symbol: 'ر.ق', multiplier: 3.64, name: 'Qatar' },
  AE: { currency: 'AED', symbol: 'د.إ', multiplier: 3.67, name: 'UAE' },
  DEFAULT: { currency: 'USD', symbol: '$', multiplier: 1, name: 'International' }
};

export default function ForRecruiters() {
  const [candidates, setCandidates] = useState(200);
  const [minutesPerResume, setMinutesPerResume] = useState(5);
  const [location, setLocation] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      let detectedCode = 'DEFAULT';

      // Detect location based on timezone
      if (timezone.includes('Karachi') || timezone.includes('Pakistan')) {
        detectedCode = 'PK';
      } else if (timezone.includes('Qatar')) {
        detectedCode = 'QA';
      } else if (timezone.includes('Dubai') || timezone.includes('UAE')) {
        detectedCode = 'AE';
      } else if (timezone.includes('America/') || timezone.includes('New_York') || timezone.includes('Chicago') || timezone.includes('Los_Angeles')) {
        detectedCode = 'US';
      }

      setLocation(LOCATION_CONFIG[detectedCode as keyof typeof LOCATION_CONFIG] || LOCATION_CONFIG.DEFAULT);
    } catch {
      setLocation(LOCATION_CONFIG.DEFAULT);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const calculatePrice = (baseUSD: number, applyDiscount: boolean = true) => {
    if (!location) return baseUSD;
    let price = baseUSD * location.multiplier;
    if (applyDiscount && location.discount) {
      price *= location.discount;
    }
    return Math.round(price);
  };

  const formatPrice = (baseUSD: number, applyDiscount: boolean = true) => {
    const price = calculatePrice(baseUSD, applyDiscount);
    return `${location?.symbol || '$'} ${price.toLocaleString()}`;
  };

  // Calculations
  const totalMinutes = candidates * minutesPerResume;
  const hoursSaved = (totalMinutes * 0.85) / 60; // AI saves 85% of time
  const hourlyCost = 50; // Average recruiter hourly rate
  const monthlySavings = hoursSaved * hourlyCost;
  const timeSavedPercent = 85;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading pricing for your region...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Same as homepage */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Hiriq
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/for-recruiters" className="text-blue-600 font-semibold">For Recruiters</Link>
              <Link href="/for-candidates" className="text-slate-700 hover:text-blue-600 transition">For Candidates</Link>
              <Link href="/pricing" className="text-slate-700 hover:text-blue-600 transition">Pricing</Link>
              <a
                href="https://app.hiriq.co"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white rounded-lg hover:opacity-90 transition"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                <Zap className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-700">Recruitment ATS Platform</span>
              </div>

              <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Stop Drowning in Resumes. Start Hiring Smarter.
              </h1>

              <p className="text-xl text-slate-600 mb-8">
                AI-powered ATS that automates screening, conducts pre-screening calls,
                and delivers qualified candidates to your inbox—without the manual work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://app.hiriq.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white rounded-lg hover:opacity-90 transition font-semibold text-lg flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@hiriq.co?subject=Demo%20Request%20-%20Hiriq%20AI%20Recruitment%20Platform&body=Dear%20Hiriq%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20personalized%20demo%20of%20your%20AI-powered%20recruitment%20platform.%0A%0AOrganization%20Details%3A%0A%E2%80%A2%20Company%20Name%3A%20%0A%E2%80%A2%20Industry%3A%20%0A%E2%80%A2%20Team%20Size%3A%20%0A%0AContact%20Information%3A%0A%E2%80%A2%20Full%20Name%3A%20%0A%E2%80%A2%20Job%20Title%3A%20%0A%E2%80%A2%20Phone%20Number%3A%20%0A%E2%80%A2%20Preferred%20Contact%20Method%3A%20%0A%0ASpecific%20Interests%3A%0A%E2%80%A2%20Primary%20Use%20Case%3A%20%0A%E2%80%A2%20Current%20Hiring%20Volume%3A%20%0A%E2%80%A2%20Timeline%20for%20Implementation%3A%20%0A%0APlease%20share%20your%20available%20time%20slots%20for%20a%2030-minute%20demo%20session.%0A%0ABest%20regards"
                  className="px-8 py-4 bg-white border-2 border-cyan-300 text-slate-700 rounded-lg hover:border-cyan-400 hover:bg-cyan-50 transition font-semibold text-lg flex items-center justify-center"
                >
                  Book a Demo
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Setup in minutes
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                <img
                  src="https://i.ibb.co/d0VjXx2P/Whats-App-Image-2026-01-11-at-21-11-32.jpg"
                  alt="Real-time candidate pipeline showing stages from Upload to Offer"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center">
                  ⚡ Track candidates through every stage: Upload → Email → Screening → Interview → Offer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-blue-600 mr-2" />
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  90%
                </div>
              </div>
              <div className="text-slate-900 font-semibold mb-1">Potential Time Savings per Hire</div>
              <div className="text-sm text-slate-600">Automate screening and initial interviews</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckSquare className="w-8 h-8 text-cyan-600 mr-2" />
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent">
                  100%
                </div>
              </div>
              <div className="text-slate-900 font-semibold mb-1">Customizable Interview & Screening Flows</div>
              <div className="text-sm text-slate-600">Tailor every step to your needs</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Shield className="w-8 h-8 text-green-600 mr-2" />
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Enterprise
                </div>
              </div>
              <div className="text-slate-900 font-semibold mb-1">Enterprise-Ready</div>
              <div className="text-sm text-slate-600">Secure & Scalable Architecture</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Traditional Recruiting is Broken. We Fixed It.
            </h2>
            <p className="text-xl text-slate-300">
              Stop wasting time on tasks that AI can handle better
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: 'Spending hours screening resumes manually',
                solution: 'AI screens hundreds in seconds',
                icon: Clock
              },
              {
                problem: 'Missing great candidates in the noise',
                solution: 'Smart matching surfaces top talent',
                icon: Target
              },
              {
                problem: 'Scheduling nightmare for initial calls',
                solution: 'Automated pre-screening 24/7',
                icon: Calendar
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-xl">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-red-400" />
                </div>
                <div className="mb-4">
                  <div className="text-red-400 font-semibold mb-2">❌ Problem:</div>
                  <p className="text-slate-300">{item.problem}</p>
                </div>
                <div>
                  <div className="text-green-400 font-semibold mb-2">✅ Solution:</div>
                  <p className="text-white font-medium">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Tiers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Choose Your Level of Automation
            </h2>
            <p className="text-xl text-slate-600">
              From basic parsing to fully automated pre-screening—scale as you grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic ATS */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Basic ATS</h3>
                <p className="text-slate-600">For small teams & startups</p>
              </div>

              <div className="mb-6 text-center">
                {location?.discount ? (
                  <>
                    <div className="flex items-baseline justify-center gap-2 mb-1">
                      <span className="text-2xl font-bold text-slate-400 line-through">
                        {formatPrice(99, false)}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-green-600">
                        {formatPrice(99)}
                      </span>
                      <span className="text-slate-600">/month</span>
                    </div>
                    <div className="mt-1">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                        {Math.round((1 - location.discount) * 100)}% OFF
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-slate-900">
                      {formatPrice(99)}
                    </span>
                    <span className="text-slate-600">/month</span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  'Unlimited jobs',
                  'Up to 500 candidates/month',
                  'Resume parsing for all candidates',
                  'Basic pipeline & filters',
                  '3 users included',
                  'Email support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200">
                <div className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-600" />
                  Add-ons Available
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-700">+100 candidates</span>
                    <span className="font-semibold text-slate-900">{formatPrice(9)}/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-700">+1 user</span>
                    <span className="font-semibold text-slate-900">{formatPrice(4)}/mo</span>
                  </div>
                </div>
              </div>

              <a
                href="https://app.hiriq.co"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 text-center border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                Start Free Trial
              </a>
            </div>

            {/* Smart ATS - Popular */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white relative transform md:scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 bg-yellow-400 text-slate-900 rounded-full text-sm font-bold shadow-lg">
                  ⭐ MOST POPULAR
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Smart ATS</h3>
                <p className="text-blue-100">For growing companies</p>
              </div>

              <div className="mb-6 text-center">
                {location?.discount ? (
                  <>
                    <div className="flex items-baseline justify-center gap-2 mb-1">
                      <span className="text-2xl font-bold text-blue-200 line-through">
                        {formatPrice(179, false)}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold">
                        {formatPrice(179)}
                      </span>
                      <span className="text-blue-100">/month</span>
                    </div>
                    <div className="mt-1">
                      <span className="inline-block px-3 py-1 bg-yellow-300 text-slate-900 rounded-full text-xs font-bold">
                        {Math.round((1 - location.discount) * 100)}% OFF
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold">
                      {formatPrice(179)}
                    </span>
                    <span className="text-blue-100">/month</span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  'Everything in Basic, plus:',
                  'AI resume matching & ranking',
                  'Advanced filters & scoring',
                  'Team collaboration',
                  'Analytics & reports',
                  '6 users included',
                  '500 candidates included'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <span className={`text-sm ${i === 0 ? 'font-semibold' : 'text-blue-50'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 p-4 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-sm font-bold mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Add-ons Available
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-blue-50">+100 candidates</span>
                    <span className="font-semibold">{formatPrice(18)}/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-blue-50">+1 user</span>
                    <span className="font-semibold">{formatPrice(5)}/mo</span>
                  </div>
                </div>
              </div>

              <a
                href="https://app.hiriq.co"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 text-center bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
              >
                Start Free Trial
              </a>
            </div>

            {/* AI Pre-Screening Add-on */}
            <div className="bg-white border-2 border-cyan-500 rounded-2xl p-8 hover:border-cyan-600 transition-all duration-300 hover:shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 bg-gradient-to-r from-cyan-600 to-sky-600 text-white rounded-full text-sm font-bold shadow-lg">
                  🔥 ADD-ON
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">AI Pre-Screening</h3>
                <p className="text-slate-600">Automated interview workflows</p>
              </div>

              <div className="mb-6 text-center">
                {location?.discount ? (
                  <>
                    <div className="flex items-baseline justify-center gap-2 mb-1">
                      <span className="text-2xl font-bold text-slate-400 line-through">
                        {formatPrice(199, false)}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-cyan-600">
                        {formatPrice(199)}
                      </span>
                      <span className="text-slate-600">/month</span>
                    </div>
                    <div className="mt-1">
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold">
                        {Math.round((1 - location.discount) * 100)}% OFF
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-slate-900">
                      {formatPrice(199)}
                    </span>
                    <span className="text-slate-600">/month</span>
                  </div>
                )}
                <div className="text-sm text-cyan-600 font-medium mt-1">+ usage-based calling</div>
              </div>

              <ul className="space-y-3 mb-4">
                {[
                  'Everything in Smart, plus:',
                  'Automated pre-screening workflows',
                  'Knockout questions',
                  'Auto-shortlisting',
                  'Status automation',
                  'Priority support',
                  '8 users included',
                  '500 candidates included'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className={`text-sm ${i === 0 ? 'font-semibold text-slate-900' : 'text-slate-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                <div className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  🔥 AI Calling Usage Pricing
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { calls: 20, price: 20 },
                    { calls: 50, price: 45 },
                    { calls: 100, price: 80 },
                    { calls: 250, price: 200 }
                  ].map((tier, i) => (
                    <div key={i} className="bg-white rounded-lg p-2 border border-purple-100">
                      <div className="text-xs text-slate-600">{tier.calls} calls</div>
                      <div className="font-bold text-cyan-600">{formatPrice(tier.price)}</div>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-slate-600 mt-3 leading-relaxed">
                  Includes interview flows, evaluation rubrics & RTC infrastructure
                </div>
              </div>

              <div className="mb-6 p-4 bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl border border-slate-200">
                <div className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-600" />
                  Additional Add-ons
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-700">+100 candidates</span>
                    <span className="font-semibold text-slate-900">{formatPrice(18)}/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-700">+1 user</span>
                    <span className="font-semibold text-slate-900">{formatPrice(5)}/mo</span>
                  </div>
                </div>
              </div>

              <a
                href="https://app.hiriq.co"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 text-center border-2 border-cyan-600 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-all"
              >
                Start Free Trial
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/pricing" className="text-blue-600 font-semibold hover:underline">
              View detailed feature comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* PPP Notice for discounted regions */}
      {location?.discount && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 text-center">
              <Sparkles className="w-6 h-6 text-green-600 inline mb-2" />
              <h3 className="text-xl font-bold text-green-900 mb-2">
                Special Pricing for {location.name}
              </h3>
              <p className="text-green-800">
                You're getting {Math.round((1 - location.discount) * 100)}% off with purchasing power parity pricing. We believe great hiring tools should be accessible everywhere.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ROI Calculator */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
              Calculate Your Time Savings
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  How many candidates do you review monthly?
                </label>
                <input
                  type="number"
                  value={candidates}
                  onChange={(e) => setCandidates(Number(e.target.value) || 0)}
                  placeholder="e.g., 200"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Average time spent per resume (minutes)
                </label>
                <input
                  type="number"
                  value={minutesPerResume}
                  onChange={(e) => setMinutesPerResume(Number(e.target.value) || 0)}
                  placeholder="e.g., 5"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                />
              </div>
            </div>

            {candidates > 0 && minutesPerResume > 0 && (
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {hoursSaved.toFixed(1)}hrs
                    </div>
                    <div className="text-blue-100">Saved per month</div>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-white mb-2">
                      ${monthlySavings.toLocaleString()}
                    </div>
                    <div className="text-blue-100">Cost savings</div>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {timeSavedPercent}%
                    </div>
                    <div className="text-blue-100">Time reduction</div>
                  </div>
                </div>
              </div>

            )}

            {(candidates === 0 || minutesPerResume === 0) && (
              <div className="bg-slate-100 rounded-xl p-8 text-center text-slate-600">
                Enter your numbers above to see your potential savings
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            How Hiriq Works
          </h2>

          <div className="space-y-16">
            {/* Feature 1 - Use REAL Job Setup Screenshot */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                  Step 1
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Create Jobs in Minutes
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  Our streamlined workflow gets you from idea to live job posting in seconds.
                  Create your job, define screening criteria, add custom questions—and you're done.
                  Choose your automation level from Basic to Full ATS.
                </p>
                <ul className="space-y-3">
                  {[
                    'Set job description',
                    'Set custom screening criteria',
                    'Add knockout & qualifying questions',
                    'Choose automation tier (Basic to Premium)',
                    'One-click multi-board distribution'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                <img
                  src="/job_setup_interface_1768142202904.png"
                  alt="Job Role Setup Interface showing automation workflow tiers"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 text-center text-sm text-slate-600">
                  ⚡ Choose from 4 automation levels: Basic ATS → Smart ATS → Pre-Screening → Full Automation
                </div>
              </div>
            </div>

            {/* Feature 2 - Use REAL Criteria Setup Screenshot */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                <img
                  src="/criteria_setup_interface_1768142221868.png"
                  alt="Candidate criteria setup showing minimum match percentage, experience, salary range, and custom questions"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 text-center text-sm text-slate-600">
                  🎯 Set match threshold, experience, salary, skills & custom interview questions
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                  Step 2
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  AI Screens & Ranks Automatically
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  Set your criteria once: minimum match percentage, years of experience, salary range,
                  required skills, and custom questions. Our AI analyzes every resume and automatically
                  shortlists candidates who meet your threshold.
                </p>
                <ul className="space-y-3">
                  {[
                    'Adjustable match threshold (60-90%)',
                    'Years of experience & salary filters',
                    'Required skills & education level',
                    'Custom interview questions',
                    'AI automatically asks & validates'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 3 - Candidate Match Analysis */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                  Step 3
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Review AI-Matched Candidates
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  See exactly why each candidate matched. Our AI provides detailed match analysis,
                  showing skills, experience, projects, and criteria alignment.
                  Know instantly if someone is worth interviewing.
                </p>
                <ul className="space-y-3">
                  {[
                    'Match score with detailed breakdown',
                    'Automatic skill extraction & tagging',
                    'Experience & project analysis',
                    'Red flag detection (domain mismatches)',
                    'One-click move through pipeline'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                <img
                  src="/candidate_match_analysis_1768142253998.png"
                  alt="Candidate match analysis showing 84% score, skills, and experience breakdown"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 text-center text-sm text-slate-600">
                  📊 Detailed match analysis: 84% score with 29 skills, 18 projects identified
                </div>
              </div>
            </div>

            {/* Feature 4 - Keep Pre-Screening as is */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                <img
                  src="/prescreening_interface_1768142278950.png"
                  alt="AI-powered pre-screening interview interface with audio visualization and real-time scoring"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 text-center text-sm text-slate-600">
                  🎙️ AI conducts live interviews with real-time scoring and transcript analysis
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
                  Step 4 (Premium)
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Automated Pre-Screening Calls
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  Premium plan: AI conducts initial phone screens 24/7.
                  No scheduling hassles. Candidates get instant feedback.
                  You get transcripts, scores, and red flags highlighted.
                </p>
                <ul className="space-y-3">
                  {['Available 24/7, any timezone', 'Full Call Summary', 'Automatic scoring'].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Trusted by Forward-Thinking Companies
            </h2>
            <p className="text-xl text-slate-600">
              Join hundreds of companies that have transformed their hiring process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                60%
              </div>
              <div className="text-slate-900 font-semibold text-lg">Reduction in Time-to-Hire</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-xl transition-shadow">
              <div className="text-6xl font-bold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent mb-3">
                10,000+
              </div>
              <div className="text-slate-900 font-semibold text-lg">Candidates Screened Monthly</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 hover:shadow-xl transition-shadow">
              <div className="text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3">
                94%
              </div>
              <div className="text-slate-900 font-semibold text-lg">Customer Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            What Recruiters Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Hiriq cut our time-to-hire from 6 weeks to 2.5 weeks. The AI pre-screening is a game-changer.",
                author: "Sarah Chen",
                role: "Head of Talent, TechCorp",
                company: "500+ employees"
              },
              {
                quote: "We were drowning in applications. Now we focus only on qualified candidates. ROI was immediate.",
                author: "Michael Rodriguez",
                role: "Recruiting Manager",
                company: "Series B Startup"
              },
              {
                quote: "The automated calls work better than our junior recruiters. Consistent, unbiased, and available 24/7.",
                author: "Jennifer Park",
                role: "VP of HR",
                company: "Enterprise"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-sm text-slate-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Hiring Smarter Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ companies that have transformed their recruitment process
          </p>
          <a
            href="https://app.hiriq.co"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition text-lg inline-flex items-center"
          >
            Start Your 14-Day Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <p className="text-blue-100 mt-4">No credit card required • Setup in 5 minutes</p>
        </div>
      </section>
    </div>
  );
}