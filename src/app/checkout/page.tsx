"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { state, dispatch } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const total = state.items.reduce((acc, item) => {
    const priceNumeric = parseFloat(item.price.replace("$", ""));
    return acc + priceNumeric * item.quantity;
  }, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      dispatch({ type: "CLEAR_CART" });
      router.push("/checkout/success");
    }, 2000);
  };

  if (state.items.length === 0 && !isProcessing) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-black text-onyx mb-4 tracking-tighter">YOUR BAG IS EMPTY</h2>
        <p className="text-aluminum mb-8">You need items in your bag to checkout.</p>
        <Link href="/shop" className="px-12 py-4 bg-onyx text-crema rounded-full font-black text-xs uppercase tracking-widest shadow-xl">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
      {/* Left side: Form */}
      <div className="lg:col-span-7 space-y-12">
        <div>
          <Link href="/shop" className="inline-flex items-center gap-2 text-aluminum hover:text-onyx transition-colors text-sm font-bold uppercase tracking-widest mb-12">
            <ArrowLeft size={16} />
            Back to Shop
          </Link>
          <h1 className="text-6xl font-black text-onyx tracking-tighter mb-4">CHECKOUT</h1>
          <p className="text-aluminum font-medium">Complete your order to start the kinetic transition.</p>
        </div>

        <form onSubmit={handleCheckout} className="space-y-10">
          <section className="space-y-6">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-aluminum border-b border-aluminum/10 pb-4">Shipping Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <input required placeholder="First Name" className="p-4 bg-white border border-aluminum/10 rounded-2xl focus:outline-none focus:border-onyx transition-colors" />
              <input required placeholder="Last Name" className="p-4 bg-white border border-aluminum/10 rounded-2xl focus:outline-none focus:border-onyx transition-colors" />
            </div>
            <input required placeholder="Street Address" className="w-full p-4 bg-white border border-aluminum/10 rounded-2xl focus:outline-none focus:border-onyx transition-colors" />
            <div className="grid grid-cols-2 gap-4">
              <input required placeholder="City" className="p-4 bg-white border border-aluminum/10 rounded-2xl focus:outline-none focus:border-onyx transition-colors" />
              <input required placeholder="Zip Code" className="p-4 bg-white border border-aluminum/10 rounded-2xl focus:outline-none focus:border-onyx transition-colors" />
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-aluminum border-b border-aluminum/10 pb-4">Payment Method</h2>
            <div className="p-6 bg-onyx text-crema rounded-3xl flex items-center justify-between shadow-2xl overflow-hidden relative group">
               <div className="flex items-center gap-4 relative z-10">
                 <CreditCard size={32} />
                 <div>
                   <p className="font-bold tracking-tight">Kinetic Secure Pay</p>
                   <p className="text-[10px] text-crema/40 uppercase tracking-widest">Encrypted Terminal</p>
                 </div>
               </div>
               <ShieldCheck className="text-crema/10 absolute top-1/2 right-10 -translate-y-1/2 scale-[3] group-hover:rotate-12 transition-transform" />
            </div>
          </section>

          <button
            type="submit"
            disabled={isProcessing}
            className="w-full py-6 bg-onyx text-crema rounded-full font-black text-lg uppercase tracking-[0.2em] relative overflow-hidden group disabled:opacity-50 transition-all"
          >
            {isProcessing ? (
              <span className="flex items-center justify-center gap-3">
                 <div className="w-5 h-5 border-2 border-crema/20 border-t-crema rounded-full animate-spin" />
                 Processing Protocol...
              </span>
            ) : (
              <>
                <span className="relative z-10">PLACE ORDER — ${total.toFixed(2)}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-crema/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Right side: Summary */}
      <div className="lg:col-span-5 h-fit sticky top-40">
        <div className="p-10 bg-crema border border-aluminum/10 rounded-[3rem] space-y-10">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-aluminum pb-4 border-b border-aluminum/10">Order Summary</h2>
          
          <div className="space-y-6">
            {state.items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-platinum rounded-lg flex items-center justify-center overflow-hidden border border-onyx/5">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="font-black text-onyx/20">{item.name.charAt(0)}</div>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-onyx tracking-tight">{item.name}</p>
                    <p className="text-[10px] text-aluminum uppercase tracking-widest font-black">QTY: {item.quantity}</p>
                  </div>
                </div>
                <span className="font-bold text-onyx">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-aluminum/10">
            <div className="flex justify-between text-sm text-aluminum font-medium">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-aluminum font-medium">
              <span>Shipping</span>
              <span className="text-onyx uppercase font-black">Complimentary</span>
            </div>
            <div className="flex justify-between text-2xl font-black text-onyx tracking-tighter pt-4">
              <span>TOTAL</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="pt-6 flex items-center gap-3 text-aluminum">
             <Truck size={18} />
             <p className="text-[10px] uppercase font-black tracking-widest">Priority Transition: 2-3 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
