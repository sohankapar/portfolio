"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.href.replace("#", "")));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:mx-4 md:mx-auto md:px-6"
      >
        <a
          href="#hero"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          SK<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground",
                    isActive && "text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/5"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground sm:flex"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={SITE.resumeUrl}
            download
            className="hidden items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 md:inline-flex"
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass mx-4 mt-2 overflow-hidden rounded-2xl md:hidden"
          >
            <ul className="flex flex-col p-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-muted hover:bg-white/5 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-1 flex items-center justify-between px-4 py-2">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-sm text-muted hover:text-foreground"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                  Switch theme
                </button>
                <a
                  href={SITE.resumeUrl}
                  download
                  className="flex items-center gap-1.5 text-sm text-primary"
                >
                  <Download className="h-3.5 w-3.5" /> Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
