"use client";

import { motion } from "framer-motion";
import { Star, Zap, Heart, Coffee } from "lucide-react";
import Link from "next/link";
import { TextReveal } from "@/components/ui/TextReveal";
import { Parallax } from "@/components/ui/Parallax";

export default function StoryPage() {
  return (
    <div className="pt-40 pb-40 px-6 bg-canvas overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-sun text-ink text-[10px] font-black uppercase tracking-[0.2em] mb-12 border-4 border-ink shadow-[4px_4px_0px_#111111]"
          >
            Since 2026 ✨
          </motion.div>
          
          <div className="mb-12">
            <TextReveal text="OUR VIBES." className="text-mega text-ink leading-none select-none italic text-depth" />
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-3xl md:text-5xl font-black text-ink tracking-tighter max-w-3xl leading-[1.1]"
          >
            We&apos;re just a bunch of people who love high-energy mornings and great coffee. <span className="text-electric">No cap.</span>
          </motion.p>
        </div>

        {/* Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-40">
           <div className="space-y-10 order-2 md:order-1">
              <TextReveal text="REAL ENERGY. NO MID." className="text-5xl font-black text-ink tracking-tight" />
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-ink/60 font-bold leading-relaxed"
              >
                Started in Victoria Island, we noticed the coffee scene was a bit too... serious. Lab coats? Complex math? We just wanted a cup that hits different and keeps us moving.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl text-ink/60 font-bold leading-relaxed"
              >
                So we spent months sourcing the boldest beans and roasting them for maximum hype. The result? Kinetic. It&apos;s coffee for the doers, the dreamers, and the all-nighters.
              </motion.p>
           </div>
           <Parallax offset={60} rotate={5} className="order-1 md:order-2">
             <div className="aspect-square bg-electric rounded-[4rem] border-8 border-ink shadow-[24px_24px_0px_#FFD700] relative overflow-hidden group">
                <img 
                  src="/products/media__1775691543678.png" 
                  alt="Craft Coffee Flow" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                   <p className="text-4xl font-black text-white italic tracking-tighter">THE HYPE IS REAL.</p>
                </div>
             </div>
           </Parallax>
        </div>

        {/* The Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Pure Quality", desc: "No fillers, no shortcuts. Just the good stuff.", icon: Star, color: "bg-sun" },
             { title: "Big Energy", desc: "Caffeine that keeps you focused, not shaky.", icon: Coffee, color: "bg-electric" },
             { title: "Vibe Check", desc: "Roasted in small batches for the best taste.", icon: Heart, color: "bg-pop" }
           ].map((pillar, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`p-10 rounded-[3rem] border-4 border-ink shadow-[12px_12px_0px_#111111] ${pillar.color} text-ink space-y-6 hover:translate-y-[-8px] transition-transform cursor-default`}
             >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border-4 border-ink">
                   <pillar.icon size={32} />
                </div>
                <h3 className="text-3xl font-black tracking-tight">{pillar.title}</h3>
                <p className="text-lg font-bold opacity-80">{pillar.desc}</p>
             </motion.div>
           ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-40 text-center py-20 bg-soft rounded-[4rem] border-8 border-ink shadow-[24px_24px_0px_#0070F3]"
        >
           <h3 className="text-4xl md:text-6xl font-black text-ink mb-12 uppercase tracking-tighter">Ready to join the move?</h3>
           <Link 
             href="/shop"
             className="px-16 py-8 bg-ink text-white rounded-full text-2xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform inline-block"
           >
             Shop The Vibes
           </Link>
        </motion.div>
      </div>
    </div>
  );
}
