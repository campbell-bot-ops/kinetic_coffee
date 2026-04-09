"use client";

import { motion } from "framer-motion";
import { Zap, Star, Trophy, Target, Gift, Coffee } from "lucide-react";

export default function RewardsPage() {
  const stickers = [
    { title: "First Pulse", icon: <Zap />, unlocked: true, color: "bg-sun" },
    { title: "Roast Master", icon: <Coffee />, unlocked: true, color: "bg-electric" },
    { title: "Daily Grind", icon: <Target />, unlocked: false, color: "bg-soft" },
    { title: "Lab Rat", icon: <Star />, unlocked: false, color: "bg-soft" },
  ];

  return (
    <div className="bg-canvas min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-20 text-center md:text-left">
           <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-black uppercase tracking-[0.5em] text-electric mb-4"
            >
              Radical Loyalty
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[4rem] md:text-[8rem] font-black text-ink leading-[0.8] tracking-tighter italic"
            >
              RADICAL <br /> <span className="text-sun">REWARDS.</span>
            </motion.h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {/* Profile Status Card */}
           <div className="lg:col-span-2 space-y-12">
              <div className="bg-ink text-white p-12 rounded-[4rem] border-8 border-ink shadow-[20px_20px_0px_#FFD700] relative overflow-hidden">
                 <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
                    <div>
                       <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block">Current Status</span>
                       <h2 className="text-6xl font-black italic uppercase leading-none mb-4 text-sun">SUPERCHARGED.</h2>
                       <p className="text-lg font-bold uppercase tracking-widest text-white/60">RADICAL_MEMBER_992</p>
                    </div>
                    <div className="text-right">
                       <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block text-right">Energy Balance</span>
                       <div className="text-8xl font-black italic text-white flex items-center justify-end">
                          1,240 <span className="text-3xl ml-4 opacity-50">KJ</span>
                       </div>
                    </div>
                 </div>
                 
                 {/* Progress Bar */}
                 <div className="mt-12 h-6 bg-white/10 rounded-full overflow-hidden p-1">
                    <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: "65%" }}
                       transition={{ duration: 1.5, ease: "circOut" }}
                       className="h-full bg-sun rounded-full"
                    />
                 </div>
                 <div className="mt-4 flex justify-between text-[10px] font-black uppercase tracking-widest text-white/40">
                    <span>Initiate</span>
                    <span>Radical Status</span>
                    <span>1,500 KJ Target</span>
                 </div>

                 {/* Decorative background pulse */}
                 <div className="absolute top-1/2 left-1/2 -underline-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sun/5 rounded-full blur-[100px] pointer-events-none" />
              </div>

              {/* Tiers List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { title: "Next Drop", desc: "Unlock exclusive Kinetic Lab hoodie access.", icon: <Gift />, target: "300 KJ Remaining" },
                   { title: "Free Grind", icon: <Zap />, target: "Unlocking at 1,500 KJ", desc: "One bag of beans on the lab." }
                 ].map((tier, i) => (
                   <div key={i} className="p-8 bg-white border-4 border-ink rounded-3xl shadow-[8px_8px_0px_#111] flex items-center gap-8 group hover:translate-y-[-4px] transition-transform">
                      <div className="w-16 h-16 bg-soft rounded-2xl flex items-center justify-center border-4 border-ink shrink-0 text-electric">
                         {tier.icon}
                      </div>
                      <div>
                         <h3 className="font-black uppercase italic text-xl">{tier.title}</h3>
                         <p className="font-bold text-ink/60 uppercase text-[10px] tracking-widest mb-1">{tier.desc}</p>
                         <p className="font-black text-[10px] uppercase text-pop">{tier.target}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Stickers / Milestones Column */}
           <div className="space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter italic border-b-4 border-ink pb-4">Digital Stickers</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                 {stickers.map((sticker, i) => (
                   <motion.div 
                     key={i}
                     whileHover={{ rotate: [-5, 5, -5] }}
                     className={`aspect-square p-8 rounded-full border-4 border-ink flex flex-col items-center justify-center gap-2 ${sticker.color} ${!sticker.unlocked && "opacity-20 grayscale"} cursor-pointer relative group`}
                   >
                      <div className="text-ink">
                         {sticker.icon}
                      </div>
                      <span className="text-[8px] font-black uppercase tracking-widest leading-none">{sticker.title}</span>
                      
                      {sticker.unlocked && (
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-ink text-white rounded-full flex items-center justify-center text-xs shadow-[2px_2px_0px_#FFD700]">
                           ✓
                        </div>
                      )}
                   </motion.div>
                 ))}
              </div>

              <div className="p-8 bg-pop text-white border-4 border-ink rounded-[2rem] shadow-[8px_8px_0px_#111]">
                 <Trophy className="mb-4" size={32} />
                 <h4 className="font-black uppercase italic text-xl mb-2">Join the Elite.</h4>
                 <p className="text-[10px] font-black uppercase tracking-widest leading-none opacity-80">
                    Rank: #420 Radical in the Neon District.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
