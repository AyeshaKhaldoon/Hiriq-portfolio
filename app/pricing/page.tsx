"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { useState } from "react";

type FAQ = {
  q: string;
  a: string;
};

const DISCOVERY_CALL_URL =
  "https://calendly.com/ayesha786khaldoon/discovery-call-hiriq";

const faqs: FAQ[] = [
  {
    q: "Does Hiriq automatically move candidates through the hiring process?",
    a: "Yes. Hiriq is built to automate the repetitive stages of hiring — application review, resume screening, pre-screening, structured AI interviews, and evaluation — based on the criteria and capacity configured for each role. Recruiters can still review candidates and override progression when needed.",
  },
  {
    q: "What happens if more candidates qualify than my plan has capacity for?",
    a: "Hiriq advances candidates only up to the capacity available for that stage. Candidates who meet the criteria but are not advanced remain available for recruiter review rather than being sent an invitation that cannot be honored.",
  },
  {
    q: "What counts toward my resume, pre-screen, and AI interview usage?",
    a: "A resume screening is counted when an application is successfully parsed and scored. Pre-screen and AI interview capacity is managed before invitations are issued, and usage is counted when a valid candidate session begins. Unused expired reservations can be released back to the available capacity.",
  },
  {
    q: "Can recruiters manually advance or review candidates?",
    a: "Yes. Automation is the default workflow, but the recruiter stays in control. Recruiters can review rankings, transcripts, evaluations, and candidate evidence and can manually progress candidates where the workflow allows.",
  },
  {
    q: "Can I run more than one job at the same time?",
    a: "Yes. Starter includes up to 2 active jobs at a time. Teams supports more active hiring workflows, while Enterprise capacity is configured around your organization's hiring operation.",
  },
  {
    q: "What do recruiters receive after an AI interview?",
    a: "Recruiters receive the interview transcript, structured evaluation, supporting evidence, and candidate-level reporting in Hiriq. Hiriq helps standardize the assessment process; the recruiter remains responsible for the final hiring decision.",
  },
  {
    q: "Is interview integrity monitoring included?",
    a: "Advanced interview integrity monitoring is available on Teams and Enterprise. It surfaces review signals to help recruiters assess interview integrity and is designed for human review rather than automatic candidate rejection.",
  },
  {
    q: "Does Hiriq store continuous candidate interview video?",
    a: "No. Hiriq does not store continuous interview video or face embeddings. Where interview integrity monitoring is enabled, limited event evidence may be retained temporarily for recruiter review according to the platform's retention controls.",
  },
  {
    q: "Can we use our own branding on the candidate experience?",
    a: "Starter uses the standard Hiriq candidate experience. Teams and Enterprise can include custom-branded application pages and a more tailored candidate experience.",
  },
  {
    q: "Can Hiriq support more than one industry workflow?",
    a: "Starter includes 1 industry workflow. Additional industry workflows can be added for Teams based on your requirements, while Enterprise can be configured for multi-industry recruitment operations.",
  },
  {
    q: "Can Hiriq integrate with our ATS or existing systems?",
    a: "Custom integration requirements are handled through Enterprise. Book a discovery call and we can review your existing stack, workflow, and the integration scope required before confirming what should be implemented.",
  },
  {
    q: "What if our hiring volume is higher than the Starter allowance?",
    a: "Teams and Enterprise are designed for higher and recurring hiring volumes. If your team needs more candidate processing, active jobs, recruiter access, or interview capacity, book a discovery call and we'll configure the right setup around your expected usage.",
  },
  {
    q: "Can we see Hiriq before choosing Teams or Enterprise?",
    a: "Yes. Book a discovery call and we'll walk you through the Hiriq workflow, understand your hiring volume and recruitment process, and recommend the right setup for your team.",
  },
];

const starterPlan = {
  name: "Starter",
  monthly: 299,
  annual: 249,
  description:
    "For smaller hiring teams ready to automate screening from application to recruiter review.",
  features: [
    "2 active jobs",
    "2 recruiter seats",
    "AI resume screening & matching — 150 resumes/month",
    "Automated candidate pre-screening — 100 calls/month",
    "Structured AI interviews — 20 interviews/month",
    "Automated candidate progression",
    "Role-specific criteria, questions & deal-breakers",
    "Interview transcripts, evaluations & candidate reports",
    "Recruiter dashboard & candidate pipeline",
    "1 industry workflow included",
    "Standard support",
  ],
};

const teamsFeatures = [
  "Everything in Starter",
  "Higher candidate, pre-screen & AI interview capacity",
  "More active jobs & recruiter seats",
  "Custom-branded application pages",
  "Anti-cheating mechanisms & interview integrity monitoring",
  "Advanced reporting & hiring insights",
  "Flexible job-level workflow configuration",
  "Additional industry workflows available",
  "Priority support",
];

