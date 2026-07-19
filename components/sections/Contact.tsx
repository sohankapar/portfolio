"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Download, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SOCIALS } from "@/data/site";

type Status = "idle" | "loading" | "success" | "error";

const SOCIAL_LINKS = [
  { label: "GitHub", href: SOCIALS.github, icon: Github },
  { label: "LinkedIn", href: SOCIALS.linkedin, icon: Linkedin },
  { label: "Email", href: SOCIALS.email, icon: Mail },
  { label: "Resume", href: SOCIALS.resume, icon: Download },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error ?? "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Have a project, internship, or opportunity in mind? My inbox is open."
        />

        <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass h-fit rounded-2xl p-8"
          >
            <h3 className="font-display text-lg font-semibold text-foreground">
              Find me elsewhere
            </h3>
            <p className="mt-2 text-sm text-muted">
              Prefer a different channel? Reach out directly or grab a copy of my resume.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border bg-white/5 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-border bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-border bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-1.5 block text-sm text-muted">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                className="w-full rounded-xl border border-border bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
                placeholder="What's this about?"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-border bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
                placeholder="Tell me a bit about the opportunity..."
              />
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
              {status === "success" && (
                <span className="flex items-center gap-1.5 text-sm text-accent">
                  <CheckCircle2 className="h-4 w-4" /> Message sent!
                </span>
              )}
              {status === "error" && (
                <span className="text-sm text-red-400">{error}</span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
