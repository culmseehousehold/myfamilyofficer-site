// components/Hero.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 bg-slate-50 dark:bg-slate-950">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] bg-sky-200/20 dark:bg-sky-900/10 rounded-full blur-3xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-60"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/20 bg-indigo-50/50 mb-8 backdrop-blur-sm dark:bg-indigo-900/20 dark:text-indigo-400 dark:ring-indigo-500/30">
          <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2 animate-pulse dark:bg-indigo-400"></span>{' '}
          Now accepting private beta applications
        </div>
        
        <h1 className="mx-auto max-w-4xl font-serif text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl dark:text-white">
          The Operating System for{' '}
          <span className="relative whitespace-nowrap text-indigo-700 dark:text-indigo-400">
            <span className="relative">Australian Wealth</span>
          </span>
          .
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Consolidate your entire wealth ecosystem—trusts, companies, and portfolios—into a single, real-time source of truth. Replace the fragmentation of Xero, BGL, and Excel with one unified platform.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/request-access"
            className="rounded-md bg-indigo-700 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all dark:bg-indigo-600 dark:hover:bg-indigo-500 flex items-center group"
          >
            Request Access
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/tour"
            className="text-base font-semibold leading-6 text-slate-900 hover:text-indigo-600 transition-colors flex items-center gap-2 dark:text-slate-200 dark:hover:text-indigo-400"
          >
            <PlayCircle className="h-5 w-5" />
            Start Interactive Tour
          </Link>
        </div>

        {/* Video Placeholder */}
        <div className="mt-16 sm:mt-24 md:mx-auto md:max-w-5xl lg:max-w-none">
          <div className="relative rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 dark:bg-white/5 dark:ring-white/10 backdrop-blur-sm">
             <Link href="/tour" className="bg-slate-950 aspect-[16/9] rounded-lg shadow-2xl ring-1 ring-slate-900/10 flex items-center justify-center dark:ring-white/10 overflow-hidden relative group cursor-pointer block">
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/20 group-hover:bg-black/10 transition-colors">
                    <div className="h-20 w-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 transition-transform">
                        <PlayCircle className="h-10 w-10 text-white fill-current" />
                    </div>
                </div>
                
                {/* Simulated UI Snapshot (Static) */}
                <div className="absolute inset-0 bg-slate-900 p-8 flex flex-col gap-4 opacity-50">
                   {/* This would be replaced by an actual screenshot or <video> tag later */}
                   <div className="flex gap-4">
                      <div className="w-64 bg-slate-800 h-full rounded-lg"></div>
                      <div className="flex-1 space-y-4">
                          <div className="h-32 bg-slate-800 rounded-lg"></div>
                          <div className="h-64 bg-slate-800 rounded-lg"></div>
                      </div>
                   </div>
                </div>
                
                <span className="absolute bottom-4 text-slate-400 font-mono text-xs z-10">
                    See how FamilyOfficer handles complex Trust Structures
                </span>
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
