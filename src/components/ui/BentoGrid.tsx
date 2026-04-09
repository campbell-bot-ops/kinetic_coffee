"use client";

import { motion } from "framer-motion";
import { Zap, Heart, Coffee } from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    description: "Ordered today, roasted tomorrow, at your door by the weekend.",
    icon: Zap,
    className: "md:col-span-2 bg-electric text-white",
  },
  {
    title: "Direct Sourced",
    description: "We know our farmers by name. No middleman, just quality.",
    icon: Heart,
    className: "md:col-span-1 bg-pop text-white",
  },
  {
    title: "The Ultimate Vibe",
    description: "Our beans are picked for high-energy mornings and chill afternoons.",
    icon: Coffee,
    className: "md:col-span-3 bg-sun text-ink",
  },
];

export function BentoGrid() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
            className={`p-10 rounded-[3rem] border-4 border-ink shadow-[12px_12px_0px_#111111] flex flex-col justify-between h-full min-h-[350px] transition-all cursor-default ${feature.className}`}
          >
            <div className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-8 border-4 border-ink shadow-[4px_4px_0px_rgba(0,0,0,0.2)] ${feature.className.includes('sun') ? 'bg-white' : 'bg-sun'}`}>
              <feature.icon size={32} className="text-ink" />
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter leading-none">
                {feature.title}
              </h3>
              <p className="text-xl opacity-80 leading-snug font-bold">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
