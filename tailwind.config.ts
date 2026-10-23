import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0B",
        card: "#121316",
        surface: "#18191D",
        bone: "#F2EFE8",
        boneMuted: "#9E9B95",
        acid: "#B6FF3C",
        "acid-muted": "rgba(182, 255, 60, 0.12)",
        bug: "#FF4D4D",
        borderDark: "#23242A",
        borderHighlight: "rgba(182, 255, 60, 0.35)",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'Fira Code'", "monospace"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
        fadeIn: "fadeIn 0.3s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.05)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
