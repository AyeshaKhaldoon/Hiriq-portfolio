import Link from 'next/link';
import Image from 'next/image';
import { Target, Users, Shield, CheckCircle, ArrowRight, Sparkles, ExternalLink, Linkedin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  const founders = [
    {
      name: 'Ayesha Khaldoon',
      role: 'Co-Founder CEO',
      image: '/team/ayesha-khaldoon.jpg',
      alt: 'Ayesha Khaldoon, Co-Founder CEO of Hiriq',
      description:
        'Leads Hiriq around intelligent, human-centered hiring workflows for recruiters and hiring teams.',
    },
    {
      name: 'Muhammad Ahmad',
      role: 'Co-Founder CTO',
      image: '/team/muhammad-ahmad.jpg',
      alt: 'Muhammad Ahmad, Co-Founder CTO of Hiriq',
      description:
        'Leads Hiriq technology across AI screening, interview workflows, product architecture, and platform reliability.',
    },
  ];

  const principles = [
    {
      icon: Target,
      title: 'Precision-Driven',
      description:
        'Every feature is engineered to solve real recruitment bottlenecks with measurable impact.'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade',
      description:
        'Built on robust infrastructure with security, scalability, and reliability at the core.'
    },
    {
      icon: Users,
      title: 'Bias Reduction',
      description:
        'Structured evaluation frameworks ensure consistent, objective candidate assessment.'
    },
    {
      icon: Sparkles,
      title: 'Intelligence Layer',
      description:
        'AI augments human expertise rather than replacing the critical judgment of hiring teams.'
    }
  ];

  const milestones = [
    {
      phase: 'The Challenge',
      title: 'Identifying the Inefficiency',
      description:
        'Modern recruitment technology has barely evolved. Teams still drown in unstructured resumes while exceptional candidates slip through manual screening processes. The problem was not talent scarcity—it was systemic inefficiency in early-stage evaluation.'
    },
    {
      phase: 'The Vision',
      title: 'Reimagining Recruitment Infrastructure',
      description:
        'We recognized that AI could fundamentally transform how companies identify and evaluate talent. Not through automation for automation\'s sake, but by creating structured, intelligent systems that enhance human decision-making at scale.'
    },
    {
      phase: 'The Solution',
      title: 'Building Hiriq Platform',
      description:
        'Hiriq emerged as a comprehensive recruitment intelligence platform—combining automated screening, role-specific interview generation, and consistent evaluation frameworks. Our technology enables teams to make faster, fairer, and more data-driven hiring decisions.'
    },
    {
      phase: 'The Impact',
      title: 'Democratizing Enterprise Tools',
      description:
        'What was once accessible only to Fortune 500 companies with dedicated recruitment technology budgets is now available to growing teams. We are building the recruitment infrastructure that scales with your organization.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - More Editorial */}
      <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/5 to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase px-4 py-2 bg-blue-50 rounded-full">
              About Hiriq
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight max-w-4xl">
            Intelligent Recruitment Infrastructure for Modern Teams
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl font-light">
            A comprehensive platform that transforms how organizations discover, evaluate, and hire talent—combining AI-powered automation with structured decision frameworks.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-600">
                Founders
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">
                Led by a founder team building practical AI recruiting infrastructure.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Hiriq is shaped around real recruiter workflows: clearer criteria, faster evidence collection,
                and fewer manual handoffs between screening, interviews, and decisions.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.linkedin.com/company/hiriq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-6 font-semibold text-white transition hover:bg-slate-800"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Hiriq on LinkedIn
                </a>
                <a
                  href="https://boardroompk.com/site/startups/intelligent-human-centered-hiring-ayesha-khaldoon-founder-of-hiriq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 px-6 font-semibold text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                >
                  BoardroomPK interview
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {founders.map((founder) => (
                <article
                  key={founder.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/5] bg-slate-100">
                    <Image
                      src={founder.image}
                      alt={founder.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm font-bold uppercase tracking-wide text-blue-600">{founder.role}</p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">{founder.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{founder.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-600">
              Public interview
            </p>
            <p className="text-lg leading-8 text-slate-700">
              In BoardroomPK, Ayesha Khaldoon explains Hiriq as a workflow that can move from
              job requirements to CV analysis, candidate matching, pre-screening, AI interview,
              structured evaluation, and recruiter decision while keeping the final decision with people.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="text-lg font-semibold text-blue-600 mb-4 tracking-wide uppercase">
              Our Mission
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
              Democratizing enterprise-grade recruitment technology for teams of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The recruitment landscape is fragmented. Large enterprises invest millions in proprietary systems while growing companies struggle with manual processes that do not scale.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Hiriq bridges this gap by delivering sophisticated recruitment infrastructure that is accessible, scalable, and designed for the modern hiring environment.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">What We Believe</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span>Every organization deserves access to intelligent hiring tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span>Structured processes reduce bias and improve outcomes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span>AI amplifies human judgment, not replaces it</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span>Speed and quality are not mutually exclusive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Principles */}
      <section className="py-32 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-lg font-semibold text-blue-600 mb-4 tracking-wide uppercase">
              Platform Principles
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-3xl mx-auto">
              Built on a foundation of reliability, intelligence, and scalability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <principle.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{principle.title}</h3>
                <p className="text-slate-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey/Story Timeline */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-lg font-semibold text-blue-600 mb-4 tracking-wide uppercase">
              The Journey
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              How Hiriq came to be
            </p>
          </div>

          <div className="space-y-16">
            {milestones.map((milestone, i) => (
              <div key={i} className="relative pl-12 border-l-2 border-blue-200">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                
                <div className="mb-3">
                  <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {milestone.phase}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {milestone.title}
                </h3>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transform Your Hiring Process
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join forward-thinking organizations that are building better teams with intelligent recruitment infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 hover:shadow-2xl transition-all text-lg inline-flex items-center justify-center transform hover:-translate-y-1"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all text-lg transform hover:-translate-y-1"
            >
              View Pricing
            </Link>
          </div>
          <p className="mt-8 text-blue-100 text-sm">
          Free 14-day trial • Full platform access
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
