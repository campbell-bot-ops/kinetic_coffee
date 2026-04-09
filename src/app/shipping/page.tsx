"use client";

import { motion } from "framer-motion";

export default function ShippingPage() {
  return (
    <div className="bg-canvas min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-black uppercase tracking-[0.5em] text-electric mb-4"
          >
            Logistics & Flow
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[5rem] md:text-[8rem] font-black text-ink leading-[0.8] tracking-tighter italic"
          >
            SHIPPING <br /> <span className="text-sun">POLICY.</span>
          </motion.h1>
        </header>

        <section className="space-y-12 text-ink">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t-4 border-ink pt-12">
            <span className="text-xl font-black uppercase tracking-widest italic">01. Delivery</span>
            <div className="md:col-span-2 space-y-6 font-bold text-lg leading-relaxed text-ink/60">
              <p>We dispatch all radical roasts within 24-48 hours of ordering to ensure maximum kinetic energy. All beans are roasted to order.</p>
              <p>Standard delivery takes 3-5 business days within the Neon District and surroundings. Global shipping timelines vary by sector.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t-4 border-ink pt-12">
            <span className="text-xl font-black uppercase tracking-widest italic">02. Returns</span>
            <div className="md:col-span-2 space-y-6 font-bold text-lg leading-relaxed text-ink/60">
              <p>Due to the perishable nature of coffee, we do not accept returns on roasted beans. However, if your pulse isn&apos;t elevated by the quality, contact us immediately.</p>
              <p>For merchandise and hardware, returns are accepted within 14 days of receipt in original, unopened packaging.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t-4 border-ink pt-12">
            <span className="text-xl font-black uppercase tracking-widest italic">03. Support</span>
            <div className="md:col-span-2 space-y-6 font-bold text-lg leading-relaxed text-ink/60">
              <p>Questions about your shipment? <br /> Email: <span className="text-electric">stillstudio.ng@gmail.com</span></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
