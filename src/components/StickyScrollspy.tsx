import React, { useEffect, useState } from "react";
import { Terminal, Shield, CheckCircle } from "lucide-react";

interface ScrollspyStep {
  id: string;
  code: string;
  label: string;
}

const STEPS: ScrollspyStep[] = [
  { id: "about", code: "TC-01", label: "Summary & Creds" },
  { id: "skills", code: "TC-02", label: "Framework Design" },
  { id: "projects", code: "TC-03", label: "Bug Report Suites" },
  { id: "test-run", code: "TC-04", label: "Test Run Playback" },
  { id: "journey", code: "TC-05", label: "CI/CD Milestones" },
  { id: "github", code: "TC-06", label: "Telemetry & Repos" },
  { id: "contact", code: "TC-07", label: "Dispatch Pipeline" },
];

export const StickyScrollspy: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("about");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show scrollspy only after scrolling past the hero
    const handleScroll = () => {
      setVisible(window.scrollY > 380);

      const scrollPos = window.scrollY + 280;
      for (let i = STEPS.length - 1; i >= 0; i--) {
        const el = document.getElementById(STEPS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(STEPS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <aside
      className="hidden 2xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end pointer-events-none"
      aria-label="Table of Contents Scrollspy"
    >
      <div className="bg-[#121316]/90 backdrop-blur-md border border-[#23242A] rounded-2xl p-3.5 shadow-2xl pointer-events-auto w-52 font-mono text-xs space-y-1">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#23242A] text-[10px] text-[#9E9B95]">
          <span className="flex items-center gap-1.5 font-bold text-[#F2EFE8]">
            <Terminal className="w-3 h-3 text-[#B6FF3C]" />
            <span>TEST SUITE SPY</span>
          </span>
          <span className="text-[#B6FF3C]">ACTIVE</span>
        </div>

        {/* Steps List */}
        <nav className="space-y-1">
          {STEPS.map((step) => {
            const isActive = activeId === step.id;
            return (
              <button
                key={step.id}
                onClick={() => scrollTo(step.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between transition-all duration-200 group ${
                  isActive
                    ? "bg-[#B6FF3C]/10 text-[#B6FF3C] border border-[#B6FF3C]/30 font-bold"
                    : "text-[#9E9B95] hover:text-[#F2EFE8] hover:bg-[#18191D]"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="text-[10px] opacity-75">{step.code}</span>
                  <span className="truncate">{step.label}</span>
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF3C] animate-ping shrink-0" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
