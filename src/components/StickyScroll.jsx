"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion, useTransform } from "motion/react";
import { cn } from "../lib/util";
import { FaGithub } from "react-icons/fa";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"], // track inside this section
  });

  // fade out hint when reaching bottom
  const hintOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["#FFF", "#FFF", "#FFF"];
  const linearGradients = [
    "linear-gradient(to bottom right, #fff, #000000)",
    "linear-gradient(to bottom right, #fff, #000000)",
    "linear-gradient(to bottom right, #fff, #000000)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div className="relative">
      {/* Hint inside section, top center */}
      <motion.div
        style={{ opacity: hintOpacity }}
        className="absolute top-2 left-1/2 -translate-x-1/2 z-20 text-gray-600 text-sm"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex items-center gap-1"
        >
More projects           <span className="animate-bounce">↓</span>
        </motion.span>
      </motion.div>

      {/* Scrollable content */}
      <motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
        ref={ref}
      >
        <div className="relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-black flex items-center gap-4"
                >
                  {/* Title with tooltip */}
                  <div className="relative group">
                    <a
                      href={item.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.title}
                    </a>
                    <span className="absolute -bottom-7 left-0 scale-0 group-hover:scale-100 transition-transform rounded-md bg-black text-white text-xs px-2 py-1 whitespace-nowrap">
                      Click to view preview
                    </span>
                  </div>

                  {/* GitHub with tooltip */}
                  {item.github && (
                    <div className="relative group">
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black transition-colors"
                      >
                        <FaGithub size={20} />
                      </a>
                      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform rounded-md bg-black text-white text-xs px-2 py-1 whitespace-nowrap">
                        View on GitHub
                      </span>
                    </div>
                  )}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-kg mt-10 max-w-sm text-gray-900"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>

        {/* Sticky Preview */}
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-2xl bg-white lg:block",
            contentClassName
          )}
        >
          <a
            href={content[activeCard].preview}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-full w-full items-center justify-center text-white group"
          >
            <img
              src={content[activeCard].img}
              className="h-full w-full object-cover"
              alt={`${content[activeCard].title} Preview`}
            />
            <div className="absolute inset-0 backdrop-blur-md bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
              <span className="text-black font-semibold text-lg">Preview</span>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
};