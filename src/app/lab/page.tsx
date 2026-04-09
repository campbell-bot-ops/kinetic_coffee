"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Zap, Droplets, Thermometer, Timer } from "lucide-react";

const methods = [
  {
    id: "french-press",
    title: "French Press",
    slug: "french-press",
    vibe: "Immersion",
    tech: "1:15 Ratio • 94°C",
    color: "bg-sun"
  },
  {
    id: "v60",
    title: "V60 Drip",
    slug: "v60",
    vibe: "Percolation",
    tech: "1:17 Ratio • 96°C",
    color: "bg-electric"
  },
  {
    id: "aeropress",
    title: "AeroPress",
    slug: "aeropress",
    vibe: "Pressure",
    tech: "1:13 Ratio • 88°C",
    color: "bg-pop"
  }
];

export default function LabHub() {
  return (
    <div className="bg-canvas min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-black uppercase tracking-[0.5em] text-electric mb-4"
          >
            Tactical Brewing
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[5rem] md:text-[8rem] font-black text-ink leading-[0.8] tracking-tighter italic"
          >
            THE <br /> <span className="text-ink/20">LAB.</span>
          </motion.h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, i) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                href={`/lab/${method.slug}`}
                className="group block relative aspect-square bg-white border-8 border-ink rounded-[4rem] overflow-hidden shadow-[12px_12px_0px_#111] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all p-12 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                   <div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-ink/40">{method.vibe}</span>
                     <h2 className="text-4xl font-black text-ink uppercase italic leading-none mt-2">{method.title}</h2>
                   </div>
                   <div className="w-12 h-12 bg-ink text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                      <ArrowUpRight size={24} />
                   </div>
                </div>

                <div className="space-y-4">
                  <div className={`h-2 h-full w-full rounded-full ${method.color} opacity-20`} />
                  <p className="text-xs font-black uppercase tracking-widest text-ink">{method.tech}</p>
                </div>

                {/* Technical Icons Layer */}
                <div className="absolute bottom-0 right-0 p-8 opacity-5">
                   {method.vibe === "Immersion" && <Droplets size={120} />}
                   {method.vibe === "Percolation" && <Zap size={120} />}
                   {method.vibe === "Pressure" && <Thermometer size={120} />}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
