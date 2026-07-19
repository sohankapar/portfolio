"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
}

export function TypingText({
  phrases,
  typingSpeed = 60,
  deletingSpeed = 30,
  pause = 1500,
  className,
}: TypingTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];

    if (!deleting && text === current) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setPhraseIndex((i) => i + 1);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      },
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-primary align-middle" />
    </span>
  );
}
