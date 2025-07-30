import React, { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "../lib/util"; // Adjust path

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  hover: {
    gap: ".5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = {
  type: "spring",
  bounce: 0,
  duration: 0.5,
};

export function ExpandedTabs({ tabs, className = "" }) {
  const ref = useRef(null);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-50px" }); // Trigger when 50px inside

  useOnClickOutside(ref, () => {});

  const Separator = () => (
    <div className="h-[24px] w-[1.2px] bg-border bg-gray-500 mx-2 opacity-50" />
  );

  return (
    <motion.div
      ref={(el) => {
        ref.current = el;
        inViewRef.current = el;
      }}
      className={cn(
        "inline-flex gap-2 rounded-2xl  justify-center items-center border bg-background p-1 shadow-sm",
        className
      )}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`sep-${index}`} />;
        }

        const iconElement = tab.icon;

        return (
          <motion.button
            key={tab.title}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            transition={transition}
            className={cn(
              "relative group flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300",
              "text-muted-foreground hover:bg-muted"
            )}
          >
            {iconElement &&
              React.cloneElement(iconElement, {
                size: 20,
                className: cn(
                  "transition-colors duration-300",
                  "text-muted-foreground group-hover:" + tab.activeClass?.replace("text-", "text-")
                ),
              })}

            <AnimatePresence>
              <motion.span
                key="title"
                variants={spanVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={transition}
                className="overflow-hidden ml-2"
              >
                {tab.title}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        );
      })}
    </motion.div>
  );
}