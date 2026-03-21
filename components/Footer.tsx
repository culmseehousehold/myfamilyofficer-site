// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 dark:bg-slate-950 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href='#' className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-300">
            Terms
          </Link>
          <Link href='#' className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-300">
            Privacy
          </Link>
          <Link href='#' className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-300">
            Security
          </Link>
          <Link href='#' className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-300">
            Contact
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} FamilyOfficer Pty Ltd. All rights reserved.
          </p>
          <p className="text-center text-xs leading-5 text-slate-400 mt-2 dark:text-slate-500">
            Institutional-Grade Wealth Operating System. Hosted securely in Australia.
          </p>
        </div>
      </div>
    </footer>
  );
}
