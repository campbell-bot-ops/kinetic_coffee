"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Tag, Calendar, Zap, Activity } from "lucide-react";

const posts = [
  {
    id: "radical-roasting",
    title: "The Physics of High-Frequency Roasting.",
    excerpt: "Why the rate of rise (RoR) is the only metric that matters when chasing kinetic acidity.",
    date: "MARCH 24, 2026",
    tag: "Technical",
    color: "text-electric"
  },
  {
    id: "neon-district-culture",
    title: "Neon District: The Heart of the Kinetic Lab.",
    excerpt: "Exploring the industrial brutalist roots of our flagship roasting facility.",
    date: "MARCH 20, 2026",
    tag: "Culture",
    color: "text-pop"
  },
  {
    id: "clean-energy-vibe",
    title: "Clean Energy: Decoding the 'Bolt' Effect.",
    excerpt: "How our Signature Bolt roast became the standard for the modern morning hustle.",
    date: "MARCH 15, 2026",
    tag: "Lifestyle",
    color: "text-sun"
  }
];

export default function JournalPage() {
  return (
    <div className="bg-canvas min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-black uppercase tracking-[0.5em] text-pop mb-4"
            >
              Editorial Feed
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[3.5rem] sm:text-[5rem] md:text-[8rem] font-black text-ink leading-[0.8] tracking-tighter italic"
            >
              THE <br /> <span className="text-ink/20">FEED.</span>
            </motion.h1>
          </div>
          <div className="pb-4 border-b-4 border-ink max-w-xs w-full md:w-auto">
            <p className="text-left md:text-right font-bold uppercase text-[10px] tracking-widest text-ink/40">
              A hybrid frequency of scientific roast data and radical culture reporting.
            </p>
          </div>
        </header>

        <div className="space-y-4">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group border-b-8 border-ink pb-8 md:pb-12 pt-8 md:pt-12"
            >
              <Link href={`/journal/${post.id}`} className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-start lg:items-end group">
                {/* Metatdata Column */}
                <div className="lg:col-span-2 space-y-4">
                   <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-ink/20">
                      <Calendar size={14} /> {post.date}
                   </div>
                   <div className={`inline-flex items-center gap-2 px-3 py-1 bg-ink text-white rounded-full text-[10px] font-black uppercase tracking-widest`}>
                      <Tag size={10} className={post.color} /> {post.tag}
                   </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-8">
                   <h2 className="text-3xl md:text-6xl font-black text-ink uppercase italic tracking-tighter leading-[0.9] group-hover:text-electric transition-colors">
                     {post.title}
                   </h2>
                   <p className="mt-4 md:mt-6 text-lg md:text-xl font-bold uppercase tracking-widest text-ink/40 max-w-2xl">
                     {post.excerpt}
                   </p>
                </div>

                {/* Arrow Column */}
                <div className="lg:col-span-2 flex justify-start lg:justify-end mt-4 lg:mt-0">
                   <div className="w-16 h-16 md:w-20 md:h-20 bg-soft border-4 border-ink rounded-full flex items-center justify-center group-hover:bg-sun transition-all shadow-[6px_6px_0px_#111] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1">
                      <ArrowRight size={32} />
                   </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Playful Bottom Callout */}
        <div className="mt-20 md:mt-24 p-8 md:p-12 bg-white border-8 border-ink rounded-[3rem] md:rounded-[4rem] text-center shadow-[16px_16px_0px_#FFD700]">
           <Zap className="mx-auto text-sun mb-6" size={48} />
           <h3 className="text-2xl md:text-3xl font-black italic uppercase leading-none mb-4">Subscribe to the Frequency.</h3>
           <p className="font-bold text-ink/40 uppercase tracking-widest text-[10px] mb-8">No marketing spam. just technical data and radical drops.</p>
           <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="YOUR EMAIL..." className="flex-grow p-4 bg-soft border-4 border-ink rounded-2xl font-black uppercase tracking-widest text-xs" />
              <button className="px-8 py-4 bg-ink text-white font-black uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-transform">JOIN</button>
           </form>
        </div>
      </div>
    </div>
  );
}
