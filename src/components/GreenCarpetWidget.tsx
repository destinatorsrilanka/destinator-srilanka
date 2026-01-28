"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sprout, ShieldCheck, ChevronRight, ExternalLink } from "lucide-react";

export default function GreenRibbonPremiumStrip() {
  const [isHovered, setIsHovered] = useState(false);
  const [isWide, setIsWide] = useState(false);

  const trees = [
    { name: "Kumbuk", img: "/image/kumbuk.jpg" },
    { name: "Mee", img: "/image/mee.jpg" },
  ];

  // Hover එක අයින් කළ සැනින් Content එක hide කරයි
  useEffect(() => {
    if (!isHovered) {
      setIsWide(false);
    }
  }, [isHovered]);

  return (
    <div className="relative w-full py-12 md:py-20 flex justify-center items-center bg-transparent px-4 overflow-visible">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
        animate={{
          // Hover අයින් කරන විට Width එක පියවෙන්න පරක්කු කරයි (Delay)
          width: isHovered ? "100%" : "fit-content",
          // Hover අයින් කරන විට Height එක ඉක්මනින් 85px වෙයි
          height: isHovered && isWide ? "auto" : "85px",
        }}
        onAnimationComplete={() => {
          if (isHovered) setIsWide(true);
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          // Width එක වැසෙන එක පමා කිරීම මෙහි රහසයි
          width: { delay: isHovered ? 0 : 0.2, duration: 0.3 },
          height: { duration: 0.2 },
        }}
        className="relative z-50 flex flex-col md:flex-row items-center bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#022c22] rounded-[2.5rem] md:rounded-[5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] border border-green-400/25 max-w-[1300px] cursor-pointer overflow-hidden min-w-fit"
      >
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

        {/* --- Header Section --- */}
        <div className="flex items-center px-8 md:px-12 py-5 gap-6 shrink-0 justify-between md:justify-start">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-green-400/15 rounded-full backdrop-blur-md border border-green-400/30 shrink-0">
              <Sprout className="text-green-400 w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black uppercase tracking-widest text-lg md:text-xl whitespace-nowrap leading-none">
                Green Carpet
              </span>
              <span className="text-green-300/60 text-[10px] uppercase font-bold tracking-widest mt-1 whitespace-nowrap">
                Heritage Forest
              </span>
            </div>
          </div>

          {!isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 ml-6 md:ml-10"
            >
              <span className="text-green-400/40 text-xs font-bold uppercase tracking-widest hidden sm:block whitespace-nowrap">
                Explore
              </span>
              <ChevronRight className="text-green-400 w-6 h-6" />
            </motion.div>
          )}
        </div>

        {/* --- Expanding Content Section --- */}
        <div className="flex-1 w-full overflow-hidden">
          <AnimatePresence>
            {isHovered && isWide && (
              <motion.div
                key="content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                // Exit වෙනකොට ඉතා වේගයෙන් මැකී යන්න සැලැස්සුවා
                exit={{ opacity: 0, x: 10, transition: { duration: 0.1 } }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row items-center justify-between px-8 md:px-12 py-8 md:py-8 gap-8 w-full"
              >
                <div className="flex gap-6 shrink-0">
                  {trees?.map((tree, idx) => (
                    <div
                      key={idx}
                      className="group relative flex flex-col items-center"
                    >
                      <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-green-400/30 p-1 overflow-hidden shadow-2xl">
                        <img
                          src={tree.img}
                          className="w-full h-full object-cover rounded-full"
                          alt={tree.name}
                        />
                      </div>
                      <span className="mt-2 text-[9px] text-green-300 font-bold uppercase">
                        {tree.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2 max-w-[320px] text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-green-400">
                    <ShieldCheck size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Our Mission
                    </span>
                  </div>
                  <p className="text-white/80 text-[13px] md:text-sm italic leading-relaxed">
                    "Protecting Sri Lanka's legendary giants for a sustainable
                    future."
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="shrink-0 px-10 py-4 bg-green-500 text-[#022c22] font-black uppercase text-[11px] tracking-widest rounded-full shadow-lg flex items-center gap-2 mb-4 md:mb-0"
                >
                  Grow Impact <ExternalLink size={14} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
