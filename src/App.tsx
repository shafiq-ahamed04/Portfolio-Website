import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BootSequence } from "./components/BootSequence";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { TestRunSection } from "./components/TestRunSection";
import { JourneySection } from "./components/JourneySection";
import { GitHubSection } from "./components/GitHubSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [bootCompleted, setBootCompleted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenis.on("scroll", (e: any) => {
      ScrollTrigger.update();
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      // Detect active section
      const sections = ["home", "about", "skills", "projects", "test-run", "journey", "github", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0B] text-[#F2EFE8] selection:bg-[#B6FF3C] selection:text-[#0A0A0B]">
      {/* Film Grain Texture Overlay */}
      <div className="film-grain" />

      {/* Custom Cursor System */}
      <CustomCursor />

      {/* Boot Sequence Modal */}
      {!bootCompleted && (
        <BootSequence onComplete={() => setBootCompleted(true)} />
      )}

      {/* Main Navigation */}
      <Navbar activeSection={activeSection} scrollProgress={scrollProgress} />

      {/* Sections Architecture */}
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TestRunSection />
        <JourneySection />
        <GitHubSection />
        <ContactSection />
      </main>

      {/* Portfolio Conclusion Footer */}
      <Footer />
    </div>
  );
}

export default App;
