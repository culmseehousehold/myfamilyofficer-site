// components/CtaSection.tsx
import React from 'react';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <div className="bg-slate-900 py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold font-serif tracking-tight text-white sm:text-4xl">
          Join the Family Offices, SMSFs, and Advisory Firms who simply, effectively, dramatically reduce their administrative overhead.
        </h2>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/request-access"
            className="rounded-md bg-white px-6 py-3.5 text-base font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
          >
            Request Access
          </Link>
          <Link href="/story" className="text-base font-semibold leading-6 text-white hover:text-indigo-300">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          Hosted in Australia. Engineered for data sovereignty.
        </p>
      </div>
    </div>
  );
}
