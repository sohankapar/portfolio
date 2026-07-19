"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CERTIFICATIONS } from "@/data/education";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning"
          description="Courses and credentials I've completed along the way."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass flex flex-col rounded-2xl p-6 transition-shadow hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 font-mono text-xs font-bold text-foreground">
                  {cert.logoInitials}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-muted">
                  <Award className="h-4 w-4" />
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {cert.issuer} &middot; {cert.date}
              </p>
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                View Certificate <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
