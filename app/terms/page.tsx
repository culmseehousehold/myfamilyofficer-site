import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | MyFamilyOfficer',
  description: 'Terms of Service for MyFamilyOfficer, the operating system for Australian Family Offices.',
};

export default function TermsOfService() {
  const lastUpdated = new Date().toLocaleDateString('en-AU', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300">
        <p className="text-base font-semibold leading-7 text-blue-600">Legal</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">Terms of Service</h1>
        <p className="mt-6 text-xl leading-8">
          Welcome to MyFamilyOfficer. By using our platform, you agree to these terms, which govern the relationship between you and Treasury Services Group.
        </p>
        
        <div className="mt-10 max-w-2xl">
          <p>
            <strong>Last Updated:</strong> {lastUpdated}
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
          <p className="mt-6">
            By accessing or using the MyFamilyOfficer platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the Service.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">2. Use License</h2>
          <p className="mt-6">
            We grant you a limited, non-exclusive, non-transferable, and revocable license to use our Service for your internal business operations (managing family office, SMSF, or advisory firm assets) subject to these Terms.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">3. User Accounts</h2>
          <p className="mt-6">
            To access certain features, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">4. Data and Privacy</h2>
          <p className="mt-6">
            Your use of the Service is also governed by our <Link href="/privacy" className="text-blue-600 hover:text-blue-500">Privacy Policy</Link>. You retain all rights to the data you upload to the Service. By using the Service, you grant us a license to process your data solely to provide the Service to you.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">5. Intellectual Property</h2>
          <p className="mt-6">
            The Service and its original content, features, and functionality are and will remain the exclusive property of MyFamilyOfficer and its licensors. The Service is protected by copyright, trademark, and other laws of Australia and foreign countries.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">6. Limitation of Liability</h2>
          <p className="mt-6">
            To the maximum extent permitted by law, in no event shall MyFamilyOfficer, Treasury Services Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">7. Governing Law</h2>
          <p className="mt-6">
            These Terms shall be governed and constructed in accordance with the laws of Western Australia, Australia, without regard to its conflict of law provisions.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">8. Changes</h2>
          <p className="mt-6">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any material changes via the Service or by email.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">9. Contact Us</h2>
          <p className="mt-6">
            If you have any questions about these Terms, please contact us at <a href="mailto:legal@tsg.com.au" className="text-blue-600 hover:text-blue-500">legal@tsg.com.au</a>.
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
