import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [expanded, setExpanded] = useState(false);
  const [label, setLabel] = useState("");
  const [isBug, setIsBug] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, [data-cursor]");
      if (interactive) {
        setExpanded(true);
        const customLabel = interactive.getAttribute("data-cursor-label");
        const bugFlag = interactive.getAttribute("data-cursor-bug");

        if (bugFlag) {
          setIsBug(true);
          setLabel("BUG?");
        } else if (customLabel) {
          setIsBug(false);
          setLabel(customLabel);
        } else if (interactive.tagName.toLowerCase() === "a") {
          setIsBug(false);
          setLabel("OPEN");
        } else if (interactive.tagName.toLowerCase() === "button") {
          setIsBug(false);
          setLabel("TEST");
        } else {
          setIsBug(false);
          setLabel("VIEW");
        }
      } else {
        setExpanded(false);
        setIsBug(false);
        setLabel("");
      }
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let rafId: number;
    const updateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
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
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
          backgroundColor: isBug ? "#FF4D4D" : "#B6FF3C",
        }}
      />
      <div
        className={`custom-cursor-ring ${expanded ? "expanded" : ""} ${isBug ? "bug" : ""}`}
        style={{
          transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <span className="cursor-label">{label}</span>
      </div>
    </>
  );
};
