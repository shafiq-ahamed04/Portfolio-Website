import React, { useEffect, useState } from "react";
import { CheckCircle2, Activity } from "lucide-react";

export const ScrollProgressBar: React.FC = () => {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const scrolled = window.scrollY;
      const pct = Math.min(100, Math.max(0, Math.round((scrolled / docHeight) * 100)));
      setScrollPct(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside aria-label="Suite Execution Progress" className="fixed top-0 left-0 right-0 z-[9990] pointer-events-none select-none">
      {/* 2.5px Neon Progress Bar */}
      <div className="h-[2.5px] bg-[#18191D] w-full">
        <div
          className="h-full bg-gradient-to-r from-[#B6FF3C] via-[#9DE024] to-[#B6FF3C] transition-all duration-75 shadow-[0_0_12px_rgba(182,255,60,0.8)] relative"
          style={{ width: `${scrollPct}%` }}
        >
          {/* Glowing laser head on the edge of the bar */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#B6FF3C] rounded-full blur-[2px] shadow-[0_0_10px_#B6FF3C]" />
        </div>
      </div>

      {/* Floating Micro Test Run Pill (Top Right Corner) */}
      <div className="absolute top-3 right-4 hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F1014]/90 border border-[#23242A] backdrop-blur-md font-mono text-[11px] text-[#9E9B95] shadow-lg">
        <Activity className="w-3 h-3 text-[#B6FF3C] animate-pulse" />
        <span>SUITE RUN:</span>
        <span className="text-[#B6FF3C] font-bold">{scrollPct}%</span>
        {scrollPct === 100 ? (
          <span className="flex items-center gap-1 text-[#B6FF3C] font-bold">
            <CheckCircle2 className="w-3 h-3" /> PASSED
          </span>
        ) : null}
      </div>
    </aside>
  );
};
