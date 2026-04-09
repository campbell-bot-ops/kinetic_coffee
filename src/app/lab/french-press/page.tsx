"use client";

import { motion } from "framer-motion";
import { Timer, Droplets, Thermometer, ArrowLeft, Beaker } from "lucide-react";
import Link from "next/link";

export default function FrenchPressGuide() {
  const steps = [
    { title: "Grind Logic", tech: "Course (Sea Salt)", text: "Dose 30g of radical beans. Coarseness is key for immersion." },
    { title: "Saturation", tech: "94°C / 201.2°F", text: "Pour 450ml of high-frequency water. Saturate all grounds instantly." },
    { title: "Kinetic Bloom", tech: "30 Seconds", text: "Gently stir the crest. Release the CO2 and witness the expansion." },
    { title: "Extraction", tech: "4:00 Minutes", text: "Cap the press. Let the immersion complete its energy transfer." }
  ];

  return (
    <div className="bg-canvas min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Link href="/lab" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-ink/40 hover:text-ink transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Lab Hub
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Guide Header & Summary */}
          <div className="space-y-12">
            <header>
              <div className="flex items-center gap-4 mb-4">
                 <span className="px-3 py-1 bg-sun text-ink text-[10px] font-black uppercase tracking-widest rounded-full border-2 border-ink shadow-[2px_2px_0px_#111]">Tactical Guide</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-ink/40">Lab Sector: 01</span>
              </div>
              <h1 className="text-[5rem] md:text-[8rem] font-black text-ink leading-[0.8] tracking-tighter italic">
                FRENCH <br /> <span className="text-sun">PRESS.</span>
              </h1>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { label: "Ratio", val: "1:15", icon: <Beaker size={14} /> },
                 { label: "Temp", val: "94°C", icon: <Thermometer size={14} /> },
                 { label: "Dose", val: "30G", icon: <Droplets size={14} /> },
                 { label: "Time", val: "4:00", icon: <Timer size={14} /> }
               ].map((stat) => (
                 <div key={stat.label} className="p-4 border-2 border-ink rounded-2xl bg-white shadow-[4px_4px_0px_#111]">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-ink/40 mb-1">
                       {stat.icon} {stat.label}
                    </div>
                    <div className="text-xl font-black italic">{stat.val}</div>
                 </div>
               ))}
            </div>

            <div className="space-y-8">
               {steps.map((step, i) => (
                 <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-8 group"
                 >
                    <div className="w-12 h-12 bg-ink text-white rounded-full flex items-center justify-center font-black shrink-0 relative z-10">
                       0{i + 1}
                       {i < steps.length - 1 && <div className="absolute top-12 left-1/2 -underline-x-1/2 w-[2px] h-12 bg-ink/10" />}
                    </div>
                    <div className="pt-2">
                       <h3 className="text-xl font-black uppercase italic tracking-tight">{step.title}</h3>
                       <p className="text-[10px] font-black uppercase text-electric mb-2">{step.tech}</p>
                       <p className="text-lg font-bold text-ink/60 uppercase tracking-widest leading-relaxed">{step.text}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* Blueprint Visual Layer */}
          <div className="sticky top-32 space-y-8">
             <div className="aspect-[4/5] bg-white border-8 border-ink rounded-[4rem] shadow-[24px_24px_0px_#111] relative overflow-hidden group">
                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                     style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "20px 20px" }} 
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                   <motion.div 
                     animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="relative"
                   >
                      <div className="w-48 h-64 bg-sun opacity-10 rounded-2xl border-4 border-ink blur-3xl absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                      <Beaker className="w-64 h-64 text-ink relative z-10" strokeWidth={1} />
                      
                      {/* Technical Annotations */}
                      <div className="absolute -top-12 -right-12 text-[10px] font-black uppercase tracking-[0.2em] transform rotate-12 opacity-40">
                         Kinetic Extraction: <span className="text-pop">OPTIMIZED</span>
                      </div>
                      <div className="absolute -bottom-12 -left-12 text-[10px] font-black uppercase tracking-[0.2em] transform -rotate-12 opacity-40">
                         Immersion Type: <span className="text-electric">FULL</span>
                      </div>
                   </motion.div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.5em] text-ink/20">
                   Blueprint Sector: FP-01
                </div>
             </div>
             
             <div className="p-8 border-4 border-ink rounded-[2rem] bg-ink text-white font-black uppercase tracking-widest text-center italic">
                "Trust the immersion. Timing is everything."
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
