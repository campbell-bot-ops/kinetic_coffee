"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, Minus, ShoppingBag, Star, Zap, Shield } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { TextReveal } from "@/components/ui/TextReveal";
import { Parallax } from "@/components/ui/Parallax";

const products = [
  {
    id: "1",
    name: "Electric Morning",
    price: "$24.00",
    category: "Signature",
    description: "High-energy roast that hits like a bolt of lightning. Perfect for early grinders and those who need a serious wake-up call. Sourced from the highest peak and roasted with maximum energy.",
    image: "/products/media__1775691524496.png",
    specs: ["Medium-Dark", "High Caffeine", "Caramel Notes"]
  },
  {
    id: "2",
    name: "Neon Cold Brew",
    price: "$18.00",
    category: "Cold Brew",
    description: "Smooth, filtered through light. Best served over ice while watching the sunrise. A slow-steeped masterpiece that keeps you chill but focused.",
    image: "/products/media__1775691535635.png",
    specs: ["Cold Steeped", "Mellow", "Citrus Notes"]
  },
  {
    id: "3",
    name: "Afternoon Drip",
    price: "$22.00",
    category: "Roasts",
    description: "Medium body with a chill aftertaste. Made for the creative slump and the late-night sessions. Perfectly balanced to keep the flow alive.",
    image: "/products/media__1775691543678.png",
    specs: ["Medium Roast", "Floral", "Tea-like Finish"]
  },
  {
    id: "4",
    name: "Kinetic Tee",
    price: "$45.00",
    category: "Merch",
    description: "Premium cotton, maximum drip. Wear the energy of the lab. Designed for comfort and high-motion activities. No cap, this is the best shirt you'll ever own.",
    image: "/products/media__1775691554328.png",
    specs: ["Heavyweight Cotton", "Oversized Fit", "Logo Print"]
  },
  {
    id: "5",
    name: "Solar Flare",
    price: "$26.00",
    category: "Signature",
    description: "Light roast with citrus notes that pop like a summer day. Bright, acidic, and full of life. It's sunshine in a cup.",
    image: "/products/media__1775691564407.png",
    specs: ["Light Roast", "Bright Acidity", "Orange Blossom"]
  },
  {
    id: "6",
    name: "Midnight Fuel",
    price: "$24.00",
    category: "Roasts",
    description: "Dark, intense, no cap. For the all-nighters and early risers. Deep smoky undertones with a heavy body that lingers.",
    image: "/products/media__1775691607460.png",
    specs: ["Dark Roast", "Smoky", "Chocolate Body"]
  }
];

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);
  if (!product) return <div className="p-20 text-center font-black">Product Not Found. Sad vibes.</div>;

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { ...product, quantity, image: product.image }
    });
  };

  return (
    <div className="pt-32 pb-32 px-6 bg-canvas min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button 
          onClick={() => router.back()}
          whileHover={{ x: -10 }}
          className="mb-12 flex items-center gap-2 text-ink/60 hover:text-ink font-black uppercase text-xs tracking-widest transition-all"
        >
          <ArrowLeft size={18} />
          Go Back
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Image Layer with Parallax */}
          <Parallax offset={40} className="w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`aspect-square rounded-[4rem] border-8 border-ink shadow-[24px_24px_0px_#111111] flex items-center justify-center relative overflow-hidden group ${
                parseInt(product.id) % 3 === 0 ? 'bg-sun' : parseInt(product.id) % 3 === 1 ? 'bg-electric' : 'bg-pop'
              }`}
            >
              <span className="text-white text-[15rem] font-black italic opacity-20 group-hover:scale-110 transition-transform duration-1000 select-none">
                {product.name.charAt(0)}
              </span>
              
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
              />

              {/* Real Image */}
              <img 
                src={product.image} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </motion.div>
          </Parallax>

          {/* Content Layer */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-5 py-2 bg-ink text-white rounded-full text-xs font-black uppercase tracking-widest border-4 border-ink shadow-[4px_4px_0px_#0070F3] mb-8 inline-block"
              >
                {product.category}
              </motion.span>
              <div className="mb-6">
                <TextReveal text={product.name} className="text-6xl md:text-8xl font-black text-ink tracking-tighter leading-none" />
              </div>
              <p className="text-4xl font-black text-electric tracking-tighter">{product.price}</p>
            </div>

            <p className="text-xl text-ink/60 font-bold leading-relaxed max-w-xl">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-4">
              {product.specs?.map((spec, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-6 py-3 bg-soft rounded-full border-4 border-ink text-sm font-black uppercase tracking-tight"
                >
                  {spec}
                </motion.div>
              ))}
            </div>

            <div className="py-12 border-y-4 border-ink/5 space-y-8">
              <div className="flex items-center gap-8">
                <span className="text-xs font-black uppercase tracking-widest text-ink/40 w-24">Quantity</span>
                <div className="flex items-center gap-8 bg-white rounded-full px-8 py-4 border-4 border-ink shadow-[4px_4px_0px_#111111]">
                   <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-ink hover:text-pop transition-colors">
                     <Minus size={24} />
                   </button>
                   <span className="text-2xl font-black w-8 text-center">{quantity}</span>
                   <button onClick={() => setQuantity(quantity + 1)} className="text-ink hover:text-electric transition-colors">
                     <Plus size={24} />
                   </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button 
                  onClick={handleAddToCart}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-grow py-6 bg-sun text-ink rounded-full border-4 border-ink font-black text-xl uppercase tracking-widest flex items-center justify-center gap-4 hover:translate-y-[4px] hover:shadow-none shadow-[10px_10px_0px_#111111] transition-all group"
                >
                  Add to Bag
                  <ShoppingBag size={24} className="group-hover:rotate-12 transition-transform" />
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
               {[
                 { icon: Zap, label: "Fast Fuel" },
                 { icon: Star, label: "Top Rated" },
                 { icon: Shield, label: "Secure" }
               ].map((item, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex flex-col items-center gap-2"
                 >
                    <div className="w-12 h-12 bg-soft rounded-xl flex items-center justify-center border-4 border-ink">
                       <item.icon size={20} className="text-ink" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-ink/40">{item.label}</span>
                 </motion.div>
               ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
