import Link from 'next/link';
import { Target, Users, Zap, Heart, ArrowRight } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Customer First',
      description:
        'We solve real hiring problems with practical solutions, not features for the sake of features.'
    },
    {
      icon: Zap,
      title: 'Move Fast',
      description:
        'Hiring is time-sensitive. We iterate quickly and continuously improve based on feedback.'
    },
    {
      icon: Users,
      title: 'Inclusive by Design',
      description:
        'Structured interviews and consistent evaluation help reduce bias and noise.'
    },
    {
      icon: Heart,
      title: 'Human-Centered AI',
      description:
        'AI should support better decisions, not replace human judgment.'
    }
  ];

  const teamMembers = [
    {
      name: 'Ayesha Khaldoon',
      role: 'Co-Founder — Product & Growth',
      bio: 'Focused on product vision, user experience, and building solutions that solve real hiring problems.',
      img: '/7.jpeg'
    },
    {
      name: 'Muhammad Ahmad',
      role: 'Co-Founder — Engineering',
      bio: 'Leads engineering and system architecture, turning ideas into scalable, reliable technology.',
      img: '/8.jpg',
      scale: 'scale-90' // zoomed out image slightly
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent"
            >
              Hiriq
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/for-recruiters" className="text-slate-700 hover:text-blue-600 transition">
                For Recruiters
              </Link>
              <Link href="/for-candidates" className="text-slate-700 hover:text-blue-600 transition">
                For Candidates
              </Link>
              <Link href="/pricing" className="text-slate-700 hover:text-blue-600 transition">
                Pricing
              </Link>
              <Link href="/blog" className="text-slate-700 hover:text-blue-600 transition">
                Blog
              </Link>
              <a
                href="mailto:contact@hiriq.com?subject=Demo%20Request%20-%20Hiriq%20AI%20Recruitment%20Platform&body=Dear%20Hiriq%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20personalized%20demo%20of%20your%20AI-powered%20recruitment%20platform.%0A%0AOrganization%20Details%3A%0A%E2%80%A2%20Company%20Name%3A%20%0A%E2%80%A2%20Industry%3A%20%0A%E2%80%A2%20Team%20Size%3A%20%0A%0AContact%20Information%3A%0A%E2%80%A2%20Full%20Name%3A%20%0A%E2%80%A2%20Job%20Title%3A%20%0A%E2%80%A2%20Phone%20Number%3A%20%0A%E2%80%A2%20Preferred%20Contact%20Method%3A%20%0A%0ASpecific%20Interests%3A%0A%E2%80%A2%20Primary%20Use%20Case%3A%20%0A%E2%80%A2%20Current%20Hiring%20Volume%3A%20%0A%E2%80%A2%20Timeline%20for%20Implementation%3A%20%0A%0APlease%20share%20your%20available%20time%20slots%20for%20a%2030-minute%20demo%20session.%0A%0ABest%20regards"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white rounded-lg hover:opacity-90 transition"
              >
                Contact for Demo
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            We Are Building the Future of Recruitment
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Hiring today is slow, manual, and inefficient. Companies waste time screening,
            while great candidates get overlooked. Hiriq is rethinking this process with AI —
            making hiring faster, fairer, and more structured.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We believe every team — not just large enterprises — should have access to
                powerful, intelligent hiring tools. Our mission is to democratize AI-powered
                recruitment and remove friction from the earliest stages of hiring.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                By automating repetitive screening and enabling role-specific interviews,
                we help teams focus on what actually matters: making better hiring decisions.
              </p>
            </div>

            {/* Metrics Card */}
            <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 rounded-2xl p-12 text-white shadow-xl hover:shadow-2xl transition">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold mb-2">Up to 5×</div>
                  <div className="text-blue-100">Faster Candidate Screening</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">&lt; 5 min</div>
                  <div className="text-blue-100">Role Setup</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">AI-Generated</div>
                  <div className="text-blue-100">Customized Interviews per Role</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600">The principles that guide how we build and grow</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Our Story</h2>

          <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed">
            Hiriq started with a simple question: why is hiring still so slow and manual
            in a world where everything else has been automated?
          </p>

          <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed">
            We noticed recruiters overwhelmed by resumes and candidates struggling to
            get fair visibility. The issue wasn’t talent — it was how early screening
            decisions were being made.
          </p>

          <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed">
            Instead of accepting broken workflows, we began building a better system —
            one where screening is structured, interviews are role-specific, and every
            candidate is evaluated consistently.
          </p>

          <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed">
            We’re early in our journey, but our goal is clear: build reliable hiring
            infrastructure that helps teams move faster without compromising quality.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet the Team</h2>
            <p className="text-xl text-slate-600">The people building Hiriq</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className={`w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-600 ${member.scale || ''}`}
                />
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                <p className="text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us on This Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We’re building the future of hiring and would love to hear from recruiters,
            founders, and early partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition text-lg inline-flex items-center">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link href="/pricing">
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition text-lg">
                Start Free Trial
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
