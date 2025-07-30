import { cn } from "../lib/util";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// Main hover effect with card links
export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gray-200 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

// Card component used in HoverEffect
export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white/15 backdrop-blur-lg border border-white/20 group-hover:border-slate-700 relative shadow-lg z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4 text-neutral-900">{children}</div>
      </div>
    </div>
  );
};

// Reusable card title component
export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

// Reusable card description component
export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("mt-8 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
