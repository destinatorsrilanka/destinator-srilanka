"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sprout,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  X,
} from "lucide-react";

export default function GreenRibbonPremiumStrip() {
  const [isHovered, setIsHovered] = useState(false);
  const [isWide, setIsWide] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const trees = [
    {
      name: "Kumbuk",
      scientific: "Terminalia arjuna",
      img: "/image/kubuk.webp",
    },
    {
      name: "Mee",
      scientific: "Madhuca longifolia",
      img: "/image/mee.jpg",
    },
  ];

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  useEffect(() => {
    if (!isHovered) {
      setIsWide(false);
    }
  }, [isHovered]);

  const handlePlantClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = new URL(window.location.href);
    const currentPlant = url.searchParams.get("plant") === "true";
    url.searchParams.set("plant", (!currentPlant).toString());
    window.history.pushState({}, "", url);
    window.dispatchEvent(new Event("urlchange"));
    setShowToast(true);
  };

  return (
    <div className="relative w-full py-12 md:py-20 flex justify-center items-center bg-transparent px-4 overflow-visible font-sans">
      {/* --- Toast Notification --- */}
      <div className="fixed top-24 right-4 md:right-8 z-[100] pointer-events-none">
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
              className="pointer-events-auto flex items-center gap-3 bg-[#064e3b] border border-green-400/50 p-4 rounded-2xl shadow-2xl min-w-[280px]"
            >
              <div className="bg-green-400/20 p-2 rounded-full">
                <CheckCircle2 className="text-green-400 w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-white text-[11px] font-black uppercase tracking-widest">
                  Recorded!
                </p>
                <p className="text-green-200/60 text-[9px] font-medium">
                  Planting preference updated.
                </p>
              </div>
              <button
                onClick={() => setShowToast(false)}
                className="text-green-400/50 hover:text-white"
              >
                <X size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
        animate={{
          width: isHovered ? "100%" : "fit-content",
          height: isHovered && isWide ? "auto" : "85px",
        }}
        onAnimationComplete={() => {
          if (isHovered) setIsWide(true);
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          width: { delay: isHovered ? 0 : 0.2, duration: 0.3 },
          height: { duration: 0.2 },
        }}
        className="relative z-50 flex flex-col md:flex-row items-center bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#022c22] rounded-[2.5rem] md:rounded-[5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] border border-green-400/25 max-w-[1300px] cursor-pointer overflow-hidden min-w-fit"
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 -z-10"
            >
              <div
                style={{
                  backgroundImage: "url('/image/Like_plant.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 35%",
                  backgroundRepeat: "no-repeat",
                }}
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b]/90 via-[#064e3b]/40 to-[#022c22]/95" />
              <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.7)]" />
              <div className="absolute inset-0 backdrop-blur-[1px]" />
            </motion.div>
          )}
        </AnimatePresence>

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

        <div className="flex-1 w-full overflow-hidden">
          <AnimatePresence>
            {isHovered && isWide && (
              <motion.div
                key="content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10, transition: { duration: 0.1 } }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row items-center justify-between px-8 md:px-12 py-8 md:py-8 gap-8 w-full"
              >
                <div className="flex gap-8 shrink-0">
                  {trees.map((tree, idx) => (
                    <div
                      key={idx}
                      className="group relative flex flex-col items-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        // Mobile: w-20 h-20 | Desktop: w-24 h-24
                        className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-green-400/40 p-1 overflow-hidden shadow-2xl bg-[#022c22]/50 backdrop-blur-sm"
                      >
                        <img
                          src={tree.img}
                          className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                          alt={tree.name}
                        />
                      </motion.div>
                      <div className="flex flex-col items-center mt-3">
                        <span className="text-[11px] text-green-300 font-black uppercase tracking-tighter">
                          {tree.name}
                        </span>
                        <span className="text-[9px] text-green-400/70 italic font-medium tracking-tight">
                          {tree.scientific}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2 max-w-[320px] text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-green-400">
                    <ShieldCheck size={16} className="animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Our Mission
                    </span>
                  </div>
                  <p className="text-white font-medium italic leading-relaxed text-[14px] md:text-[16px] drop-shadow-md">
                    "Join Kubuk, mee tree plantation in the Island. Help to
                    protect our pristine world heritage geography of Central
                    highlands. understand sensitive ecosystems and protect fauna
                    and flora while roaming the country."
                  </p>
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(74, 222, 128, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlantClick}
                  className="shrink-0 px-10 py-4 bg-green-500 text-[#022c22] font-black uppercase text-[11px] tracking-[0.2em] rounded-full shadow-lg flex items-center gap-2 mb-4 md:mb-0"
                >
                  Like to Plant <ExternalLink size={14} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
