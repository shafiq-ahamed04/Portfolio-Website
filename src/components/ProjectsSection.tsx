import React, { useEffect, useRef, useState } from "react";
import { portfolioData, ProjectItem } from "../content";
import { SectionHeader } from "./SectionHeader";
import { SpotlightCard } from "./SpotlightCard";
import { ExternalLink, Github, CheckCircle2, AlertTriangle, FileCode2, Terminal, X, Play } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Velocity skew effect & card entrance with GSAP ScrollTrigger
    const projectCards = sectionRef.current.querySelectorAll(".project-bug-card");

    gsap.fromTo(
      projectCards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 bg-[#0A0A0B] border-t border-[#18191D] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          testCaseId="TC-03"
          title="Automated Test Projects"
          subtitle="Test Execution Artifacts: Bug reports, automated regression suites, and validation frameworks."
        />

        {/* Featured Bug-Report Style Project Cards */}
        <div className="space-y-8 mb-16">
          {portfolioData.projects.map((project) => (
            <SpotlightCard
              key={project.id}
              className="project-bug-card p-6 sm:p-8 bg-[#121316] border border-[#23242A] hover:border-[#B6FF3C]/50 transition-all duration-300 group"
            >
              {/* Header Bar of Bug-Report Card */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#23242A] mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#18191D] border border-[#23242A] text-[#B6FF3C] font-bold">
                    {project.id}
                  </span>
                  <span className="font-mono text-xs text-[#9E9B95]">
                    CASE: {project.testCaseId}
                  </span>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                      project.severity === "CRITICAL"
                        ? "bg-[#FF4D4D]/10 text-[#FF4D4D] border border-[#FF4D4D]/30"
                        : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30"
                    }`}
                  >
                    SEVERITY: {project.severity}
                  </span>
                </div>

                <div className="font-mono text-xs text-[#B6FF3C] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>REGRESSION SUITE PASSED</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Summary & Stack Details */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F2EFE8] group-hover:text-[#B6FF3C] transition-colors">
                    {project.title}
                  </h3>

                  <div className="font-mono text-xs text-[#9E9B95] space-y-1">
                    <span className="text-[#F2EFE8] font-bold">[SUMMARY]:</span>
                    <p className="font-sans text-sm text-[#9E9B95] leading-relaxed mt-1">
                      {project.summary}
                    </p>
                  </div>

                  {/* Stack Chips */}
                  <div>
                    <span className="font-mono text-xs text-[#F2EFE8] font-bold block mb-2">[STACK]:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="font-mono text-xs px-2.5 py-1 rounded bg-[#18191D] border border-[#23242A] text-[#F2EFE8] hover:border-[#B6FF3C]/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Result Statement */}
                  <div className="p-3.5 rounded bg-[#18191D] border border-[#23242A] font-mono text-xs">
                    <span className="text-[#B6FF3C] font-bold mr-2">[RESULT]:</span>
                    <span className="text-[#F2EFE8]">{project.result}</span>
                  </div>

                  {/* Links / Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor-label="CODE"
                        className="px-4 py-2 rounded bg-[#B6FF3C] text-[#0A0A0B] font-mono text-xs font-bold hover:bg-[#9DE024] hover:shadow-[0_0_16px_rgba(182,255,60,0.35)] transition-all flex items-center gap-1.5"
                      >
                        <Github className="w-4 h-4" />
                        <span>Inspect Test Suite Repo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : null}

                    {project.isTodoLink ? (
                      <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[#18191D] border border-yellow-500/40 text-yellow-400 font-mono text-xs">
                        <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0" />
                        <span>{project.todoNote}</span>
                      </div>
                    ) : null}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3.5 py-2 rounded bg-[#18191D] border border-[#23242A] hover:border-[#B6FF3C] text-[#F2EFE8] font-mono text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <Terminal className="w-3.5 h-3.5 text-[#B6FF3C]" />
                      <span>View Test Run Details</span>
                    </button>
                  </div>
                </div>

                {/* Right: Test Execution Preview or Terminal Snapshot */}
                <div className="lg:col-span-5">
                  <div className="rounded-lg bg-[#0F1014] border border-[#23242A] p-4 font-mono text-xs overflow-hidden">
                    <div className="flex items-center justify-between pb-2 border-b border-[#23242A] text-[#9E9B95] text-[11px] mb-3">
                      <span>EXECUTION_TELEMETRY.LOG</span>
                      <span className="text-[#B6FF3C]">STATUS 200</span>
                    </div>

                    {project.image ? (
                      <div className="relative rounded overflow-hidden border border-[#23242A] group-hover:border-[#B6FF3C]/40 transition-colors">
                        <img
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          className="w-full h-auto object-cover max-h-56 filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        <div className="p-2 bg-[#121316] text-[10px] text-[#9E9B95] flex items-center justify-between border-t border-[#23242A]">
                          <span>Automated failure capture snapshot</span>
                          <span className="text-[#FF4D4D] font-bold">ASSERTION_VERIFIED</span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 bg-[#18191D] rounded border border-[#23242A] space-y-2 text-[11px] text-[#9E9B95]">
                        <div className="text-white font-bold">$ pytest test_api_endpoints.py -v</div>
                        <div className="text-[#B6FF3C]">test_get_all_users() ........ PASSED [ 33%]</div>
                        <div className="text-[#B6FF3C]">test_post_create_payload() ... PASSED [ 66%]</div>
                        <div className="text-[#B6FF3C]">test_status_code_latency() ... PASSED [100%]</div>
                        <div className="pt-2 text-yellow-400">
                          // TODO: Repository link will be attached upon public push
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Secondary Row: Other Builds (TaskFlow & ATCRS) */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#23242A]">
            <h4 className="text-xl font-display font-bold text-[#F2EFE8]">
              Secondary Software Builds &amp; Research
            </h4>
            <span className="font-mono text-xs text-[#9E9B95]">
              NON-AUTOMATION BUILDS (NO HYPE)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.secondaryBuilds.map((build, idx) => (
              <SpotlightCard
                key={idx}
                className="p-6 bg-[#121316] border border-[#23242A] hover:border-[#F2EFE8]/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-[#18191D] text-[#9E9B95] border border-[#23242A]">
                      {build.badge}
                    </span>
                    <FileCode2 className="w-4 h-4 text-[#9E9B95]" />
                  </div>

                  <h5 className="text-lg font-display font-bold text-[#F2EFE8]">
                    {build.title}
                  </h5>

                  <p className="mt-2 text-xs text-[#9E9B95] font-sans leading-relaxed">
                    {build.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {build.stack.map((s, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18191D] text-[#9E9B95]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#23242A] flex items-center gap-3">
                  {build.githubUrl ? (
                    <a
                      href={build.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-[#F2EFE8] hover:text-[#B6FF3C] flex items-center gap-1 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  ) : null}

                  {build.liveUrl ? (
                    <a
                      href={build.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-[#B6FF3C] hover:underline flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  ) : null}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Test Case Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[99999] bg-[#0A0A0B]/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-xl bg-[#121316] border border-[#B6FF3C]/50 rounded-xl p-6 font-mono shadow-[0_0_40px_rgba(182,255,60,0.15)] relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#23242A] mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#B6FF3C]" />
                <span className="font-bold text-sm text-[#F2EFE8]">
                  {selectedProject.id} // TEST EXECUTION LOG
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-[#9E9B95] hover:text-[#F2EFE8] p-1"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[#9E9B95]">[PROJECT TITLE]:</span>
                <div className="text-base font-display font-bold text-[#F2EFE8] mt-0.5">
                  {selectedProject.title}
                </div>
              </div>

              <div>
                <span className="text-[#9E9B95]">[TEST SPECIFICATION]:</span>
                <p className="font-sans text-[#E4E1D8] leading-relaxed mt-1">
                  {selectedProject.summary}
                </p>
              </div>

              <div className="bg-[#18191D] p-3 rounded border border-[#23242A] space-y-1.5 text-[11px]">
                <div className="text-[#B6FF3C] font-bold">✓ Automated Execution Engine: Python 3.11 + Pytest 9.x</div>
                <div className="text-[#9E9B95]">WebDriver Strategy: Headless Chrome + Explicit ExpectedConditions</div>
                <div className="text-[#F2EFE8]">Assertion Verdict: 100% Passed (0 Flaky)</div>
              </div>

              <div className="pt-2 flex gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded bg-[#B6FF3C] text-[#0A0A0B] font-bold text-xs hover:bg-[#9DE024] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded border border-[#23242A] text-[#9E9B95] hover:text-[#F2EFE8] text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
