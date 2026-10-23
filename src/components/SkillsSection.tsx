import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "../content";
import { SectionHeader } from "./SectionHeader";
import { SpotlightCard } from "./SpotlightCard";
import { Check, Sparkles, Filter } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SkillsSection: React.FC = () => {
  const [filter, setFilter] = useState<"ALL" | "HANDS_ON" | "LEARNING">("ALL");
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".skill-card-item");
    gsap.fromTo(
      cards,
      { y: 35, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.06,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  const showHandsOn = filter === "ALL" || filter === "HANDS_ON";
  const showLearning = filter === "ALL" || filter === "LEARNING";

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 bg-[#0A0A0B] border-t border-[#18191D] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <SectionHeader
            testCaseId="TC-02"
            title="Testing Arsenal & Frameworks"
            subtitle="Tier-based proficiency breakdown: Hands-on verified competencies and active learning domains."
          />

          {/* Interactive Tier Filter */}
          <div className="mb-8 md:mb-12 flex items-center gap-1.5 p-1 rounded-lg bg-[#121316] border border-[#23242A] font-mono text-xs">
            <button
              onClick={() => setFilter("ALL")}
              className={`px-3 py-1.5 rounded transition-colors ${
                filter === "ALL"
                  ? "bg-[#B6FF3C] text-[#0A0A0B] font-bold"
                  : "text-[#9E9B95] hover:text-[#F2EFE8]"
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setFilter("HANDS_ON")}
              className={`px-3 py-1.5 rounded transition-colors ${
                filter === "HANDS_ON"
                  ? "bg-[#B6FF3C] text-[#0A0A0B] font-bold"
                  : "text-[#9E9B95] hover:text-[#F2EFE8]"
              }`}
            >
              Hands-On (8)
            </button>
            <button
              onClick={() => setFilter("LEARNING")}
              className={`px-3 py-1.5 rounded transition-colors ${
                filter === "LEARNING"
                  ? "bg-[#B6FF3C] text-[#0A0A0B] font-bold"
                  : "text-[#9E9B95] hover:text-[#F2EFE8]"
              }`}
            >
              Learning (2)
            </button>
          </div>
        </div>

        <div ref={gridRef} className="space-y-12">
          {/* Tier 1: Hands-on Verified Skills */}
          {showHandsOn && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#B6FF3C]/10 border border-[#B6FF3C]/30 text-[#B6FF3C] font-bold">
                  TIER 1 · HANDS-ON
                </span>
                <span className="text-xs font-mono text-[#9E9B95]">
                  Core practical tools applied in daily test suites & automation
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {portfolioData.skillsTiers.handsOn.map((skill, idx) => (
                  <SpotlightCard
                    key={idx}
                    className="skill-card-item p-5 bg-[#121316] border border-[#23242A] hover:border-[#B6FF3C]/60 hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(182,255,60,0.15)] flex flex-col justify-between group transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E9B95] px-2 py-0.5 rounded bg-[#18191D] border border-[#23242A]">
                          {skill.category}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#B6FF3C] group-hover:scale-150 group-hover:shadow-[0_0_8px_#B6FF3C] transition-all" />
                      </div>
                      <h4 className="text-lg font-display font-bold text-[#F2EFE8] group-hover:text-[#B6FF3C] transition-colors">
                        {skill.name}
                      </h4>
                      <p className="mt-2 text-xs text-[#9E9B95] font-sans leading-relaxed">
                        {skill.note}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#23242A] flex items-center justify-between font-mono text-[11px]">
                      <span className="text-[#9E9B95]">STATUS</span>
                      <span className="text-[#B6FF3C] font-semibold flex items-center gap-1">
                        <Check className="w-3 h-3 group-hover:scale-125 transition-transform" /> VERIFIED
                      </span>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          )}

          {/* Tier 2: Learning & Expanding */}
          {showLearning && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#18191D] border border-yellow-500/30 text-yellow-400 font-bold">
                  TIER 2 · LEARNING
                </span>
                <span className="text-xs font-mono text-[#9E9B95]">
                  Actively studying and implementing next-level architectural patterns
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portfolioData.skillsTiers.learning.map((skill, idx) => (
                  <SpotlightCard
                    key={idx}
                    className="skill-card-item p-5 bg-[#121316] border border-[#23242A] hover:border-yellow-500/50 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E9B95] px-2 py-0.5 rounded bg-[#18191D] border border-[#23242A]">
                          {skill.category}
                        </span>
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                      </div>
                      <h4 className="text-lg font-display font-bold text-[#F2EFE8]">
                        {skill.name}
                      </h4>
                      <p className="mt-2 text-xs text-[#9E9B95] font-sans leading-relaxed">
                        {skill.note}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#23242A] flex items-center justify-between font-mono text-[11px]">
                      <span className="text-[#9E9B95]">TRAJECTORY</span>
                      <span className="text-yellow-400 font-semibold">IN PROGRESS</span>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
