import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ComparisonTable from '../../components/ComparisonTable';
import { 
  Network, 
  Share2, 
  TrendingUp, 
  BarChart3, 
  Scale, 
  Calculator, 
  Bot, 
  Wand2, 
  ArrowRight,
  CheckCircle2,
  Database,
  Cpu,
  Layers
} from 'lucide-react';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto text-center border-b border-slate-200">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-6 uppercase tracking-wider">
          <Cpu className="w-3 h-3" />
          Core Architecture
        </div>
        <h1 className="font-serif text-4xl md:text-6xl text-slate-900 mb-6 leading-tight">
          Institutional-Grade<br />
          <span className="text-slate-600">Infrastructure for Private Wealth</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Proven technology to structure, measure, and optimize complex multi-entity portfolios with tax-aware precision.
        </p>
      </section>

      {/* Feature Deep Dives */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 md:py-24 space-y-24 md:space-y-32">
        
        {/* Section 1: Multi-Entity Intelligence */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            {/* Visual: Tree Structure */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              
              {/* Mock Tree Visualization */}
              <div className="flex flex-col items-center space-y-6">
                <div className="border border-slate-300 bg-slate-50 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 shadow-sm flex items-center gap-2">
                  <Database className="w-4 h-4 text-indigo-600" />
                  Family Trust (Head Entity)
                </div>
                
                <div className="w-px h-8 bg-slate-300 relative"></div>
                
                <div className="relative w-full flex justify-center">
                   <div className="absolute top-0 left-1/4 right-1/4 h-px bg-slate-300"></div>
                   <div className="absolute top-0 left-1/4 h-4 w-px bg-slate-300"></div>
                   <div className="absolute top-0 right-1/4 h-4 w-px bg-slate-300"></div>
                </div>

                <div className="grid grid-cols-2 gap-8 w-full">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="border border-slate-200 bg-white px-3 py-2 rounded text-xs font-medium text-slate-600 shadow-sm w-full text-center">
                      Investment Co. Pty Ltd
                    </div>
                    <div className="w-px h-4 bg-slate-200"></div>
                    <div className="border border-green-100 bg-green-50 px-2 py-1 rounded text-[10px] text-green-700 w-full text-center">
                      + $1.2M Dividends
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                     <div className="border border-slate-200 bg-white px-3 py-2 rounded text-xs font-medium text-slate-600 shadow-sm w-full text-center">
                      Property Trust No. 2
                    </div>
                    <div className="w-px h-4 bg-slate-200"></div>
                     <div className="border border-slate-100 bg-slate-50 px-2 py-1 rounded text-[10px] text-slate-500 w-full text-center">
                      (Passive Loss)
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg flex items-center gap-2">
                <Share2 className="w-3 h-3" />
                Inter-entity Flows
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl opacity-60"></div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl text-blue-700 mb-2">
              <Network className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">Multi-Entity Intelligence</h2>
            <p className="font-sans text-lg text-slate-600 leading-relaxed">
              Family wealth isn't linear—it's a network. Our platform maps the complex relationships between trusts, companies, and beneficiaries in real-time.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Visualise flow-through distributions instantly.",
                "Consolidated reporting across 50+ entities.",
                "Automatic inter-entity loan tracking."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 2: Institutional Performance */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6">
             <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-xl text-emerald-700 mb-2">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">Institutional Performance</h2>
            <p className="font-sans text-lg text-slate-600 leading-relaxed">
              Stop guessing your true returns. We bring sovereign-fund level analytics to your private portfolio, stripping out noise to reveal true alpha.
            </p>
             <ul className="space-y-4 pt-4">
              {[
                "Time-Weighted (TWR) & Money-Weighted (MWR) returns.",
                "Custom benchmark blending (e.g. 60/40 vs Actual).",
                "Deep attribution analysis by asset class or manager."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
             {/* Visual: Performance Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-semibold text-slate-700">YTD Performance Attribution</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">LIVE DATA</span>
              </div>

              <div className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-4 gap-4 text-sm items-center">
                  <div className="col-span-2 text-slate-600 font-medium">Global Equities</div>
                  <div className="text-right text-emerald-600 font-bold">+12.4%</div>
                  <div className="text-right text-xs text-slate-400">vs +8.2%</div>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[75%] rounded-full"></div>
                </div>

                 {/* Row 2 */}
                <div className="grid grid-cols-4 gap-4 text-sm items-center pt-2">
                  <div className="col-span-2 text-slate-600 font-medium">Private Credit</div>
                  <div className="text-right text-emerald-600 font-bold">+8.1%</div>
                  <div className="text-right text-xs text-slate-400">vs +7.5%</div>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 w-[60%] rounded-full"></div>
                </div>
                
                 {/* Row 3 */}
                <div className="grid grid-cols-4 gap-4 text-sm items-center pt-2">
                  <div className="col-span-2 text-slate-600 font-medium">Real Assets</div>
                  <div className="text-right text-amber-500 font-bold">+2.3%</div>
                   <div className="text-right text-xs text-slate-400">vs +4.1%</div>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 w-[25%] rounded-full"></div>
                </div>
              </div>

               {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
            </div>
            
             {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-50/50 rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>

        {/* Section 3: Active Tax Optimization */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1 relative">
             {/* Visual: Tax Scenario Card */}
             <div className="bg-slate-900 rounded-2xl shadow-xl p-8 relative overflow-hidden text-slate-300">
               <div className="absolute top-0 right-0 p-4 opacity-50">
                 <Scale className="w-12 h-12 text-slate-700" />
               </div>
               
               <div className="relative z-10 space-y-6">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                   <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Scenario Analysis</span>
                 </div>

                 <div className="space-y-3">
                   <p className="text-sm text-slate-400">Action: <span className="text-white font-mono">Sell 1,000 AAPL</span></p>
                   
                   <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 flex justify-between items-center group hover:border-red-500/50 transition-colors">
                     <div>
                       <div className="text-xs text-slate-500 mb-1">Standard (FIFO)</div>
                       <div className="text-white font-mono font-medium">Est. Tax: $10,420</div>
                     </div>
                     <div className="text-red-400 text-xs">High Impact</div>
                   </div>
                   
                   <div className="bg-slate-800 p-4 rounded-lg border border-emerald-500/50 flex justify-between items-center relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                      <div>
                       <div className="text-xs text-emerald-400 mb-1 flex items-center gap-1">
                          <Calculator className="w-3 h-3" />
                          <span>HIFO Optimized</span>
                       </div>
                       <div className="text-white font-mono font-bold">Est. Tax: $8,150</div>
                     </div>
                     <div className="text-emerald-400 text-xs font-bold">SAVE $2,270</div>
                   </div>
                 </div>
                 
                 <div className="pt-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
                   *Estimates based on current marginal tax rates & entity structure.
                 </div>
               </div>
             </div>
             
             {/* Simple decoration */}
             <div className="absolute -right-4 -top-4 w-24 h-24 bg-slate-200 rounded-full -z-10 opacity-50"></div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
             <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-xl text-amber-700 mb-2">
              <Calculator className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">Active Tax Optimization</h2>
            <p className="font-sans text-lg text-slate-600 leading-relaxed">
              It’s not what you make, it’s what you keep. Our engine runs thousands of disposal scenarios (HIFO, LIFO, Min Tax) across all entities before you execute a trade.
            </p>
             <ul className="space-y-4 pt-4">
              {[
                "Pre-trade tax impact simulation.",
                "Real-time harvestable loss tracking.",
                "Automatic franking credit reconciliation."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

         {/* Section 4: AI Operations */}
         <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6">
             <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-xl text-purple-700 mb-2">
              <Wand2 className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">AI Operations</h2>
            <p className="font-sans text-lg text-slate-600 leading-relaxed">
              Let the machine handle the mundane. Our AI connects to your banks and brokers, categorizing transactions and flagging anomalies for human review.
            </p>
             <ul className="space-y-4 pt-4">
              {[
                "Automated document reading (PDF contract notes).",
                "Transaction classification (Rent vs Repairs).",
                "Smart anomaly detection for audit defense."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            {/* Visual: AI Scanning Zone */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 relative overflow-hidden group">
               <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
               
               <div className="space-y-4">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-800 font-medium">
                      <Bot className="w-5 h-5 text-purple-600" />
                      <span>Auto-Classification</span>
                    </div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Active</span>
                 </div>

                 {/* Mock Document List */}
                 <div className="space-y-3 pt-2">
                   {[
                     { name: "Rental_Stmt_Jan.pdf", status: "Processed", score: 98 },
                     { name: "Contract_Note_BHP.pdf", status: "Processed", score: 99 },
                     { name: "Unknown_Inv_2023.pdf", status: "Review Needed", score: 45 },
                   ].map((doc, i) => (
                     <div key={i} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-lg hover:border-purple-200 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${doc.score > 90 ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                          <span className="text-sm text-slate-600">{doc.name}</span>
                        </div>
                        <span className={`text-xs font-medium ${doc.score > 90 ? 'text-green-600' : 'text-amber-600'}`}>{doc.status}</span>
                     </div>
                   ))}
                 </div>
                 
                 {/* Scanning Line Animation */}
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent h-[20%] w-full animate-[scan_3s_ease-in-out_infinite] pointer-events-none top-0"></div>
               </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-50/50 rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>

      </div>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Hero CTA */}
      <section className="bg-slate-900 py-20 px-6 sm:px-12 mt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
           <h2 className="font-serif text-3xl md:text-5xl text-white">
             Ready to Optimize?
           </h2>
           <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
             Join the family offices using our infrastructure to secure, measure, and grow their wealth across generations.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
             <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors group">
               Start Your Free Trial
               <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
             </Link>
              <Link href="/demo" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-slate-700 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
               Schedule Demo
             </Link>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
