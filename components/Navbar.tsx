'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Product Tour', href: '/story' },
    { name: 'Features', href: '/features' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 dark:bg-slate-900/90 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-serif">
              MyFamilyOfficer
            </Link>
          </div>
          
          <div className="hidden md:flex ml-10 space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors dark:text-slate-300 dark:hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/request-access"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              Request Access
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500 dark:hover:bg-slate-800"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 dark:bg-slate-900 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Link
                href="/request-access"
                className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                Request Access
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
