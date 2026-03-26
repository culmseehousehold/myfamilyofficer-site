import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | MyFamilyOfficer',
  description: 'Cookie Policy for MyFamilyOfficer. Learn how we use cookies to improve your experience.',
};

export default function CookiePolicy() {
  const lastUpdated = new Date().toLocaleDateString('en-AU', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300">
        <p className="text-base font-semibold leading-7 text-blue-600">Legal</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">Cookie Policy</h1>
        <p className="mt-6 text-xl leading-8">
          This Cookie Policy explains how Treasury Services Group and its affiliates ("we", "us", and "our") use cookies and similar technologies to recognize you when you visit our website at MyFamilyOfficer.com.au ("Website").
        </p>
        
        <div className="mt-10 max-w-2xl">
          <p>
            <strong>Last Updated:</strong> {lastUpdated}
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">What are cookies?</h2>
          <p className="mt-6">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Why do we use cookies?</h2>
          <p className="mt-6">
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Types of Cookies We Use</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li><strong>Essential website cookies:</strong> These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.</li>
            <li><strong>Performance and functionality cookies:</strong> These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.</li>
            <li><strong>Analytics and customization cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">How can I control cookies?</h2>
          <p className="mt-6">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Updates to this policy</h2>
          <p className="mt-6">
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Contact us</h2>
          <p className="mt-6">
            If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:privacy@tsg.com.au" className="text-blue-600 hover:text-blue-500">privacy@tsg.com.au</a>.
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
