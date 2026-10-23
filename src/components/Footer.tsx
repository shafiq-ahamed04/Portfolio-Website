import React from "react";
import { portfolioData } from "../content";
import { ArrowUp, Terminal, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

export const Footer: React.FC = () => {
  const handleBackToTop = () => {
    // Mini test-complete celebratory confetti in acid green & bone
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.9 },
        colors: ["#B6FF3C", "#F2EFE8", "#88FF00"],
      });
    } catch {
      // safe fallback
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070708] border-t border-[#18191D] pt-20 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Giant Reactive Header */}
        <div className="mb-16 select-none group">
          <p className="font-mono text-xs text-[#B6FF3C] tracking-widest uppercase mb-2">
            SUITE CONCLUSION // ZERO CRITICAL DEFECTS
          </p>
          <div className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-[#1C1E24] group-hover:text-[#F2EFE8] transition-colors duration-500 leading-none">
            LET&apos;S TEST SOMETHING.
          </div>
        </div>

        {/* Footer Navigation & Badges */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#18191D] items-center">
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B6FF3C]" />
              <span className="font-display font-bold text-base text-[#F2EFE8]">
                SHAFIQ AHAMED
              </span>
              <span className="font-mono text-xs text-[#9E9B95]">
                · QA Automation Engineer
              </span>
            </div>
            <p className="font-mono text-xs text-[#9E9B95]">
              B.Tech IT 2026 · Anna University · Python · Selenium WebDriver · Pytest
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-6 font-mono text-xs">
            <a
              href="https://github.com/shafiq-ahamed04"
              target="_blank"
              rel="noreferrer"
              className="text-[#9E9B95] hover:text-[#B6FF3C] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shafiq-ahamed-s"
              target="_blank"
              rel="noreferrer"
              className="text-[#9E9B95] hover:text-[#B6FF3C] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:shafiqahamed0111@gmail.com"
              className="text-[#9E9B95] hover:text-[#B6FF3C] transition-colors"
            >
              Email
            </a>
            <button
              onClick={handleBackToTop}
              data-cursor-label="TOP"
              className="px-3 py-1.5 rounded bg-[#18191D] border border-[#23242A] hover:border-[#B6FF3C] text-[#F2EFE8] hover:text-[#B6FF3C] transition-all flex items-center gap-1.5"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#B6FF3C]" />
              <span>[RE-RUN SUITE / TOP]</span>
            </button>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#9E9B95] gap-4">
          <div>
            © {new Date().getFullYear()} Shafiq Ahamed. Built with React, TypeScript, Tailwind, GSAP &amp; Lenis.
          </div>
          <div className="flex items-center gap-2 text-[11px] text-[#B6FF3C]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% QA AUTOMATION PORTFOLIO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
