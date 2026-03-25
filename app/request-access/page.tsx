'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Lock, ShieldCheck, TrendingUp, Users } from 'lucide-react';

export default function RequestAccessPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organizationType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        throw new Error('API URL not configured');
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Failed to submit request. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h2>
          <p className="text-slate-600 mb-8">
            Thank you for your interest in FamilyOfficer. We've received your request and a member of our team will review your application shortly.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors w-full"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Left Side - Value Proposition */}
      <div className="lg:w-5/12 bg-slate-900 py-12 px-6 lg:px-12 flex flex-col justify-between relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-indigo-600/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 mb-12 lg:mb-0">
          <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            Join the Exclusive Network for Modern Family Offices
          </h1>
          
          <p className="text-slate-300 text-lg mb-10">
            FamilyOfficer provides the intelligent infrastructure sophisticated wealth managers need to scale operations and preserve legacy.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Institutional-Grade Security</h3>
                <p className="mt-1 text-slate-400">Enterprise-level data protection designed specifically for high-net-worth privacy requirements.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Unified Portfolio Intelligence</h3>
                <p className="mt-1 text-slate-400">Consolidate public and private assets into a single, real-time source of truth.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Built in Australia, for Australia</h3>
                <p className="mt-1 text-slate-400">Designed around Australian tax law, entity structures, and compliance requirements from day one — not bolted on as an afterthought.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 text-slate-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} FamilyOfficer. Confidential & Proprietary.
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-7/12 bg-white flex flex-col justify-center py-12 px-6 lg:px-20 overflow-y-auto">
        <div className="max-w-xl w-full mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Request Access</h2>
            <p className="mt-2 text-slate-600">
              We are currently onboarding select partners. Please provide your details below to request access to the platform.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMessage && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 gap-y-6 gap-x-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-3 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                  placeholder="e.g. Sarah Jennings"
                />
              </div>

              <div>
                <label htmlFor="workEmail" className="block text-sm font-medium text-slate-700 mb-1">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="workEmail"
                  id="workEmail"
                  required
                  value={formData.workEmail}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-3 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                  placeholder="e.g. sarah@capitalpartners.com"
                />
              </div>

              <div>
                <label htmlFor="organizationType" className="block text-sm font-medium text-slate-700 mb-1">
                  Organization Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="organizationType"
                    name="organizationType"
                    required
                    value={formData.organizationType}
                    onChange={handleChange}
                    className="block w-full pl-3 pr-10 py-3 text-base border-slate-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm appearance-none bg-white"
                  >
                    <option value="" disabled>Select your organization type</option>
                    <option value="Single Family Office">Single Family Office</option>
                    <option value="Multi-Family Office">Multi-Family Office</option>
                    <option value="High Net Worth Individual">High Net Worth Individual</option>
                    <option value="Wealth Advisor">Wealth Advisor</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Request Early Access <Lock className="ml-2 w-4 h-4"/>
                  </span>
                )}
              </button>
              <p className="mt-4 text-xs text-center text-slate-500">
                By submitting this form, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
