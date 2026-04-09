"use client";

import Link from "next/link";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { ArrowRight, Zap, Shield, Sparkles, Star, Heart, Coffee } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "@/components/ui/TextReveal";
import { Parallax } from "@/components/ui/Parallax";
import { HeroScatter } from "@/components/ui/HeroScatter";
import { VibeQuiz } from "@/components/ui/VibeQuiz";
import { CircularText } from "@/components/ui/CircularText";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.2], [0, -5]);

  return (
    <div ref={containerRef} className="flex flex-col w-full min-h-screen bg-canvas">
      {/* Vibrant Playful Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-sun">
        <HeroScatter />
        
        {/* Playful Floating Shapes with Parallax */}
        <Parallax offset={100} rotate={20} className="absolute -top-20 -left-20">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-64 h-64 bg-electric/20 rounded-full blur-3xl"
          />
        </Parallax>
        
        <Parallax offset={-150} rotate={-30} className="absolute -bottom-20 -right-20">
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-80 h-80 bg-pop/20 rounded-full blur-3xl"
          />
        </Parallax>

        <motion.div 
          style={{ scale: heroScale, rotate: heroRotate }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 px-6 py-2 bg-ink text-white rounded-full text-xs font-black uppercase tracking-widest border-4 border-ink shadow-[4px_4px_0px_#0070F3]"
          >
            Best Beans in Town ✨
          </motion.div>

          {/* Character-driven Text Reveal */}
          <div className="text-mega text-ink mb-8 tracking-tighter leading-none select-none flex flex-col items-center">
            <TextReveal text="FRESH" className="hover:text-white transition-colors cursor-default" />
            <TextReveal text="COFFEE" className="text-depth italic" delay={0.2} />
            <TextReveal text="ONLY." className="hover:text-electric transition-colors cursor-default" delay={0.4} />
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-2xl md:text-4xl text-ink font-black max-w-2xl mb-12 leading-tight tracking-tight"
          >
            Stop drinking mid coffee. <br /> Upgrade your morning routine with us.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="/shop"
              className="group relative flex items-center gap-4 px-12 py-6 bg-electric text-white rounded-full text-xl font-black border-4 border-ink shadow-[8px_8px_0px_#111111] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
            >
              SHOP NOW
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-black uppercase tracking-widest text-ink/40">Keep Scrolling</span>
          <div className="w-1 h-8 bg-ink/20 rounded-full" />
        </motion.div>
      </section>

      {/* Social Proof Marquee */}
      <section className="py-10 bg-ink overflow-hidden border-y-4 border-ink shadow-[0px_-10px_20px_rgba(0,0,0,0.1)]">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-white font-black text-2xl uppercase italic tracking-widest">
           {[...Array(10)].map((_, i) => (
             <div key={i} className="flex items-center gap-8">
               <span>Vibe Checked</span>
               <Star className="text-sun fill-sun" />
               <span>Always Fresh</span>
               <Heart className="text-pop fill-pop" />
             </div>
           ))}
        </div>
      </section>

      {/* Quiz Section - "The Energy Audit" */}
      <section className="py-32 px-6 bg-soft relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="flex-1 space-y-10">
            <h2 className="text-[2.5rem] md:text-[9rem] font-black text-ink leading-[0.8] tracking-tighter italic">
              ENERGY <br /> <span className="text-electric">AUDIT.</span>
            </h2>
            <div className="space-y-4">
              <p className="text-2xl font-black text-ink uppercase tracking-widest leading-none">
                Not sure which bolt to grab?
              </p>
              <p className="text-lg font-bold text-ink/40 uppercase tracking-widest max-w-md">
                Our radical algorithm synchronizes your current energy levels with our menu of high-frequency roasts.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <VibeQuiz />
          </div>
        </div>

        {/* Decorative Circular Text Backgrounds */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-5 pointer-events-none scale-150">
          <CircularText text="KINETIC ENERGY SYNC • RADICAL BEVEARGE LAB • " radius={300} />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 opacity-5 pointer-events-none scale-125">
          <CircularText text="NEON DISTRICT • VICTORIA ISLAND • NO CAP • " radius={250} />
        </div>
      </section>

      {/* Simplified Story Section with Parallax */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <TextReveal text="REAL COFFEE FOR REAL PEOPLE." className="text-5xl md:text-7xl font-black text-ink tracking-tighter leading-none" />
              <p className="text-xl text-ink/60 font-medium leading-relaxed">We don&apos;t do that fancy corporate talk. We just find the best beans, roast them to perfection, and send them to your door. Simple as that.</p>
              <div className="flex gap-4">
                 {[Shield, Sparkles, Coffee].map((Icon, i) => (
                   <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="w-16 h-16 bg-soft rounded-2xl flex items-center justify-center border-4 border-ink shadow-[4px_4px_0px_#111111]"
                   >
                      <Icon size={28} />
                   </motion.div>
                 ))}
              </div>
           </div>
           <Parallax offset={80} rotate={5}>
             <div className="aspect-square bg-sun rounded-[4rem] border-8 border-ink shadow-[20px_20px_0px_#0070F3] relative overflow-hidden group">
                <img 
                  src="/products/media__1775691524496.png" 
                  alt="Signature Brew" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                   <p className="text-4xl font-black text-white italic tracking-tighter">ELECTRIC FUEL.</p>
                </div>
             </div>
           </Parallax>
        </div>
      </section>

      {/* Bento Grid Features - Redesigned inside component */}
      <BentoGrid />

    </div>
  );
}


