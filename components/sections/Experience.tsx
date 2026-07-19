"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERIENCE } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've applied it"
          description="Hands-on work building and shipping real projects."
        />

        <div className="space-y-6">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.role + exp.organization}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass grid gap-6 rounded-2xl p-6 md:grid-cols-[220px_1fr] md:p-8"
            >
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </span>
                <p className="mt-4 font-mono text-xs uppercase tracking-widest text-primary">
                  {exp.period}
                </p>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                  <MapPin className="h-3 w-3" /> {exp.location}
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-accent">{exp.organization}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{exp.summary}</p>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-white/5 px-2.5 py-1 text-xs font-mono text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
