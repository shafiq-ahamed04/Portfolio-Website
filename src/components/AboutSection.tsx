import React, { useEffect, useRef } from "react";
import { portfolioData } from "../content";
import { SectionHeader } from "./SectionHeader";
import { BugEasterEgg } from "./BugEasterEgg";
import { SpotlightCard } from "./SpotlightCard";
import {
  GraduationCap,
  MapPin,
  CheckCircle,
  ShieldCheck,
  Terminal,
  Award,
  Sparkles,
  Flame,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const storyCardRef = useRef<HTMLDivElement | null>(null);
  const metricsRef = useRef<HTMLDivElement | null>(null);

  // GSAP Scroll-Triggered Stagger & Reveal Animations
  useEffect(() => {
    if (!sectionRef.current) return;

    // Scroll-triggered reveal for cards
    const revealCards = sectionRef.current.querySelectorAll(".about-scroll-reveal");
    gsap.fromTo(
      revealCards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    // Stagger reveal for story paragraphs
    if (storyCardRef.current) {
      const paragraphs = storyCardRef.current.querySelectorAll(".story-paragraph");
      gsap.fromTo(
        paragraphs,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: storyCardRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 sm:py-28 bg-[#0A0A0B] border-t border-[#18191D] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#B6FF3C]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#B6FF3C]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <SectionHeader
            testCaseId="TC-01"
            title="Engineered for Reliability"
            subtitle="Test scenario validation: Engineer background, education, and QA philosophy."
          />
          <div className="mb-8 md:mb-12">
            <BugEasterEgg />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Story & Philosophy Box */}
          <div ref={storyCardRef} className="lg:col-span-7 w-full space-y-6">
            <SpotlightCard className="about-scroll-reveal p-6 sm:p-8 md:p-9 bg-[#121316] border border-[#23242A] hover:border-[#B6FF3C]/40 rounded-2xl w-full relative overflow-hidden group shadow-2xl transition-all duration-300">
              {/* Subtle top scanline */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B6FF3C]/40 to-transparent pointer-events-none" />

              {/* Badge */}
              <div className="font-mono text-xs text-[#B6FF3C] mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B6FF3C] animate-pulse" />
                <span className="font-bold tracking-wider uppercase">QA AUTOMATION SPECIALIZATION</span>
              </div>

              {/* Main Headline - High Contrast, 100% Readable */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-[#F2EFE8] leading-tight mb-6">
                I approach software through the eyes of an{" "}
                <span className="text-[#B6FF3C] underline decoration-[#B6FF3C]/40 underline-offset-4">
                  adversarial tester
                </span>
                .
              </h3>

              {/* Ultra High-Contrast Body Paragraphs (Guaranteed #F2EFE8 Bone White) */}
              <div className="space-y-4 text-sm sm:text-base leading-relaxed font-sans">
                <p
                  className="story-paragraph text-[#F2EFE8] leading-relaxed"
                  style={{ color: "#F2EFE8" }}
                >
                  I am <strong className="text-white font-bold bg-[#18191D] px-2 py-0.5 rounded border border-[#23242A]">Shafiq Ahamed</strong>, a QA Automation Engineer completing my B.Tech in Information Technology (Batch of 2026) at <strong className="text-white font-bold">M.I.E.T. Engineering College, Anna University</strong>.
                </p>

                <p
                  className="story-paragraph text-[#F2EFE8] leading-relaxed"
                  style={{ color: "#F2EFE8" }}
                >
                  My engineering focus is strictly centered on{" "}
                  <strong className="text-[#B6FF3C] font-semibold bg-[#B6FF3C]/10 px-2 py-0.5 rounded border border-[#B6FF3C]/30">
                    test automation and software quality assurance
                  </strong>
                  . Rather than writing code that merely runs on happy paths, my mission is to craft automated test suites that{" "}
                  <strong className="text-[#B6FF3C] font-semibold">
                    stress edge cases, prevent regression bugs
                  </strong>
                  , and ensure bulletproof user experiences before deployment.
                </p>

                {/* Dedicated Interactive QA Philosophy Banner */}
                <div className="story-paragraph my-5 p-4 sm:p-5 rounded-xl bg-[#0F1014] border border-[#B6FF3C]/30 shadow-[0_0_20px_rgba(182,255,60,0.1)] font-mono text-xs relative overflow-hidden group/motto">
                  <div className="flex items-center justify-between text-[#9E9B95] mb-2 pb-2 border-b border-[#23242A]">
                    <span className="flex items-center gap-2 text-[#B6FF3C] font-bold">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>$ qa_core_rule --strict</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#B6FF3C] bg-[#B6FF3C]/10 px-2 py-0.5 rounded border border-[#B6FF3C]/20">
                      NON-NEGOTIABLE
                    </span>
                  </div>

                  <p className="text-xl sm:text-2xl font-display font-extrabold text-[#F2EFE8] tracking-tight">
                    &ldquo;<span className="text-[#B6FF3C]">{portfolioData.personal.motto}</span>&rdquo;
                  </p>

                  <p
                    className="font-sans text-xs text-[#F2EFE8] mt-2 leading-relaxed"
                    style={{ color: "#F2EFE8" }}
                  >
                    Showing up daily, systematically structuring regression suites in Python, engineering{" "}
                    <strong className="text-[#B6FF3C] font-semibold">resilient locators in Selenium WebDriver</strong>, and maintaining{" "}
                    <strong className="text-[#B6FF3C] font-semibold">zero tolerance for flaky tests</strong> in Pytest.
                  </p>
                </div>
              </div>

              {/* Bottom Credentials Bar */}
              <div className="mt-8 pt-6 border-t border-[#23242A] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#F2EFE8] bg-[#18191D] px-3.5 py-2 rounded-lg border border-[#23242A] hover:border-[#B6FF3C]/40 transition-colors">
                    <GraduationCap className="w-4 h-4 text-[#B6FF3C]" />
                    <span>B.Tech IT 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#F2EFE8] bg-[#18191D] px-3.5 py-2 rounded-lg border border-[#23242A] hover:border-[#B6FF3C]/40 transition-colors">
                    <MapPin className="w-4 h-4 text-[#B6FF3C]" />
                    <span>Anna University Affiliated</span>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-[#B6FF3C] flex items-center gap-1 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% QA SPECIALIZATION</span>
                </div>
              </div>
            </SpotlightCard>

            {/* Quick Metrics Bar Under Story */}
            <div ref={metricsRef} className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-[#121316] border border-[#23242A] text-center hover:border-[#B6FF3C]/50 transition-all hover:-translate-y-1">
                <div className="text-2xl font-display font-extrabold text-[#B6FF3C]">100+</div>
                <div className="text-[11px] font-mono text-[#F2EFE8] mt-0.5">Automated Tests</div>
              </div>
              <div className="p-4 rounded-xl bg-[#121316] border border-[#23242A] text-center hover:border-[#B6FF3C]/50 transition-all hover:-translate-y-1">
                <div className="text-2xl font-display font-extrabold text-[#F2EFE8]">0</div>
                <div className="text-[11px] font-mono text-[#F2EFE8] mt-0.5">Flaky Tolerance</div>
              </div>
              <div className="p-4 rounded-xl bg-[#121316] border border-[#23242A] text-center hover:border-[#B6FF3C]/50 transition-all hover:-translate-y-1">
                <div className="text-2xl font-display font-extrabold text-[#B6FF3C]">100%</div>
                <div className="text-[11px] font-mono text-[#F2EFE8] mt-0.5">Pytest Verified</div>
              </div>
            </div>
          </div>

          {/* Test Case Attributes Breakdown */}
          <div className="lg:col-span-5 w-full space-y-4">
            <SpotlightCard className="about-scroll-reveal p-6 sm:p-7 bg-[#121316] border border-[#23242A] hover:border-[#B6FF3C]/40 rounded-2xl relative overflow-hidden group shadow-2xl">
              {/* Sweeping diagnostic scanline */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#B6FF3C]/5 to-transparent h-12 w-full animate-radar-sweep pointer-events-none" />

              <div className="font-mono text-xs text-[#9E9B95] uppercase mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#B6FF3C]" />
                  <span>TEST PARAMETERS VERIFIED</span>
                </span>
                <span className="text-[#B6FF3C] flex items-center gap-1 font-bold">
                  <CheckCircle className="w-3.5 h-3.5 animate-pulse" />
                  <span>PASS [100%]</span>
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-[#18191D] border border-[#23242A] flex items-start gap-3 hover:border-[#B6FF3C]/60 hover:bg-[#1C1E24] hover:translate-x-1 transition-all group/item">
                  <CheckCircle className="w-4 h-4 text-[#B6FF3C] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <div>
                    <div className="text-[#F2EFE8] font-bold group-hover/item:text-[#B6FF3C] transition-colors">
                      100+ Automated Tests Executed
                    </div>
                    <div className="text-[#F2EFE8]/75 text-[11px] mt-0.5">
                      Authentication flows, complex forms, search trees
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#18191D] border border-[#23242A] flex items-start gap-3 hover:border-[#B6FF3C]/60 hover:bg-[#1C1E24] hover:translate-x-1 transition-all group/item">
                  <CheckCircle className="w-4 h-4 text-[#B6FF3C] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <div>
                    <div className="text-[#F2EFE8] font-bold group-hover/item:text-[#B6FF3C] transition-colors">
                      Pytest &amp; Selenium Locators
                    </div>
                    <div className="text-[#F2EFE8]/75 text-[11px] mt-0.5">
                      Custom fixtures, parameterization, explicit waits
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#18191D] border border-[#23242A] flex items-start gap-3 hover:border-[#B6FF3C]/60 hover:bg-[#1C1E24] hover:translate-x-1 transition-all group/item">
                  <CheckCircle className="w-4 h-4 text-[#B6FF3C] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <div>
                    <div className="text-[#F2EFE8] font-bold group-hover/item:text-[#B6FF3C] transition-colors">
                      Rigorous Defect Documentation
                    </div>
                    <div className="text-[#F2EFE8]/75 text-[11px] mt-0.5">
                      Clear reproduction steps, screenshots &amp; logs in Jira
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#18191D] border border-[#23242A] flex items-start gap-3 hover:border-[#B6FF3C]/60 hover:bg-[#1C1E24] hover:translate-x-1 transition-all group/item">
                  <CheckCircle className="w-4 h-4 text-[#B6FF3C] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <div>
                    <div className="text-[#F2EFE8] font-bold group-hover/item:text-[#B6FF3C] transition-colors">
                      API Test Validation
                    </div>
                    <div className="text-[#F2EFE8]/75 text-[11px] mt-0.5">
                      Status codes, response latencies &amp; payload schemas
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Quick QA Statement Card */}
            <div className="about-scroll-reveal p-5 rounded-2xl bg-gradient-to-r from-[#18191D] to-[#121316] border border-[#23242A] hover:border-[#B6FF3C]/40 flex items-center justify-between transition-colors shadow-lg">
              <div>
                <div className="font-mono text-[11px] text-[#9E9B95] uppercase">CURRENT AVAILABILITY</div>
                <div className="font-display font-bold text-base text-[#F2EFE8] mt-1">
                  Open for QA Automation Roles
                </div>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg bg-[#B6FF3C] text-[#0A0A0B] font-mono text-xs font-bold hover:bg-[#9DE024] hover:shadow-[0_0_16px_rgba(182,255,60,0.4)] transition-all hover:scale-105"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
