import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import StoryScroller from '../../components/StoryScroller';
import CtaSection from '../../components/CtaSection';

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white dark">
      <div className="dark">
        <Navbar />
      </div>
      <div className="pt-24 pb-12 px-6 lg:px-8 max-w-7xl mx-auto text-center">
         <h1 className="text-4xl font-bold tracking-tight text-white mb-6 sm:text-6xl font-serif">
             The Family Office Journey
         </h1>
         <p className="text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            See how the modern family office transforms complexity into clarity.
         </p>
      </div>
      
      <StoryScroller />
      
      <div className="bg-slate-900 border-t border-slate-800">
        <CtaSection />
      </div>
      <div className="dark">
        <Footer />
      </div>
    </main>
  );
}
