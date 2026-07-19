"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, Clock } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group glass relative flex flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-glow"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
        {project.featured && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-accent/90 px-2.5 py-1 text-xs font-semibold text-background">
            <Star className="h-3 w-3" /> Featured
          </span>
        )}
        {project.comingSoon && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-surface/90 px-2.5 py-1 text-xs font-semibold text-muted">
            <Clock className="h-3 w-3" /> In Progress
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-white/5 px-2.5 py-1 text-xs font-mono text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          )}
          {project.demo && !project.comingSoon && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
          {project.comingSoon && (
            <span className="inline-flex flex-1 items-center justify-center rounded-full border border-dashed border-border py-2 text-sm text-muted">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
