"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export function CartDrawer() {
  const { state, dispatch } = useCart();

  const total = state.items.reduce((acc, item) => {
    const priceNumeric = parseFloat(item.price.replace("$", ""));
    return acc + priceNumeric * item.quantity;
  }, 0);

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch({ type: "CLOSE_DRAWER" })}
            className="fixed inset-0 bg-onyx/40 backdrop-blur-sm z-[150] cursor-pointer"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-canvas z-[200] shadow-[-20px_0px_0px_#111111] flex flex-col border-l-8 border-ink"
          >
            {/* Header */}
            <div className="p-8 border-b-4 border-ink flex items-center justify-between bg-sun">
              <div className="flex items-center gap-3">
                <ShoppingBag size={28} className="text-ink" />
                <h2 className="text-2xl font-black uppercase tracking-tight text-ink">My Bag</h2>
                <span className="bg-pop text-white text-xs font-black px-3 py-1 rounded-full border-2 border-ink">
                  {state.items.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={() => dispatch({ type: "CLOSE_DRAWER" })}
                className="p-2 hover:bg-ink hover:text-white rounded-full transition-all"
                aria-label="Close"
              >
                <X size={28} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-grow overflow-y-auto p-8 space-y-6 bg-canvas">
              {state.items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-24 h-24 bg-soft rounded-full flex items-center justify-center mb-8 border-4 border-ink shadow-[8px_8px_0px_#111111]"
                  >
                    <ShoppingBag size={40} className="text-ink/20" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-ink tracking-tight mb-4">Your bag is empty!</h3>
                  <p className="text-ink/60 font-bold max-w-[240px]">Go grab some fresh beans and fuel your day.</p>
                  <button 
                    onClick={() => dispatch({ type: "CLOSE_DRAWER" })}
                    className="mt-10 px-10 py-4 bg-electric text-white text-sm font-black uppercase tracking-widest rounded-full border-4 border-ink shadow-[6px_6px_0px_#111111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                  >
                    Explore Shop
                  </button>
                </div>
              ) : (
                state.items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-4 p-5 bg-white rounded-3xl border-4 border-ink shadow-[6px_6px_0px_#111111] group"
                  >
                    <div className="w-24 h-24 bg-soft rounded-2xl flex items-center justify-center flex-shrink-0 relative overflow-hidden border-2 border-ink">
                       {item.image ? (
                         <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                       ) : (
                         <div className="text-ink/10 text-4xl font-black italic">{item.name.charAt(0)}</div>
                       )}
                    </div>

                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-black text-ink tracking-tight text-xl leading-none">{item.name}</h4>
                          <button 
                            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                            className="text-ink/40 hover:text-pop transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-electric mt-2">{item.category}</p>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-4 bg-soft rounded-full px-4 py-2 border-2 border-ink">
                          <button 
                             onClick={() => dispatch({ 
                               type: "UPDATE_QUANTITY", 
                               payload: { id: item.id, quantity: Math.max(1, item.quantity - 1) } 
                             })}
                             className="text-ink/40 hover:text-ink transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="text-sm font-black w-4 text-center">{item.quantity}</span>
                          <button 
                             onClick={() => dispatch({ 
                               type: "UPDATE_QUANTITY", 
                               payload: { id: item.id, quantity: item.quantity + 1 } 
                             })}
                             className="text-ink/40 hover:text-ink transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <span className="font-black text-ink text-lg tracking-tight">{item.price}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="p-8 bg-sun border-t-4 border-ink space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-black text-ink/60 uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-black text-ink/60 uppercase tracking-widest">
                    <span>Shipping</span>
                    <span className="text-pop">FREE GIFT!</span>
                  </div>
                  <div className="flex justify-between text-3xl font-black text-ink tracking-tight pt-4 border-t-2 border-ink/10 mt-2">
                    <span>TOTAL</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  onClick={() => dispatch({ type: "CLOSE_DRAWER" })}
                  className="w-full py-6 bg-electric text-white rounded-full border-4 border-ink font-black text-lg uppercase tracking-[0.1em] flex items-center justify-center gap-3 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[8px_8px_0px_#111111] transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10">CHECKOUT NOW</span>
                  <ArrowRight size={22} className="relative z-10 transition-transform group-hover:translate-x-2" />
                </Link>
                
                <p className="text-[10px] text-center text-ink/40 font-black uppercase tracking-[0.3em]">
                  100% SECURE • NO CAP
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
