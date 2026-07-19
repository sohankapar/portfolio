"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, FolderGit2 } from "lucide-react";
import { GradientBlobs } from "@/components/ui/GradientBlobs";
import { TypingText } from "@/components/ui/TypingText";
import { CodeWindow } from "@/components/ui/CodeWindow";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/data/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <GradientBlobs />

      <div className="section-container grid items-center gap-16 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-mono text-accent"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Open to Internships &amp; SWE roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{SITE.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 text-xl font-medium text-muted sm:text-2xl"
          >
            {SITE.role}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 h-7 font-mono text-sm text-primary sm:text-base"
          >
            <TypingText
              phrases={[
                "Building with AI & Machine Learning",
                "Writing clean Java, every time",
                "Crafting games in Unity",
                "Shipping products end-to-end",
              ]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted"
          >
            A Computer Science Engineering student at DIT University who loves
            turning ideas into working software — from gamified mobile apps
            to machine learning experiments and interactive Unity prototypes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button onClick={() => window.open(SITE.resumeUrl, "_blank")}>
              <Download className="h-4 w-4" /> Download Resume
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <FolderGit2 className="h-4 w-4" /> View Projects
            </Button>
          </motion.div>
        </div>

        <div className="hidden justify-center md:flex">
          <CodeWindow />
        </div>
      </div>

      <motion.button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-foreground"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}
