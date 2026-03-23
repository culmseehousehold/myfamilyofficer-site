import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | FamilyOfficer',
  description: 'Legal disclaimer and limitation of liability for FamilyOfficer.',
};

export default function Disclaimer() {
  const lastUpdated = new Date().toLocaleDateString('en-AU', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300">
        <p className="text-base font-semibold leading-7 text-blue-600">Legal</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">Disclaimer</h1>
        <p className="mt-6 text-xl leading-8">
          The information contained on the FamilyOfficer website (the "Service") is for general information purposes only.
        </p>
        
        <div className="mt-10 max-w-2xl">
          <p>
            <strong>Last Updated:</strong> {lastUpdated}
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">No Financial Advice</h2>
          <p className="mt-6">
            FamilyOfficer serves as an operating system for wealth management but does not provide financial, tax, or legal advice. The information provided on our website and through our software is not intended to be and does not constitute financial advice, investment advice, trading advice, or any other advice.
          </p>
          <p className="mt-4">
            You should not make any decision, financial, investment, trading or otherwise, based on any of the information presented on this website without undertaking independent due diligence and consultation with a professional broker or financial advisory.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">No Professional Relationship</h2>
          <p className="mt-6">
            The use of our Service does not create a professional-client relationship between you and Treasury Services Group. Any reliance you place on such information is therefore strictly at your own risk.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Errors and Omissions</h2>
          <p className="mt-6">
            Treasury Services Group assumes no responsibility for errors or omissions in the contents on the Service. In no event shall Treasury Services Group be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Risk Warning</h2>
          <p className="mt-6">
            Investing involves risk, including the possible loss of principal. Past performance does not guarantee future results.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">External Links</h2>
          <p className="mt-6">
            The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with Treasury Services Group. Please note that the Treasury Services Group does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Contact Us</h2>
          <p className="mt-6">
            If you have any questions about this Disclaimer, please contact us at <a href="mailto:legal@tsg.com.au" className="text-blue-600 hover:text-blue-500">legal@tsg.com.au</a>.
          </p>
          
          <div className="mt-16 border-t border-slate-200 pt-8 dark:border-slate-800">
            <Link href="/" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500">
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
