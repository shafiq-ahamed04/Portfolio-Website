import React from "react";
import { portfolioData } from "../content";
import { SectionHeader } from "./SectionHeader";
import { BugEasterEgg } from "./BugEasterEgg";
import { GraduationCap, MapPin, CheckCircle, Flame, ShieldAlert, Award } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0A0A0B] border-t border-[#18191D] relative">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-xl bg-[#121316] border border-[#23242A] relative overflow-hidden">
              <div className="font-mono text-xs text-[#B6FF3C] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B6FF3C]" />
                QA AUTOMATION SPECIALIZATION
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F2EFE8] leading-snug mb-4">
                I approach software through the eyes of an adversarial tester.
              </h3>

              <div className="space-y-4 text-[#9E9B95] text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  I am <strong className="text-[#F2EFE8]">Shafiq Ahamed</strong>, a QA Automation Engineer currently pursuing my B.Tech in Information Technology (Batch of 2026) at M.I.E.T. Engineering College, Anna University.
                </p>
                <p>
                  My focus is strictly centered on <strong className="text-[#F2EFE8]">test automation and software quality assurance</strong>. Rather than writing code that just runs on happy paths, my goal is to craft automated test suites that stress edge cases, prevent regression bugs, and ensure seamless user experiences.
                </p>
                <p>
                  I operate by one core rule: <strong className="text-[#B6FF3C] font-mono tracking-wide">&ldquo;{portfolioData.personal.motto}&rdquo;</strong>. Showing up daily, systematically structuring test suites in Python, creating resilient locators in Selenium WebDriver, and maintaining zero tolerance for flaky tests in Pytest.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-[#23242A] flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F2EFE8]">
                  <GraduationCap className="w-4 h-4 text-[#B6FF3C]" />
                  <span>B.Tech IT 2026</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#F2EFE8]">
                  <MapPin className="w-4 h-4 text-[#B6FF3C]" />
                  <span>M.I.E.T Engineering College</span>
                </div>
              </div>
            </div>
          </div>

          {/* Test Case Attributes Breakdown */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-[#121316] border border-[#23242A]">
              <div className="font-mono text-xs text-[#9E9B95] uppercase mb-4 flex items-center justify-between">
                <span>TEST PARAMETERS</span>
                <span className="text-[#B6FF3C]">PASS</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded bg-[#18191D] border border-[#23242A] flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#B6FF3C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#F2EFE8] font-bold">100+ Automated Tests Executed</div>
                    <div className="text-[#9E9B95] text-[11px] mt-0.5">Authentication flows, complex forms, search trees</div>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#18191D] border border-[#23242A] flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#B6FF3C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#F2EFE8] font-bold">Pytest & Selenium Mastery</div>
                    <div className="text-[#9E9B95] text-[11px] mt-0.5">Custom fixtures, parameterization, explicit waits</div>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#18191D] border border-[#23242A] flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#B6FF3C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#F2EFE8] font-bold">Rigorous Defect Documentation</div>
                    <div className="text-[#9E9B95] text-[11px] mt-0.5">Clear reproduction steps, screenshots & logs in Jira</div>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#18191D] border border-[#23242A] flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#B6FF3C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#F2EFE8] font-bold">API Test Validation</div>
                    <div className="text-[#9E9B95] text-[11px] mt-0.5">Status codes, response latencies & payload schemas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick QA Statement Card */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-[#18191D] to-[#121316] border border-[#23242A] flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-[#9E9B95]">CURRENT AVAILABILITY</div>
                <div className="font-display font-bold text-base text-[#F2EFE8] mt-1">
                  Open for QA Automation Roles
                </div>
              </div>
              <a
                href="#contact"
                className="px-3.5 py-2 rounded bg-[#B6FF3C] text-[#0A0A0B] font-mono text-xs font-bold hover:bg-[#9DE024] transition-colors"
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
