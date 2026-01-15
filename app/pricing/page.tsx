"use client";
import Link from 'next/link';
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
  US: { currency: 'USD', symbol: '$', multiplier: 1, name: 'United States' },
  PK: { currency: 'PKR', symbol: 'Rs', multiplier: 280, name: 'Pakistan', discount: 0.6 },
  IN: { currency: 'INR', symbol: '₹', multiplier: 90.27, name: 'India' },
  SA: { currency: 'SAR', symbol: 'ر.س', multiplier: 3.75, name: 'Saudi Arabia' },
  GB: { currency: 'GBP', symbol: '£', multiplier: 0.79, name: 'United Kingdom' },
  QA: { currency: 'QAR', symbol: 'ر.ق', multiplier: 3.64, name: 'Qatar' },
  AE: { currency: 'AED', symbol: 'د.إ', multiplier: 3.67, name: 'UAE' },
  DEFAULT: { currency: 'USD', symbol: '$', multiplier: 1, name: 'International' }
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
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hiriq
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/for-recruiters" className="text-slate-700 hover:text-blue-600 transition">For Recruiters</Link>
              <Link href="/for-candidates" className="text-slate-700 hover:text-blue-600 transition">For Candidates</Link>
              <Link href="/pricing" className="text-blue-600 font-semibold">Pricing</Link>
              <Link href="/pricing">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Start Free Trial
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

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
          <div className="grid md:grid-cols-3 gap-8">
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

              <Link href="/signup">
                <button className="w-full py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                  Start Free Trial
                </button>
              </Link>
            </div>

            {/* Smart ATS - Popular */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative transform md:scale-105 shadow-2xl">
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

              <Link href="/signup">
                <button className="w-full py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg">
                  Start Free Trial
                </button>
              </Link>
            </div>

            {/* AI Pre-Screening Add-on */}
            <div className="bg-white border-2 border-purple-500 rounded-2xl p-8 hover:border-purple-600 transition-all duration-300 hover:shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold shadow-lg">
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

              <Link href="/signup">
                <button className="w-full py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all">
                  Start Free Trial
                </button>
              </Link>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Hiring?</h2>
          <p className="text-xl text-blue-100 mb-8">Start your 14-day free trial today. No credit card required.</p>
          <Link href="/pricing">
            <button className="px-12 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition text-lg inline-flex items-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
          <p className="text-blue-100 mt-6">
            Questions? <Link href="/contact" className="underline font-semibold hover:text-white transition">Contact our sales team</Link>
          </p>
        </div>
      </section>
    </div>
  );
}