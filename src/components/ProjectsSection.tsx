import React, { useEffect, useRef, useState } from "react";
import { portfolioData, ProjectItem } from "../content";
import { SectionHeader } from "./SectionHeader";
import { SpotlightCard } from "./SpotlightCard";
import { ExternalLink, Github, CheckCircle2, AlertTriangle, FileCode2, Terminal, X, ChevronDown, ChevronUp, Copy, Check } from "lucide-react";

// Real Pytest & Selenium sample test script for the accordion
const SAMPLE_TEST_SCRIPT_LOGIN = `import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@pytest.fixture
def driver():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless=new")
    driver = webdriver.Chrome(options=options)
    driver.implicitly_wait(5)
    yield driver
    driver.quit()

class TestAuthenticationFlow:
    """End-to-End Validation of valid/invalid login states."""

    def test_valid_login(self, driver):
        driver.get("https://demoqa.com/login")
        WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.ID, "userName"))
        ).send_keys("test_engineer_shafiq")
        
        driver.find_element(By.ID, "password").send_keys("SecurePassword123!")
        driver.find_element(By.ID, "login").click()

        # Assertion: confirm redirect and dashboard presence
        user_badge = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "userName-value"))
        )
        assert user_badge.text == "test_engineer_shafiq"
        print("\\n[PASS] Valid authentication confirmed.")

    def test_invalid_login_triggers_alert(self, driver):
        driver.get("https://demoqa.com/login")
        driver.find_element(By.ID, "userName").send_keys("invalid_user")
        driver.find_element(By.ID, "password").send_keys("WrongPass")
        driver.find_element(By.ID, "login").click()

        error_msg = WebDriverWait(driver, 5).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "#output #name"))
        )
        assert "Invalid username or password!" in error_msg.text
        # Capture automated failure evidence
        driver.save_screenshot("screenshots/login_failed1.png")
`;

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [expandedAccordionId, setExpandedAccordionId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Native IntersectionObserver for subtle performance reveals
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

    const cards = sectionRef.current?.querySelectorAll(".project-reveal-card");
    cards?.forEach((c) => observer.observe(c));

    return () => observer.disconnect();
  }, []);

  // Accordion scroll anchor handler: expands and smoothly scrolls viewport to card
  const toggleAccordion = (id: string, cardEl: HTMLElement | null) => {
    const isOpening = expandedAccordionId !== id;
    setExpandedAccordionId(isOpening ? id : null);

    if (isOpening && cardEl) {
      setTimeout(() => {
        cardEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const handleCopyScript = () => {
    navigator.clipboard.writeText(SAMPLE_TEST_SCRIPT_LOGIN);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 sm:py-28 bg-[#0A0A0B] border-t border-[#18191D] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          testCaseId="TC-03"
          title="Automated Test Projects"
          subtitle="Test Execution Artifacts: Bug reports, automated regression suites, and validation frameworks."
        />

        {/* Featured Bug-Report Style Project Cards */}
        <div className="space-y-8 mb-16">
          {portfolioData.projects.map((project) => {
            const cardRef = useRef<HTMLDivElement | null>(null);
            const isAccordionOpen = expandedAccordionId === project.id;

            return (
              <div
                key={project.id}
                ref={cardRef}
                className="project-reveal-card opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <SpotlightCard className="p-6 sm:p-8 bg-[#121316] border border-[#23242A] hover:border-[#B6FF3C]/50 transition-all duration-300 rounded-2xl group">
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

                    <div className="font-mono text-xs text-[#B6FF3C] flex items-center gap-1.5 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>REGRESSION SUITE PASSED</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Summary & Stack Details */}
                    <div className="lg:col-span-7 space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#F2EFE8] group-hover:text-[#B6FF3C] transition-colors">
                        {project.title}
                      </h3>

                      <div className="font-mono text-xs text-[#9E9B95] space-y-1">
                        <span className="text-[#F2EFE8] font-bold">[SUMMARY]:</span>
                        <p className="font-sans text-sm text-[#E6E4DD] leading-relaxed mt-1">
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
                              className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#18191D] border border-[#23242A] text-[#F2EFE8] hover:border-[#B6FF3C]/40 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Result Statement */}
                      <div className="p-3.5 rounded-xl bg-[#18191D] border border-[#23242A] font-mono text-xs">
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
                            className="px-4 py-2.5 rounded-lg bg-[#B6FF3C] text-[#0A0A0B] font-mono text-xs font-bold hover:bg-[#9DE024] hover:shadow-[0_0_16px_rgba(182,255,60,0.35)] transition-all flex items-center gap-1.5"
                          >
                            <Github className="w-4 h-4" />
                            <span>Inspect Test Suite Repo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : null}

                        {project.isTodoLink ? (
                          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#18191D] border border-yellow-500/40 text-yellow-400 font-mono text-xs">
                            <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0" />
                            <span>{project.todoNote}</span>
                          </div>
                        ) : null}

                        {/* Accordion Toggle Button (Accordion Scroll Anchor) */}
                        <button
                          onClick={() => toggleAccordion(project.id, cardRef.current)}
                          className="px-3.5 py-2 rounded-lg bg-[#18191D] border border-[#23242A] hover:border-[#B6FF3C] text-[#F2EFE8] font-mono text-xs flex items-center gap-1.5 transition-colors"
                        >
                          <Terminal className="w-3.5 h-3.5 text-[#B6FF3C]" />
                          <span>{isAccordionOpen ? "Close Pytest Code" : "Expand Test Script & Assertions"}</span>
                          {isAccordionOpen ? (
                            <ChevronUp className="w-3.5 h-3.5 text-[#B6FF3C]" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Right: Test Execution Preview or Terminal Snapshot */}
                    <div className="lg:col-span-5 w-full">
                      <div className="rounded-xl bg-[#0F1014] border border-[#23242A] p-4 font-mono text-xs overflow-hidden">
                        <div className="flex items-center justify-between pb-2 border-b border-[#23242A] text-[#9E9B95] text-[11px] mb-3">
                          <span>EXECUTION_TELEMETRY.LOG</span>
                          <span className="text-[#B6FF3C] font-bold">STATUS 200</span>
                        </div>

                        {project.image ? (
                          <div className="relative rounded-lg overflow-hidden border border-[#23242A] group-hover:border-[#B6FF3C]/40 transition-colors">
                            <img
                              src={project.image}
                              alt={`${project.title} screenshot`}
                              className="w-full h-auto object-cover max-h-56 filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                            <div className="p-2.5 bg-[#121316] text-[10px] text-[#9E9B95] flex items-center justify-between border-t border-[#23242A]">
                              <span>Automated failure capture snapshot</span>
                              <span className="text-[#FF4D4D] font-bold">ASSERTION_VERIFIED</span>
                            </div>
                          </div>
                        ) : (
                          <div className="p-4 bg-[#18191D] rounded-lg border border-[#23242A] space-y-2 text-[11px] text-[#9E9B95]">
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

                  {/* Accordion Scroll Anchor Panel */}
                  {isAccordionOpen && (
                    <div className="mt-6 pt-6 border-t border-[#23242A] animate-fadeIn">
                      <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#9E9B95]">
                        <span className="flex items-center gap-2 text-[#F2EFE8] font-bold">
                          <Terminal className="w-4 h-4 text-[#B6FF3C]" />
                          <span>tests/test_authentication_suite.py (Production Pytest Spec)</span>
                        </span>
                        <button
                          onClick={handleCopyScript}
                          className="px-2.5 py-1 rounded bg-[#18191D] border border-[#23242A] text-[11px] text-[#F2EFE8] hover:text-[#B6FF3C] flex items-center gap-1.5 transition-colors"
                        >
                          {copied ? <Check className="w-3 h-3 text-[#B6FF3C]" /> : <Copy className="w-3 h-3" />}
                          <span>{copied ? "Copied" : "Copy Code"}</span>
                        </button>
                      </div>

                      <div className="bg-[#0A0A0B] p-4 rounded-xl border border-[#23242A] font-mono text-xs overflow-x-auto text-[#E6E4DD] leading-relaxed">
                        <pre>
                          <code>{SAMPLE_TEST_SCRIPT_LOGIN}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                </SpotlightCard>
              </div>
            );
          })}
        </div>

        {/* Secondary Row: Other Builds (TaskFlow & ATCRS) */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#23242A]">
            <h4 className="text-xl font-display font-extrabold text-[#F2EFE8]">
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
                className="p-6 bg-[#121316] border border-[#23242A] hover:border-[#F2EFE8]/30 rounded-2xl flex flex-col justify-between"
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
    </section>
  );
};
