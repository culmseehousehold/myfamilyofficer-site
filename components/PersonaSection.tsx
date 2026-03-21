'use client';

import React from 'react';
import { Shield, TrendingUp, Zap, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const personas = [
  {
    id: 'principals',
    title: 'For Principals & Trustees',
    subtitle: 'Governance & Legacy',
    icon: Shield,
    description: 'Lead your family office with audit-ready confidence. From signing minutes to distribution planning—ensure every decision is compliant, documented, and secure.',
    benefits: [
        'Automated Board Agendas & Minutes',
        'Cryptographic Document Signing',
        'Distribution Planning Workflows',
        'Beneficiary & Entity Registers'
    ],
    cta: 'Visualize Your Legacy',
  },
  {
    id: 'investors',
    title: 'For Advisors & CIOs',
    subtitle: 'Alpha & Analysis',
    icon: TrendingUp,
    description: 'Arm your investment committee with institutional-grade insights. Use AI to model tax scenarios, benchmark performance, and turn data into defensive strategy.',
    benefits: [
        'AI-Powered Portfolio Review',
        'Tax-Aware Scenario Modeling',
        'True TWR & Attribution Analysis',
        'Private Market Integrations'
    ],
    cta: 'Enhance Decision Making',
  },
  {
    id: 'operations',
    title: 'For Tax & Admin',
    subtitle: 'Efficiency & Accuracy',
    icon: Zap,
    description: 'Slash your compliance workload. Automate SMSF member statements, bank reconciliations, and tax pack generation with a system built for Australian complexity.',
    benefits: [
        'One-Click Tax Pack Generation',
        'Automated Bank Feeds & Recs',
        'SMSF Compliance & Cap Tracking',
        'General Ledger Integration'
    ],
    cta: 'Streamline Operations',
  },
];

export default function PersonaSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Tailored For You</h2>
          <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Built for Every Stakeholder
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Whether you are preserving wealth, growing it, or managing it—FamilyOfficer creates a single source of truth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div 
                key={persona.id}
                className={`relative rounded-2xl p-8 transition-all duration-300 border ${
                    index === 1 
                    ? 'bg-slate-900 text-white border-slate-900 ring-1 ring-white/10 shadow-2xl scale-105 z-10' 
                    : 'bg-slate-50 text-slate-900 border-slate-200 hover:border-indigo-200 hover:shadow-xl dark:bg-slate-800 dark:border-slate-700 dark:text-white'
                }`}
            >
              <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-6 ${
                  index === 1 ? 'bg-indigo-500 text-white' : 'bg-white text-indigo-600 shadow-sm dark:bg-slate-700 dark:text-indigo-400'
              }`}>
                <persona.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-2">{persona.title}</h3>
              <p className={`text-sm font-medium mb-4 uppercase tracking-wider ${
                  index === 1 ? 'text-indigo-200' : 'text-indigo-600 dark:text-indigo-400'
              }`}>{persona.subtitle}</p>
              
              <p className={`mb-8 leading-relaxed ${
                  index === 1 ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'
              }`}>
                {persona.description}
              </p>
              
              <ul className="space-y-4 mb-8">
                {persona.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${
                        index === 1 ? 'text-indigo-400' : 'text-indigo-600'
                    }`} />
                    <span className="text-sm font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/request-access"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                    index === 1 
                    ? 'bg-white text-slate-900 hover:bg-slate-100' 
                    : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100'
                }`}
              >
                {persona.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
