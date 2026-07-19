import { Github, Linkedin, Mail } from "lucide-react";
import { SITE, SOCIALS } from "@/data/site";

const LINKS = [
  { label: "GitHub", href: SOCIALS.github, icon: Github },
  { label: "LinkedIn", href: SOCIALS.linkedin, icon: Linkedin },
  { label: "Email", href: SOCIALS.email, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} {SITE.name}. Built from scratch, with care.
        </p>

        <div className="flex items-center gap-4">
          {LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
