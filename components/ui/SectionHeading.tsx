"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-12 md:mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-mono uppercase tracking-widest text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted md:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
