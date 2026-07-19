"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, CalendarClock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EDUCATION } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="Education" title="Academic foundation" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass relative overflow-hidden rounded-3xl p-8 md:p-10"
        >
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <GraduationCap className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {EDUCATION.institution}
                </h3>
                <p className="mt-1 text-muted">
                  {EDUCATION.degree}, {EDUCATION.field}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" /> {EDUCATION.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CalendarClock className="h-4 w-4 text-primary" /> Expected{" "}
                    {EDUCATION.graduation}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:justify-end">
              {EDUCATION.specialization.map((spec) => (
                <span
                  key={spec}
                  className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
