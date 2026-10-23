import React, { useEffect, useState, useRef } from "react";
import { Terminal, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Cpu } from "lucide-react";

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
  "==================== 7 passed in 1.28s ====================",
];

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<"TERMINAL" | "TITLE_CARD" | "FINISH">("TERMINAL");
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const completedRef = useRef(false);

  const finish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    setStage("FINISH");
    setTimeout(() => {
      onComplete();
    }, 400);
  };

  // Stage 1: Terminal typing
  useEffect(() => {
    if (stage !== "TERMINAL") return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < BOOT_LOGS.length) {
        const nextLine = BOOT_LOGS[index];
        setLines((prev) => [...prev, nextLine]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setStage("TITLE_CARD");
        }, 300);
      }
    }, 75);

    return () => clearInterval(interval);
  }, [stage]);

  // Stage 2: Cinematic Title Card progress & timer
  useEffect(() => {
    if (stage !== "TITLE_CARD") return;

    const startTime = Date.now();
    const duration = 2400; // 2.4s presentation time

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(progressInterval);
        finish();
      }
    }, 30);

    return () => clearInterval(progressInterval);
  }, [stage]);

  // Global safety fallback and keyboard skip listeners
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      finish();
    }, 4500);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        clearTimeout(safetyTimer);
        finish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(safetyTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      onClick={finish}
      className={`fixed inset-0 z-[9999] bg-[#07080A] flex flex-col justify-center items-center p-4 sm:p-6 cursor-pointer select-none transition-all duration-500 ${
        stage === "FINISH" ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
      data-testid="boot-sequence"
      title="Click anywhere to enter portfolio"
    >
      {/* Background cinematic vignette & glow */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#0A0A0B]/80 to-[#050506] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B6FF3C]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* STAGE 1: Fast Pytest Terminal */}
      {stage === "TERMINAL" && (
        <div className="w-full max-w-2xl bg-[#0F1014]/95 backdrop-blur-md border border-[#23242A] rounded-xl p-5 sm:p-6 font-mono text-xs sm:text-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden transition-all duration-300">
          {/* Terminal Header */}
          <div className="flex items-center justify-between border-b border-[#23242A] pb-3 mb-4 text-[#9E9B95]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF4D4D]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#B6FF3C]/80 inline-block" />
              <span className="ml-2 text-xs text-[#9E9B95] flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#B6FF3C]" />
                <span>pytest --portfolio-check</span>
              </span>
            </div>
            <button
              onClick={finish}
              className="text-[11px] text-[#B6FF3C] hover:underline uppercase tracking-wider flex items-center gap-1 font-mono"
            >
              [Click or ESC to Skip]
            </button>
          </div>

          {/* Terminal Lines Stream */}
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
        <div className="w-full max-w-xl bg-[#0F1014]/90 backdrop-blur-xl border border-[#B6FF3C]/40 rounded-3xl p-6 sm:p-10 shadow-[0_0_80px_rgba(182,255,60,0.25)] relative overflow-hidden text-center flex flex-col items-center animate-fadeIn transform transition-all duration-500">
          {/* Subtle animated scanline */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#B6FF3C]/5 to-transparent h-16 w-full animate-radar-sweep pointer-events-none" />

          {/* Top Verification Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18191D] border border-[#B6FF3C]/40 text-xs font-mono text-[#B6FF3C] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B6FF3C] animate-ping" />
            <span className="tracking-widest uppercase font-bold text-[11px]">ALL TEST SUITES PASSED · 100% READY</span>
          </div>

          {/* Framed Photo with Glowing Acid Green Rim */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl p-1.5 bg-gradient-to-b from-[#B6FF3C] via-[#B6FF3C]/30 to-transparent shadow-[0_0_35px_rgba(182,255,60,0.4)] mb-6 transition-transform duration-700 hover:scale-105">
            <div className="w-full h-full rounded-xl overflow-hidden bg-[#0A0A0B] relative">
              <img
                src="/images/profile.png"
                alt="Shafiq Ahamed"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Verified Badge Icon */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#0A0A0B] border-2 border-[#B6FF3C] flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-4 h-4 text-[#B6FF3C]" />
            </div>
          </div>

          {/* Cinematic Title Card Typography */}
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#F2EFE8] uppercase leading-none">
            SHAFIQ AHAMED
          </h2>

          <div className="h-0.5 w-16 bg-[#B6FF3C] my-3 rounded-full shadow-[0_0_8px_#B6FF3C]" />

          <p className="font-mono text-xs sm:text-sm text-[#B6FF3C] tracking-widest font-bold uppercase">
            QA AUTOMATION ENGINEER
          </p>

          <p className="font-mono text-[11px] sm:text-xs text-[#9E9B95] mt-1 tracking-wider">
            PYTHON · SELENIUM WEBDRIVER · PYTEST · API TESTING
          </p>

          <p className="text-xs sm:text-sm text-[#E6E4DD] font-sans italic mt-4 max-w-md px-2 leading-relaxed">
            &ldquo;I break software so users never have to.&rdquo;
          </p>

          {/* Cinematic Progress Bar & Skip Prompt */}
          <div className="w-full max-w-xs mt-7">
            <div className="w-full bg-[#18191D] h-1.5 rounded-full overflow-hidden border border-[#23242A]">
              <div
                className="bg-[#B6FF3C] h-full transition-all duration-75 shadow-[0_0_10px_#B6FF3C]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[#9E9B95]">
              <span className="flex items-center gap-1.5 text-[#B6FF3C]">
                <Cpu className="w-3 h-3 animate-pulse" />
                <span>LOADING ENGINE... {progress}%</span>
              </span>
              <span className="text-[#9E9B95] hover:text-[#F2EFE8]">[CLICK TO SKIP]</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

