"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="bg-canvas min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-black uppercase tracking-[0.5em] text-pop mb-4"
          >
            Data Transparency
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[5rem] md:text-[8rem] font-black text-ink leading-[0.8] tracking-tighter italic"
          >
            PRIVACY <br /> <span className="text-electric">PROTOCOL.</span>
          </motion.h1>
        </header>

        <section className="space-y-12 text-ink">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t-4 border-ink pt-12">
            <span className="text-xl font-black uppercase tracking-widest italic">01. Collection</span>
            <div className="md:col-span-2 space-y-6 font-bold text-lg leading-relaxed text-ink/60">
              <p>We only collect the kinetic data required to fulfill your roasts. This includes name, shipping coordinates, and communication channels.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t-4 border-ink pt-12">
            <span className="text-xl font-black uppercase tracking-widest italic">02. Security</span>
            <div className="md:col-span-2 space-y-6 font-bold text-lg leading-relaxed text-ink/60">
              <p>Your protocols are safe with us. We use high-frequency encryption to protect your personal and payment data. We never sell your data to non-radicals.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
