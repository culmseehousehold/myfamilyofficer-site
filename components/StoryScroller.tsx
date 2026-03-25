"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Simple utility function to combine class names conditionally
function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

type StoryStep = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const STORY_STEPS: StoryStep[] = [
  {
    id: "chaos",
    title: "The Complexity Trap",
    description:
      "Family offices manage intricate webs of entities, trusts, and individuals. Keeping track of relationships and structures manually is a recipe for error.",
    imageSrc: "/images/tour/entities.png",
    imageAlt: "Complex entity structures",
  },
  {
    id: "visibility",
    title: "The Visibility Gap",
    description:
      "Spreadsheets can't keep up. You need a real-time dashboard that aggregates data from all sources to show the true state of wealth.",
    imageSrc: "/images/tour/dashboard.png",
    imageAlt: "Real-time dashboard",
  },
  {
    id: "risk",
    title: "Managing Risk & Compliance",
    description:
      "Deadlines missed are dollars lost. Automated compliance tracking ensures nothing slips through the cracks.",
    imageSrc: "/images/tour/compliance-audit-tab.png",
    imageAlt: "Compliance tracking",
  },
  {
    id: "reporting",
    title: "Instant, Accurate Reporting",
    description:
      "Stop spending weeks on month-end reports. Generate comprehensive performance and tax reports in seconds.",
    imageSrc: "/images/tour/reports-overview-tab.png",
    imageAlt: "Automated reporting",
  },
  {
    id: "peace",
    title: "Strategic Clarity",
    description:
      "With operations under control, you can focus on what matters: preserving and growing the family legacy.",
    imageSrc: "/images/tour/risk-protection-dashboard.png",
    imageAlt: "Strategic dashboard",
  },
];

export default function StoryScroller() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveStep(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px", // Trigger when the element is in the middle 20% of the screen
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="relative w-full bg-slate-950">
      {/* Sticky Image Container */}
      <div className="sticky top-16 hidden h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden lg:flex lg:w-1/2 lg:float-right">
        <div className="relative h-[600px] w-full max-w-2xl px-6">
          {STORY_STEPS.map((step, index) => (
            <div
              key={step.id}
              className={classNames(
                "absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out",
                activeStep === index
                  ? "opacity-100 transform translate-y-0 scale-100"
                  : "opacity-0 transform translate-y-8 scale-95"
              )}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl">
                 <Image
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Text Content */}
      <div className="relative z-10 w-full lg:w-1/2">
        {STORY_STEPS.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => {
                stepRefs.current[index] = el;
            }}
            data-index={index}
            className="flex min-h-screen items-center justify-center p-8 lg:p-16"
          >
            <div className="max-w-md">
              <div className="mb-4 inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold text-indigo-400">
                0{index + 1}
              </div>
              <h2 className="mb-6 text-4xl font-bold text-white leading-tight">
                {step.title}
              </h2>
              <p className="text-lg leading-relaxed text-slate-300">
                {step.description}
              </p>
              
              {/* Mobile Image (visible only on small screens) */}
              <div className="mt-8 block w-full lg:hidden">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-xl">
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="h-[50vh]"></div> {/* Padding at the end */}
      </div>
    </div>
  );
}
