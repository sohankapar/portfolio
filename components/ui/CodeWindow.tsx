"use client";

import { motion } from "framer-motion";

const CODE_LINES = [
  { indent: 0, text: 'class Developer {', color: "text-foreground" },
  { indent: 1, text: 'name = "Sohan Kumar Kapar";', color: "text-primary" },
  { indent: 1, text: 'stack = ["Java", "AI/ML", "Unity"];', color: "text-accent" },
  { indent: 1, text: "", color: "" },
  { indent: 1, text: "build() {", color: "text-foreground" },
  { indent: 2, text: 'return "something great";', color: "text-muted" },
  { indent: 1, text: "}", color: "text-foreground" },
  { indent: 0, text: "}", color: "text-foreground" },
];

export function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      whileHover={{ rotate: 0, scale: 1.02 }}
      className="glass relative w-full max-w-md rounded-2xl p-1 shadow-glow"
    >
      <div className="rounded-xl bg-surface/80 p-5 font-mono text-sm leading-relaxed">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 text-xs text-muted">Developer.java</span>
        </div>
        {CODE_LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
            style={{ paddingLeft: `${line.indent * 1.25}rem` }}
            className={line.color || "text-foreground"}
          >
            {line.text || "\u00A0"}
          </motion.div>
        ))}
      </div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-6 -top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent shadow-glow-accent backdrop-blur"
      >
        AI
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-5 -left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary shadow-glow backdrop-blur"
      >
        {"</>"}
      </motion.div>
    </motion.div>
  );
}
