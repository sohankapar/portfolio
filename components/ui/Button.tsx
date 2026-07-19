"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-blue-500 shadow-[0_0_0_1px_rgba(59,130,246,0.4)] hover:shadow-glow",
  secondary:
    "bg-surface text-white border border-border hover:border-primary/50 hover:bg-surface/80",
  ghost: "bg-transparent text-white hover:bg-white/5",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={cn(
          "relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-colors duration-200 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
