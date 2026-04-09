"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Coffee, Star, Droplets, Smile } from "lucide-react";
import { useMemo, useState, useEffect } from "react";

const ICON_SET = [Zap, Coffee, Star, Droplets, Smile];
const COLOR_SET = ["text-sun", "text-electric", "text-pop", "text-ink/10"];

export function HeroScatter() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate random positions once to avoid jitter
  const items = useMemo(() => {
    if (!mounted) return [];
    return [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 90}%`,
      top: `${Math.random() * 90}%`,
      scale: 0.5 + Math.random() * 1.5,
      rotation: Math.random() * 360,
      iconIndex: Math.floor(Math.random() * ICON_SET.length),
      colorIndex: Math.floor(Math.random() * COLOR_SET.length),
      parallaxType: Math.random() > 0.5 ? "up" : "down",
      showLabel: Math.random() > 0.7
    }));
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {items.map((item) => {
        const Icon = ICON_SET[item.iconIndex];
        const color = COLOR_SET[item.colorIndex];
        
        return (
          <motion.div
            key={item.id}
            style={{
              left: item.left,
              top: item.top,
              scale: item.scale,
              rotate: item.rotation,
              y: item.parallaxType === "up" ? y1 : y2
            }}
            className={`absolute ${color} transition-all duration-1000`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: item.id * 0.05 }}
          >
            <Icon size={24} strokeWidth={3} />
            {/* Tiny tech labels for more detail */}
            {item.showLabel && (
              <span className="absolute top-full left-0 mt-2 text-[8px] font-black uppercase tracking-widest text-ink/20 transform -rotate-12">
                RADICAL.LAB_{item.id}
              </span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
