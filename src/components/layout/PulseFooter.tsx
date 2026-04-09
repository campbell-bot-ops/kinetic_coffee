"use client";

import { motion } from "framer-motion";
import { Zap, Activity, Users } from "lucide-react";
import { useEffect, useState } from "react";

export function PulseFooter() {
  const [energy, setEnergy] = useState(42091);
  const [brews, setBrews] = useState(1284);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy(prev => prev + Math.floor(Math.random() * 5));
      if (Math.random() > 0.8) setBrews(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-ink text-white overflow-hidden py-4 border-t-4 border-sun select-none">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           className="flex items-center gap-12 px-6"
        >
          {/* Ticker Content Segment */}
          <TickerSegment energy={energy} brews={brews} />
          <TickerSegment energy={energy} brews={brews} />
          <TickerSegment energy={energy} brews={brews} />
          <TickerSegment energy={energy} brews={brews} />
        </motion.div>
      </div>
    </footer>
  );
}

function TickerSegment({ energy, brews }: { energy: number, brews: number }) {
  return (
    <>
      <div className="flex items-center gap-3">
        <Activity size={16} className="text-sun" />
        <span className="text-[10px] font-black uppercase tracking-widest leading-none">
          Live Community Pulse: <span className="text-sun">{energy.toLocaleString()}</span> KJ PRODUCED
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Zap size={16} className="text-electric" />
        <span className="text-[10px] font-black uppercase tracking-widest leading-none">
          Status: <span className="text-electric italic">SUPERCHARGED</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Users size={16} className="text-pop" />
        <span className="text-[10px] font-black uppercase tracking-widest leading-none">
          Active Brewers: <span className="text-pop">{brews.toLocaleString()}</span> RADICALS
        </span>
      </div>
      <div className="w-2 h-2 bg-sun rounded-full mx-4" />
    </>
  );
}
