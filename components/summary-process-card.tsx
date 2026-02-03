"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, text: "Transcribing speech..." },
  { id: 2, text: "Detecting key moments" },
  { id: 3, text: "Analyzing content structure" },
  { id: 4, text: "Generating summary" },
];

export const SummaryProcessCard = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % (steps.length + 1)); // +1 to allow a "finished" state or loop
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto  space-y-4 font-sans text-sm text-neutral-800 bg-linear-to-b from-transparent via-white/30 to-transparent rounded-xl ">
      {/* File Item Card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-3 flex items-center gap-3 border border-white/20 ring-1 ring-black/5 w-full">
        <div className="h-10 w-10 bg-orange-100/50 rounded-lg flex items-center justify-center text-orange-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-medium truncate">Kickstart the project.mp4</div>
          <div className="text-xs text-orange-500 font-medium animate-pulse">
            {currentStep < steps.length ? steps[currentStep].text : "Done"}
          </div>
        </div>
      </div>

      {/* Progress Card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-5 border border-white/20 ring-1 ring-black/5 relative overflow-hidden">
        <div className="space-y-6 relative ml-2">
          {/* Vertical Line (Static) - Faded at top and bottom */}
          <div className="absolute left-[5px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-200 to-transparent" />

          {/* Progress Line Mask Wrapper */}
          <div
            className="absolute left-[5px] top-0 bottom-0 w-[2px] overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          >
            {/* Progress Line (Colored) */}
            <div
              className="absolute  top-0 w-full bg-gradient-to-b from-orange-500 via-orange-400 to-orange-200 transition-all duration-500 ease-in-out"
              style={{
                height: `${Math.min((currentStep / (steps.length - 1)) * 100, 100)}%`,
              }}
            >
              {/* Orb at the tip of the line */}
              <div className="absolute bottom-0 left-1/2 ml-10 -translate-x-1/2 translate-y-1/2 z-20">
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 ml-1 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500/40 rounded-full blur-md animate-pulse" />
                  <div className="w-2.5 h-2.5 ml-1 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)] ring-2 ring-white" />
                </div>
              </div>
            </div>
          </div>
          

          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <div key={step.id} className="relative flex items-center gap-4">
                {/* Dot / Indicator */}
                <div
                  className={cn(
                    "relative z-10 w-3 h-3 ml-px rounded-full border-2 transition-colors duration-300",
                    isCompleted
                      ? "bg-orange-500 border-orange-500"
                      : isActive
                        ? "bg-white border-orange-500"
                        : "bg-white border-neutral-300",
                  )}
                >
                  {isActive && (
                    <div className="absolute -inset-1 rounded-full bg-orange-400/30 animate-ping" />
                  )}
                  {isActive && (
                    <div className="absolute -inset-2 rounded-full bg-orange-400/20 animate-pulse" />
                  )}
                </div>

                {/* Text */}
                <div
                  className={cn(
                    "text-sm transition-colors duration-300",
                    isCompleted || isActive
                      ? "text-neutral-900 font-medium"
                      : "text-neutral-400",
                  )}
                >
                  {step.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
