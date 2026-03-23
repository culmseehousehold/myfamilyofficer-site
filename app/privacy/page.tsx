import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | FamilyOfficer',
  description: 'Privacy Policy for FamilyOfficer, operated by Treasury Services Group.',
};

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString('en-AU', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300">
        <p className="text-base font-semibold leading-7 text-blue-600">Legal</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">Privacy Policy</h1>
        <p className="mt-6 text-xl leading-8">
          At FamilyOfficer, we are committed to protecting your privacy. This policy outlines how Treasury Services Group collects, uses, and safeguards your information.
        </p>
        
        <div className="mt-10 max-w-2xl">
          <p>
            <strong>Effective Date:</strong> {lastUpdated}
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">1. Introduction</h2>
          <p className="mt-6">
            This Privacy Policy applies to the services provided by Treasury Services Group ("we," "us," or "our") through the FamilyOfficer platform. By accessing or using our services, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">2. Information We Collect</h2>
          <p className="mt-6">
            We collect information to provide better services to our users. The types of information we collect include:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li><strong>Personal Identification Information:</strong> Name, Age, Date of Birth.</li>
            <li><strong>Financial Information:</strong> Income details, asset information, tax details, and other financial data necessary for our wealth operating system services.</li>
            <li><strong>Contact Information:</strong> Email address, phone number, and mailing address.</li>
            <li><strong>Usage Data:</strong> Information on how the service is accessed and used.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">3. How We Use Your Information</h2>
          <p className="mt-6">
            The data we collect is used for the following purposes:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li>To provide and maintain our Service.</li>
            <li>To notify you about changes to our Service.</li>
            <li>To provide customer support.</li>
            <li>To gather analysis or valuable information so that we can improve our Service.</li>
            <li>To monitor the usage of our Service.</li>
            <li>To detect, prevent, and address technical issues.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">4. Data Security</h2>
          <p className="mt-6">
            The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">5. Governing Law</h2>
          <p className="mt-6">
            This Privacy Policy shall be governed and construed in accordance with the laws of Western Australia, Australia, without regard to its conflict of law provisions.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">6. Contact Us</h2>
          <p className="mt-6">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <p className="mt-2">
            By email: <a href="mailto:privacy@tsg.com.au" className="text-blue-600 hover:text-blue-500">privacy@tsg.com.au</a>
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
