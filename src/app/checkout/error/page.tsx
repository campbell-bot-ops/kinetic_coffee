"use client";

import { motion } from "framer-motion";
import { AlertCircle, RefreshCw, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-crema">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full bg-white p-12 rounded-[3.5rem] border border-aluminum/10 shadow-2xl text-center space-y-12"
      >
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-red-500 text-crema rounded-full flex items-center justify-center mb-10 shadow-xl shadow-red-500/20">
             <AlertCircle size={48} />
          </div>
          <h1 className="text-5xl font-black text-onyx tracking-tighter mb-4 uppercase">Protocol Failure</h1>
          <p className="text-xl text-aluminum font-medium">We encountered a turbulence in the payment stream. The transaction could not be stabilized.</p>
        </div>

        <div className="p-8 bg-red-50 rounded-3xl border border-red-100 flex items-center gap-4 text-left">
           <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
           <p className="text-sm font-bold text-red-700">Error Code: STABILITY_THRESHOLD_EXCEEDED. Please verify your payment details and re-initiate the sequence.</p>
        </div>

        <div className="flex flex-col gap-4">
          <Link
            href="/checkout"
            className="w-full py-6 bg-onyx text-crema rounded-full font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-onyx/20"
          >
            Retry Protocol
            <RefreshCw size={18} />
          </Link>
          <Link
            href="/shop"
            className="text-sm font-black uppercase tracking-widest text-aluminum hover:text-onyx transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to Shop
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
