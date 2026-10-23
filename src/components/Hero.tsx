import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "../content";
import { HeroCanvas } from "./HeroCanvas";
import { Play, Download, Terminal, CheckCircle2, ShieldCheck, ArrowRight, Bug } from "lucide-react";

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [scrambleName, setScrambleName] = useState("SHAFIQ AHAMED");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const portraitRef = useRef<HTMLDivElement | null>(null);

  // Rotating roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % portfolioData.personal.rolesRotating.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Text scramble effect for Name
  const handleScramble = () => {
    const target = "SHAFIQ AHAMED";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>_";
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambleName(
        target
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iteration) return target[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration >= target.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 30);
  };

  // 3D Tilt on portrait
  const handlePortraitMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 18, y: -y * 18 });
  };

  const handlePortraitMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#0A0A0B]">
      {/* Interactive WebGL Hero Canvas */}
      <HeroCanvas />

      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B6FF3C]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning & Headlines */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Chip */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#18191D] border border-[#23242A] text-xs font-mono text-[#F2EFE8]">
              <span className="w-2 h-2 rounded-full bg-[#B6FF3C] animate-ping inline-block" />
              <span className="text-[#B6FF3C] font-semibold">{portfolioData.personal.statusBadge}</span>
              <span className="text-[#9E9B95]">· B.Tech IT 2026</span>
            </div>

            {/* Giant Name with Scramble & Depth */}
            <div className="relative select-none group" onMouseEnter={handleScramble}>
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-display font-black tracking-tighter text-[#F2EFE8] leading-[0.95]">
                {scrambleName}
              </h1>
              <p className="font-mono text-xs text-[#9E9B95] mt-2 tracking-widest uppercase">
                TEST SUITE ENGINE // DISCIPLINE OVER MOTIVATION
              </p>
            </div>

            {/* Rotating Role Line */}
            <div className="h-9 flex items-center font-mono text-lg sm:text-2xl text-[#B6FF3C] font-semibold">
              <span className="text-[#9E9B95] mr-2 text-sm sm:text-base">$ role --target:</span>
              <span className="transition-all duration-300">
                {portfolioData.personal.rolesRotating[roleIndex]}
              </span>
              <span className="w-2.5 h-5 bg-[#B6FF3C] ml-1.5 animate-pulse inline-block" />
            </div>

            {/* Core Hero Tagline */}
            <p className="text-xl sm:text-2xl text-[#E4E1D8] font-sans font-light max-w-xl leading-relaxed">
              &ldquo;<span className="text-[#F2EFE8] font-medium">{portfolioData.personal.tagline}</span>&rdquo;
            </p>

            <p className="text-sm text-[#9E9B95] max-w-lg leading-relaxed font-sans">
              Dedicated QA Automation Fresher crafting reliable Python, Selenium WebDriver, and Pytest suites.
              Zero flaky tests, disciplined defect reporting, and robust API validation.
            </p>

            {/* CTAs with magnetic hover states */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                data-testid="hero-projects-btn"
                data-cursor-label="SUITES"
                className="px-6 py-3.5 rounded-md bg-[#B6FF3C] text-[#0A0A0B] font-mono text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-[#9DE024] hover:shadow-[0_0_24px_rgba(182,255,60,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Test Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                download={portfolioData.personal.resumeDownloadName}
                data-testid="hero-resume-btn"
                data-cursor-label="RESUME"
                className="px-5 py-3.5 rounded-md bg-[#18191D] border border-[#23242A] text-[#F2EFE8] font-mono text-xs sm:text-sm font-medium flex items-center gap-2 hover:border-[#B6FF3C] hover:text-[#B6FF3C] transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-[#B6FF3C]" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                data-testid="hero-contact-btn"
                data-cursor-label="HIRE"
                className="px-5 py-3.5 rounded-md bg-transparent border border-[#23242A] text-[#9E9B95] hover:text-[#F2EFE8] hover:border-[#F2EFE8] font-mono text-xs sm:text-sm transition-all"
              >
                Hire Me
              </a>
            </div>

            {/* 100+ Tests Counter Badge */}
            <div className="pt-4 flex items-center gap-6 border-t border-[#23242A]/80 w-full max-w-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-[#B6FF3C] flex items-center justify-center font-mono font-bold text-sm text-[#B6FF3C] shadow-[0_0_12px_rgba(182,255,60,0.2)]">
                  100+
                </div>
                <div>
                  <div className="text-xs font-mono font-bold tracking-wider text-[#F2EFE8]">
                    100+ AUTOMATED TESTS
                  </div>
                  <div className="text-[11px] text-[#9E9B95] font-mono">
                    Selenium · Pytest · Requests
                  </div>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-[#23242A]" />

              <div>
                <div className="text-xs font-mono font-bold text-[#B6FF3C] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% PASS RATE</span>
                </div>
                <div className="text-[11px] text-[#9E9B95] font-mono">
                  Functional & Regression
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stylish Duotone Portrait with Layers */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Giant outlined background text behind portrait */}
            <div className="absolute -top-12 -left-6 select-none pointer-events-none opacity-10 font-display font-black text-7xl sm:text-8xl text-transparent [-webkit-text-stroke:2px_#F2EFE8] whitespace-nowrap z-0">
              SHAFIQ
            </div>

            <div
              ref={portraitRef}
              onMouseMove={handlePortraitMouseMove}
              onMouseLeave={handlePortraitMouseLeave}
              className="relative w-72 sm:w-88 md:w-96 aspect-[4/5] rounded-2xl p-1 transition-transform duration-200 ease-out z-10 group"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              }}
            >
              {/* Acid Green Rim Glow Frame */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#B6FF3C]/40 via-[#B6FF3C]/10 to-transparent p-[1.5px] pointer-events-none">
                <div className="w-full h-full bg-[#0E0F12] rounded-2xl" />
              </div>

              {/* Portrait Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#121316]">
                <img
                  src="/images/profile.png"
                  alt="Shafiq Ahamed - QA Automation Engineer"
                  className="w-full h-full object-cover object-center filter contrast-110 saturate-[0.85] transition-all duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to placeholder if missing
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80";
                  }}
                />

                {/* Duotone acid green overlay layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-85" />
                <div className="absolute inset-0 mix-blend-color opacity-25 bg-[#B6FF3C]" />

                {/* Floating Micro-Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#121316]/90 backdrop-blur-md border border-[#23242A] rounded-lg p-3 flex items-center justify-between font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B6FF3C] inline-block" />
                    <div>
                      <div className="text-[11px] font-bold text-[#F2EFE8]">SHAFIQ AHAMED</div>
                      <div className="text-[9px] text-[#9E9B95]">QA Automation Fresher · 2026</div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#B6FF3C]/15 border border-[#B6FF3C]/40 text-[#B6FF3C] font-bold">
                    PASSED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Dual-Direction Marquee */}
      <div className="mt-16 w-full border-y border-[#23242A] bg-[#0E0F12]/80 backdrop-blur-sm py-3 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...portfolioData.marqueeItems, ...portfolioData.marqueeItems].map((item, idx) => (
            <span key={idx} className="font-mono text-xs tracking-widest text-[#9E9B95] mx-4 flex items-center gap-4">
              <span className="text-[#F2EFE8] font-bold">{item}</span>
              <span className="text-[#B6FF3C] font-black">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
