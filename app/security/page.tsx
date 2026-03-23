import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, Lock, Server, FileCheck, Key, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security & Trust | FamilyOfficer',
  description: 'Bank-grade security, Australian data residency, and enterprise governance for your family office.',
};

export default function SecurityPage() {
  const securityFeatures = [
    {
      name: 'Australian Data Residency',
      description: 'All data is hosted securely in AWS Sydney Region (ap-southeast-2). Your financial data never leaves Australian legal jurisdiction.',
      icon: Globe,
    },
    {
      name: 'Encryption at Rest & In Transit',
      description: 'We use AES-256 encryption for data at rest and TLS 1.3 for all data in transit. Your data is unreadable to unauthorized parties.',
      icon: Lock,
    },
    {
      name: 'Role-Based Access Control (RBAC)',
      description: 'Granular permissions ensure family members, advisors, and staff only see what they need to see. No more shared passwords.',
      icon: Key,
    },
    {
      name: 'Audit Logs',
      description: 'Comprehensive immutable audit trails track every view, edit, and export. Know exactly who accessed what and when.',
      icon: FileCheck,
    },
    {
      name: 'Infrastructure Security',
      description: 'Built on AWS serverless architecture, inheriting the security and compliance controls of the world’s leading cloud provider.',
      icon: Server,
    },
    {
      name: 'Compliance Ready',
      description: 'Designed to support compliance with Australian privacy principles and financial regulations for SMSFs and trusts.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Security first. Always.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Trust is our currency. We employ defense-in-depth strategies to protect your wealth data, ensuring privacy, integrity, and availability.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {securityFeatures.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
          
          <div className="mt-16 flex justify-center border-t border-slate-200 pt-8 dark:border-slate-800">
             <div className="text-center">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Have specific security questions?</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Our CISO team is available to discuss our security posture with your technical advisors.</p>
                <a href="mailto:security@tsg.com.au" className="text-blue-600 font-semibold hover:text-blue-500">Contact Security Team &rarr;</a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
