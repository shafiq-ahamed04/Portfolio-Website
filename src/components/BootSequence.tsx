import React, { useEffect, useState } from "react";

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
  const [lines, setLines] = useState<string[]>([]);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // If already executed this session, finish immediately
    if (sessionStorage.getItem("qa_boot_executed") === "true") {
      onComplete();
      return;
    }

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < BOOT_LOGS.length) {
        setLines((prev) => [...prev, BOOT_LOGS[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        // Start glitch cut
        setIsGlitching(true);
        setTimeout(() => {
          sessionStorage.setItem("qa_boot_executed", "true");
          onComplete();
        }, 320);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem("qa_boot_executed", "true");
    onComplete();
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[9999] bg-[#0A0A0B] flex flex-col justify-center items-center p-6 cursor-pointer select-none transition-opacity duration-300 ${
        isGlitching ? "opacity-0 scale-105 filter invert" : "opacity-100"
      }`}
      data-testid="boot-sequence"
    >
      <div className="w-full max-w-2xl bg-[#0F1014] border border-[#23242A] rounded-lg p-5 font-mono text-xs sm:text-sm shadow-2xl relative overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#23242A] pb-3 mb-4 text-[#9E9B95]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF4D4D]/70 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#B6FF3C]/70 inline-block" />
            <span className="ml-2 text-xs text-[#9E9B95]">pytest --portfolio-check</span>
          </div>
          <button
            onClick={handleSkip}
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
    </div>
  );
};
