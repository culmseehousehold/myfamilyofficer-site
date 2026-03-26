import React from 'react';
import { Lock, History, Link, PenTool, ShieldCheck, Database } from 'lucide-react';

const features = [
  {
    name: 'Role-Based Permissions',
    icon: Lock,
    description: 'Granular access control for principals, advisers, and staff.'
  },
  {
    name: 'Audit Trails',
    icon: History,
    description: 'Every action logging, from login to ledger update.'
  },
  {
    name: 'Document-Linked Records',
    icon: Link,
    description: 'Source documents attached directly to transaction records.'
  },
  {
    name: 'Cryptographic Signing',
    icon: PenTool,
    description: 'Digital execution of minutes and resolutions.'
  },
  {
    name: 'Secure Workflows',
    icon: ShieldCheck,
    description: 'Approval chains for payments and sensitive changes.'
  },
  {
    name: 'Evidentiary History',
    icon: Database,
    description: 'Immutable record of truth for tax and compliance.'
  },
];

export default function TrustArchitecture() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Security & Governance</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Built for Control
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Principals, trustees, and advisers need certainty. MyFamilyOfficer delivers institutional-grade governance.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
