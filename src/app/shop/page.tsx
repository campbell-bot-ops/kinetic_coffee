"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/ProductCard";
import { useState } from "react";
import { TextReveal } from "@/components/ui/TextReveal";

const categories = ["All Vibes", "Signature", "Roasts", "Cold Brew", "Merch"];

const products = [
  {
    id: "1",
    name: "Electric Morning",
    price: "$24.00",
    category: "Signature",
    description: "High-energy roast that hits like a bolt of lightning. Perfect for early grinders.",
    image: "/products/media__1775691524496.png"
  },
  {
    id: "2",
    name: "Neon Cold Brew",
    price: "$18.00",
    category: "Cold Brew",
    description: "Smooth, filtered through light. Best served over ice while watching the sunrise.",
    image: "/products/media__1775691535635.png"
  },
  {
    id: "3",
    name: "Afternoon Drip",
    price: "$22.00",
    category: "Roasts",
    description: "Medium body with a chill aftertaste. Made for the creative slump.",
    image: "/products/media__1775691543678.png"
  },
  {
    id: "4",
    name: "Kinetic Tee",
    price: "$45.00",
    category: "Merch",
    description: "Premium cotton, maximum drip. Wear the energy.",
    image: "/products/media__1775691554328.png"
  },
  {
    id: "5",
    name: "Solar Flare",
    price: "$26.00",
    category: "Signature",
    description: "Light roast with citrus notes that pop like a summer day.",
    image: "/products/media__1775691564407.png"
  },
  {
    id: "6",
    name: "Midnight Fuel",
    price: "$24.00",
    category: "Roasts",
    description: "Dark, intense, no cap. For the all-nighters and early risers.",
    image: "/products/media__1775691607460.png"
  }
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All Vibes");

  const filteredProducts = activeCategory === "All Vibes" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-32 px-6 bg-canvas overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-sun text-ink text-[10px] font-black uppercase tracking-[0.2em] mb-8 border-4 border-ink shadow-[4px_4px_0px_#111111]"
          >
            Freshly Roasted ✨
          </motion.div>
          
          <div className="mb-12">
            <h1 className="text-[6rem] md:text-[10rem] font-black text-ink leading-[0.8] tracking-tighter select-none italic text-depth">
              THE MENU.
            </h1>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mt-16">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all border-4 border-ink shadow-[4px_4px_0px_#111111] active:shadow-none ${
                  activeCategory === category 
                    ? "bg-sun text-ink" 
                    : "bg-white text-ink/40 hover:text-ink hover:bg-soft"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Product Grid - Simplified for maximum visibility reliability */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

