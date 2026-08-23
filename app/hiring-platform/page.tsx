"use client";
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, Zap, Clock, Target, Calendar, Shield, ArrowRight, FileText, CheckSquare, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

const DEMO_URL = 'https://calendly.com/ayesha786khaldoon/discovery-call-hiriq';

const LOCATION_CONFIG = {
  US: { currency: 'USD', symbol: '$', multiplier: 1.67, name: 'United States', discount: 0.6 },
  PK: { currency: 'PKR', symbol: 'Rs', multiplier: 280, name: 'Pakistan', discount: 0.6 },
  QA: { currency: 'QAR', symbol: 'ر.ق', multiplier: 6.07, name: 'Qatar', discount: 0.6 },
  AE: { currency: 'AED', symbol: 'د.إ', multiplier: 6.12, name: 'UAE', discount: 0.6 },
  DEFAULT: { currency: 'USD', symbol: '$', multiplier: 1.67, name: 'International', discount: 0.6 }
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

  const totalMinutes = candidates * minutesPerResume;
  const manualReviewHours = totalMinutes / 60;
  const hourlyCost = 50; // Average recruiter hourly rate
  const manualReviewCost = manualReviewHours * hourlyCost;

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
                AI-powered ATS that screens resumes, runs live conversational AI interviews,
                and gives recruiters scorecards, transcripts, and shortlist evidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white rounded-lg hover:opacity-90 transition font-semibold text-lg flex items-center justify-center"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/solutions/ai-interview-platform"
                  className="px-8 py-4 bg-white border-2 border-cyan-300 text-slate-700 rounded-lg hover:border-cyan-400 hover:bg-cyan-50 transition font-semibold text-lg flex items-center justify-center"
                >
                  Explore AI Interviews
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-600">
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
                  ATS
                </div>
              </div>
              <div className="text-slate-900 font-semibold mb-1">Structured hiring workflow</div>
              <div className="text-sm text-slate-600">From job setup to recruiter review</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckSquare className="w-8 h-8 text-cyan-600 mr-2" />
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent">
                  AI
                </div>
              </div>
              <div className="text-slate-900 font-semibold mb-1">Custom screening and interviews</div>
              <div className="text-sm text-slate-600">Tailor criteria, questions, and scorecards</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Shield className="w-8 h-8 text-green-600 mr-2" />
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Human
                </div>
              </div>
              <div className="text-slate-900 font-semibold mb-1">Recruiter-controlled decisions</div>
              <div className="text-sm text-slate-600">AI evidence with human oversight</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-600">
                Product depth
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">
                More than a resume parser. Hiriq runs the early hiring workflow.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Recruiters can create role-specific criteria, publish branded candidate flows,
                screen resumes, run pre-screening, launch live AI interviews, and review
                transcripts, scorecards, integrity flags, and shortlist evidence in one place.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ['Custom role setup', 'Control required skills, experience, salary range, question type, and screening threshold.'],
                  ['Resume intelligence', 'Extract skills, projects, background, and role-fit evidence for recruiter review.'],
                  ['Adaptive AI interviews', 'Ask follow-up questions when answers lack depth, clarity, or industry-specific evidence.'],
                  ['Integrity review', 'Flag tab switching, copy-paste behavior, focus changes, background voices, and multi-face signals.'],
                  ['Scorecards and transcripts', 'Give recruiters per-topic scores, per-turn answer ratings, summaries, and full transcript access.'],
                  ['Human oversight', 'Use AI recommendations as decision support while recruiters and hiring managers make the final call.'],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-50/50">
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  src: '/job_setup_interface_1768142202904.png',
                  alt: 'Hiriq job setup interface with automation levels and role requirements',
                  label: 'Role setup',
                },
                {
                  src: '/criteria_setup_interface_1768142221868.png',
                  alt: 'Hiriq criteria setup interface with match thresholds and screening questions',
                  label: 'Screening criteria',
                },
                {
                  src: '/candidate_match_analysis_1768142253998.png',
                  alt: 'Hiriq candidate match analysis with score and skills evidence',
                  label: 'Candidate evidence',
                },
                {
                  src: '/prescreening_interface_1768142278950.png',
                  alt: 'Hiriq AI pre-screening interface with live response and scoring context',
                  label: 'AI interview review',
                },
              ].map((item, index) => (
                <div
                  key={item.src}
                  className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${index % 2 === 1 ? 'sm:translate-y-8' : ''}`}
                >
                  <img src={item.src} alt={item.alt} className="aspect-[4/3] w-full object-cover object-left-top" />
                  <div className="border-t border-slate-100 px-4 py-3">
                    <p className="text-sm font-semibold text-slate-700">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Early-stage recruiting should not feel scattered.
            </h2>
            <p className="text-xl text-slate-300">
              Hiriq organizes the repetitive work before recruiter judgment is needed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: 'Spending hours screening resumes manually',
                solution: 'AI-assisted review structures evidence against the role',
                icon: Clock
              },
              {
                problem: 'Missing great candidates in the noise',
                solution: 'Role-fit signals help recruiters review stronger matches',
                icon: Target
              },
              {
                problem: 'Scheduling nightmare for initial calls',
                solution: 'Pre-screening gathers context before live recruiter time',
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
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                />
              </div>
            </div>

            {candidates > 0 && minutesPerResume > 0 && (
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {manualReviewHours.toFixed(1)}hrs
                    </div>
                    <div className="text-blue-100">Manual review load</div>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-white mb-2">
                      ${manualReviewCost.toLocaleString()}
                    </div>
                    <div className="text-blue-100">Estimated labor value</div>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {candidates.toLocaleString()}
                    </div>
                    <div className="text-blue-100">Candidates entered</div>
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
                  Automatically generate branded resume upload pages, create LinkedIn-ready job posts,
                  and collect resumes directly into your ATS. Works across all industries.
                </p>
                <ul className="space-y-3">
                  {[
                    'Set job description and requirements',
                    'Define custom screening criteria',
                    'Add knockout & qualifying questions',
                    'Auto-generate branded resume upload page',
                    'Create shareable, LinkedIn-ready job posts',
                    'Automatically collect resumes into ATS',
                    'Choose automation tier (Basic to Premium)',
                    'Multi-industry support (tech, healthcare, sales, finance, etc.)',
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

            {/* Feature 4 - Candidate pre-screening */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-cyan-50 p-6 shadow-2xl">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase text-amber-700">Qualification layer</p>
                    <h4 className="mt-1 text-xl font-bold text-slate-900">Candidate pre-screening</h4>
                  </div>
                  <CheckSquare className="h-7 w-7 text-amber-700" />
                </div>
                <div className="space-y-3">
                  {[
                    ['Availability', 'Shift, timezone, notice period, and start date'],
                    ['Role requirements', 'Must-have skills, certifications, tools, or work setup'],
                    ['Compensation fit', 'Salary range, contract type, and expectations'],
                    ['Recruiter routing', 'Move to AI interview, human review, or hold queue'],
                  ].map(([label, detail]) => (
                    <div key={label} className="rounded-xl border border-white/80 bg-white p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-bold text-slate-900">{label}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
                        </div>
                        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-700">Screen</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                  Step 4
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Candidate Pre-Screening Before the Full Interview
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  Pre-screening handles the practical qualification layer before a deeper AI interview.
                  Hiriq can collect availability, compensation fit, work setup, must-have requirements,
                  and knockout-question context so recruiters do not spend interview time on basic mismatches.
                </p>
                <ul className="space-y-3">
                  {[
                    'Short role-fit questions before the full interview',
                    'Availability, salary, location, work setup, and must-have requirement checks',
                    'Clear separation between quick qualification and deeper interview evaluation',
                    'Recruiter review before candidates move forward',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 5 - Live AI interview engine */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                <img
                  src="/prescreening_interface_1768142278950.png"
                  alt="Hiriq live AI interview interface with transcript, scoring, and evidence review"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 text-center text-sm text-slate-600">
                  Live AI interviews with adaptive follow-ups, scoring, transcript review, and integrity signals
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
                  Step 5
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Live Conversational AI Interviews
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  Hiriq runs structured, 30-minute AI interviews that adapt question by question.
                  The interview engine probes technical, scenario, behavioral, and industry-specific
                  depth, then gives recruiters transcripts, subtopic scores, per-turn ratings,
                  recommendations, and integrity flags for review.
                </p>
                <ul className="space-y-3">
                  {[
                    'Adaptive follow-up questions based on candidate answers',
                    'Technical, behavioral, scenario, and industry-specific evaluation',
                    'Transcript, scorecard, per-turn ratings, and recruiter recommendation',
                    'Integrity flags for tab switching, copy-paste, focus changes, voices, and multi-face signals',
                    'Final hiring decisions stay with recruiters and hiring managers'
                  ].map((item, i) => (
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

      {/* Workflow Evidence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What the platform helps teams standardize
            </h2>
            <p className="text-xl text-slate-600">
              Hiriq keeps early-stage hiring information organized before a recruiter makes a decision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
              <FileText className="mx-auto mb-4 h-10 w-10 text-blue-600" />
              <div className="text-slate-900 font-semibold text-lg">Role criteria and resume signals</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">Define requirements, parse candidate documents, and review fit against the job context.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-xl transition-shadow">
              <MessageSquare className="mx-auto mb-4 h-10 w-10 text-cyan-600" />
              <div className="text-slate-900 font-semibold text-lg">Pre-screening and interview context</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">Collect candidate responses, transcripts, and structured notes for recruiter review.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 hover:shadow-xl transition-shadow">
              <CheckSquare className="mx-auto mb-4 h-10 w-10 text-green-600" />
              <div className="text-slate-900 font-semibold text-lg">Shortlist evidence</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">Compare candidates consistently and keep final decisions with the hiring team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Implementation areas to review before rollout
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Strong AI hiring workflows start with clean criteria, human checkpoints, and transparent review habits.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['Criteria quality', 'Use clear job requirements, must-have skills, and evaluation rules before screening starts.'],
              ['Human review', 'Use AI output as structured evidence for recruiters, not as an automatic hiring decision.'],
              ['Candidate experience', 'Keep instructions clear, response windows reasonable, and follow-up communication timely.'],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{copy}</p>
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
            Bring resume screening, pre-screening, interviews, and shortlist review into one structured workflow.
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition text-lg inline-flex items-center"
          >
            Book a Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <p className="text-blue-100 mt-4">• Setup in 5 minutes</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
