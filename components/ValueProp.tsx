// components/ValueProp.tsx
import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export default function ValueProp() {
  return (
    <section className="bg-white py-24 sm:py-32 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            The New Standard for Wealth Operations
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Stop relying on yesterday's numbers. See how FamilyOfficer transforms your operations.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            
            {/* The Old Way */}
            <div className="relative isolate flex flex-col gap-8 lg:flex-none p-8 rounded-3xl bg-slate-50 ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
              <div className="absolute -top-4 left-8 rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-700 ring-1 ring-inset ring-red-600/20 dark:bg-red-900/30 dark:text-red-400">
                The Old Way
              </div>
              <h3 className="text-2xl font-bold leading-8 text-slate-900 mt-2 dark:text-white">Fragmented & Manual</h3>
              <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                Tools designed for single purposes don't give you the complete picture. Each solution solves part of the problem—but leaves gaps.
              </p>
              
              <ul role="list" className="mt-4 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                <li className="flex gap-x-3 items-start">
                  <XCircle className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span>
                    Xero handles books, not family-office operating context
                  </span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <XCircle className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span>
                    BGL handles domain-specific compliance, not full-structure visibility
                  </span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <XCircle className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span>
                    Excel becomes the shadow reporting engine
                  </span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <XCircle className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span>
                    SharePoint becomes disconnected document storage
                  </span>
                </li>
              </ul>
            </div>

            {/* The FamilyOfficer Way */}
            <div className="relative isolate flex flex-col gap-8 lg:flex-none p-8 rounded-3xl bg-indigo-50 ring-1 ring-indigo-200 shadow-xl shadow-indigo-500/10 dark:bg-indigo-950/30 dark:ring-indigo-800">
              <div className="absolute -top-4 left-8 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-600/20 dark:bg-indigo-500/20 dark:text-indigo-300">
                The FamilyOfficer Way
              </div>
              <h3 className="text-2xl font-bold leading-8 text-slate-900 mt-2 dark:text-white">Unified & Automated</h3>
              <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                One operating system designed for wealth management. FamilyOfficer becomes the connective tissue across all your tools and data.
              </p>
              
              <ul role="list" className="mt-4 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                <li className="flex gap-x-3 items-start">
                  <CheckCircle className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-slate-900 dark:text-white">The Operating System:</strong> Unified context across books, compliance, and performance.
                  </span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <CheckCircle className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-slate-900 dark:text-white">Full Visibility:</strong> Real-time look-through reporting across all entities.
                  </span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <CheckCircle className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-slate-900 dark:text-white">System of Record:</strong> Evidence, decisions, and documents linked to transactions.
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
