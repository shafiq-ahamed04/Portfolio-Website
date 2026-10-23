import React, { useState, useEffect } from "react";
import { portfolioData } from "../content";
import { Download, Terminal, Menu, X, CheckCircle, Play } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  scrollProgress: number;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollProgress }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[#23242A]" : "bg-transparent"
        }`}
      >
        {/* Scroll Progress Bar with % PASSED Readout */}
        <div className="w-full h-1 bg-[#18191D] relative">
          <div
            className="h-full bg-[#B6FF3C] transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Live Status */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            data-testid="nav-logo"
            data-cursor-label="HOME"
          >
            <div className="w-8 h-8 rounded bg-[#18191D] border border-[#23242A] group-hover:border-[#B6FF3C] flex items-center justify-center transition-colors">
              <Terminal className="w-4 h-4 text-[#B6FF3C]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight text-sm text-[#F2EFE8] group-hover:text-[#B6FF3C] transition-colors">
                SHAFIQ AHAMED
              </span>
              <span className="font-mono text-[10px] text-[#9E9B95] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF3C] animate-pulse" />
                QA AUTOMATION
              </span>
            </div>
          </a>

          {/* Test Case Nav Links for Desktop */}
          <nav className="hidden lg:flex items-center space-x-1" data-testid="nav-links">
            {portfolioData.testCases.map((tc) => {
              const isActive = activeSection === tc.anchor.replace("#", "");
              return (
                <a
                  key={tc.id}
                  href={tc.anchor}
                  data-cursor-label="GOTO"
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#B6FF3C] bg-[#B6FF3C]/10 border border-[#B6FF3C]/40"
                      : "text-[#9E9B95] hover:text-[#F2EFE8] hover:bg-[#18191D]"
                  }`}
                >
                  <span className="text-[10px] text-[#B6FF3C]/80 font-bold">{tc.id}</span>
                  <span>{tc.name}</span>
                  {isActive ? (
                    <span className="text-[9px] px-1 rounded bg-[#B6FF3C] text-[#0A0A0B] font-bold">
                      RUNNING
                    </span>
                  ) : null}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live % Passed Meter */}
            <div className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#121316] border border-[#23242A] text-[#9E9B95] flex items-center gap-1.5">
              <span className="text-[#B6FF3C] font-semibold">{Math.min(100, Math.round(scrollProgress))}%</span>
              <span>PASSED</span>
            </div>

            <a
              href={portfolioData.personal.resumeUrl}
              download={portfolioData.personal.resumeDownloadName}
              data-testid="nav-resume-btn"
              data-cursor-label="PDF"
              className="px-3 py-1.5 rounded text-xs font-mono border border-[#23242A] hover:border-[#B6FF3C] text-[#F2EFE8] hover:text-[#B6FF3C] transition-all flex items-center gap-1.5 bg-[#121316]"
            >
              <Download className="w-3.5 h-3.5 text-[#B6FF3C]" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              data-testid="nav-hire-btn"
              data-cursor-label="CONTACT"
              className="px-3.5 py-1.5 rounded text-xs font-mono font-semibold bg-[#B6FF3C] text-[#0A0A0B] hover:bg-[#9DE024] transition-all shadow-sm"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-[#18191D] border border-[#23242A] text-[#F2EFE8]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#B6FF3C]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0A0B]/95 backdrop-blur-xl border-b border-[#23242A] px-4 py-4 space-y-2">
            <div className="font-mono text-xs text-[#9E9B95] mb-2 px-2 pb-1 border-b border-[#23242A] flex justify-between">
              <span>TEST SUITE NAVIGATION</span>
              <span className="text-[#B6FF3C]">{Math.round(scrollProgress)}% PASSED</span>
            </div>
            {portfolioData.testCases.map((tc) => (
              <a
                key={tc.id}
                href={tc.anchor}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded text-sm font-mono text-[#F2EFE8] hover:bg-[#18191D] hover:text-[#B6FF3C] transition-colors"
              >
                <span className="text-xs text-[#B6FF3C] mr-2">{tc.id}</span>
                {tc.name}
              </a>
            ))}
            <div className="pt-3 flex gap-2">
              <a
                href={portfolioData.personal.resumeUrl}
                download={portfolioData.personal.resumeDownloadName}
                className="flex-1 py-2 text-center rounded text-xs font-mono border border-[#23242A] text-[#F2EFE8] hover:border-[#B6FF3C]"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 text-center rounded text-xs font-mono bg-[#B6FF3C] text-[#0A0A0B] font-bold"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
