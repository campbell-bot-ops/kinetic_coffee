"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-canvas min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Contact Info */}
        <div className="space-y-12">
          <header>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xs font-black uppercase tracking-[0.5em] text-sun mb-4"
            >
              Direct Link
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[5rem] md:text-[8rem] font-black text-ink leading-[0.8] tracking-tighter italic"
            >
              CONTACT <br /> <span className="text-electric">THE LAB.</span>
            </motion.h1>
          </header>

          <div className="space-y-8 font-black uppercase tracking-widest text-ink">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-soft rounded-2xl flex items-center justify-center border-4 border-ink shadow-[4px_4px_0px_#111]">
                <MapPin size={24} />
              </div>
              <p>No. 42 Radical Drive, Neon District, Lagos</p>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-soft rounded-2xl flex items-center justify-center border-4 border-ink shadow-[4px_4px_0px_#111]">
                <Mail size={24} />
              </div>
              <p>stillstudio.ng@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-12 rounded-[3rem] border-8 border-ink shadow-[16px_16px_0px_#111]">
          <form 
            action="https://formsubmit.co/stillstudio.ng@gmail.com" 
            method="POST"
            className="space-y-8"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Pulse from Kinetic Lab!" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://kinetic-coffee.vercel.app/visit" />

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-ink/40 ml-4">Identifier / Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="WHO ARE YOU?" 
                className="w-full p-6 bg-soft border-4 border-ink rounded-2xl font-black uppercase tracking-widest focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-ink/40 ml-4">Communication Channel / Email</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="WHERE TO REACH?" 
                className="w-full p-6 bg-soft border-4 border-ink rounded-2xl font-black uppercase tracking-widest focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-ink/40 ml-4">Message / Pulse</label>
              <textarea 
                name="message" 
                required 
                rows={4} 
                placeholder="SEND THE VIBE..." 
                className="w-full p-6 bg-soft border-4 border-ink rounded-2xl font-black uppercase tracking-widest focus:bg-white focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-6 bg-sun text-ink font-black uppercase tracking-[0.2em] rounded-full border-4 border-ink shadow-[6px_6px_0px_#111] hover:translate-y-[-4px] active:translate-y-0 transition-transform flex items-center justify-center gap-3"
            >
              SEND PULSE <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
