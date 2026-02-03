import Image from "next/image";
import React from "react";
import { SummaryProcessCard } from "./summary-process-card";

const Features = () => {
  return (
    <div className="flex gap-5 w-full h-[40vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-full w-1/3 rounded-xl shadow-lg bg-black/5 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-100 opacity-30" />
        <div className="absolute -top-6 left-0 right-0 h-32 bg-gradient-to-b from-[#F2F4F6] via-[#F2F4F6]/90 to-transparent z-20 pointer-events-none" />
        <div className="relative z-10 w-full h-full flex flex-col ">
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="scale-90 origin-top w-full">
              <SummaryProcessCard />
            </div>
          </div>
          <div className="bg-white/80 -mt-7 h-20 max-w-sm backdrop-blur-sm rounded-lg shadow-sm p-3  flex items-center gap-3 border border-white/20 ring-1 ring-black/5 mx-[25.5px] mb-6">
            
           
          </div>

          {/* --- Bottom Fade Gradient (The Mask) --- */}
          <div className="absolute bottom-30 left-0 right-0 h-20 bg-gradient-to-t from-[#F2F4F6] via-[#F2F4F6]/90 to-transparent z-20 pointer-events-none" />

          <div className="px-6 pb-6 pt-2">
            <h3 className="font-semibold text-xl mb-2 text-neutral-800">
              AI-Generated Summaries
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              AI-powered summaries that highlight essential points and
              actionable insights from your content.
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-1/3 bg-black/20 rounded-xl shadow-lg"></div>
      <div className="h-full w-1/3 bg-black/20 rounded-xl shadow-lg"></div>
    </div>
  );
};

export default Features;
