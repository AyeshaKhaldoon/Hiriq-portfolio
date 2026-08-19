'use client';

import Link from 'next/link';
import { AlertCircle, CheckCircle2, Clock, Mail, MapPinned, MessageSquare, Navigation as DirectionsIcon, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CopyButton from '@/components/CopyButton';
import { getStoredUtmParams } from '@/components/SiteUtilities';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      utm: getStoredUtmParams(),
    };

    try {
      const res = await fetch('/api/newsletter/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(result.message);
        form.reset();
        router.push('/thank-you');
      } else {
        setStatus('error');
        setMessage(result.error || 'Submission failed');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Submission failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600">
            Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <Clock className="h-4 w-4" />
            Response time promise: within one business day
          </div>
        </div>
      </section>

      {/* Contact Options */}
      {/* Contact Options */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mb-12">
            {[
              { icon: Mail, title: 'Email Us', content: 'contact@hiriq.com', subtext: 'We reply within 24 hours', copy: 'contact@hiriq.com' },
              { icon: MessageSquare, title: 'Live Chat', content: 'Available 9am-6pm EST', subtext: 'Chat with our team' },
              { icon: Phone, title: 'Call Us', content: '+1 (540) 664-8490', subtext: 'Mon-Fri 9am-6pm EST', copy: '+1 (540) 664-8490' },
            ].map((option, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border-2 border-slate-100 hover:border-blue-500 transition text-center w-full max-w-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{option.title}</h3>
                {option.title === 'Email Us' ? (
                  <a href="mailto:contact@hiriq.com" className="text-blue-600 font-semibold mb-1 inline-block hover:underline">
                    {option.content}
                  </a>
                ) : option.title === 'Call Us' ? (
                  <a href="tel:+15406648490" className="text-blue-600 font-semibold mb-1 inline-block hover:underline">
                    {option.content}
                  </a>
                ) : (
                  <p className="text-blue-600 font-semibold mb-1">{option.content}</p>
                )}
                <p className="text-sm text-slate-500">{option.subtext}</p>
                {option.copy && (
                  <div className="mt-4">
                    <CopyButton value={option.copy} label="Copy" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <MapPinned className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Maps and directions</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Hiriq is a remote-first team. For in-person visits, use the directions link after confirming an appointment with the team.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Hiriq"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              <DirectionsIcon className="mr-2 h-4 w-4" />
              Open directions
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <iframe
              title="Map search for Hiriq"
              src="https://www.google.com/maps?q=Hiriq&output=embed"
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>


      {/* Contact Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                  <input type="text" name="firstName" required className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
                  <input type="text" name="lastName" required className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition" />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                <input type="email" name="email" required className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition" />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                <input type="text" name="company" className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition" />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject *</label>
                <select name="subject" required className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition">
                  <option value="">Select a topic</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="demo">Request a Demo</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                <textarea name="message" required rows={6} className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition resize-none"></textarea>
              </div>

              {/* Submit */}
              <button type="submit" disabled={status === 'loading'} className="w-full py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white rounded-lg font-semibold hover:opacity-90 transition text-lg">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {message && (
                <div
                  className={`mt-4 flex items-start gap-3 rounded-xl border p-4 ${
                    status === 'success'
                      ? 'border-green-200 bg-green-50 text-green-800'
                      : 'border-red-200 bg-red-50 text-red-800'
                  }`}
                  role="status"
                >
                  {status === 'success' ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  )}
                  <p className="font-medium">{message}</p>
                </div>
              )}

              <p className="text-sm text-slate-500 text-center">
                By submitting this form, you agree to our{' '}
                <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
