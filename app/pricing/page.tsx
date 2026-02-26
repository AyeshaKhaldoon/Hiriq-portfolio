"use client";
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  { q: 'Can I switch plans anytime?', a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate the difference.' },
  { q: 'What happens after the free trial?', a: 'After your 14-day free trial, you\'ll be charged based on your selected plan. You can cancel anytime during the trial with no charges.' },
  { q: 'What counts as a "candidate"?', a: 'A candidate is counted when they apply or are added to your system. Viewing or re-screening the same candidate does not count as a new candidate.' },
  { q: 'Do you offer refunds?', a: 'We offer a 30-day money-back guarantee. If you are not satisfied with Hiriq, contact us within 30 days for a full refund.' },
  { q: 'Can I add more team members?', a: 'Yes! Basic includes 3 users, Smart includes 6, and AI Pre-Screening includes 8. You can purchase additional seats as add-ons.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards (Visa, Mastercard, Amex) and can arrange invoicing for annual plans or Enterprise customers.' },
  { q: 'Is there a setup fee?', a: 'No setup fees for any plan. You can start using Hiriq immediately after signing up.' },
  { q: 'How does AI pre-screening work?', a: 'Our AI conducts voice calls with candidates based on your criteria, asks follow-up questions, and provides detailed transcripts and scoring—available as an add-on to Smart ATS.' }
];

