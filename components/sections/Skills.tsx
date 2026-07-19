"use client";

import type { ElementType } from "react";
import { motion } from "framer-motion";
import { Code2, LayoutTemplate, Server, Database, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILLS, type SkillCategory } from "@/data/skills";

const ICONS: Record<SkillCategory["icon"], ElementType> = {
  code: Code2,
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  wrench: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          description="A snapshot of the languages, frameworks, and tools I reach for most."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((cat, catIndex) => {
            const Icon = ICONS[cat.icon];
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 transition-shadow hover:shadow-glow"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="text-muted">{skill.name}</span>
                        <span className="font-mono text-xs text-muted">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{
                            duration: 0.9,
                            delay: 0.15 + i * 0.07,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
