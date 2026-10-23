import React, { useRef, useState, useEffect } from "react";
import { portfolioData } from "../content";
import { SectionHeader } from "./SectionHeader";
import { Play, Pause, Volume2, VolumeX, Maximize2, Terminal, RefreshCw, CheckCircle2 } from "lucide-react";

export const TestRunSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [terminalIndex, setTerminalIndex] = useState(0);
  const [terminalActive, setTerminalActive] = useState(true);

  // Play on scroll when entering view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
            // Autoplay may be restricted by browser until user gesture
          });
        } else if (videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.35 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Update progress bar
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Live terminal stream simulation for 100+ tests
  useEffect(() => {
    if (!terminalActive) return;
    const interval = setInterval(() => {
      setTerminalIndex((prev) => (prev + 1) % portfolioData.sampleTerminalOutput.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [terminalActive]);

  return (
    <section id="test-run" className="py-24 bg-[#0A0A0B] border-t border-[#18191D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          testCaseId="TC-04"
          title="Live Test Run Playback"
          subtitle="Real-world automation execution: UI test suite running headlessly in Google Chrome with Pytest."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Video Slot with Custom Controls */}
          <div className="lg:col-span-7">
            {/* 
              ============================================================
              TODO: User test run screen recording file goes here:
              assets/test-run.mp4
              (Copied from: C:\Users\shafi\Videos\Screen Recordings\Screen Recording 2026-10-23 093737.mp4)
              ============================================================ 
            */}
            <div
              ref={containerRef}
              className="relative rounded-2xl bg-[#121316] border border-[#23242A] overflow-hidden group shadow-2xl"
            >
              {/* Terminal Window Top Bar */}
              <div className="bg-[#18191D] px-4 py-3 flex items-center justify-between border-b border-[#23242A] font-mono text-xs text-[#9E9B95]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF4D4D]/70 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#B6FF3C]/70 inline-block" />
                  <span className="ml-2 text-[#F2EFE8] font-bold">Selenium_Pytest_Run.mp4</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B6FF3C] animate-pulse" />
                  <span className="text-[#B6FF3C] text-[11px] font-semibold">100+ AUTOMATED TESTS</span>
                </div>
              </div>

              {/* Video Element */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  src="/assets/test-run.mp4"
                  poster="/images/test_login_failed.png"
                  muted={isMuted}
                  loop
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-full object-contain"
                />

                {/* Big center play button overlay when paused */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    data-cursor-label="PLAY"
                    aria-label="Play test run video"
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#B6FF3C] text-[#0A0A0B] flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-20"
                  >
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </button>
                )}
              </div>

              {/* Custom Video Controls Bar */}
              <div className="bg-[#121316] p-3 border-t border-[#23242A] flex flex-col gap-2">
                {/* Seek Bar */}
                <div className="w-full h-1.5 bg-[#23242A] rounded-full overflow-hidden cursor-pointer">
                  <div
                    className="h-full bg-[#B6FF3C] transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[#9E9B95] pt-1">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1 hover:text-[#B6FF3C] transition-colors"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="p-1 hover:text-[#B6FF3C] transition-colors"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="text-[11px] text-[#F2EFE8]">Headless Chrome Execution</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[#B6FF3C] text-[11px] font-bold">100+ TESTS</span>
                    <button
                      onClick={toggleFullscreen}
                      className="p-1 hover:text-[#B6FF3C] transition-colors"
                      aria-label="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Interactive Terminal Readout */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0F1014] border border-[#23242A] p-5 font-mono text-xs flex flex-col justify-between h-full min-h-[420px]">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#23242A] mb-4 text-[#9E9B95]">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#B6FF3C]" />
                    <span className="text-white font-bold text-xs">pytest console output</span>
                  </div>
                  <button
                    onClick={() => setTerminalIndex(0)}
                    className="p-1 hover:text-[#B6FF3C] text-[11px] flex items-center gap-1"
                    title="Rerun console animation"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Rerun</span>
                  </button>
                </div>

                <div className="space-y-2 scanlines p-2 rounded bg-black/40 border border-[#18191D]">
                  {portfolioData.sampleTerminalOutput.slice(0, terminalIndex + 1).map((item, idx) => (
                    <div
                      key={idx}
                      className={`leading-relaxed text-[11px] ${
                        item.type === "pass"
                          ? "text-[#B6FF3C] font-semibold"
                          : item.type === "summary"
                          ? "text-[#B6FF3C] font-black border-t border-[#23242A] pt-2"
                          : item.type === "meta"
                          ? "text-white font-bold"
                          : "text-[#9E9B95]"
                      }`}
                    >
                      {item.type === "meta" ? "$ " : ""}
                      {item.text}
                    </div>
                  ))}
                  <div className="inline-block w-2 h-4 bg-[#B6FF3C] animate-pulse ml-1 align-middle" />
                </div>
              </div>

              {/* Status footer inside terminal */}
              <div className="pt-4 border-t border-[#23242A] mt-4 flex items-center justify-between text-[11px] text-[#9E9B95]">
                <span className="flex items-center gap-1.5 text-[#B6FF3C]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Suite Passed (0 Flaky)</span>
                </span>
                <span>Assert count: 100+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