const enterpriseFeatures = [
  "Everything in Teams",
  "Custom candidate, job & recruiter capacity",
  "Multiple teams or departments",
  "Multi-industry recruitment workflows",
  "Custom recruitment workflow configuration",
  "Advanced security & compliance configuration",
  "Custom integration scoping",
  "Organization-level controls",
  "Dedicated onboarding & support",
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const starterPrice = isAnnual ? starterPlan.annual : starterPlan.monthly;
  const annualSavings = (starterPlan.monthly - starterPlan.annual) * 12;
  const annualTotal = starterPlan.annual * 12;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Automated screening, built around recruiter control
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Automate the repetitive stages of hiring.
            <span className="text-blue-600"> Scale when your hiring volume does.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-9 leading-relaxed">
            Hiriq screens applications, runs pre-screens and structured AI interviews,
            then gives recruiters the evidence they need to review stronger-fit candidates.
          </p>

          {/* Billing Toggle applies to Starter */}
          <div className="inline-flex items-center bg-slate-100 rounded-xl p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                !isAnnual
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                isAnnual
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Annual
              <span className="ml-2 text-xs text-green-600">Save ${annualSavings}/yr</span>
            </button>
          </div>

          <p className="mt-3 text-sm text-slate-500">
            Transparent Starter pricing · Teams and Enterprise are tailored to your hiring operation.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <div className="bg-white border-2 border-blue-400 rounded-3xl p-8 shadow-xl relative flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="whitespace-nowrap px-4 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-xs font-bold shadow-lg tracking-wide">
                  START HERE
                </span>
              </div>

              <div className="mb-7">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <Rocket className="w-5 h-5 text-blue-600" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {starterPlan.name}
                </h3>
                <p className="text-slate-600 min-h-[72px]">
                  {starterPlan.description}
                </p>
              </div>

              <div className="mb-7">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-bold tracking-tight text-slate-900">
                    ${starterPrice}
                  </span>
                  <span className="text-slate-500 mb-1">/month</span>
                </div>

                {isAnnual ? (
                  <div className="mt-2 text-sm text-green-600 font-medium">
                    Billed ${annualTotal.toLocaleString()} annually — save ${annualSavings}
                  </div>
                ) : (
                  <div className="mt-2 text-sm text-slate-500">
                    Or ${starterPlan.annual}/month billed annually — save ${annualSavings}/year
                  </div>
                )}
              </div>

              <div className="border-t border-slate-100 pt-6 mb-8 flex-1">
                <p className="text-sm font-bold text-slate-900 mb-4">
                  Everything you need to automate the core hiring funnel:
                </p>

                <ul className="space-y-3">
                  {starterPlan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://app.hiriq.co"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 text-center bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition shadow-lg"
              >
                Get Started
              </a>
            </div>

            {/* Teams */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="mb-7">
                <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center mb-5">
                  <Users className="w-5 h-5 text-cyan-600" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">Teams</h3>
                <p className="text-slate-600 min-h-[72px]">
                  For staffing agencies and growing recruitment teams running more jobs,
                  more candidate volume, and more recruiter workflows.
                </p>
              </div>

              <div className="mb-7">
                <div className="text-4xl font-bold tracking-tight text-slate-900">
                  Let&apos;s talk
                </div>
                <div className="mt-2 text-sm text-slate-500">
                  Configured around your hiring volume and team
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 mb-8 flex-1">
                <p className="text-sm font-bold text-slate-900 mb-4">
                  Scale the workflow without adding repetitive recruiter work:
                </p>

                <ul className="space-y-3">
                  {teamsFeatures.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={DISCOVERY_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 text-center border-2 border-slate-900 text-slate-900 rounded-xl font-semibold hover:bg-slate-50 transition"
              >
                Book a discovery call
              </a>
            </div>

            {/* Enterprise */}
            <div className="bg-slate-950 rounded-3xl p-8 text-white border-2 border-slate-800 hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="mb-7">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                  <Building2 className="w-5 h-5 text-amber-400" />
                </div>

                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-slate-300 min-h-[72px]">
                  For high-volume, multi-team recruitment operations with custom workflow,
                  security, industry, or integration requirements.
                </p>
              </div>

              <div className="mb-7">
                <div className="text-4xl font-bold tracking-tight">Custom</div>
                <div className="mt-2 text-sm text-slate-400">
                  Built around your organization
                </div>
              </div>

              <div className="border-t border-slate-800 pt-6 mb-8 flex-1">
                <p className="text-sm font-bold mb-4">
                  Configure Hiriq around your recruitment operation:
                </p>

                <ul className="space-y-3">
                  {enterpriseFeatures.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={DISCOVERY_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 text-center bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition"
              >
                Book a discovery call
              </a>
            </div>
          </div>

          {/* Public pricing note */}
          <div className="max-w-4xl mx-auto mt-12 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <p className="text-sm text-slate-600 leading-relaxed">
              Starter is Hiriq&apos;s transparent self-serve plan. Teams and Enterprise are
              configured around hiring volume, active jobs, recruiter access, industry
              workflows, branding, security, and operational requirements. {" "}
              <a
                href={DISCOVERY_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:underline"
              >
                Book a discovery call
              </a>{" "}
              to find the right setup.
            </p>
          </div>
        </div>
      </section>

      {/* Why Hiriq */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              One workflow. Less repetitive screening.
            </h2>
            <p className="text-slate-600 text-lg">
              Hiriq helps move candidates from application to recruiter review without
              adding another disconnected tool to the hiring process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Screen at scale",
                text: "Review applications against role requirements and surface stronger-fit candidates faster.",
                icon: Rocket,
              },
              {
                title: "Automate the middle",
                text: "Run pre-screens and structured AI interviews without making recruiters manually trigger every stage.",
                icon: Sparkles,
              },
              {
                title: "Keep recruiters in control",
                text: "Give recruiters transcripts, evaluations and evidence to review before making hiring decisions.",
                icon: ShieldCheck,
              },
            ].map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-slate-200 p-7"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Questions teams ask before choosing Hiriq
            </h2>
            <p className="text-lg text-slate-600">
              Practical answers about automation, usage, recruiter control, integrity,
              and scaling your hiring workflow.
            </p>
          </div>

          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to automate the repetitive part of hiring?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start with Starter, or book a discovery call for a Teams or Enterprise setup.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://app.hiriq.co"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-flex items-center shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>

            <a
              href={DISCOVERY_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition text-lg inline-flex items-center"
            >
              Book a discovery call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
