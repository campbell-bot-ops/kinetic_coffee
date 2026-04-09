"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Package } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [orderNumber] = useState<string>(() => 
    "KC-" + Math.random().toString(36).substring(2, 9).toUpperCase()
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-crema">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full bg-white p-12 rounded-[3.5rem] border border-aluminum/10 shadow-2xl text-center space-y-12"
      >
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-onyx text-crema rounded-full flex items-center justify-center mb-10 shadow-xl shadow-onyx/20 relative">
             <CheckCircle size={48} />
             <motion.div 
               animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute inset-0 border-2 border-onyx rounded-full"
             />
          </div>
          <h1 className="text-5xl font-black text-onyx tracking-tighter mb-4 uppercase">Protocol Success</h1>
          <p className="text-xl text-aluminum font-medium">Your order has been ingested. The kinetic transition has begun.</p>
        </div>

        <div className="p-8 bg-crema rounded-3xl space-y-4">
          <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-aluminum">
             <span>Order Number</span>
             <span className="text-onyx">{orderNumber}</span>
          </div>
          <div className="h-px bg-aluminum/10" />
          <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-aluminum">
             <span>Status</span>
             <span className="text-green-600">INGESTED</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link
            href={`/order/${orderNumber}`}
            className="w-full py-6 bg-onyx text-crema rounded-full font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-onyx/20"
          >
            Track Transition
            <Package size={18} />
          </Link>
          <Link
            href="/"
            className="text-sm font-black uppercase tracking-widest text-aluminum hover:text-onyx transition-colors flex items-center justify-center gap-2"
          >
            Return Home
            <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
