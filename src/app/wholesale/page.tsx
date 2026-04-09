"use client";

import { motion } from "framer-motion";
import { Briefcase, Rocket, Globe } from "lucide-react";

export default function WholesalePage() {
  return (
    <div className="bg-canvas min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <header className="text-center mb-24 max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-black uppercase tracking-[0.5em] text-pop mb-4"
          >
            B2B Partnerships
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[4rem] md:text-[7rem] font-black text-ink leading-[0.8] tracking-tighter italic mb-8"
          >
            KINETIC FOR <br /> <span className="text-sun">BUSINESS.</span>
          </motion.h1>
          <p className="text-xl font-bold text-ink/40 uppercase tracking-widest leading-relaxed">
            Elevate your office, cafe, or space with high-frequency roasts. Join the radical supply network.
          </p>
        </header>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Partnership Benefits */}
          <div className="space-y-8">
            {[
              { title: "Volume Pricing", text: "Scale your caffeine output with competitive wholesale tiers.", icon: <Briefcase /> },
              { title: "Fast Dispatch", text: "Direct lab-to-shop shipping within 48 hours of roasting.", icon: <Rocket /> },
              { title: "Global Reach", text: "Supplying radicals across all sectors and coordinates.", icon: <Globe /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border-4 border-ink rounded-3xl flex items-center gap-8 bg-white shadow-[8px_8px_0px_#111]"
              >
                <div className="w-16 h-16 bg-soft rounded-2xl flex items-center justify-center border-4 border-ink shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-black uppercase italic text-xl">{item.title}</h3>
                  <p className="font-bold text-ink/60 uppercase text-[10px] tracking-widest">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Wholesale Form */}
          <div className="bg-ink text-white p-12 rounded-[4rem] border-8 border-ink shadow-[20px_20px_0px_#FFD700]">
            <form 
              action="https://formsubmit.co/stillstudio.ng@gmail.com" 
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New Wholesale Request - Kinetic Lab" />
              <input type="hidden" name="_template" value="table" />

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Entity / Business Name</label>
                <input 
                  type="text" 
                  name="business_name" 
                  required 
                  placeholder="WHAT IS THE HUB?" 
                  className="w-full p-6 bg-white/10 border-4 border-white/20 rounded-2xl font-black uppercase tracking-widest focus:bg-white/20 focus:outline-none focus:border-sun transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Contact Pulse / Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="POINT OF CONTACT?" 
                  className="w-full p-6 bg-white/10 border-4 border-white/20 rounded-2xl font-black uppercase tracking-widest focus:bg-white/20 focus:outline-none focus:border-sun transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Sector / Vibe</label>
                <select 
                  name="sector" 
                  className="w-full p-6 bg-white/10 border-4 border-white/20 rounded-2xl font-black uppercase tracking-widest focus:bg-white/20 focus:outline-none focus:border-sun transition-all appearance-none"
                >
                  <option value="cafe">Cafe / Restaurant</option>
                  <option value="office">Creative Office</option>
                  <option value="retail">Retail Hub</option>
                  <option value="other">Other Radical Space</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full py-6 bg-sun text-ink font-black uppercase tracking-[0.2em] rounded-full border-4 border-ink shadow-[8px_8px_0px_#0070F3] hover:translate-y-[-4px] active:translate-y-0 transition-transform"
              >
                REQUEST PARTNERSHIP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
