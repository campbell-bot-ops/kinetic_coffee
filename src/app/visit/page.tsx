"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, ArrowUpRight, Star } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";

export default function VisitPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-40 pb-40 bg-canvas overflow-hidden">
      <div className="mb-32 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-electric text-white text-[10px] font-black uppercase tracking-[0.2em] mb-12 border-4 border-ink shadow-[4px_4px_0px_#111111]"
        >
          Grab a Cup ✨
        </motion.div>
        
        <div className="mb-10">
          <TextReveal text="COME SAY HI." className="text-mega text-ink leading-none select-none italic text-depth" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch">
        {/* Contact Info */}
        <div className="space-y-12 flex flex-col justify-between">
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-ink/40 flex items-center gap-2">
                <Star size={14} className="text-sun fill-sun" />
                Main Store
              </h2>
              <div className="flex items-start gap-6">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="p-4 bg-sun rounded-2xl border-4 border-ink shadow-[4px_4px_0px_#111111]"
                >
                   <MapPin size={32} className="text-ink" />
                </motion.div>
                <div>
                  <p className="text-4xl font-black text-ink tracking-tight leading-none">Adetokunbo Ademola St</p>
                  <p className="text-xl text-ink/60 font-bold mt-2">Victoria Island, Lagos</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-ink/40 flex items-center gap-2">
                <Clock size={14} className="text-electric" />
                Doors Open
              </h2>
              <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-2xl font-black text-ink tracking-tight">
                <span className="opacity-60">Mon — Fri</span>
                <span className="text-right">07:00 – 21:00</span>
                <span className="opacity-60">Sat — Sun</span>
                <span className="text-right">08:00 – 22:00</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-12 border-t-8 border-ink/5 space-y-4"
          >
            <a href="tel:+234800KINETIC" className="flex items-center justify-between group p-8 bg-white rounded-[2rem] border-4 border-ink shadow-[8px_8px_0px_#111111] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-pop rounded-full flex items-center justify-center border-4 border-ink text-white group-hover:rotate-12 transition-transform">
                    <Phone size={28} />
                  </div>
                  <span className="text-3xl font-black text-ink tracking-tight">+234 800 KINETIC</span>
                </div>
                <ArrowUpRight className="text-ink/20 group-hover:text-ink transition-all" />
            </a>
          </motion.div>
        </div>

        {/* Working Interactive Map with colorful border */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square md:aspect-auto h-full bg-soft rounded-[4rem] overflow-hidden border-8 border-ink shadow-[24px_24px_0px_#0070F3] min-h-[500px]"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15859.397223631613!2d3.4184643!3d6.41334645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4ca07d9f7e7%3A0xc3f8e58a2d04a625!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1712606600000!5m2!1sen!2sng"
            className="absolute inset-0 w-full h-full grayscale-[0.5] hover:grayscale-0 transition-all duration-700" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
          />
          <div className="absolute top-8 right-8 p-4 bg-white rounded-full border-4 border-ink shadow-[4px_4px_0px_#111111] animate-bounce">
             <MapPin size={24} className="text-pop fill-pop" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
