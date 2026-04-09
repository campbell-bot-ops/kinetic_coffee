"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, ArrowRight, RefreshCcw, Zap, Sun, Moon, Rocket } from "lucide-react";
import Link from "next/link";

type Step = "intro" | "energy" | "mood" | "result";

const products = {
  "1": { name: "Electric Morning", slug: "electric-morning", price: "$24.00" },
  "2": { name: "Neon Cold Brew", slug: "neon-cold-brew", price: "$18.00" },
  "3": { name: "Afternoon Drip", slug: "afternoon-drip", price: "$22.00" },
  "4": { name: "Kinetic Tee", slug: "kinetic-tee", price: "$45.00" }, // For the "Non-Coffee" vibe
};

export function VibeQuiz() {
  const [step, setStep] = useState<Step>("intro");
  const [energy, setEnergy] = useState<number>(0);
  const [resultId, setResultId] = useState<string>("1");

  const calculateResult = () => {
    if (energy > 7) setResultId("1"); // High energy needs Electric Morning
    else if (energy > 4) setResultId("2"); // Mid energy needs Neon Cold Brew
    else setResultId("3"); // Low energy needs Afternoon Drip
    setStep("result");
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white border-8 border-ink rounded-[3rem] shadow-[16px_16px_0px_#111111] overflow-hidden relative">
      <AnimatePresence mode="wait">
        {step === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="text-center py-6 md:py-12"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-sun rounded-full mx-auto mb-6 md:mb-8 flex items-center justify-center border-4 border-ink shadow-[4px_4px_0px_#111111]">
              <Coffee className="text-ink" size={32} />
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-ink uppercase tracking-tight mb-4 italic">The Vibe Check.</h2>
            <p className="text-sm md:text-base text-ink/60 font-bold mb-8">What coffee actually matches your soul today?</p>
            <button
              onClick={() => setStep("energy")}
              className="px-8 md:px-12 py-3 md:py-4 bg-electric text-white font-black uppercase tracking-widest rounded-full border-4 border-ink shadow-[6px_6px_0px_#111111] hover:scale-105 transition-transform flex items-center gap-2 mx-auto text-xs md:text-sm"
            >
              Start Pulse Test <ArrowRight size={18} />
            </button>
          </motion.div>
        )}

        {step === "energy" && (
          <motion.div
            key="energy"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="py-6 md:py-12"
          >
            <h3 className="text-lg md:text-2xl font-black text-ink uppercase italic mb-8">Current Energy Output?</h3>
            <div className="space-y-3 md:space-y-4">
              {[
                { label: "Barely Breathing (1-3)", icon: <Moon />, val: 2 },
                { label: "Cruising Speed (4-6)", icon: <Sun />, val: 5 },
                { label: "Nuclear Fusion (7-10)", icon: <Rocket />, val: 9 },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => {
                    setEnergy(opt.val);
                    setStep("mood");
                  }}
                  className="w-full p-4 md:p-6 text-left border-4 border-ink rounded-2xl md:rounded-3xl flex items-center justify-between hover:bg-soft transition-colors group"
                >
                  <span className="font-extrabold uppercase text-sm md:text-lg italic">{opt.label}</span>
                  <div className="text-ink group-hover:text-electric transition-colors scale-75 md:scale-100">{opt.icon}</div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === "mood" && (
          <motion.div
            key="mood"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="py-6 md:py-12"
          >
            <h3 className="text-lg md:text-2xl font-black text-ink uppercase italic mb-8">Describe the Vibe:</h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                "Radical", "Calm", "Chaotic", "Focused"
              ].map((mood) => (
                <button
                  key={mood}
                  onClick={calculateResult}
                  className="p-4 md:p-8 border-4 border-ink rounded-2xl md:rounded-3xl font-black uppercase text-sm md:text-xl hover:bg-pop hover:text-white transition-all shadow-[4px_4px_0px_#111111] active:shadow-none translate-y-[-4px] active:translate-y-0"
                >
                  {mood}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === "result" && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6 md:py-12"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-electric mb-2">Target Acquired</p>
            <h2 className="text-2xl md:text-5xl font-black text-ink italic mb-8 leading-tight">YOU NEED {products[resultId as keyof typeof products].name}.</h2>
            
            <div className="flex flex-col gap-4 max-w-xs mx-auto">
              <Link
                href={`/shop/${resultId}`}
                className="px-12 py-5 bg-sun text-ink font-black uppercase tracking-widest rounded-full border-4 border-ink shadow-[8px_8px_0px_#111111] hover:translate-y-[-4px] transition-transform text-center"
              >
                Go Get It
              </Link>
              <button
                onClick={() => setStep("intro")}
                className="flex items-center justify-center gap-2 text-ink/40 font-bold uppercase text-xs hover:text-ink transition-colors"
              >
                <RefreshCcw size={14} /> Retake Test
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
