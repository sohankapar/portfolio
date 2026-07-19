import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        primary: {
          DEFAULT: "#3B82F6",
          foreground: "#EFF6FF",
        },
        accent: {
          DEFAULT: "#22C55E",
          foreground: "#F0FDF4",
        },
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        foreground: "rgb(var(--color-fg) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-slate": "linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)",
        "radial-fade": "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.15), transparent 60%)",
      },
      animation: {
        blob: "blob 18s infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.25)",
        "glow-accent": "0 0 40px rgba(34,197,94,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
