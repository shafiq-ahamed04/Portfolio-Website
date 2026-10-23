import React, { useEffect, useRef, useState } from "react";
import { portfolioData, ProjectItem } from "../content";
import { SectionHeader } from "./SectionHeader";
import { SpotlightCard } from "./SpotlightCard";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  AlertTriangle,
  FileCode2,
  Terminal,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Layers,
} from "lucide-react";

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

// Unified project items for gallery deck
const ALL_GALLERY_PROJECTS = [
  ...portfolioData.projects,
  {
    id: "BUILD-2026-03",
    testCaseId: "TC-03-C",
    title: "TaskFlow — Kanban Management",
    summary: "Interactive project management and Kanban task dashboard with drag-and-drop state persistence, modern UI micro-interactions, and responsive layout.",
    stack: ["React", "JavaScript", "Tailwind CSS", "State Persistence"],
    result: "Live responsive dashboard · Fluid drag-and-drop boards · Clean component architecture",
    githubUrl: "https://github.com/shafiq-ahamed04/taskflow",
    liveUrl: "https://taskflow-dun-xi.vercel.app/",
    featured: false,
    severity: "MEDIUM" as const,
    image: "/images/project_taskflow.png",
  },
  {
    id: "RESEARCH-2026-04",
    testCaseId: "TC-03-D",
    title: "ATCRS — Ancient Tamil OCR (IEEE Paper)",
    summary: "Ancient Tamil Character Recognition System — image processing research published in IEEE Conference. Machine learning pipeline extracting ancient manuscript glyphs.",
    stack: ["Python", "OpenCV", "TensorFlow", "IEEE Research"],
    result: "IEEE Conference Publication · Accurate glyph extraction · Image thresholding pipeline",
    githubUrl: "https://github.com/shafiq-ahamed04/Ocr_Ancient-handwriting",
    featured: false,
    severity: "MEDIUM" as const,
    image: "/images/project_atcrs.png",
  },
];

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const galleryCardRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentProject = ALL_GALLERY_PROJECTS[activeSlide];

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

    const cards = sectionRef.current?.querySelectorAll(".gallery-reveal-card");
    cards?.forEach((c) => observer.observe(c));

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setExpandedAccordion(false);
    setActiveSlide((prev) => (prev + 1) % ALL_GALLERY_PROJECTS.length);
  };

  const prevSlide = () => {
    setExpandedAccordion(false);
    setActiveSlide((prev) => (prev - 1 + ALL_GALLERY_PROJECTS.length) % ALL_GALLERY_PROJECTS.length);
  };

  const toggleAccordion = () => {
    const nextState = !expandedAccordion;
    setExpandedAccordion(nextState);

    if (nextState && galleryCardRef.current) {
      setTimeout(() => {
        galleryCardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
      className="py-20 sm:py-28 bg-[#0A0A0B] border-t border-[#18191D] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <SectionHeader
            testCaseId="TC-03"
            title="Automated Test Gallery"
            subtitle="Gallery-style showcase: Slide through automated regression suites, bug reports, and software builds."
          />

          {/* Gallery Slide Controls Header */}
          <div className="mb-8 md:mb-12 flex items-center gap-3">
            <span className="font-mono text-xs text-[#9E9B95] px-2.5 py-1 rounded-md bg-[#121316] border border-[#23242A]">
              SLIDE <span className="text-[#B6FF3C] font-bold">0{activeSlide + 1}</span> / 0{ALL_GALLERY_PROJECTS.length}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                aria-label="Previous Project Slide"
                className="p-2.5 rounded-lg bg-[#121316] border border-[#23242A] hover:border-[#B6FF3C] text-[#F2EFE8] hover:text-[#B6FF3C] transition-all hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Project Slide"
                className="p-2.5 rounded-lg bg-[#121316] border border-[#23242A] hover:border-[#B6FF3C] text-[#F2EFE8] hover:text-[#B6FF3C] transition-all hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Slide Deck Container */}
        <div ref={galleryCardRef} className="gallery-reveal-card opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <SpotlightCard className="p-6 sm:p-9 md:p-10 bg-[#121316] border border-[#23242A] hover:border-[#B6FF3C]/50 transition-all duration-300 rounded-3xl group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* Top Slide Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#23242A] mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-3 py-1 rounded-md bg-[#18191D] border border-[#23242A] text-[#B6FF3C] font-bold">
                  {currentProject.id}
                </span>
                <span className="font-mono text-xs text-[#9E9B95]">
                  CASE: {currentProject.testCaseId}
                </span>
                <span
                  className={`font-mono text-[10px] px-2.5 py-0.5 rounded font-bold uppercase ${
                    currentProject.severity === "CRITICAL"
                      ? "bg-[#FF4D4D]/10 text-[#FF4D4D] border border-[#FF4D4D]/30"
                      : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30"
                  }`}
                >
                  SEVERITY: {currentProject.severity}
                </span>
              </div>

              {/* Slide Pagination Dots */}
              <div className="flex items-center gap-2">
                {ALL_GALLERY_PROJECTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setExpandedAccordion(false);
                      setActiveSlide(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeSlide === idx ? "w-8 bg-[#B6FF3C]" : "w-2 bg-[#23242A] hover:bg-[#9E9B95]"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Main Content Layout: Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Title, Description, Stack, Result */}
              <div className="lg:col-span-7 space-y-5">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F2EFE8] leading-tight transition-colors">
                  {currentProject.title}
                </h3>

                <div className="font-mono text-xs text-[#9E9B95] space-y-1">
                  <span className="text-[#F2EFE8] font-bold">[SPECIFICATION]:</span>
                  <p className="font-sans text-sm sm:text-base text-[#E6E4DD] leading-relaxed mt-1">
                    {currentProject.summary}
                  </p>
                </div>

                {/* Stack Chips with Hover Pillows */}
                <div>
                  <span className="font-mono text-xs text-[#F2EFE8] font-bold block mb-2">[STACK USED]:</span>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs px-3 py-1.5 rounded-lg bg-[#18191D] border border-[#23242A] text-[#F2EFE8] hover:border-[#B6FF3C]/50 hover:text-[#B6FF3C] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Result Highlight Box */}
                <div className="p-4 rounded-xl bg-[#18191D] border border-[#23242A] font-mono text-xs flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B6FF3C] shrink-0" />
                  <span className="text-[#E6E4DD]">
                    <strong className="text-[#B6FF3C] mr-1.5">[VERDICT]:</strong>
                    {currentProject.result}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {currentProject.githubUrl && (
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 rounded-xl bg-[#B6FF3C] text-[#0A0A0B] font-mono text-xs font-bold hover:bg-[#9DE024] hover:shadow-[0_0_20px_rgba(182,255,60,0.35)] transition-all flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>Inspect Repository</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {"liveUrl" in currentProject && currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-3 rounded-xl bg-[#18191D] border border-[#23242A] hover:border-[#B6FF3C] text-[#F2EFE8] hover:text-[#B6FF3C] font-mono text-xs font-semibold flex items-center gap-2 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live App</span>
                    </a>
                  )}

                  {"isTodoLink" in currentProject && currentProject.isTodoLink && (
                    <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#18191D] border border-yellow-500/40 text-yellow-400 font-mono text-xs">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0" />
                      <span>{currentProject.todoNote}</span>
                    </div>
                  )}

                  {/* Accordion Toggle (Scroll Anchor) */}
                  <button
                    onClick={toggleAccordion}
                    className="px-4 py-3 rounded-xl bg-[#18191D] border border-[#23242A] hover:border-[#B6FF3C] text-[#F2EFE8] font-mono text-xs flex items-center gap-2 transition-all hover:bg-[#1C1E24]"
                  >
                    <Terminal className="w-4 h-4 text-[#B6FF3C]" />
                    <span>{expandedAccordion ? "Hide Test Script" : "Expand Test Script"}</span>
                    {expandedAccordion ? (
                      <ChevronUp className="w-3.5 h-3.5 text-[#B6FF3C]" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Right Column: Gallery Visual Frame with Parallax Tilt */}
              <div className="lg:col-span-5 w-full">
                <div className="relative rounded-2xl bg-[#0F1014] border border-[#23242A] p-4 font-mono text-xs overflow-hidden shadow-2xl group-hover:border-[#B6FF3C]/40 transition-colors">
                  <div className="flex items-center justify-between pb-3 border-b border-[#23242A] text-[#9E9B95] text-[11px] mb-3">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#B6FF3C]" />
                      <span>GALLERY_SNAPSHOT.IMG</span>
                    </span>
                    <span className="text-[#B6FF3C] font-bold">100% VERIFIED</span>
                  </div>

                  {currentProject.image ? (
                    <div className="relative rounded-xl overflow-hidden border border-[#23242A] aspect-[16/10] bg-[#0A0A0B]">
                      <img
                        src={currentProject.image}
                        alt={`${currentProject.title} snapshot`}
                        className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2 left-2 right-2 p-2 bg-[#121316]/90 backdrop-blur-md rounded-lg text-[10px] text-[#9E9B95] flex items-center justify-between border border-[#23242A]">
                        <span>Test Artifact Evidence</span>
                        <span className="text-[#B6FF3C] font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>PASS</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-5 bg-[#18191D] rounded-xl border border-[#23242A] space-y-2 text-[11px] text-[#9E9B95] min-h-[220px] flex flex-col justify-center">
                      <div className="text-white font-bold">$ pytest test_api_suite.py -v</div>
                      <div className="text-[#B6FF3C]">test_get_all_users() ........ PASSED [ 33%]</div>
                      <div className="text-[#B6FF3C]">test_post_create_payload() ... PASSED [ 66%]</div>
                      <div className="text-[#B6FF3C]">test_status_code_latency() ... PASSED [100%]</div>
                      <div className="pt-2 text-yellow-400">
                        // Status: Automation Suite Verified · Ready for public repo link
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Accordion Scroll Anchor Panel */}
            {expandedAccordion && (
              <div className="mt-8 pt-6 border-t border-[#23242A] animate-fadeIn">
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#9E9B95]">
                  <span className="flex items-center gap-2 text-[#F2EFE8] font-bold">
                    <Terminal className="w-4 h-4 text-[#B6FF3C]" />
                    <span>tests/test_automation_suite.py (Production Pytest Spec)</span>
                  </span>
                  <button
                    onClick={handleCopyScript}
                    className="px-3 py-1.5 rounded-lg bg-[#18191D] border border-[#23242A] text-xs text-[#F2EFE8] hover:text-[#B6FF3C] flex items-center gap-1.5 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#B6FF3C]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied" : "Copy Code"}</span>
                  </button>
                </div>

                <div className="bg-[#0A0A0B] p-5 rounded-2xl border border-[#23242A] font-mono text-xs overflow-x-auto text-[#E6E4DD] leading-relaxed shadow-inner">
                  <pre>
                    <code>{SAMPLE_TEST_SCRIPT_LOGIN}</code>
                  </pre>
                </div>
              </div>
            )}
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
