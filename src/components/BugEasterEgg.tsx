import React, { useState } from "react";
import { Bug, X, ShieldAlert, Check } from "lucide-react";

export const BugEasterEgg: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reported, setReported] = useState(false);

  return (
    <>
      {/* Decoy element in corner or inside section */}
      <div className="inline-block">
        <button
          onClick={() => setModalOpen(true)}
          data-cursor-bug="true"
          className="group font-mono text-[11px] px-2.5 py-1 rounded border border-[#FF4D4D]/40 bg-[#FF4D4D]/10 text-[#FF4D4D] hover:bg-[#FF4D4D]/20 transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_12px_rgba(255,77,77,0.15)]"
          title="Click to inspect defect"
        >
          <Bug className="w-3.5 h-3.5 text-[#FF4D4D] animate-bounce" />
          <span className="font-bold tracking-wider">[BUG FOUND: 0xDEADBEEF]</span>
        </button>
      </div>

      {/* Tasteful Bug Report Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[99999] bg-[#0A0A0B]/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#121316] border border-[#FF4D4D]/50 rounded-xl p-6 font-mono shadow-[0_0_40px_rgba(255,77,77,0.25)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#23242A] mb-4">
              <div className="flex items-center gap-2 text-[#FF4D4D]">
                <ShieldAlert className="w-5 h-5" />
                <span className="font-bold text-sm">DEFECT INTERCEPTED</span>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-[#9E9B95] hover:text-[#F2EFE8] p-1"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="text-xl font-display font-bold text-[#F2EFE8] leading-tight">
                &ldquo;Gotcha. Bug reporting is my job.&rdquo;
              </div>

              <p className="text-[#9E9B95] leading-relaxed">
                You caught the decoy! As a QA Automation Engineer, catching unexpected behaviors, edge cases, and regressions before users ever experience them is what I specialize in.
              </p>

              <div className="bg-[#18191D] p-3 rounded border border-[#23242A] space-y-1 text-[11px]">
                <div className="text-[#B6FF3C]">✓ Defect ID: BUG-EASTER-001</div>
                <div className="text-[#9E9B95]">Severity: Low / Feature Discovery</div>
                <div className="text-[#F2EFE8]">Resolution: Documented & Validated</div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    setReported(true);
                    setTimeout(() => setModalOpen(false), 800);
                  }}
                  className="flex-1 py-2.5 rounded bg-[#B6FF3C] text-[#0A0A0B] font-bold text-xs hover:bg-[#9DE024] transition-colors flex items-center justify-center gap-1.5"
                >
                  {reported ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>LOGGED IN JIRA</span>
                    </>
                  ) : (
                    <span>MARK AS RESOLVED</span>
                  )}
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2.5 rounded border border-[#23242A] text-[#9E9B95] hover:text-[#F2EFE8] text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
