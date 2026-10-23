import React, { useEffect, useRef, useState } from "react";
import { Check, Loader2 } from "lucide-react";

interface SectionHeaderProps {
  testCaseId: string;
  title: string;
  subtitle: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ testCaseId, title, subtitle }) => {
  const [passed, setPassed] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Slight delay to showcase flip from RUNNING to PASSED
          setTimeout(() => setPassed(true), 180);
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={headerRef} className="mb-12">
      <div className="flex items-center gap-3 mb-3">
        {/* Test Case Tag */}
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#18191D] border border-[#23242A] text-[#B6FF3C] font-semibold">
          [{testCaseId}]
        </span>

        {/* Dynamic Status Badge: RUNNING -> PASSED */}
        <span
          className={`font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase transition-all duration-300 flex items-center gap-1.5 ${
            passed
              ? "bg-[#B6FF3C]/15 border border-[#B6FF3C]/40 text-[#B6FF3C]"
              : "bg-yellow-500/10 border border-yellow-500/30 text-yellow-400"
          }`}
        >
          {passed ? (
            <>
              <Check className="w-3 h-3 text-[#B6FF3C]" />
              <span>PASSED</span>
            </>
          ) : (
            <>
              <Loader2 className="w-3 h-3 animate-spin text-yellow-400" />
              <span>RUNNING</span>
            </>
          )}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#F2EFE8]">
        {title}
      </h2>
      <p className="mt-2 text-sm sm:text-base text-[#9E9B95] font-mono max-w-2xl">
        {subtitle}
      </p>
    </div>
  );
};
