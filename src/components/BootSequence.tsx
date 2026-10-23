import React, { useEffect, useState, useRef } from "react";
import { Terminal, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "pytest -v tests/ --tb=line",
  "platform win32 -- Python 3.11.8, pytest-9.0.2",
  "rootdir: C:/Portfolio-Shafiq ahamed S",
  "collected 7 items",
  "tests/test_about.py::test_fresher_credentials .......... PASSED [ 14%]",
  "tests/test_skills.py::test_selenium_locators_waits ..... PASSED [ 28%]",
  "tests/test_projects.py::test_100_automated_tests ...... PASSED [ 42%]",
  "tests/test_testrun.py::test_screen_recording_video .... PASSED [ 57%]",
  "tests/test_journey.py::test_discipline_milestones ..... PASSED [ 71%]",
  "tests/test_github.py::test_qa_journey_telemetry ....... PASSED [ 85%]",
  "tests/test_contact.py::test_recruiter_pipeline ........ PASSED [100%]",
  "==================== 7 passed in 1.42s ====================",
];

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<"TERMINAL" | "TITLE_CARD" | "FINISH">("TERMINAL");
  const [lines, setLines] = useState<string[]>([]);
  const completedRef = useRef(false);

  const finish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    setStage("FINISH");
    setTimeout(() => {
      onComplete();
    }, 350);
  };

  useEffect(() => {
    let index = 0;

    // Terminal typing
    const interval = setInterval(() => {
      if (index < BOOT_LOGS.length) {
        const nextLine = BOOT_LOGS[index];
        setLines((prev) => [...prev, nextLine]);
        index++;
      } else {
        clearInterval(interval);
        // Transition into Title Card stage with Shafiq's photo
        setTimeout(() => {
          setStage("TITLE_CARD");
        }, 220);
      }
    }, 85);

    // After Title Card shows, auto-finish into Hero
    let titleCardTimer: NodeJS.Timeout;
    if (stage === "TITLE_CARD") {
      titleCardTimer = setTimeout(() => {
        finish();
      }, 1600);
    }

    // Safety timeout: guarantees completion under 3.5s
    const safetyTimer = setTimeout(() => {
      clearInterval(interval);
      finish();
    }, 3500);

    // Keyboard listener for instant skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        clearInterval(interval);
        clearTimeout(safetyTimer);
        finish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimer);
      if (titleCardTimer) clearTimeout(titleCardTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [stage]);

  return (
    <div
      onClick={finish}
      className={`fixed inset-0 z-[9999] bg-[#0A0A0B] flex flex-col justify-center items-center p-6 cursor-pointer select-none transition-all duration-400 ${
        stage === "FINISH" ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
      data-testid="boot-sequence"
      title="Click anywhere to enter"
    >
      {/* STAGE 1: Fast Pytest Terminal */}
      {stage === "TERMINAL" && (
        <div className="w-full max-w-2xl bg-[#0F1014] border border-[#23242A] rounded-xl p-5 font-mono text-xs sm:text-sm shadow-2xl relative overflow-hidden animate-fadeIn">
          {/* Terminal Header */}
          <div className="flex items-center justify-between border-b border-[#23242A] pb-3 mb-4 text-[#9E9B95]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF4D4D]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#B6FF3C]/80 inline-block" />
              <span className="ml-2 text-xs text-[#9E9B95]">pytest --portfolio-check</span>
            </div>
            <button
              onClick={finish}
              className="text-[11px] text-[#B6FF3C] hover:underline uppercase tracking-wider flex items-center gap-1"
            >
              [ESC / Click to Skip]
            </button>
          </div>

          {/* Lines */}
          <div className="space-y-1.5 min-h-[220px]">
            {lines.map((line, idx) => {
              const isPass = line.includes("PASSED");
              const isSummary = line.includes("passed in");
              const isCommand = line.startsWith("pytest");

              return (
                <div
                  key={idx}
                  className={`leading-relaxed ${
                    isPass
                      ? "text-[#B6FF3C] font-semibold"
                      : isSummary
                      ? "text-[#B6FF3C] font-bold border-t border-[#23242A] pt-2 mt-2"
                      : isCommand
                      ? "text-white font-bold"
                      : "text-[#9E9B95]"
                  }`}
                >
                  {isCommand ? "$ " : ""}
                  {line}
                </div>
              );
            })}
            <div className="inline-block w-2 h-4 bg-[#B6FF3C] animate-pulse align-middle ml-1" />
          </div>
        </div>
      )}

      {/* STAGE 2: Cinematic Title Card with Photo */}
      {stage === "TITLE_CARD" && (
        <div className="w-full max-w-xl bg-[#121316] border border-[#B6FF3C]/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(182,255,60,0.25)] relative overflow-hidden animate-fadeIn text-center flex flex-col items-center">
          {/* Background scanline & glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#B6FF3C]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Framed Photo with Acid Green Rim Glow */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl p-1 bg-gradient-to-b from-[#B6FF3C] via-[#B6FF3C]/40 to-transparent shadow-[0_0_24px_rgba(182,255,60,0.35)] mb-5">
            <img
              src="/images/profile.png"
              alt="Shafiq Ahamed"
              className="w-full h-full object-cover rounded-xl filter contrast-110"
            />
            <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-[#0A0A0B] border-2 border-[#B6FF3C] flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-[#B6FF3C]" />
            </div>
          </div>

          {/* Name & Title */}
          <span className="font-mono text-xs text-[#B6FF3C] tracking-widest uppercase mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B6FF3C] animate-ping" />
            <span>TEST SUITE VERIFIED // 100% READY</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#F2EFE8] uppercase leading-none mt-1">
            SHAFIQ AHAMED
          </h2>

          <p className="font-mono text-xs sm:text-sm text-[#9E9B95] mt-2 tracking-wider">
            QA AUTOMATION ENGINEER · PYTHON · SELENIUM · PYTEST
          </p>

          <p className="text-xs text-[#E6E4DD] font-sans italic mt-3 max-w-md">
            &ldquo;I break software so users never have to.&rdquo;
          </p>

          {/* Click to Enter Prompt */}
          <div className="mt-6 flex items-center gap-2 font-mono text-xs text-[#B6FF3C] bg-[#18191D] px-4 py-2 rounded-full border border-[#23242A]">
            <span>INITIALIZING ENVIRONMENT</span>
            <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
          </div>
        </div>
      )}
    </div>
  );
};
