// components/Features.tsx
import React from 'react';
import { Landmark, LineChart, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    name: 'Multi-Entity Wealth Structures',
    description: 'Model your true ownership. Seamlessly manage inter-entity loans, distributions, and beneficiaries across Trusts, Companies, and SMSFs. Get a "look-through" view of your effective exposure without complex manual calculations.',
    icon: Landmark,
  },
  {
    name: 'Institutional-Grade Portfolio Management',
    description: 'Move beyond simple price tracking. Utilize Time-Weighted Return (TWR) and XIRR performance reporting across multi-asset classes and multi-currency portfolios. Track private equity, property, and liquid assets side-by-side.',
    icon: LineChart,
  },
  {
    name: 'Automated Compliance & Tax',
    description: 'Stay ahead of regulations with automated CGT optimization and SMSF rule checks. Our system prepares your lodgements in the background, ensuring you maximize tax efficiency while remaining fully compliant with Australian standards.',
    icon: ShieldCheck,
  },
  {
    name: 'AI-Powered "Zero-Touch" Admin',
    description: 'Stop typing data. Drag and drop PDFs or forward emails directly to the platform. Our intelligent document processing extracts trade details, dividends, and expenses instantly, matching them to your bank transactions automatically.',
    icon: Sparkles,
  },
];

const reasons = [
  {
    title: 'Sophistication Meets Simplicity',
    desc: 'Finally, institutional-grade power without the enterprise price tag. Whether you manage a single SMSF or a multi-entity family group, we handle the complexity of Australian wealth structures.',
  },
  {
    title: 'The End of Manual Data Entry',
    desc: 'Our AI-driven engine automates the heavy lifting. From PDF contract notes to dividend statements, MyFamilyOfficer ingests, classifies, and reconciles your data.',
  },
  {
    title: 'Australian-First Compliance',
    desc: 'Global tools fail to understand franking credits, distinct CGT events, and SMSF lodgement rules. MyFamilyOfficer is built specifically for the Australian regulatory landscape.',
  },
];


export default function Features() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-950" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Why Choose Us Section - Integrated here as often Features and Benefits go together */}
        <div className="mx-auto max-w-2xl lg:text-center mb-20">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Why Wealth Creators Choose Us</h2>
          <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Built for the Australian Wealth Landscape
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 text-left">
             {reasons.map((reason) => (
                <div key={reason.title}>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{reason.desc}</p>
                </div>
             ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none border-t border-slate-200 pt-16 dark:border-slate-800">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Platform Capabilities
              </h2>
           </div>

          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 dark:text-white">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
