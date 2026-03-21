// components/HowItWorks.tsx
import React from 'react';
import { DownloadCloud, Sparkles, RefreshCw, FileText, ShieldCheck } from 'lucide-react';

const steps = [
  {
    name: 'Ingest & Reconcile',
    description: 'Connect bank feeds and drag-and-drop statements. Our AI auto-matches transactions and flags exceptions for your review.',
    icon: DownloadCloud,
    number: '01',
  },
  {
    name: 'Govern & Decide',
    description: 'Run board meetings with AI-generated agendas. Make distribution decisions and digitally sign minutes with cryptographic verification.',
    icon: ShieldCheck,
    number: '02',
  },
  {
    name: 'Analyze & Optimize',
    description: 'Model tax scenarios and review performance against benchmarks. Use AI to surface risks and opportunities across the portfolio.',
    icon: Sparkles,
    number: '03',
  },
  {
    name: 'Comply & Report',
    description: 'Generate SMSF member statements and full tax packs in one click. Maintain a complete audit trail for peace of mind.',
    icon: FileText,
    number: '04',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24 sm:py-32 dark:bg-slate-900" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            From Manual to Automated in 4 Steps
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            A simple, repeatable process designed for efficiency.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-y-16 lg:grid-cols-4 lg:gap-x-8">
            {steps.map((step) => (
              <div key={step.name} className="relative flex flex-col items-center">
                <dt className="flex flex-col items-center gap-y-4 text-base font-semibold leading-7 text-slate-900 dark:text-white">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 border border-indigo-100 dark:bg-indigo-900/30 dark:border-indigo-800">
                    <step.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  </div>
                  <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-2">Step {step.number}</div>
                  {step.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-400 max-w-xs mx-auto">
                   {step.description}
                </dd>
                
                {/* Connector line for desktop - not for last item */}
                {step.number !== '04' && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-slate-200 dark:bg-slate-800 -z-10" />
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