const LOCATION_CONFIG = {
  US: { currency: 'USD', symbol: '$', multiplier: 1.67, name: 'United States', discount: 0.6 },
  PK: { currency: 'PKR', symbol: 'Rs', multiplier: 280, name: 'Pakistan', discount: 0.6 },
  IN: { currency: 'INR', symbol: '₹', multiplier: 150.45, name: 'India', discount: 0.6 },
  SA: { currency: 'SAR', symbol: 'ر.س', multiplier: 6.25, name: 'Saudi Arabia', discount: 0.6 },
  GB: { currency: 'GBP', symbol: '£', multiplier: 1.32, name: 'United Kingdom', discount: 0.6 },
  QA: { currency: 'QAR', symbol: 'ر.ق', multiplier: 6.07, name: 'Qatar', discount: 0.6 },
  AE: { currency: 'AED', symbol: 'د.إ', multiplier: 6.12, name: 'UAE', discount: 0.6 },
  DEFAULT: { currency: 'USD', symbol: '$', multiplier: 1.67, name: 'International', discount: 0.6 }
};

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [location, setLocation] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      let detectedCode = 'DEFAULT';

      // Detect location based on timezone
      if (timezone.includes('Karachi') || timezone.includes('Pakistan')) {
        detectedCode = 'PK';
      } else if (timezone.includes('Kolkata') || timezone.includes('Calcutta') || timezone.includes('India')) {
        detectedCode = 'IN';
      } else if (timezone.includes('Riyadh') || timezone.includes('Saudi')) {
        detectedCode = 'SA';
      } else if (timezone.includes('London') || timezone.includes('Europe/London')) {
        detectedCode = 'GB';
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

  // Base USD pricing
  const basePricing = {
    basic: {
      monthly: 99,
      annual: 79,
      features: [
        'Unlimited jobs',
        'Up to 500 candidates/month',
        'Resume parsing for all candidates',
        'Basic pipeline & filters',
        '3 users included',
        'Email support'
      ],
      addons: [
        { label: '+100 candidates', price: 9 },
        { label: '+1 user', price: 4 }
      ]
    },
    smart: {
      monthly: 179,
      annual: 143,
      features: [
        'Everything in Basic, plus:',
        'AI resume matching & ranking',
        'Advanced filters & scoring',
        'Team collaboration',
        'Analytics & reports',
        '6 users included',
        '500 candidates included'
      ],
      addons: [
        { label: '+100 candidates', price: 18 },
        { label: '+1 user', price: 5 }
      ]
    },
    prescreening: {
      monthly: 199,
      annual: 159,
      features: [
        'Everything in Smart, plus:',
        'Automated pre-screening workflows',
        'Knockout questions',
        'Auto-shortlisting',
        'Status automation',
        'Priority support',
        '8 users included',
        '500 candidates included'
      ],
      addons: [
        { label: '+100 candidates', price: 18 },
        { label: '+1 user', price: 5 }
      ],
      calling: [
        { calls: 20, price: 20 },
        { calls: 50, price: 45 },
        { calls: 100, price: 80 },
        { calls: 250, price: 200 }
      ]
    }
  };

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
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Choose the plan that scales with your hiring needs. All plans include a 14-day free trial.
          </p>

          {/* Annual/Monthly Toggle */}
          <div className="inline-flex items-center bg-slate-100 rounded-lg p-1 mb-4">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${!isAnnual
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${isAnnual
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              Annual <span className="text-green-600 text-sm ml-1">Save 20%</span>
            </button>
          </div>

          {isAnnual && (
            <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">
                Save up to {location.symbol} {Math.round(((basePricing.prescreening.monthly - basePricing.prescreening.annual) * 12) * (location.discount || 1) * location.multiplier).toLocaleString()}/year with annual billing!
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Basic ATS */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Basic ATS</h3>
                <p className="text-slate-600">For small teams & startups</p>
              </div>

              <div className="mb-6 text-center">
                {location.discount ? (
                  <>
                    <div className="flex items-baseline justify-center gap-2 mb-1">
                      <span className="text-2xl font-bold text-slate-400 line-through">
                        {formatPrice(isAnnual ? basePricing.basic.annual : basePricing.basic.monthly, false)}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-green-600">
                        {formatPrice(isAnnual ? basePricing.basic.annual : basePricing.basic.monthly)}
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
                      {formatPrice(isAnnual ? basePricing.basic.annual : basePricing.basic.monthly)}
                    </span>
                    <span className="text-slate-600">/month</span>
                  </div>
                )}
                {isAnnual && (
                  <div className="mt-2 text-sm text-green-600 font-medium">
                    {location.symbol} {(calculatePrice(basePricing.basic.annual) * 12).toLocaleString()}/year (save {location.symbol} {((calculatePrice(basePricing.basic.monthly) - calculatePrice(basePricing.basic.annual)) * 12).toLocaleString()})
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {basePricing.basic.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200">
                <div className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  Add-ons Available
                </div>
                <div className="space-y-2">
                  {basePricing.basic.addons.map((addon, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-slate-700">{addon.label}</span>
                      <span className="font-semibold text-slate-900">{formatPrice(addon.price)}/mo</span>
                    </div>
                  ))}
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
            <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 rounded-2xl p-8 text-white relative transform md:scale-105 shadow-2xl">
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
                {location.discount ? (
                  <>
                    <div className="flex items-baseline justify-center gap-2 mb-1">
                      <span className="text-2xl font-bold text-blue-200 line-through">
                        {formatPrice(isAnnual ? basePricing.smart.annual : basePricing.smart.monthly, false)}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold">
                        {formatPrice(isAnnual ? basePricing.smart.annual : basePricing.smart.monthly)}
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
                      {formatPrice(isAnnual ? basePricing.smart.annual : basePricing.smart.monthly)}
                    </span>
                    <span className="text-blue-100">/month</span>
                  </div>
                )}
                {isAnnual && (
                  <div className="mt-2 text-sm text-yellow-300 font-medium">
                    {location.symbol} {(calculatePrice(basePricing.smart.annual) * 12).toLocaleString()}/year (save {location.symbol} {((calculatePrice(basePricing.smart.monthly) - calculatePrice(basePricing.smart.annual)) * 12).toLocaleString()})
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {basePricing.smart.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <span className={`text-sm ${i === 0 ? 'font-semibold' : 'text-blue-50'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 p-4 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-sm font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Add-ons Available
                </div>
                <div className="space-y-2">
                  {basePricing.smart.addons.map((addon, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-blue-50">{addon.label}</span>
                      <span className="font-semibold">{formatPrice(addon.price)}/mo</span>
                    </div>
                  ))}
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
            <div className="bg-white border-2 border-purple-500 rounded-2xl p-8 hover:border-purple-600 transition-all duration-300 hover:shadow-xl relative">
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
                {location.discount ? (
                  <>
                    <div className="flex items-baseline justify-center gap-2 mb-1">
                      <span className="text-2xl font-bold text-slate-400 line-through">
                        {formatPrice(isAnnual ? basePricing.prescreening.annual : basePricing.prescreening.monthly, false)}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-purple-600">
                        {formatPrice(isAnnual ? basePricing.prescreening.annual : basePricing.prescreening.monthly)}
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
                      {formatPrice(isAnnual ? basePricing.prescreening.annual : basePricing.prescreening.monthly)}
                    </span>
                    <span className="text-slate-600">/month</span>
                  </div>
                )}
                <div className="text-sm text-purple-600 font-medium mt-1">+ usage-based calling</div>
                {isAnnual && (
                  <div className="mt-2 text-sm text-green-600 font-medium">
                    {location.symbol} {(calculatePrice(basePricing.prescreening.annual) * 12).toLocaleString()}/year (save {location.symbol} {((calculatePrice(basePricing.prescreening.monthly) - calculatePrice(basePricing.prescreening.annual)) * 12).toLocaleString()})
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-4">
                {basePricing.prescreening.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className={`text-sm ${i === 0 ? 'font-semibold text-slate-900' : 'text-slate-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                <div className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  🔥 AI Calling Usage Pricing
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {basePricing.prescreening.calling.map((tier, i) => (
                    <div key={i} className="bg-white rounded-lg p-2 border border-purple-100">
                      <div className="text-xs text-slate-600">{tier.calls} calls</div>
                      <div className="font-bold text-purple-600">{formatPrice(tier.price)}</div>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-slate-600 mt-3 leading-relaxed">
                  Includes interview flows, evaluation rubrics & RTC infrastructure
                </div>
              </div>

              <div className="mb-6 p-4 bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl border border-slate-200">
                <div className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  Additional Add-ons
                </div>
                <div className="space-y-2">
                  {basePricing.prescreening.addons.map((addon, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-slate-700">{addon.label}</span>
                      <span className="font-semibold text-slate-900">{formatPrice(addon.price)}/mo</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://app.hiriq.co"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 text-center border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all"
              >
                Start Free Trial
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 text-white relative hover:shadow-2xl transition-all duration-300 border-2 border-slate-700">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-bold shadow-lg">
                  ⭐ ENTERPRISE
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-slate-300">For large organizations</p>
              </div>

              <div className="mb-6 text-center">
                <div className="text-3xl font-bold mb-2">Custom Pricing</div>
                <p className="text-sm text-slate-400">Tailored to your needs</p>
              </div>

              <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-sm text-slate-200 leading-relaxed">
                  Designed for large organizations with complex hiring needs, advanced workflows, and high hiring volumes.
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  'Everything in Smart, plus:',
                  'Automated pre-screening workflows',
                  'Knockout questions for candidate filtering',
                  'Intelligent auto-shortlisting',
                  'Hiring status automation',
                  'Priority support and onboarding',
                  'Advanced workflow customization',
                  'Scalable team access for large hiring teams',
                  'Enterprise-grade reliability and performance'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className={`text-sm ${i === 0 ? 'font-semibold' : 'text-slate-300'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 p-4 bg-amber-500/10 backdrop-blur-sm rounded-xl border border-amber-500/30">
                <div className="text-sm font-bold mb-2 text-amber-400">Ideal For:</div>
                <ul className="text-xs text-slate-300 space-y-1">
                  <li>• Large companies</li>
                  <li>• Enterprises with ongoing or high-volume hiring</li>
                  <li>• Organizations requiring structured, automated recruitment processes</li>
                  <li>• Teams that need scalability, control, and advanced hiring intelligence</li>
                </ul>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:contact@hiriq.co?subject=Enterprise%20Demo%20Request%20-%20Hiriq%20AI%20Recruitment%20Platform&body=Dear%20Hiriq%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20personalized%20demo%20of%20your%20Enterprise%20AI-powered%20recruitment%20platform.%0A%0AOrganization%20Details%3A%0A%E2%80%A2%20Company%20Name%3A%20%0A%E2%80%A2%20Industry%3A%20%0A%E2%80%A2%20Team%20Size%3A%20%0A%E2%80%A2%20Expected%20Hiring%20Volume%3A%20%0A%0AContact%20Information%3A%0A%E2%80%A2%20Full%20Name%3A%20%0A%E2%80%A2%20Job%20Title%3A%20%0A%E2%80%A2%20Phone%20Number%3A%20%0A%E2%80%A2%20Preferred%20Contact%20Method%3A%20%0A%0ASpecific%20Interests%3A%0A%E2%80%A2%20Primary%20Use%20Case%3A%20%0A%E2%80%A2%20Current%20Hiring%20Volume%3A%20%0A%E2%80%A2%20Timeline%20for%20Implementation%3A%20%0A%0APlease%20share%20your%20available%20time%20slots%20for%20a%2030-minute%20demo%20session.%0A%0ABest%20regards"
                  className="block w-full py-3 text-center bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-lg"
                >
                  Request a Demo
                </a>
                <a
                  href="mailto:contact@hiriq.co?subject=Enterprise%20Sales%20Inquiry%20-%20Hiriq%20AI%20Recruitment%20Platform&body=Dear%20Hiriq%20Sales%20Team%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20Enterprise%20plan.%0A%0AOrganization%20Details%3A%0A%E2%80%A2%20Company%20Name%3A%20%0A%E2%80%A2%20Industry%3A%20%0A%E2%80%A2%20Team%20Size%3A%20%0A%E2%80%A2%20Expected%20Hiring%20Volume%3A%20%0A%0AContact%20Information%3A%0A%E2%80%A2%20Full%20Name%3A%20%0A%E2%80%A2%20Job%20Title%3A%20%0A%E2%80%A2%20Email%3A%20%0A%E2%80%A2%20Phone%20Number%3A%20%0A%0AQuestions%2FRequirements%3A%0A%0A%0ABest%20regards"
                  className="block w-full py-3 text-center border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PPP Notice for discounted regions */}
      {location.discount && (
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

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Hiring?</h2>
          <p className="text-xl text-blue-100 mb-8">Start your 14-day free trial today.</p>
          <a
            href="https://app.hiriq.co"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition text-lg inline-flex items-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <p className="text-blue-100 mt-6">
            Questions? <Link href="/contact" className="underline font-semibold hover:text-white transition">Contact our sales team</Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}