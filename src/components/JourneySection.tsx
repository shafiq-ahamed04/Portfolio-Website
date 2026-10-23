import React from "react";
import { portfolioData } from "../content";
import { SectionHeader } from "./SectionHeader";
import { Check, Sparkles, Circle, ArrowDown, GitCommit } from "lucide-react";

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-[#0A0A0B] border-t border-[#18191D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          testCaseId="TC-05"
          title="QA Engineering CI Timeline"
          subtitle="Sequential build milestones: 90-day intensive QA journey from foundational Python to job-ready test automation."
        />

        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10">
          {/* Vertical Connecting CI Line */}
          <div className="absolute left-6 sm:left-10 top-4 bottom-8 w-[2px] bg-gradient-to-b from-[#B6FF3C] via-[#B6FF3C]/60 to-[#23242A]" />

          <div className="space-y-10">
            {portfolioData.journeyMilestones.map((m, idx) => {
              const isCurrent = m.status === "ACTIVE";

              return (
                <div key={idx} className="relative flex items-start gap-6 sm:gap-8 group">
                  {/* CI Node */}
                  <div className="relative z-10 -ml-3.5 sm:-ml-4 mt-1">
                    {isCurrent ? (
                      <div className="w-8 h-8 rounded-full bg-[#18191D] border-2 border-[#B6FF3C] flex items-center justify-center shadow-[0_0_16px_rgba(182,255,60,0.6)]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#B6FF3C] animate-ping" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-[#121316] border-2 border-[#B6FF3C] flex items-center justify-center text-[#B6FF3C] group-hover:scale-110 transition-transform">
                        <Check className="w-4 h-4 text-[#B6FF3C]" />
                      </div>
                    )}
                  </div>

                  {/* Milestone Card */}
                  <div
                    className={`flex-1 p-6 rounded-xl border transition-all ${
                      isCurrent
                        ? "bg-[#18191D] border-[#B6FF3C]/60 shadow-[0_0_24px_rgba(182,255,60,0.1)]"
                        : "bg-[#121316] border-[#23242A] hover:border-[#B6FF3C]/40"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#B6FF3C] font-semibold">
                          {m.date}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18191D] border border-[#23242A] text-[#9E9B95] uppercase">
                          {m.tag}
                        </span>
                      </div>

                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                          isCurrent
                            ? "bg-[#B6FF3C] text-[#0A0A0B] animate-pulse"
                            : "bg-[#B6FF3C]/10 text-[#B6FF3C] border border-[#B6FF3C]/30"
                        }`}
                      >
                        {isCurrent ? "IN EXECUTION" : "PASSED"}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-display font-bold text-[#F2EFE8]">
                      {m.title}
                    </h4>

                    <p className="mt-2 text-sm text-[#9E9B95] font-sans leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
