"use client";

import { motion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  // Simplified to a basic non-blocking wrapper to restore immediate visibility
  return (
    <div className="w-full h-full">
      {children}
    </div>
  );
}
