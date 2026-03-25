'use client';

import React from 'react';
import { Shield, TrendingUp, Zap, Check, Users, Scale, FileText } from 'lucide-react';

const personas = [
  {
    id: 'principals',
    title: 'The Principal',
    subtitle: 'Governance & Legacy',
    icon: Shield,
    description: 'Lead with audit-ready confidence. From signing minutes to distribution planning—ensure every decision is compliant and documented.',
    benefits: [
        'Automated Board Agendas',
        'Cryptographic Signing',
        'Distribution Planning',
        'Beneficiary Registers'
    ]
  },
  {
    id: 'advisers',
    title: 'The Adviser',
    subtitle: 'Alpha & Analysis',
    icon: TrendingUp,
    description: 'Arm your investment committee with institutional-grade insights. AI-powered portfolio reviews, trade idea workflows, and tax-aware scenarios.',
    benefits: [
        'AI Portfolio Reviews',
        'Trade Idea Workflows',
        'Tax-Aware Scenarios',
        'Private Market Data'
    ]
  },
  {
    id: 'operations',
    title: 'The Operations Lead',
    subtitle: 'Efficiency & STP',
    icon: Zap,
    description: 'Zero-touch document pipeline. Automate ingestion from email to general ledger, manage bank feeds, and streamline SMSF compliance.',
    benefits: [
        'STP Document Ingestion',
        'Automated Bank Recs',
        'SMSF Compliance Engine',
        'General Ledger Sync'
    ]
  },
  {
    id: 'beneficiaries',
    title: 'The Next Gen',
    subtitle: 'Transparency & Access',
    icon: Users,
    description: 'Secure, branded portals for the family. Provide view-only access to trust distributions, tax statements, and financial literacy tools.',
    benefits: [
        'Branded Magic-Link Portal',
        'Distribution Visibility',
        'Tax Statement Access',
        'Privacy-First View'
    ]
  },
  {
    id: 'compliance',
    title: 'The Compliance Officer',
    subtitle: 'Risk & Policy',
    icon: Scale,
    description: 'AI-powered policy verification. Instantly answer "Is this allowed?" and verify adherence to trust deeds and investment mandates.',
    benefits: [
        'AI Policy Search',
        'Audit-Ready Trails',
        'Role-Based Controls',
        'Automated Checks'
    ]
  },
  {
    id: 'accountants',
    title: 'The Accountant',
    subtitle: 'Tax & Reporting',
    icon: FileText,
    description: 'Slash end-of-year friction. Access structured ledgers, tax packs, and reconciled transaction data directly—no more email ping-pong.',
    benefits: [
        'One-Click Tax Packs',
        'Structured GL Exports',
        'Real-Time Trial Balance',
        'Distribution Verification'
    ]
  }
];

export default function PersonaSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Used across the family office</h2>
          <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Built for the Family Office
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Whether you are preserving wealth, growing it, or managing it—FamilyOfficer creates a single source of truth for your entire ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personas.map((persona) => (
            <div 
                key={persona.id}
                className="relative rounded-2xl p-8 transition-all duration-300 border bg-slate-50 text-slate-900 border-slate-200 hover:border-indigo-200 hover:shadow-xl dark:bg-slate-800 dark:border-slate-700 dark:text-white group"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-xl mb-6 bg-white text-indigo-600 shadow-sm dark:bg-slate-700 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <persona.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {persona.title}
              </h3>
              <p className="text-sm font-medium text-slate-500 mb-4 dark:text-slate-400 uppercase tracking-wider text-xs">
                {persona.subtitle}
              </p>
              
              <p className="text-slate-600 mb-6 leading-relaxed dark:text-slate-300">
                {persona.description}
              </p>

              <ul className="space-y-2">
                {persona.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                        <Check className="w-4 h-4 mr-2 text-indigo-500 mt-0.5 flex-shrink-0" />
                        {benefit}
                    </li>
                ))}
              </ul>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}