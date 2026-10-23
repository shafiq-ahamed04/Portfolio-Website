import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "../content";
import { HeroCanvas } from "./HeroCanvas";
import { Download, CheckCircle2, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { AnimatedCounter } from "./AnimatedCounter";

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(70);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const portraitRef = useRef<HTMLDivElement | null>(null);
  const nameContainerRef = useRef<HTMLHeadingElement | null>(null);
  const heroContentRef = useRef<HTMLDivElement | null>(null);

  // Smooth terminal typewriter for QA roles
  useEffect(() => {
    const roles = portfolioData.personal.rolesRotating;
    const currentRole = roles[loopNum % roles.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(65);

        if (displayText.length + 1 === currentRole.length) {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(32);

        if (displayText.length === 0) {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
          setTypingSpeed(220); // Pause before next role
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  // GSAP Entrance Stagger for Name & Content
  useEffect(() => {
    if (!nameContainerRef.current) return;

    const letters = nameContainerRef.current.querySelectorAll(".hero-letter");
    gsap.fromTo(
      letters,
      { y: 60, opacity: 0, rotateX: -60 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.045,
        duration: 0.9,
        ease: "back.out(1.7)",
        delay: 0.1,
      }
    );

    if (heroContentRef.current) {
      const items = heroContentRef.current.querySelectorAll(".hero-fade-in");
      gsap.fromTo(
        items,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.4,
        }
      );
    }
  }, []);

  // 3D Tilt on portrait
  const handlePortraitMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 16, y: -y * 16 });
  };

  const handlePortraitMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Magnetic button effect helper
  const handleMagneticMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, {
      x: x * 0.28,
      y: y * 0.28,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMagneticLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  // Per-letter hover ripple (NO layout shift, perfectly fixed widths)
  const handleLetterHover = (e: React.MouseEvent<HTMLSpanElement>) => {
    const el = e.currentTarget;
    gsap.timeline()
      .to(el, { y: -8, color: "#B6FF3C", scale: 1.08, duration: 0.15, ease: "power2.out" })
      .to(el, { y: 0, color: "#F2EFE8", scale: 1, duration: 0.4, ease: "elastic.out(1, 0.4)" });
  };

  const firstName = "SHAFIQ";
  const lastName = "AHAMED";

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#0A0A0B]">
      {/* Interactive WebGL Hero Canvas */}
      <HeroCanvas />

      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B6FF3C]/5 blur-[140px] pointer-events-none rounded-full" />

      {/* Floating QA Code Tokens in 3D Space */}
      <div className="absolute top-28 left-8 sm:left-16 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121316]/70 border border-[#23242A] text-[11px] font-mono text-[#9E9B95] backdrop-blur-sm animate-float-slow pointer-events-none select-none">
        <span className="text-[#B6FF3C]">@pytest.mark.regression</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF3C]" />
      </div>

      <div className="absolute bottom-32 left-12 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121316]/70 border border-[#23242A] text-[11px] font-mono text-[#9E9B95] backdrop-blur-sm animate-float-medium pointer-events-none select-none">
        <span className="text-yellow-400">WebDriverWait(driver, 10)</span>
      </div>

      <div className="absolute top-36 right-16 hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121316]/70 border border-[#23242A] text-[11px] font-mono text-[#9E9B95] backdrop-blur-sm animate-float-slow pointer-events-none select-none">
        <span className="text-[#B6FF3C]">assert response.status_code == 200</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning & Headlines */}
          <div ref={heroContentRef} className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Chip */}
            <div className="hero-fade-in inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#18191D] border border-[#23242A] text-xs font-mono text-[#F2EFE8]">
              <span className="w-2 h-2 rounded-full bg-[#B6FF3C] animate-ping inline-block" />
              <span className="text-[#B6FF3C] font-semibold">{portfolioData.personal.statusBadge}</span>
              <span className="text-[#9E9B95]">· B.Tech IT 2026</span>
            </div>

            {/* Rock-Solid Name with Staggered Letter Reveal & Ripple (ZERO SHAKING) */}
            <div className="relative select-none">
              <h1
                ref={nameContainerRef}
                className="text-5xl sm:text-7xl xl:text-8xl font-display font-extrabold tracking-tight text-[#F2EFE8] leading-[0.95] flex flex-wrap gap-x-4 sm:gap-x-6"
              >
                {/* Word 1: SHAFIQ */}
                <span className="inline-flex overflow-hidden py-1">
                  {firstName.split("").map((letter, idx) => (
                    <span
                      key={idx}
                      onMouseEnter={handleLetterHover}
                      className="hero-letter inline-block cursor-pointer transition-colors"
                      style={{ willChange: "transform" }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>

                {/* Word 2: AHAMED */}
                <span className="inline-flex overflow-hidden py-1">
                  {lastName.split("").map((letter, idx) => (
                    <span
                      key={idx}
                      onMouseEnter={handleLetterHover}
                      className="hero-letter inline-block cursor-pointer transition-colors"
                      style={{ willChange: "transform" }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </h1>

              <p className="hero-fade-in font-mono text-xs text-[#9E9B95] mt-2 tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF3C]" />
                <span>TEST SUITE ENGINE // DISCIPLINE OVER MOTIVATION</span>
              </p>
            </div>

            {/* Rotating Role Line with Perfect Baseline Alignment & Zero Layout Shift */}
            <div className="hero-fade-in min-h-[2.8rem] sm:min-h-[3.2rem] flex flex-wrap items-baseline gap-x-3 font-mono text-lg sm:text-2xl font-bold py-1">
              <span className="text-[#9E9B95] text-xs sm:text-sm tracking-wider uppercase font-semibold select-none flex items-center gap-1.5 shrink-0 self-center">
                <span className="text-[#B6FF3C] font-mono">$</span>
                <span>role --target:</span>
              </span>

              <span className="text-[#B6FF3C] tracking-tight relative inline-flex items-baseline min-w-[12ch]">
                <span className="border-b-2 border-transparent">{displayText}</span>
                <span className="inline-block w-2.5 h-4 sm:h-5 bg-[#B6FF3C] ml-1.5 animate-pulse align-middle" />
              </span>
            </div>

            {/* Core Hero Tagline */}
            <p className="hero-fade-in text-xl sm:text-2xl text-[#E4E1D8] font-sans font-light max-w-xl leading-relaxed">
              &ldquo;<span className="text-[#F2EFE8] font-medium">{portfolioData.personal.tagline}</span>&rdquo;
            </p>

            <p className="hero-fade-in text-sm text-[#9E9B95] max-w-lg leading-relaxed font-sans">
              Dedicated QA Automation Fresher crafting reliable Python, Selenium WebDriver, and Pytest suites.
              Zero flaky tests, disciplined defect reporting, and robust API validation.
            </p>

            {/* CTAs with magnetic hover states */}
            <div className="hero-fade-in flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                data-testid="hero-projects-btn"
                data-cursor-label="SUITES"
                className="px-6 py-3.5 rounded-md bg-[#B6FF3C] text-[#0A0A0B] font-mono text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-[#9DE024] hover:shadow-[0_0_24px_rgba(182,255,60,0.35)] transition-shadow"
              >
                <span>View Test Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                download={portfolioData.personal.resumeDownloadName}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                data-testid="hero-resume-btn"
                data-cursor-label="RESUME"
                className="px-5 py-3.5 rounded-md bg-[#18191D] border border-[#23242A] text-[#F2EFE8] font-mono text-xs sm:text-sm font-medium flex items-center gap-2 hover:border-[#B6FF3C] hover:text-[#B6FF3C] transition-colors"
              >
                <Download className="w-4 h-4 text-[#B6FF3C]" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                data-testid="hero-contact-btn"
                data-cursor-label="HIRE"
                className="px-5 py-3.5 rounded-md bg-transparent border border-[#23242A] text-[#9E9B95] hover:text-[#F2EFE8] hover:border-[#F2EFE8] font-mono text-xs sm:text-sm transition-colors"
              >
                Hire Me
              </a>
            </div>

            {/* 100+ Tests Counter Badge */}
            <div className="hero-fade-in pt-4 flex items-center gap-6 border-t border-[#23242A]/80 w-full max-w-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-[#B6FF3C] flex items-center justify-center font-mono font-bold text-sm text-[#B6FF3C] shadow-[0_0_12px_rgba(182,255,60,0.2)]">
                  <AnimatedCounter target={100} suffix="+" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold tracking-wider text-[#F2EFE8]">
                    100+ AUTOMATED TESTS
                  </div>
                  <div className="text-[11px] text-[#9E9B95] font-mono">
                    Selenium · Pytest · Requests
                  </div>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-[#23242A]" />

              <div>
                <div className="text-xs font-mono font-bold text-[#B6FF3C] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% PASS RATE</span>
                </div>
                <div className="text-[11px] text-[#9E9B95] font-mono">
                  Functional & Regression
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stylish Duotone Portrait with Layers */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Giant outlined background text behind portrait */}
            <div className="absolute -top-12 -left-6 select-none pointer-events-none opacity-10 font-display font-extrabold text-7xl sm:text-8xl text-transparent [-webkit-text-stroke:2px_#F2EFE8] whitespace-nowrap z-0">
              SHAFIQ
            </div>

            <div
              ref={portraitRef}
              onMouseMove={handlePortraitMouseMove}
              onMouseLeave={handlePortraitMouseLeave}
              className="relative w-72 sm:w-88 md:w-96 aspect-[4/5] rounded-2xl p-1 transition-transform duration-200 ease-out z-10 group"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              }}
            >
              {/* Acid Green Rim Glow Frame */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#B6FF3C]/40 via-[#B6FF3C]/10 to-transparent p-[1.5px] pointer-events-none">
                <div className="w-full h-full bg-[#0E0F12] rounded-2xl" />
              </div>

              {/* Portrait Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#121316]">
                <img
                  src="/images/profile.png"
                  alt="Shafiq Ahamed - QA Automation Engineer"
                  className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80";
                  }}
                />

                {/* Subtle bottom edge gradient for micro-badge readability only */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0B]/80 via-[#0A0A0B]/30 to-transparent pointer-events-none" />

                {/* Floating Micro-Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#121316]/90 backdrop-blur-md border border-[#23242A] rounded-lg p-3 flex items-center justify-between font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B6FF3C] inline-block" />
                    <div>
                      <div className="text-[11px] font-bold text-[#F2EFE8]">SHAFIQ AHAMED</div>
                      <div className="text-[9px] text-[#9E9B95]">QA Automation Fresher · 2026</div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#B6FF3C]/15 border border-[#B6FF3C]/40 text-[#B6FF3C] font-bold">
                    PASSED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Dual-Direction Marquee */}
      <div className="mt-16 w-full border-y border-[#23242A] bg-[#0E0F12]/80 backdrop-blur-sm py-3 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...portfolioData.marqueeItems, ...portfolioData.marqueeItems].map((item, idx) => (
            <span key={idx} className="font-mono text-xs tracking-widest text-[#9E9B95] mx-4 flex items-center gap-4">
              <span className="text-[#F2EFE8] font-bold">{item}</span>
              <span className="text-[#B6FF3C] font-black">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
