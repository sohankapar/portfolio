"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.span
              initial={{ letterSpacing: "0.1em", opacity: 0 }}
              animate={{ letterSpacing: "0.02em", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-2xl font-semibold text-white"
            >
              SK<span className="text-primary">.</span>
            </motion.span>
            <div className="h-[2px] w-32 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-1/2 bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
