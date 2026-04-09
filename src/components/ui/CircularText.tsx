"use client";

import { motion } from "framer-motion";

interface CircularTextProps {
  text: string;
  className?: string;
  radius?: number;
}

export function CircularText({ text, className, radius = 80 }: CircularTextProps) {
  const size = radius * 2;
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      style={{ width: size, height: size }}
      className={`relative ${className}`}
    >
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible">
        <path
          id="circlePath"
          d={`M ${radius}, ${radius} m -${radius - 10}, 0 a ${radius - 10},${radius - 10} 0 1,1 ${size - 20},0 a ${radius - 10},${radius - 10} 0 1,1 -${size - 20},0`}
          fill="none"
        />
        <text className="text-[10px] font-black uppercase fill-ink">
          <textPath xlinkHref="#circlePath">
            {text}
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}
