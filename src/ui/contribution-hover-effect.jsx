import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mx-auto",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link || "#"}
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-zinc-800 block rounded-3xl"
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
            <CardTitle className="">{item.title}</CardTitle>
            <CardDescription className="">{item.desc}</CardDescription>

            {/* Render icons here */}
            <div className="flex items-center gap-4 mt-6 text-zinc-300">
              {item.icons?.map((iconObj, i) => (
                <div key={i} className="flex items-center gap-1 text-zinc-300">
                  <span className="text-lg">{iconObj.icon}</span>
                  <span className="text-sm">{iconObj.num}</span>
                </div>
              ))}
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-80 w-full overflow-hidden bg-zinc-800 border border-transparent group-hover:dark:border-white/[0.2] relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="text-zinc-300">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-2", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-200 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
