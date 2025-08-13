"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../lib/util";
import { FaGithub } from "react-icons/fa";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

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
                className="text-2xl font-bold text-black flex items-center gap-2"
              >
                {/* Title now links to preview */}
                <a
                  href={item.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {item.title}
                </a>
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700  hover:text-black ml-5 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
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
          {/* Blur overlay */}
          <div className="absolute inset-0 backdrop-blur-md bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <span className="text-black font-semibold  text-lg">Preview</span>
          </div>
        </a>
      </div>
    </motion.div>
  );
};