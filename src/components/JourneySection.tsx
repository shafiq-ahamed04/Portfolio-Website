import React, { useEffect, useRef } from "react";
import { portfolioData } from "../content";
import { SectionHeader } from "./SectionHeader";
import { SpotlightCard } from "./SpotlightCard";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const JourneySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Timeline items reveal with stagger
    const items = sectionRef.current.querySelectorAll(".journey-milestone-item");
    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    // Dynamic line draw effect linked to scroll progress
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="py-24 bg-[#0A0A0B] border-t border-[#18191D] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          testCaseId="TC-05"
          title="QA Engineering CI Timeline"
          subtitle="Sequential build milestones: 90-day intensive QA journey from foundational Python to job-ready test automation."
        />

        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10">
          {/* Static Background Guide Line */}
          <div className="absolute left-6 sm:left-10 top-4 bottom-8 w-[2px] bg-[#1F2026]" />

          {/* Dynamic Green Drawing CI Line (Scrubbed with GSAP ScrollTrigger) */}
          <div
            ref={lineRef}
            className="absolute left-6 sm:left-10 top-4 bottom-8 w-[2px] bg-gradient-to-b from-[#B6FF3C] via-[#B6FF3C] to-[#88FF00] z-0 shadow-[0_0_8px_rgba(182,255,60,0.6)]"
          />

          <div className="space-y-10 relative z-10">
            {portfolioData.journeyMilestones.map((m, idx) => {
              const isCurrent = m.status === "ACTIVE";

              return (
                <div
                  key={idx}
                  className="journey-milestone-item relative flex items-start gap-6 sm:gap-8 group"
                >
                  {/* CI Node */}
                  <div className="relative z-10 -ml-3.5 sm:-ml-4 mt-1">
                    {isCurrent ? (
                      <div className="w-8 h-8 rounded-full bg-[#18191D] border-2 border-[#B6FF3C] flex items-center justify-center shadow-[0_0_20px_rgba(182,255,60,0.8)]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#B6FF3C] animate-ping" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-[#121316] border-2 border-[#B6FF3C] flex items-center justify-center text-[#B6FF3C] group-hover:scale-110 transition-transform">
                        <Check className="w-4 h-4 text-[#B6FF3C]" />
                      </div>
                    )}
                  </div>

                  {/* Milestone Card */}
                  <SpotlightCard
                    className={`flex-1 p-6 border transition-all ${
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
                  </SpotlightCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
