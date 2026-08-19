'use client';

import { FormEvent, useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { getStoredUtmParams } from '@/components/SiteUtilities';

type NewsletterFormProps = {
  endpoint?: string;
  buttonLabel?: string;
  loadingLabel?: string;
  inputClassName?: string;
  buttonClassName?: string;
  compact?: boolean;
};

export default function NewsletterForm({
  endpoint = '/api/newsletter',
  buttonLabel = 'Subscribe',
  loadingLabel = 'Subscribing...',
  inputClassName = 'flex-1 rounded-xl border-2 border-slate-700 bg-slate-800 px-6 py-4 text-white focus:border-blue-500 focus:outline-none',
  buttonClassName = 'rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 font-bold text-white transition hover:shadow-xl',
  compact = false,
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    if (!email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, utm: getStoredUtmParams() }),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Thanks. You are subscribed.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Subscription failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Subscription failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={compact ? 'space-y-3' : 'mx-auto max-w-md space-y-3'}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={inputClassName}
          required
          disabled={status === 'loading'}
        />
        <button type="submit" disabled={status === 'loading'} className={buttonClassName}>
          {status === 'loading' ? loadingLabel : buttonLabel}
        </button>
      </div>

      {message && (
        <div
          className={`flex items-start gap-3 rounded-xl border p-3 text-left text-sm ${
            status === 'success'
              ? 'border-green-200 bg-green-50 text-green-800'
              : 'border-red-200 bg-red-50 text-red-800'
          }`}
          role="status"
        >
          {status === 'success' ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
          ) : (
            <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          )}
          <p className="font-medium">{message}</p>
        </div>
      )}
    </form>
  );
}
