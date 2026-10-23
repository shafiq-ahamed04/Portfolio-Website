import React, { useEffect, useRef } from "react";
import { portfolioData } from "../content";
import { SectionHeader } from "./SectionHeader";
import { BugEasterEgg } from "./BugEasterEgg";
import { SpotlightCard } from "./SpotlightCard";
import { GraduationCap, MapPin, CheckCircle, ShieldCheck, Terminal, Award, Sparkles } from "lucide-react";

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Native IntersectionObserver for subtle performance-minded fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(".observer-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 sm:py-28 bg-[#0A0A0B] border-t border-[#18191D] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="lg:col-span-7 w-full">
            <SpotlightCard className="observer-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out p-6 sm:p-8 md:p-9 bg-[#121316] border border-[#23242A] hover:border-[#B6FF3C]/40 rounded-2xl w-full">
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

              {/* High Contrast Body Paragraphs with Green Highlights */}
              <div className="space-y-4 text-[#E6E4DD] text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  I am <strong className="text-[#F2EFE8] font-bold">Shafiq Ahamed</strong>, a QA Automation Engineer completing my B.Tech in Information Technology (Batch of 2026) at <strong className="text-[#F2EFE8]">M.I.E.T. Engineering College, Anna University</strong>.
                </p>
                <p>
                  My engineering focus is strictly centered on{" "}
                  <strong className="text-[#B6FF3C] font-semibold bg-[#B6FF3C]/10 px-1.5 py-0.5 rounded border border-[#B6FF3C]/30">
                    test automation and software quality assurance
                  </strong>
                  . Rather than writing code that merely runs on happy paths, my mission is to craft automated test suites that{" "}
                  <strong className="text-[#B6FF3C] font-semibold">
                    stress edge cases, prevent regression bugs
                  </strong>
                  , and ensure bulletproof user experiences before deployment.
                </p>
                <p>
                  I operate by one non-negotiable rule:{" "}
                  <span className="text-[#B6FF3C] font-mono font-bold tracking-wide border-b border-[#B6FF3C]">
                    &ldquo;{portfolioData.personal.motto}&rdquo;
                  </span>
                  . Showing up daily, systematically structuring regression suites in Python, engineering{" "}
                  <strong className="text-[#B6FF3C] font-semibold">
                    resilient locators in Selenium WebDriver
                  </strong>
                  , and maintaining{" "}
                  <strong className="text-[#B6FF3C] font-semibold">
                    zero tolerance for flaky tests
                  </strong>{" "}
                  in Pytest.
                </p>
              </div>

              {/* Bottom Credentials Bar */}
              <div className="mt-8 pt-6 border-t border-[#23242A] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#F2EFE8] bg-[#18191D] px-3 py-1.5 rounded-lg border border-[#23242A]">
                    <GraduationCap className="w-4 h-4 text-[#B6FF3C]" />
                    <span>B.Tech IT 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#F2EFE8] bg-[#18191D] px-3 py-1.5 rounded-lg border border-[#23242A]">
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
          </div>

          {/* Test Case Attributes Breakdown */}
          <div className="lg:col-span-5 w-full space-y-4">
            <SpotlightCard className="observer-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-150 p-6 sm:p-7 bg-[#121316] border border-[#23242A] rounded-2xl">
              <div className="font-mono text-xs text-[#9E9B95] uppercase mb-4 flex items-center justify-between">
                <span>TEST PARAMETERS VERIFIED</span>
                <span className="text-[#B6FF3C] flex items-center gap-1 font-bold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>PASS</span>
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-[#18191D] border border-[#23242A] flex items-start gap-3 hover:border-[#B6FF3C]/40 transition-colors">
                  <CheckCircle className="w-4 h-4 text-[#B6FF3C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#F2EFE8] font-bold">100+ Automated Tests Executed</div>
                    <div className="text-[#9E9B95] text-[11px] mt-0.5">Authentication flows, complex forms, search trees</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#18191D] border border-[#23242A] flex items-start gap-3 hover:border-[#B6FF3C]/40 transition-colors">
                  <CheckCircle className="w-4 h-4 text-[#B6FF3C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#F2EFE8] font-bold">Pytest &amp; Selenium Locators</div>
                    <div className="text-[#9E9B95] text-[11px] mt-0.5">Custom fixtures, parameterization, explicit waits</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#18191D] border border-[#23242A] flex items-start gap-3 hover:border-[#B6FF3C]/40 transition-colors">
                  <CheckCircle className="w-4 h-4 text-[#B6FF3C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#F2EFE8] font-bold">Rigorous Defect Documentation</div>
                    <div className="text-[#9E9B95] text-[11px] mt-0.5">Clear reproduction steps, screenshots &amp; logs in Jira</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#18191D] border border-[#23242A] flex items-start gap-3 hover:border-[#B6FF3C]/40 transition-colors">
                  <CheckCircle className="w-4 h-4 text-[#B6FF3C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#F2EFE8] font-bold">API Test Validation</div>
                    <div className="text-[#9E9B95] text-[11px] mt-0.5">Status codes, response latencies &amp; payload schemas</div>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Quick QA Statement Card */}
            <div className="observer-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300 p-5 rounded-2xl bg-gradient-to-r from-[#18191D] to-[#121316] border border-[#23242A] flex items-center justify-between">
              <div>
                <div className="font-mono text-[11px] text-[#9E9B95] uppercase">CURRENT AVAILABILITY</div>
                <div className="font-display font-bold text-base text-[#F2EFE8] mt-1">
                  Open for QA Automation Roles
                </div>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg bg-[#B6FF3C] text-[#0A0A0B] font-mono text-xs font-bold hover:bg-[#9DE024] hover:shadow-[0_0_16px_rgba(182,255,60,0.4)] transition-all"
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
