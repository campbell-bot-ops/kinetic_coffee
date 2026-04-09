"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function MainFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-ink text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="text-6xl font-black tracking-tighter italic">
              KINETIC<span className="text-sun">.</span>
            </Link>
            <p className="text-white/40 font-bold uppercase text-xs tracking-widest leading-loose max-w-xs">
              Powered by high-frequency energy. <br /> 
              Roasted in the Neon District, <br /> 
              Victoria Island, Lagos.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">Directory</span>
            <Link href="/shop" className="text-lg font-black uppercase hover:text-sun transition-colors">The Menu</Link>
            <Link href="/lab" className="text-lg font-black uppercase hover:text-sun transition-colors">The Lab</Link>
            <Link href="/journal" className="text-lg font-black uppercase hover:text-sun transition-colors">The Feed</Link>
            <Link href="/rewards" className="text-lg font-black uppercase hover:text-sun transition-colors">Rewards</Link>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-6">
            <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">Support</span>
            <Link href="/shipping" className="text-lg font-black uppercase hover:text-electric transition-colors">Shipping</Link>
            <Link href="/wholesale" className="text-lg font-black uppercase hover:text-electric transition-colors">Wholesale</Link>
            <Link href="/contact" className="text-lg font-black uppercase hover:text-electric transition-colors">Contact</Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-6">
            <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">Legal</span>
            <Link href="/privacy" className="text-lg font-black uppercase hover:text-pop transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-lg font-black uppercase hover:text-pop transition-colors">Terms of Use</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
          <div className="flex items-center gap-4">
            <span>© {currentYear} KINETIC COFFEE LAB</span>
          </div>
          <div className="flex items-center gap-8">
             <span className="flex items-center gap-2">
               <div className="w-2 h-2 bg-sun rounded-full" />
               Status: OPERATIONAL
             </span>
             <span>LAGOS, NGA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
