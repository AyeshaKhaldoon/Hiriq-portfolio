import Link from 'next/link';
import { Target, Users, Zap, Shield, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
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
