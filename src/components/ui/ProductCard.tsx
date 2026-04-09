"use client";

import { motion } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export type Product = {
  id: string;
  name: string;
  price: string;
  category: string;
  description?: string;
  image?: string;
};

export function ProductCard({ id, name, price, category, description, image }: Product) {
  const { dispatch } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: "ADD_ITEM",
      payload: { id, name, price, category, quantity: 1, image }
    });
  };

  return (
    <Link href={`/shop/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative bg-white border-4 border-ink rounded-[2.5rem] p-6 shadow-[8px_8px_0px_#111111] hover:shadow-[12px_12px_0px_#0070F3] transition-all cursor-pointer flex flex-col h-full overflow-hidden"
      >
        {/* Playful Image Container */}
        <div className={`relative aspect-square rounded-2xl mb-6 overflow-hidden border-2 border-ink ${
          parseInt(id) % 3 === 0 ? 'bg-sun' : parseInt(id) % 3 === 1 ? 'bg-electric' : 'bg-pop'
        }`}>
          {image ? (
             <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-9xl font-black italic opacity-20">{name.charAt(0)}</span>
            </div>
          )}
          
          {/* Quick View Tag */}
          <div className="absolute top-4 right-4 p-2 bg-white rounded-full border-2 border-ink opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
             <ArrowUpRight size={20} className="text-ink" />
          </div>
        </div>

        <div className="space-y-4 flex-grow">
          <div>
            <span className="px-3 py-1 bg-ink text-white text-[10px] font-black uppercase tracking-widest rounded-full">{category}</span>
            <h3 className="text-2xl font-black text-ink tracking-tight mt-1 group-hover:text-electric transition-colors duration-300">{name}</h3>
          </div>
          
          <p className="text-sm font-bold text-ink/60 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-8 pt-6 border-t-2 border-ink/5">
          <span className="text-2xl font-black text-ink tracking-tighter group-hover:text-pop transition-colors duration-300">{price}</span>
          <button
            onClick={handleAdd}
            className="w-12 h-12 bg-sun text-ink rounded-full flex items-center justify-center border-4 border-ink shadow-[4px_4px_0px_#111111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:scale-90 group/btn"
          >
            <Plus size={24} className="group-hover/btn:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </motion.div>
    </Link>
  );
}
