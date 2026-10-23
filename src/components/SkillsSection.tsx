import React from "react";
import { portfolioData } from "../content";
import { SectionHeader } from "./SectionHeader";
import { Check, Sparkles, Terminal, Code2, ShieldCheck, Database, GitBranch, Layers } from "lucide-react";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#0A0A0B] border-t border-[#18191D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          testCaseId="TC-02"
          title="Testing Arsenal & Frameworks"
          subtitle="Tier-based proficiency breakdown: Hands-on verified competencies and active learning domains."
        />

        {/* Tier 1: Hands-on Verified Skills */}
        <div className="mb-14">
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
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#121316] border border-[#23242A] hover:border-[#B6FF3C]/60 hover:bg-[#16181D] transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E9B95] px-2 py-0.5 rounded bg-[#18191D] border border-[#23242A]">
                      {skill.category}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#B6FF3C] group-hover:scale-125 transition-transform" />
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
                    <Check className="w-3 h-3" /> VERIFIED
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 2: Learning & Expanding */}
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
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#121316] border border-[#23242A] hover:border-yellow-500/50 transition-all flex flex-col justify-between"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
