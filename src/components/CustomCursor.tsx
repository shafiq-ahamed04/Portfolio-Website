import React, { useEffect, useState, useRef } from "react";

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [expanded, setExpanded] = useState(false);
  const [label, setLabel] = useState("");
  const [locatorText, setLocatorText] = useState("");
  const [isBug, setIsBug] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPos({ x: mouseX, y: mouseY });
      setCoords({ x: Math.round(mouseX), y: Math.round(mouseY) });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, [data-cursor], .gallery-reveal-card, .skill-card-item"
      );

      if (interactive) {
        setExpanded(true);
        const customLabel = interactive.getAttribute("data-cursor-label");
        const bugFlag = interactive.getAttribute("data-cursor-bug");
        const id = interactive.id ? `#${interactive.id}` : "";
        const tag = interactive.tagName.toLowerCase();

        setLocatorText(id || tag);

        if (bugFlag) {
          setIsBug(true);
          setLabel("DEFECT?");
        } else if (customLabel) {
          setIsBug(false);
          setLabel(customLabel);
        } else if (tag === "a") {
          setIsBug(false);
          setLabel("NAVIGATE");
        } else if (tag === "button") {
          setIsBug(false);
          setLabel("EXECUTE");
        } else {
          setIsBug(false);
          setLabel("INSPECT");
        }
      } else {
        setExpanded(false);
        setIsBug(false);
        setLabel("");
        setLocatorText("");
      }
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let rafId: number;
    const updateRing = () => {
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;
      setRingPos({ x: ringX, y: ringY });
      rafId = requestAnimationFrame(updateRing);
    };
    rafId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Central Precision QA Reticle / Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99999] transition-transform duration-75"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`w-2 h-2 rounded-full transition-colors duration-200 ${
            isBug ? "bg-[#FF4D4D] shadow-[0_0_8px_#FF4D4D]" : "bg-[#B6FF3C] shadow-[0_0_8px_#B6FF3C]"
          }`}
        />

        {/* Micro coordinate readout floating nearby */}
        {!expanded && (
          <div className="absolute left-3 top-3 px-1.5 py-0.5 rounded bg-[#0A0A0B]/85 border border-[#23242A] text-[9px] font-mono text-[#9E9B95] whitespace-nowrap pointer-events-none select-none backdrop-blur-sm opacity-60">
            {coords.x},{coords.y}
          </div>
        )}
      </div>

      {/* Spring Ring with QA Crosshair Reticle & Locator Info */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[99998] flex items-center justify-center transition-all duration-300 ease-out ${
          isBug
            ? "border-2 border-[#FF4D4D] bg-[#FF4D4D]/15 shadow-[0_0_24px_rgba(255,77,77,0.4)]"
            : expanded
            ? "border-2 border-[#B6FF3C] bg-[#B6FF3C]/12 shadow-[0_0_24px_rgba(182,255,60,0.35)] backdrop-blur-[2px]"
            : "border border-[#B6FF3C]/50 bg-transparent"
        }`}
        style={{
          width: expanded ? 72 : 34,
          height: expanded ? 72 : 34,
          transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {/* Precision Crosshair Ticks */}
        <div
          className={`absolute -top-1.5 w-0.5 h-1.5 transition-colors ${
            isBug ? "bg-[#FF4D4D]" : "bg-[#B6FF3C]"
          }`}
        />
        <div
          className={`absolute -bottom-1.5 w-0.5 h-1.5 transition-colors ${
            isBug ? "bg-[#FF4D4D]" : "bg-[#B6FF3C]"
          }`}
        />
        <div
          className={`absolute -left-1.5 h-0.5 w-1.5 transition-colors ${
            isBug ? "bg-[#FF4D4D]" : "bg-[#B6FF3C]"
          }`}
        />
        <div
          className={`absolute -right-1.5 h-0.5 w-1.5 transition-colors ${
            isBug ? "bg-[#FF4D4D]" : "bg-[#B6FF3C]"
          }`}
        />

        {/* Dynamic Interactive Label */}
        {expanded && (
          <div className="flex flex-col items-center justify-center text-center select-none pointer-events-none">
            <span
              className={`font-mono text-[9px] font-extrabold tracking-widest uppercase ${
                isBug ? "text-[#FF4D4D]" : "text-[#B6FF3C]"
              }`}
            >
              {label}
            </span>
            {locatorText && (
              <span className="font-mono text-[7px] text-[#F2EFE8]/70 max-w-[58px] truncate">
                {locatorText}
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
};
