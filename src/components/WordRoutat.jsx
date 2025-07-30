"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Optional: replace with your own utility classnames function or remove 'cn' if unused
import { cn } from "../lib/util";

export function WordRotate({
  words,
  duration = 2500,
  motionProps,
  className,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  // Default animation props
  const defaultMotion = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  };

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={cn ? cn(className) : className}
          {...(motionProps || defaultMotion)}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
