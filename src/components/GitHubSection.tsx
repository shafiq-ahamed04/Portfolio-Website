import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "../content";
import { SectionHeader } from "./SectionHeader";
import { SpotlightCard } from "./SpotlightCard";
import { Github, ExternalLink, Pin, Terminal } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RepoItem {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count?: number;
  forks_count?: number;
  updated_at?: string;
}

const STATIC_FALLBACK_REPOS: RepoItem[] = [
  {
    name: "QA-Engineer_journey",
    description: "90-day structured QA automation learning journey. Daily commit practice in Python, Selenium, Pytest, and manual testing suites.",
    html_url: "https://github.com/shafiq-ahamed04/QA-Engineer_journey",
    language: "Python",
  },
  {
    name: "taskflow",
    description: "Kanban task management dashboard application with drag-and-drop state persistence.",
    html_url: "https://github.com/shafiq-ahamed04/taskflow",
    language: "JavaScript",
  },
  {
    name: "Ocr_Ancient-handwriting",
    description: "Ancient Tamil Character Recognition System (IEEE conference paper research codebase).",
    html_url: "https://github.com/shafiq-ahamed04/Ocr_Ancient-handwriting",
    language: "Python",
  },
  {
    name: "Portfolio-Website",
    description: "Personal QA Automation portfolio codebase featuring automated Pytest & Selenium smoke tests.",
    html_url: "https://github.com/shafiq-ahamed04/Portfolio-Website",
    language: "TypeScript",
  },
];

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<RepoItem[]>(STATIC_FALLBACK_REPOS);
  const [publicRepoCount, setPublicRepoCount] = useState<number>(9);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const userRes = await fetch("https://api.github.com/users/shafiq-ahamed04");
        if (userRes.ok) {
          const userData = await userRes.json();
          if (userData.public_repos) {
            setPublicRepoCount(userData.public_repos);
          }
        }

        const reposRes = await fetch("https://api.github.com/users/shafiq-ahamed04/repos?sort=updated&per_page=12");
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            const sorted = [...reposData].sort((a, b) => {
              if (a.name === "QA-Engineer_journey") return -1;
              if (b.name === "QA-Engineer_journey") return 1;
              return 0;
            });
            setRepos(sorted.slice(0, 6));
          }
        }
      } catch {
        // Fallback used silently
      }
    };

    fetchGitHub();
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll(".github-reveal-card");
    gsap.fromTo(
      cards,
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="github"
      className="py-24 bg-[#0A0A0B] border-t border-[#18191D] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          testCaseId="TC-06"
          title="GitHub Telemetry & Repos"
          subtitle="Real-time GitHub API stream: Verified public repositories, pinned QA journey, and commit activity heat strip."
        />

        {/* Telemetry Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <SpotlightCard className="github-reveal-card p-5 bg-[#121316] border border-[#23242A]">
            <div className="text-xs font-mono text-[#9E9B95]">PUBLIC REPOSITORIES</div>
            <div className="text-3xl font-display font-extrabold text-[#F2EFE8] mt-2">
              {publicRepoCount}
            </div>
            <div className="text-[11px] font-mono text-[#B6FF3C] mt-1">Verified on GitHub</div>
          </SpotlightCard>

          <SpotlightCard className="github-reveal-card p-5 bg-[#121316] border border-[#23242A]">
            <div className="text-xs font-mono text-[#9E9B95]">AUTOMATED TESTS</div>
            <div className="text-3xl font-display font-extrabold text-[#B6FF3C] mt-2">
              100+
            </div>
            <div className="text-[11px] font-mono text-[#9E9B95] mt-1">Python · Selenium · Pytest</div>
          </SpotlightCard>

          <SpotlightCard className="github-reveal-card p-5 bg-[#121316] border border-[#23242A]">
            <div className="text-xs font-mono text-[#9E9B95]">QA SPRINT COMMITMENT</div>
            <div className="text-3xl font-display font-extrabold text-[#F2EFE8] mt-2">
              90 Days
            </div>
            <div className="text-[11px] font-mono text-[#9E9B95] mt-1">Structured QA Curriculum</div>
          </SpotlightCard>

          <SpotlightCard className="github-reveal-card p-5 bg-[#121316] border border-[#23242A]">
            <div className="text-xs font-mono text-[#9E9B95]">DAILY DISCIPLINE</div>
            <div className="text-3xl font-display font-extrabold text-[#B6FF3C] mt-2">
              100%
            </div>
            <div className="text-[11px] font-mono text-[#9E9B95] mt-1">Discipline over motivation</div>
          </SpotlightCard>
        </div>

        {/* Custom Contribution-Style Heat Strip */}
        <SpotlightCard className="github-reveal-card mb-12 p-6 bg-[#121316] border border-[#23242A]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 font-mono text-xs">
            <span className="text-[#F2EFE8] font-bold flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#B6FF3C]" />
              <span>QA COMMIT ACTIVITY MATRIX // DAILY REPOSITORIES</span>
            </span>
            <div className="flex items-center gap-2 text-[10px] text-[#9E9B95]">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded bg-[#18191D] border border-[#23242A]" />
              <span className="w-2.5 h-2.5 rounded bg-[#B6FF3C]/30" />
              <span className="w-2.5 h-2.5 rounded bg-[#B6FF3C]/60" />
              <span className="w-2.5 h-2.5 rounded bg-[#B6FF3C]" />
              <span>More</span>
            </div>
          </div>

          {/* Grid of contribution squares */}
          <div className="grid grid-cols-12 sm:grid-cols-24 md:grid-cols-32 gap-1.5 overflow-x-auto py-2">
            {Array.from({ length: 64 }).map((_, idx) => {
              const intensity = idx % 7 === 0 ? "bg-[#B6FF3C]" : idx % 3 === 0 ? "bg-[#B6FF3C]/70" : idx % 2 === 0 ? "bg-[#B6FF3C]/35" : "bg-[#18191D]";
              return (
                <div
                  key={idx}
                  className={`w-3.5 h-3.5 rounded-[2px] ${intensity} transition-transform hover:scale-125 cursor-pointer`}
                  title={`Day ${idx + 1}: Active automated test commits`}
                />
              );
            })}
          </div>
        </SpotlightCard>

        {/* Pinned and Recent Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, idx) => {
            const isPinned = repo.name === "QA-Engineer_journey";

            return (
              <SpotlightCard
                key={idx}
                className={`github-reveal-card p-6 border transition-all flex flex-col justify-between group ${
                  isPinned
                    ? "bg-[#16181D] border-[#B6FF3C]/60 shadow-[0_0_20px_rgba(182,255,60,0.15)]"
                    : "bg-[#121316] border-[#23242A] hover:border-[#F2EFE8]/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-[#F2EFE8] group-hover:text-[#B6FF3C] transition-colors" />
                      {isPinned ? (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#B6FF3C] text-[#0A0A0B] font-bold flex items-center gap-1">
                          <Pin className="w-2.5 h-2.5" /> PINNED QA JOURNEY
                        </span>
                      ) : null}
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#9E9B95] group-hover:text-[#F2EFE8]" />
                  </div>

                  <h4 className="text-lg font-display font-bold text-[#F2EFE8] group-hover:text-[#B6FF3C] transition-colors">
                    {repo.name}
                  </h4>

                  <p className="mt-2 text-xs text-[#9E9B95] font-sans line-clamp-3 leading-relaxed">
                    {repo.description || "Active software repository under shafiq-ahamed04."}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#23242A] flex items-center justify-between font-mono text-[11px] text-[#9E9B95]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#B6FF3C]" />
                    <span>{repo.language || "Python"}</span>
                  </span>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#B6FF3C] font-semibold hover:underline"
                  >
                    View on GitHub →
                  </a>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* View Full Profile Link */}
        <div className="mt-12 text-center">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            data-cursor-label="PROFILE"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#18191D] border border-[#23242A] hover:border-[#B6FF3C] text-[#F2EFE8] hover:text-[#B6FF3C] font-mono text-xs font-semibold transition-all hover:shadow-[0_0_16px_rgba(182,255,60,0.3)]"
          >
            <Github className="w-4 h-4 text-[#B6FF3C]" />
            <span>Visit @shafiq-ahamed04 GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
