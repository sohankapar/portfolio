"use client";
import Image from "next/image";     
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TIMELINE } from "@/data/timeline";
import { SITE } from "@/data/site";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title="Turning curiosity into code"
          description="A quick look at who I am, and the path that got me here."
        />

        <div className="grid gap-16 md:grid-cols-[minmax(0,320px)_1fr]">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="h-fit"
          >
            <div className="glass relative overflow-hidden rounded-3xl p-6">

              <Image src="/profile.png" alt="Sohan Kumar Kapar" fill className="rounded-full object-cover" />

              <h3 className="mt-6 text-center font-display text-xl font-semibold text-foreground">
                {SITE.name}
              </h3>
              <p className="text-center text-sm text-muted">{SITE.role}</p>

              <div className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
                <div className="flex items-center gap-2 text-muted">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  {SITE.university}
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <MapPin className="h-4 w-4 text-primary" />
                  {SITE.location}
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <Sparkles className="h-4 w-4 text-primary" />
                  AI • ML • Java • Unity
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted">
              I&apos;m a builder at heart — someone who&apos;d rather learn by
              shipping than by watching. Whether it&apos;s a mobile app with
              real users or a machine learning model that finally converges,
              I care about the details that make software feel thoughtful.
              Outside of class, I&apos;m usually deep in a side project,
              debugging late into the night, or experimenting with a new
              framework.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border md:left-[15px]" />
            <ol className="space-y-10">
              {TIMELINE.map((item, i) => (
                <motion.li
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pl-10 md:pl-12"
                >
                  <span
                    className={`absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 md:h-8 md:w-8 ${
                      item.current
                        ? "border-accent bg-accent/20 text-accent shadow-glow-accent"
                        : "border-primary/60 bg-surface text-primary"
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-current" />
                  </span>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-mono text-sm font-semibold text-primary">
                      {item.year}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    {item.current && (
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                        Now
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
