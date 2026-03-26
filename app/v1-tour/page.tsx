"use client"

import React, { useState, useEffect, useMemo } from "react"
import { ChevronLeft, ChevronRight, Menu, X, ImageOff, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import tourDataRaw from "@/lib/tour-data.json"

// Type definitions based on JSON structure (Assuming exact same structure)
type Step = {
  id?: string
  title: string
  body: string
  highlights?: string[]
}

type TourStop = {
  id: string
  path: string
  title: string
  description: string
  steps: Step[]
}

const tourData = tourDataRaw as TourStop[]

// Grouping logic for the sidebar navigation
// We'll define groups based on ID prefixes or manual ranges for better navigation
const TOUR_GROUPS = [
    { title: "Dashboard", match: (id: string) => id === "dashboard" },
    { title: "Assets & Wealth", match: (id: string) => ["assets", "asset-form", "import"].includes(id) },
    { title: "Liabilities & Borrowing", match: (id: string) => ["borrowings", "borrowingCapacity"].includes(id) },
    { title: "Entities & Structures", match: (id: string) => ["people", "entities", "entity-form", "smsfCompliance"].includes(id) },
    { title: "Risk & Protection", match: (id: string) => id.startsWith("risk-") },
    { title: "Compliance", match: (id: string) => id.startsWith("compliance-") },
    { title: "Workflows", match: (id: string) => id === "workflows" },
    { title: "Meetings & Governance", match: (id: string) => ["meetings", "governance-verification"].includes(id) },
    { title: "Distributions", match: (id: string) => id === "distributions" },
    { title: "Reporting", match: (id: string) => id.startsWith("reports-") },
    { title: "Other", match: () => true },
]

function getGroupForStop(stopId: string) {
    return TOUR_GROUPS.find(g => g.match(stopId))?.title || "Other"
}

function TourImage({ src, alt }: { src: string, alt: string }) {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    if (error) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 gap-2 text-center p-8 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="bg-slate-200 p-4 rounded-full">
                    <ImageOff size={24} />
                </div>
                <p className="text-sm font-medium">Screenshot coming soon</p>
            </div>
        )
    }

    return (
        <div className="relative w-full h-full flex items-center justify-center bg-slate-100/50 rounded-lg overflow-hidden border border-slate-200/50">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-10">
                    <div className="w-8 h-8 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
                </div>
            )}
            <Image 
                src={src} 
                alt={alt}
                fill
                className={`object-contain transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setLoading(false)}
                onError={() => setError(true)}
            />
        </div>
    )
}

export default function TourPage() {
  const [currentStopIndex, setCurrentStopIndex] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true) // Default open on desktop
  
  const currentStop = tourData[currentStopIndex]
  const totalStops = tourData.length
  const progress = ((currentStopIndex + 1) / totalStops) * 100

  const goNext = () => {
    if (currentStopIndex < totalStops - 1) {
      setCurrentStopIndex(prev => prev + 1)
    }
  }

  const goPrev = () => {
    if (currentStopIndex > 0) {
      setCurrentStopIndex(prev => prev - 1)
    }
  }
  
  const goToStop = (index: number) => {
    if (index >= 0 && index < totalStops) {
        setCurrentStopIndex(index)
    }
  }

  // Keyboard navigation
  useEffect(() => {
     const handleKeyDown = (e: KeyboardEvent) => {
         if (e.key === "ArrowRight") {
             if (currentStopIndex < totalStops - 1) setCurrentStopIndex(prev => prev + 1)
         }
         if (e.key === "ArrowLeft") {
             if (currentStopIndex > 0) setCurrentStopIndex(prev => prev - 1)
         }
     }
     window.addEventListener("keydown", handleKeyDown)
     return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentStopIndex, totalStops])

  // Calculate grouped stops for rendering the sidebar
  const groupedStops = useMemo(() => {
      const groups: Record<string, { stop: TourStop, index: number }[]> = {}
      
      tourData.forEach((stop, index) => {
          const groupName = getGroupForStop(stop.id)
          if (!groups[groupName]) groups[groupName] = []
          groups[groupName].push({ stop, index })
      })
      
      // Order of keys matters based on TOUR_GROUPS
      return TOUR_GROUPS.map(g => ({
          title: g.title,
          stops: groups[g.title] || []
      })).filter(g => g.stops.length > 0)
  }, [])


  return (
    <div className="h-screen flex flex-col bg-white text-slate-900 overflow-hidden font-sans">
      
      {/* 1. Header Bar (Always visible) */}
      <header className="h-16 shrink-0 border-b border-slate-200 bg-white flex items-center justify-between px-4 lg:px-6 relative z-30">
        <div className="flex items-center gap-4">
             <Link href="/" className="font-semibold text-lg tracking-tight text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">FO</div>
                <span className="hidden md:inline">MyFamilyOfficer</span>
            </Link>
            <div className="h-6 w-px bg-slate-200 mx-2 hidden md:block" />
            <h1 className="text-sm font-medium text-slate-500 hidden md:block">Product Tour</h1>
            
            {/* Mobile Sidebar Toggle */}
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 -ml-2 text-slate-500">
                {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>

        <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                <span>{currentStopIndex + 1} / {totalStops}</span>
                <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
            </div>
            
            <Link href="/request-access" className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm hover:shadow-md">
                Get Access
            </Link>
        </div>
      </header>

      {/* 2. Main Workspace Layout */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Left Sidebar: Navigation (Collapsible on mobile) */}
        <aside 
            className={`
                absolute lg:static z-20 top-0 left-0 h-full w-72 bg-slate-50 border-r border-slate-200 flex flex-col transition-transform duration-300 transform
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-72'}
                lg:translate-x-0
            `}
        >
            <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/80 backdrop-blur-sm sticky top-0 z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Itinerary</span>
                <button 
                  onClick={() => setIsSidebarOpen(false)} 
                  className="lg:hidden text-slate-400 hover:text-slate-600"
                >
                    <ChevronLeft size={16} />
                </button>
            </div>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-6 pb-20">
                {groupedStops.map((group, gIdx) => (
                    <div key={gIdx} className="px-2">
                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-2">{group.title}</h3>
                        <div className="space-y-0.5">
                            {group.stops.map(({ stop, index }) => {
                                const isActive = currentStopIndex === index
                                const isCompleted = currentStopIndex > index
                                
                                return (
                                    <button
                                        key={stop.id}
                                        onClick={() => {
                                            goToStop(index)
                                            if (window.innerWidth < 1024) setIsSidebarOpen(false)
                                        }}
                                        className={`
                                            w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-3 group relative
                                            ${isActive ? 'bg-white text-blue-700 shadow-sm ring-1 ring-slate-200' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
                                        `}
                                    >
                                        <div className={`
                                            w-1.5 h-1.5 rounded-full shrink-0 transition-colors
                                            ${isActive ? 'bg-blue-600' : isCompleted ? 'bg-green-500' : 'bg-slate-300 group-hover:bg-slate-400'}
                                        `} />
                                        <span className="truncate flex-1">{stop.title}</span>
                                        {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full" />}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </aside>

        {/* Center: Content Stage */}
        <main className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-white">
            
            {/* Image Area - Maximum Real Estate */}
            <div className="flex-1 overflow-hidden relative bg-slate-50 flex flex-col h-[50vh] lg:h-auto border-b lg:border-b-0 lg:border-r border-slate-200 group">
                <div className="absolute top-4 left-4 z-10 lg:hidden bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium border shadow-sm">
                    {currentStopIndex + 1} / {totalStops}
                </div>
                
                <div className="flex-1 p-4 lg:p-8 flex items-center justify-center overflow-auto">
                    <div className="relative w-full max-w-[1400px] aspect-video shadow-2xl rounded-lg overflow-hidden border border-slate-200/60 bg-white ring-8 ring-slate-100">
                        <TourImage 
                            key={currentStop.id} 
                            src={`/images/tour/${currentStop.id}.png`}
                            alt={currentStop.title} 
                        />
                    </div>
                </div>

                {/* Floating Navigation Controls (Over Image on Desktop) */}
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-md border border-slate-200 p-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                         onClick={goPrev} disabled={currentStopIndex === 0}
                         className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-slate-700"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <span className="text-xs font-mono font-medium text-slate-500 w-16 text-center">
                        {currentStopIndex + 1} / {totalStops}
                    </span>
                    <button 
                         onClick={goNext} disabled={currentStopIndex === totalStops - 1}
                         className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-slate-700"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Right Panel: Context & Details (Scrollable independent of image) */}
            <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0 bg-white flex flex-col h-full overflow-hidden">
                <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                    <div className="mb-8">
                         <div className="flex items-center gap-2 mb-4">
                            <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
                                {getGroupForStop(currentStop.id)}
                            </span>
                         </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                            {currentStop.title}
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            {currentStop.description}
                        </p>
                    </div>

                    <div className="space-y-8 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-2.5 top-2 bottom-4 w-px bg-slate-100" />

                        {currentStop.steps.map((step, idx) => (
                            <div key={idx} className="relative pl-8 group">
                                {/* Step Indicator */}
                                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center text-[10px] font-bold z-10 group-hover:border-blue-400 group-hover:text-blue-600 transition-colors">
                                    {idx + 1}
                                </div>
                                
                                <h3 className="font-semibold text-slate-900 mb-1.5 text-base">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                                    {step.body}
                                </p>
                                
                                {(step.highlights && step.highlights.length > 0) && (
                                    <div className="flex flex-wrap gap-2">
                                        {step.highlights.map((h, i) => (
                                            <span key={i} className="inline-flex items-center px-2 py-1 rounded-md text-[10px] bg-slate-50 text-slate-500 border border-slate-100 font-medium">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Action Area */}
                <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                    <div className="flex flex-col gap-3">
                        {currentStopIndex === totalStops - 1 ? (
                            <Link href="/request-access" className="w-full py-3 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
                                Request Access Now <ArrowRight size={18} />
                            </Link>
                        ) : (
                             <button onClick={goNext} className="w-full py-3 bg-slate-900 text-white rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-slate-800 transition-all shadow-md">
                                Next: {tourData[currentStopIndex + 1]?.title || "Finish"} <ChevronRight size={16} />
                            </button>
                        )}
                        
                        <div className="flex justify-between items-center text-xs text-slate-400 px-1">
                            <button onClick={goPrev} disabled={currentStopIndex === 0} className="hover:text-slate-600 disabled:opacity-0 transition-colors">
                                ← Previous
                            </button>
                            <span className="hidden lg:inline">Key: Left/Right Arrows</span>
                        </div>
                    </div>
                </div>
            </div>

        </main>
      </div>
    </div>
  )
}