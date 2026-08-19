'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type PasswordFieldProps = {
  label?: string;
  name?: string;
  required?: boolean;
};

export default function PasswordField({
  label = 'Password',
  name = 'password',
  required = false,
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      <span className="relative block">
        <input
          type={visible ? 'text' : 'password'}
          name={name}
          required={required}
          className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 pr-12 text-slate-900 transition focus:border-blue-500 focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          aria-label={visible ? 'Hide password' : 'Show password'}
        >
          {visible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </span>
    </label>
  );
}
