"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sprout, X, Leaf, ShieldCheck } from "lucide-react";

export default function GreenCarpetPremium() {
  const [isOpen, setIsOpen] = useState(false);

  const trees = [
    {
      name: "Kumbuk",
      scientific: "Arjun Tree",
      img: "/image/kumbuk.jpg",
    },
    {
      name: "Mee",
      scientific: "Mahua Tree",
      img: "/image/mee.jpg",
    },
  ];

  return (
    <div className="fixed bottom-10 right-6 z-[999] flex flex-col items-end font-montserrat text-left">
      {/* --- INFO POPUP CARD --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 100, rotate: -5 }}
            className="mb-6 w-[320px] md:w-[360px] overflow-hidden rounded-[2rem] bg-[#050505] border border-green-500/40 shadow-[0_0_60px_rgba(34,197,94,0.3)]"
          >
            {/* Top Banner - Height reduced from h-24 to h-16 */}
            <div className="h-16 bg-gradient-to-br from-green-600 to-green-900 relative flex items-center justify-center">
              <Leaf className="text-white/20 absolute left-4 scale-[2]" />
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-sm relative z-10">
                Green Carpet
              </h4>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 bg-black/20 hover:bg-black/40 p-1.5 rounded-full text-white transition-all z-20"
              >
                <X size={16} />
              </button>
            </div>

            {/* Reduced Padding to p-6 */}
            <div className="p-6 space-y-4">
              {/* Compact Tree Images */}
              <div className="flex justify-around items-center gap-4">
                {trees.map((tree, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div className="relative w-16 h-16 rounded-full border-2 border-green-500/30 overflow-hidden shadow-lg group-hover:border-green-400 transition-all">
                      <img
                        src={tree.img}
                        alt={tree.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-white font-black text-[9px] uppercase tracking-widest leading-none">
                        {tree.name}
                      </p>
                      <p className="text-green-500/60 text-[7px] italic font-medium leading-none mt-1">
                        ({tree.scientific})
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2 text-green-400 font-bold text-[9px] uppercase tracking-widest">
                  <ShieldCheck size={12} /> Global Heritage Protection
                </div>
                <p className="text-gray-100 text-[13px] font-medium leading-snug">
                  Join{" "}
                  <span className="text-green-500 font-black underline decoration-green-500/50 underline-offset-4 text-base">
                    Kumbuk & Mee
                  </span>{" "}
                  tree plantation.
                </p>
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  Protect pristine world heritage ecosystems and flora while
                  roaming the country.
                </p>
              </div>

              {/* Status Points - More Compact */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-500/5 border border-green-500/10 p-2 rounded-xl text-left">
                  <span className="block text-green-500 font-black text-[10px] leading-tight">
                    Highlands
                  </span>
                  <span className="text-[8px] text-gray-500 uppercase tracking-tighter">
                    Conservation
                  </span>
                </div>
                <div className="bg-green-500/5 border border-green-500/10 p-2 rounded-xl text-left">
                  <span className="block text-green-500 font-black text-[10px] leading-tight">
                    Endemic
                  </span>
                  <span className="text-[8px] text-gray-500 uppercase tracking-tighter">
                    Flora Support
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-green-500 text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-xl shadow-[0_5px_15px_rgba(34,197,94,0.3)] mt-2"
              >
                Contribute Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FLOATING TOGGLE BUTTON --- */}
      <div className="relative group">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-2 rounded-full border border-dashed border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
        />

        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 animate-pulse" />

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-16 w-16 md:h-20 md:w-20 rounded-full bg-black border-2 border-green-500 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all active:scale-90"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-green-500/10"
          />

          <div className="flex flex-col items-center gap-1 z-10 text-green-500">
            <Sprout
              size={28}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-[7px] font-black uppercase tracking-tighter text-white">
              Green Carpet
            </span>
          </div>

          <span className="absolute top-2 right-2 h-3 w-3 bg-red-500 rounded-full border-2 border-black animate-bounce" />
        </motion.button>
      </div>
    </div>
  );
}
