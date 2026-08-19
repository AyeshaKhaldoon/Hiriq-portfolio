import { Sparkles } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4 text-slate-700">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
          <Sparkles className="h-7 w-7 animate-pulse text-cyan-600" />
          <span className="absolute inset-0 rounded-2xl border-2 border-cyan-200 animate-ping" />
        </div>
        <p className="text-sm font-semibold tracking-wide">Loading Hiriq...</p>
      </div>
    </div>
  );
}
