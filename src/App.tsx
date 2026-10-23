import React, { useState, useEffect } from "react";
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
import { StickyScrollspy } from "./components/StickyScrollspy";
import { ScrollProgressBar } from "./components/ScrollProgressBar";

export function App() {
  const [bootCompleted, setBootCompleted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Standard Native Scrolling with lightweight listener for test progress meter & scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      // Detect active section
      const sections = ["home", "about", "skills", "projects", "test-run", "journey", "github", "contact"];
      const scrollPos = window.scrollY + 220;

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

      {/* Global Scroll Progress Bar with Suite Execution Tracker */}
      <ScrollProgressBar />

      {/* Boot Sequence Modal */}
      {!bootCompleted && (
        <BootSequence onComplete={() => setBootCompleted(true)} />
      )}

      {/* Main Navigation */}
      <Navbar activeSection={activeSection} scrollProgress={scrollProgress} />

      {/* Sticky Side-Navigation (Scrollspy) */}
      <StickyScrollspy />

      {/* Sections Architecture with Standard Native Scroll-Triggered Reveals */}
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
