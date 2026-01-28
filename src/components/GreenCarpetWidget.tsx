"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sprout,
  Leaf,
  ShieldCheck,
  ChevronRight,
  Trees,
  ExternalLink,
} from "lucide-react";

export default function GreenRibbonPremiumStrip() {
  const [isHovered, setIsHovered] = useState(false);

  const trees = [
    {
      name: "Kumbuk",
      scientific: "Terminalia arjuna",
      img: "/image/kumbuk.jpg",
    },
    { name: "Mee", scientific: "Madhuca longifolia", img: "/image/mee.jpg" },
  ];

  return (
    <div className="relative w-full py-16 flex justify-center items-center overflow-visible bg-transparent px-6">
      {/* ප්‍රධාන පටිය */}
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ width: "300px", opacity: 0 }}
        whileInView={{ width: isHovered ? "100%" : "350px", opacity: 1 }}
        animate={{
          height: isHovered ? "180px" : "85px",
          y: [0, -5, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 15,
          y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        }}
        className="relative z-50 flex items-center bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#022c22] rounded-[3rem] shadow-[0_30px_70px_rgba(0,0,0,0.4)] border border-green-400/20 overflow-hidden cursor-pointer max-w-[1300px]"
      >
        {/* Background Subtle Forest Glow */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e')] bg-cover bg-center"
            />
          )}
        </AnimatePresence>

        {/* --- වම්පස: ශීර්ෂය (Title Section) --- */}
        <div className="flex items-center px-10 gap-6 shrink-0 z-10">
          <div className="relative">
            <div className="p-4 bg-green-400/10 rounded-full backdrop-blur-xl border border-green-400/30">
              <Sprout className="text-green-400" size={32} />
            </div>
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-green-400 rounded-full blur-2xl -z-10"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black uppercase tracking-[0.3em] text-[16px]">
              Green Carpet
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-300/60 text-[10px] uppercase font-bold tracking-widest">
                Heritage Forest
              </span>
            </div>
          </div>
        </div>

        {/* --- මැද: ඡායාරූප සහ තොරතුරු (Expanded Content) --- */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex items-center flex-1 justify-between px-10 z-10"
            >
              {/* Vertical Divider */}
              <div className="h-20 w-[1px] bg-white/10 hidden lg:block" />

              {/* පින්තූර දෙක (The Highlighted Trees) */}
              <div className="flex gap-10 shrink-0">
                {trees.map((tree, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative flex flex-col items-center"
                  >
                    <div className="relative w-28 h-28 rounded-full border-4 border-green-400/40 p-1 group-hover:border-green-400 transition-all duration-500 shadow-2xl">
                      <img
                        src={tree.img}
                        className="w-full h-full rounded-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                        alt={tree.name}
                      />
                      {/* Hover Label */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-500 text-green-950 text-[10px] font-black px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {tree.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* මධ්‍යම පෙළ (Brief Info) */}
              <div className="hidden xl:flex flex-col gap-2 max-w-[250px]">
                <div className="flex items-center gap-2 text-green-400">
                  <ShieldCheck size={18} />
                  <span className="text-[11px] font-black uppercase tracking-widest">
                    Premium Care
                  </span>
                </div>
                <p className="text-white/80 text-[13px] leading-snug">
                  Join the mission to restore the endemic{" "}
                  <span className="text-green-400 font-bold">Kumbuk</span>{" "}
                  biodiversity.
                </p>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#4ade80" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-green-500 text-[#022c22] font-black uppercase text-[12px] tracking-[0.3em] rounded-full shadow-[0_15px_30px_rgba(74,222,128,0.3)] flex items-center gap-3"
              >
                Plant Your Impact
                <ExternalLink size={14} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- දකුණුපස: Arrow (Only when collapsed) --- */}
        {!isHovered && (
          <div className="ml-auto pr-10 z-10 flex items-center gap-3">
            <span className="text-green-300/40 text-[10px] font-bold uppercase tracking-widest hidden md:block">
              Explore
            </span>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronRight className="text-green-400" size={28} />
            </motion.div>
          </div>
        )}

        {/* Decorative Background Icon */}
        <Trees className="absolute -right-16 -bottom-16 text-white/[0.03] scale-[6] rotate-12 pointer-events-none" />
      </motion.div>

      {/* සරල සැරසිලි ඉර (Background Decor) */}
      <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/10 to-transparent top-1/2 -z-10" />
    </div>
  );
}
