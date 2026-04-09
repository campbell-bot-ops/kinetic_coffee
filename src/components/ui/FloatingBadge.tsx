"use client";

import { motion } from "framer-motion";

interface FloatingBadgeProps {
  text: string;
  className?: string;
  delay?: number;
}

export function FloatingBadge({ text, className, delay = 0 }: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        }
      }}
      className={`absolute px-6 py-3 rounded-full border border-aluminum/20 bg-crema/80 backdrop-blur-md shadow-lg pointer-events-auto hover:bg-onyx hover:text-crema transition-colors duration-300 z-30 cursor-default ${className}`}
    >
      <span className="text-sm font-bold tracking-tight whitespace-nowrap">{text}</span>
    </motion.div>
  );
}
