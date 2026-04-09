"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Story", href: "/story" },
  { name: "Shop", href: "/shop" },
  { name: "Visit", href: "/visit" },
];

export function Navbar() {
  const pathname = usePathname();
  const { state, dispatch } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
      <div className="relative w-full max-w-[95vw] md:max-w-fit flex flex-col items-center">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="pointer-events-auto flex items-center justify-between md:justify-start gap-2 p-2 bg-canvas/90 backdrop-blur-xl border-4 border-ink rounded-full shadow-[8px_8px_0px_#111111] w-full md:w-auto"
        >
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="px-3 md:px-6 py-2.5 text-xs md:text-sm font-black text-ink tracking-tight transition-all hover:translate-y-[-2px] group flex items-center gap-2"
          >
            <div className="w-4 h-4 bg-sun rounded-full transition-transform group-hover:scale-150 group-hover:bg-pop" />
            <span className="inline">KINETIC</span>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-0.5 px-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2.5 text-xs font-bold uppercase rounded-full transition-all duration-300 ${
                    isActive ? "text-white" : "text-ink/60 hover:text-ink hover:bg-soft"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-electric rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 bg-white text-ink rounded-full border-2 border-ink flex items-center justify-center"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                dispatch({ type: "TOGGLE_DRAWER" });
              }}
              className="relative p-3 bg-sun text-ink rounded-full border-2 border-ink hover:scale-110 active:scale-95 transition-all shadow-[4px_4px_0px_#111111] flex items-center justify-center group"
            >
              <ShoppingBag size={18} className="group-hover:rotate-12 transition-transform" />
              {itemCount > 0 && (
                <motion.span
                  key={itemCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-pop text-white text-[10px] font-black flex items-center justify-center rounded-full border-2 border-ink"
                >
                  {itemCount}
                </motion.span>
              )}
            </button>
          </div>
        </motion.div>

        {/* Mobile Expanded Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-0 right-0 md:hidden pointer-events-auto mt-4 p-4 bg-canvas border-4 border-ink rounded-[2rem] shadow-[8px_8px_0px_#111111] flex flex-col gap-2"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-8 py-4 rounded-2xl text-lg font-black uppercase tracking-widest border-2 border-transparent transition-all ${
                    pathname === link.href ? "bg-electric text-white border-ink" : "text-ink/60 hover:bg-soft"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
