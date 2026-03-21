import React from 'react';
import { Check, X, Minus } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Multi-Entity Structures',
    legacy: 'Siloed per entity (Trusts vs Companies)',
    familyOfficer: 'Unified "Look-Through" Architecture',
    highlight: true,
  },
  {
    feature: 'Data Ingestion',
    legacy: 'Manual entry or CSV uploads',
    familyOfficer: 'AI-Powered PDF & Email Extraction',
    highlight: true,
  },
  {
    feature: 'Net Worth Reporting',
    legacy: 'Delayed (Monthly/Quarterly)',
    familyOfficer: 'Real-Time Consolidated View',
    highlight: true,
  },
  {
    feature: 'Inter-Entity Loans',
    legacy: 'Manual reconciliation in Excel',
    familyOfficer: 'Automated Tracking & Interest Calc',
    highlight: false, // Standard feature
  },
  {
    feature: 'Document Management',
    legacy: 'Disconnected (SharePoint/Dropbox)',
    familyOfficer: 'Context-Aware & Linked to Transactions',
    highlight: false,
  },
  {
    feature: 'Australian Tax Logic',
    legacy: 'Generic or requires expensive add-ons',
    familyOfficer: 'Native (Franking Credits, Div 7A, CGT)',
    highlight: true,
  },
   {
    feature: 'User Access',
    legacy: 'All-or-nothing (Risk of data leaks)',
    familyOfficer: 'Role-Based (Principal, Adviser, Ops)',
    highlight: false,
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-5xl text-slate-900 mb-6">
          The New Standard vs. The Old Way
        </h2>
        <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto">
          See why modern Family Offices are moving away from fragmented legacy systems.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px] rounded-2xl border border-slate-200 shadow-xl bg-white overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-6 px-8 text-sm font-semibold text-slate-500 uppercase tracking-wider w-1/3">
                  Capability
                </th>
                <th className="py-6 px-8 text-sm font-semibold text-slate-500 uppercase tracking-wider w-1/3">
                  Traditional Methods
                  <span className="block text-xs font-normal text-slate-400 normal-case mt-1">
                    (Spreadsheets & Legacy Software)
                  </span>
                </th>
                <th className="py-6 px-8 text-sm font-semibold text-indigo-700 uppercase tracking-wider w-1/3 bg-indigo-50/50">
                  FamilyOfficer
                  <span className="block text-xs font-normal text-indigo-600 normal-case mt-1">
                    (The Operating System)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonData.map((row, index) => (
                <tr 
                  key={index} 
                  className={`group transition-colors hover:bg-slate-50/50 ${row.highlight ? 'bg-slate-50/20' : ''}`}
                >
                  <td className="py-6 px-8 font-medium text-slate-900">
                    {row.feature}
                  </td>
                  
                  {/* Legacy Column */}
                  <td className="py-6 px-8 text-slate-500 flex items-start gap-3">
                    <X className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{row.legacy}</span>
                  </td>

                  {/* FamilyOfficer Column */}
                  <td className="py-6 px-8 text-slate-900 font-medium bg-indigo-50/10 border-l border-indigo-50 group-hover:bg-indigo-50/20 transition-colors relative">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100/50 rounded-full p-1 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
                      </div>
                      <span className="text-indigo-950">{row.familyOfficer}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Mobile-only note */}
      <div className="md:hidden text-center mt-6 text-sm text-slate-400 italic">
        Scroll horizontally to view full comparison
      </div>
    </section>
  );
}
