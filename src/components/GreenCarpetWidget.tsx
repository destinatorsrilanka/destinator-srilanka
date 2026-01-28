"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sprout, ShieldCheck, ChevronRight, ExternalLink } from "lucide-react";

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
    <div className="relative w-full py-12 md:py-20 flex justify-center items-center overflow-visible bg-transparent px-4">
      {/* ප්‍රධාන පටිය */}
      <motion.div
        layout // ස්මූත් ඇනිමේෂන් එකක් සඳහා
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
        initial={{ width: "fit-content", minWidth: "320px", opacity: 0 }}
        whileInView={{ width: isHovered ? "100%" : "fit-content", opacity: 1 }}
        animate={{
          // ජංගම දුරකථන වල උස සහ පිහිටීම නිවැරදි කිරීම
          height: isHovered ? "auto" : "80px",
          minHeight: isHovered
            ? typeof window !== "undefined" && window.innerWidth < 768
              ? "580px"
              : "220px"
            : "80px",
        }}
        transition={{
          layout: { type: "spring", stiffness: 100, damping: 20 },
          height: { type: "spring", stiffness: 100, damping: 20 },
          width: { type: "spring", stiffness: 100, damping: 20 },
        }}
        className="relative z-50 flex flex-col md:flex-row items-center bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#022c22] rounded-[3rem] md:rounded-[4rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] border border-green-400/25 overflow-hidden cursor-pointer max-w-[1300px] py-4 md:py-0 self-center"
      >
        {/* පාවෙන ඇනිමේෂන් එක වෙනම ලබා දීම (Y axis movement) */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e')] bg-cover bg-center -z-10"
            />
          )}
        </AnimatePresence>

        {/* --- වම්පස: ශීර්ෂය (Title Section) --- */}
        <motion.div
          layout
          className={`flex items-center px-8 md:px-14 gap-5 md:gap-8 shrink-0 z-10 transition-all duration-500 ${
            isHovered ? "mb-8 md:mb-0 scale-100" : ""
          }`}
        >
          <div className="relative flex-shrink-0">
            <div className="p-3.5 md:p-5 bg-green-400/15 rounded-full backdrop-blur-2xl border border-green-400/40 shadow-inner">
              <Sprout className="text-green-400 w-7 h-7 md:w-10 md:h-10" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="absolute inset-0 bg-green-400/50 rounded-full blur-3xl -z-10"
            />
          </div>

          <div className="flex flex-col gap-1 flex-shrink-0 min-w-[160px] md:min-w-[220px]">
            <span className="text-white font-black uppercase tracking-[0.15em] md:tracking-[0.45em] text-[18px] md:text-[24px] whitespace-nowrap leading-none block">
              Green Carpet
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_12px_#22c55e] animate-pulse flex-shrink-0" />
              <span className="text-green-300/70 text-[10px] md:text-[12px] uppercase font-extrabold tracking-[0.15em] whitespace-nowrap">
                Heritage Forest
              </span>
            </div>
          </div>
        </motion.div>

        {/* --- මැද/ව්‍යාප්ත අංග: Content --- */}
        <AnimatePresence mode="wait">
          {isHovered && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row items-center flex-1 justify-between px-10 md:px-14 z-10 gap-10 md:gap-8 w-full"
            >
              <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />

              {/* ගස් වල පින්තූර */}
              <div className="flex gap-10 md:gap-16 shrink-0">
                {trees.map((tree, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.08 }}
                    className="group relative flex flex-col items-center"
                  >
                    <div className="relative w-24 h-24 md:w-36 md:h-36 rounded-full border-[3px] border-green-400/30 p-1.5 group-hover:border-green-400 transition-all duration-500 shadow-2xl overflow-hidden">
                      <img
                        src={tree.img}
                        className="w-full h-full rounded-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                        alt={tree.name}
                      />
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-green-500 text-green-950 text-[9px] md:text-[11px] font-black px-4 py-1.5 rounded-full whitespace-nowrap shadow-xl">
                        {tree.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Description */}
              <div className="flex flex-col gap-3 max-w-[280px] md:max-w-[360px] text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2.5 text-green-400">
                  <ShieldCheck size={18} strokeWidth={2.5} />
                  <span className="text-[11px] md:text-[12px] font-black uppercase tracking-widest">
                    Conservation Mission
                  </span>
                </div>
                <p className="text-white/80 text-[13px] md:text-[14px] leading-relaxed font-medium italic">
                  "Protecting Sri Lanka's legendary giants. Join our journey to
                  preserve the island's endemic biodiversity for a sustainable
                  future."
                </p>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#4ade80" }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-10 md:px-12 py-3.5 md:py-4.5 bg-green-500 text-[#022c22] font-black uppercase text-[11px] md:text-[12px] tracking-widest rounded-full shadow-lg flex items-center justify-center gap-3"
              >
                Grow Impact
                <ExternalLink size={16} strokeWidth={3} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- දකුණුපස: Arrow (Only when collapsed) --- */}
        {!isHovered && (
          <motion.div
            layout
            className="ml-auto pr-8 md:pr-14 z-10 flex items-center gap-4 shrink-0"
          >
            <span className="text-green-300/40 text-[11px] md:text-[13px] font-black uppercase tracking-widest hidden sm:block">
              Explore
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronRight
                className="text-green-400 w-8 h-8 md:w-10 md:h-10"
                strokeWidth={3}
              />
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      {/* Decor Line */}
      <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/10 to-transparent top-1/2 -z-10" />
    </div>
  );
}
