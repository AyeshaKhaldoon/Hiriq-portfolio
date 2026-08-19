'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useInView } from '@/hooks/useInView';
import {
  ArrowRight,
  Cpu,
  Heart,
  Building2,
  Factory,
  ShoppingBag,
  Phone,
  Sparkles,
  CheckCircle2,
  Target,
} from 'lucide-react';

// ─── Industry data aligned with backend industrySchemas + parsing/matching services ───
const INDUSTRIES = [
  {
    id: 'tech',
    name: 'Technology',
    icon: Cpu,
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-200 hover:border-blue-400',
    optimize: [
      'Technical stack alignment (languages, frameworks, databases, cloud)',
      'Domain detection (Software Engineering, ML/AI, Data Science, DevOps, Cybersecurity, Design)',
      'Project quality and work experience depth',
      'Role and seniority matching',
      'Regex-first parsing with GPT fallback when quality is low',
    ],
    features: [
      'Tech resume parsing: skills, projects, work experience, education',
      'Domain taxonomy: Software Eng, ML/AI, Data Science, Blockchain, DevOps, Cyber, Design',
      'Job form: tech stack, frameworks, databases, cloud platforms, DevOps, methodologies, role, seniority',
      'Quality checks: email + (skills ≥3 or projects or work) + education',
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Regulated Care',
    icon: Heart,
    color: 'from-rose-500 to-pink-500',
    borderColor: 'border-rose-200 hover:border-rose-400',
    optimize: [
      'Role category and specific role (Nursing, Allied Health, Diagnostic Lab, Admin Support)',
      'Licensure and certifications (BLS, ACLS, PALS, RN, NP, etc.)',
      'Clinical skills and patient population matching',
      'EHR systems and facility type alignment',
      'Compliance-aware evaluation',
    ],
    features: [
      'Healthcare resume parsing: licenses, certifications, clinical skills sections',
      'Job form: role category, role, license type/state, certifications, clinical skills, patient population, EHR, department, facility type, shift',
      'Extensive clinical certification and skill ontology in parser',
      'Scenario-ready fields for compliance and empathy evaluation',
    ],
  },
  {
    id: 'bfsi',
    name: 'Banking, Finance & Insurance',
    icon: Building2,
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-200 hover:border-emerald-400',
    optimize: [
      'Sub-category matching (Accounting/Finance, Banking Operations, Insurance, Compliance/Risk)',
      'Certification validation (CPA, CFA, ACCA, CIA, etc.)',
      'Regulatory knowledge and finance software alignment',
      'Background checks and security clearance flags',
      'Tenure and complexity level expectations',
    ],
    features: [
      'BFSI resume parsing: finance titles, certifications, regulatory and ERP signals',
      'Job form: sub_category, role, certifications, regulatory knowledge, finance software, ERP, industry experience, background checks',
      'Certification and license parsing with status (Active Required, Pursuing Accepted)',
      'Detail priority and complexity level for role fit',
    ],
  },
  {
    id: 'operations_logistics',
    name: 'Operations & Logistics',
    icon: Factory,
    color: 'from-amber-500 to-orange-500',
    borderColor: 'border-amber-200 hover:border-amber-400',
    optimize: [
      'Role cluster matching (Warehousing, Delivery, Manufacturing, Retail DC)',
      'Equipment proficiency (forklift, reach truck, CDL, CNC, etc.)',
      'Safety certifications (OSHA 10/30, forklift, CDL, hazmat, First Aid/CPR)',
      'Shift type and physical requirements alignment',
      'Warehouse systems (WMS) and safety training',
    ],
    features: [
      'Operations resume parsing: equipment, certifications, physical capability, shift signals',
      'Job form: role cluster, role, shift type, equipment required, certifications, physical requirements, warehouse systems, safety training',
      'Certification patterns with expiry detection (forklift, OSHA, CDL, hazmat, welding, food safety)',
      'Quality scoring that does not require projects (operations-appropriate)',
    ],
  },
  {
    id: 'retail',
    name: 'Retail, Hospitality & Fast-Food',
    icon: ShoppingBag,
    color: 'from-violet-500 to-purple-500',
    borderColor: 'border-violet-200 hover:border-violet-400',
    optimize: [
      'Role cluster (Retail Store, Cash & Service, Hospitality, Fast-Food/QSR)',
      'POS system experience (Square, Toast, Micros, Opera PMS, etc.)',
      'Food safety and alcohol service certifications (ServSafe, TIPS, TABC, etc.)',
      'Customer service and upselling signals',
      'Shift coverage and store type matching',
    ],
    features: [
      'Retail/Hospitality resume parsing: POS, food & alcohol certs, customer service keywords',
      'Job form: role cluster, role, store type, shift coverage, customer service skills, POS experience, physical requirements',
      'POS taxonomy: Retail, Restaurant/Food, Hotel/Hospitality PMS',
      'Quality scoring without projects (customer-facing focus)',
    ],
  },
  {
    id: 'sales',
    name: 'Sales, BD & BPO',
    icon: Phone,
    color: 'from-cyan-500 to-blue-500',
    borderColor: 'border-cyan-200 hover:border-cyan-400',
    optimize: [
      'Role cluster (Business Development, SDR/Lead Gen, Call Center/BPO, Sales Operations)',
      'Quota attainment and revenue metrics (ARR, pipeline, closed-won)',
      'CRM and sales tools (Salesforce, HubSpot, Outreach, Gong, etc.)',
      'Sales methodologies (MEDDPICC, SPIN, Challenger, etc.) and target segment',
      'Industry vertical experience',
    ],
    features: [
      'Sales/BPO resume parsing: quota, activity metrics, CRM, methodologies, verticals',
      'Job form: role cluster, role, target segment, sales motion, quota type/value, CRM systems, sales tools, methodologies, industry vertical experience',
      'SDR/AE/Call Center/Sales Ops role detection',
      'Quality scoring without requiring projects (sales-appropriate)',
    ],
  },
];

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState(INDUSTRIES[0].id);
  const [tabKey, setTabKey] = useState(0);
  const active = INDUSTRIES.find((i) => i.id === activeTab) ?? INDUSTRIES[0];
  const whyInView = useInView();
  const industriesInView = useInView();
  const bannerInView = useInView();

  useEffect(() => {
    setTabKey((k) => k + 1);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6 opacity-0 animate-slide-up [animation-fill-mode:forwards] animate-stagger-1">
            Hiring Intelligence Built for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Every Industry
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-slide-up [animation-fill-mode:forwards] animate-stagger-2">
            From tech to BFSI, operations to retail, Hiriq adapts job forms, resume parsing, and
            matching to your industry&apos;s hiring needs.
          </p>
          <a
            href="#industries"
            className="inline-flex items-center justify-center h-14 rounded-full px-8 text-lg font-semibold bg-slate-900 text-white shadow-xl hover:bg-slate-800 transition-all duration-300 hover:scale-[1.02] opacity-0 animate-slide-up [animation-fill-mode:forwards] animate-stagger-3"
          >
            Explore Your Industry
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Why Industry-Specific */}
      <section ref={whyInView.ref} className="py-20 lg:py-28 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={whyInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}>
              <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
                Why it matters
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Generic ATS systems treat every resume the same.
                <br />
                <span className="text-cyan-600">Hiriq doesn&apos;t.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Each industry has different job forms, evaluation standards, and parser logic.
                Hiriq&apos;s industry schemas and parsers align resume parsing, criteria matching,
                and job setup to what you actually hire for.
              </p>
              <ul className="space-y-3">
                {[
                  'Industry-specific job forms and required fields',
                  'Parser logic tuned to certifications, tools, and metrics that matter',
                  'Matching that respects compliance and role clusters',
                  'Quality thresholds that fit each sector (e.g. no projects for sales/retail/ops)',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`relative ${whyInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}`} style={{ animationDelay: '120ms' }}>
              <div className="aspect-square max-w-md mx-auto rounded-3xl bg-white/80 border border-slate-200/80 shadow-xl flex flex-col justify-center p-8">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide text-center mb-6">
                  Relevance to your industry
                </p>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-600">Generic ATS</span>
                      <span className="font-medium text-slate-500">~30%</span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-slate-300 to-slate-400 rounded-full origin-left"
                        style={{
                          width: '30%',
                          animation: whyInView.inView ? 'progressFill 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards' : 'none',
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-cyan-700 font-medium">Hiriq · Industry-specific</span>
                      <span className="font-semibold text-cyan-600">~95%</span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full origin-left"
                        style={{
                          width: '95%',
                          animation: whyInView.inView ? 'progressFill 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s forwards' : 'none',
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-xs">
                  <Target className="w-4 h-4 text-cyan-500" />
                  <span>Forms, parsing & matching tailored to your sector</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry cards / tabs */}
      <section id="industries" ref={industriesInView.ref} className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 ${industriesInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Built for Your Industry
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select an industry to see what Hiriq optimizes for and which features are included.
            </p>
          </div>

          {/* Tab pills — IDs match IndustrySelectionModal and JobSetup */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === ind.id
                    ? `bg-gradient-to-r ${ind.color} text-white shadow-lg scale-105`
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {ind.name.split(/[\s,]+/)[0]}
              </button>
            ))}
          </div>

          {/* Active industry card */}
          <div
            key={tabKey}
            className={`rounded-3xl border-2 ${active.borderColor} bg-white p-8 lg:p-12 shadow-xl transition-all duration-300 overflow-hidden animate-scale-in`}
          >
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-shrink-0">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${active.color} flex items-center justify-center shadow-lg`}
                >
                  <active.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">{active.name}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-10 flex-1 min-w-0">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-4">
                    What We Optimize For
                  </h4>
                  <ul className="space-y-2">
                    {active.optimize.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <Sparkles className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-4">
                    Included Features
                  </h4>
                  <ul className="space-y-2">
                    {active.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing banner */}
      <section ref={bannerInView.ref} className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${bannerInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}`}>
          <p className="text-slate-300 mb-6">
            No matter your industry, Hiriq adapts job forms, resume parsing, and matching
            to real-world hiring expectations.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Smarter screening.
            <br />
            Better interviews.
            <br />
            Stronger hiring decisions.
          </h2>
          <a
            href="https://app.hiriq.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 rounded-full px-8 text-lg font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 hover:scale-[1.02] mt-8"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
