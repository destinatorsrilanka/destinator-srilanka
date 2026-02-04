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
  MessageCircle,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function GreenRibbonPremiumStrip() {
  const [isHovered, setIsHovered] = useState(false);
  const [isWide, setIsWide] = useState(false);
  const [showToast, setShowToast] = useState({ show: false, message: "" });

  const [isInvestHovered, setIsInvestHovered] = useState(false);
  const [isInvestWide, setIsInvestWide] = useState(false);

  const trees = [
    {
      name: "Kumbuk",
      scientific: "Terminalia arjuna",
      img: "/image/kubuk.webp",
    },
    { name: "Mee", scientific: "Madhuca longifolia", img: "/image/mee.jpg" },
  ];

  useEffect(() => {
    if (showToast.show) {
      const timer = setTimeout(
        () => setShowToast({ show: false, message: "" }),
        3000,
      );
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  useEffect(() => {
    if (!isHovered) setIsWide(false);
  }, [isHovered]);
  useEffect(() => {
    if (!isInvestHovered) setIsInvestWide(false);
  }, [isInvestHovered]);

  const handleAction = (param: string, message: string) => {
    const url = new URL(window.location.href);
    const currentValue = url.searchParams.get(param) === "true";
    url.searchParams.set(param, (!currentValue).toString());
    window.history.pushState({}, "", url);
    window.dispatchEvent(new Event("urlchange"));
    setShowToast({ show: true, message });
  };

  return (
    <div className="relative w-full py-10 flex flex-col lg:flex-row justify-center items-center gap-6 bg-transparent px-4 overflow-visible font-sans max-w-full">
      {/* --- Toast Notification --- */}
      <div className="fixed top-24 right-4 z-[100] pointer-events-none">
        <AnimatePresence>
          {showToast.show && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="pointer-events-auto flex items-center gap-3 bg-[#064e3b] border border-green-400/50 p-4 rounded-2xl shadow-2xl"
            >
              <CheckCircle2 className="text-green-400 w-5 h-5" />
              <div className="flex-1">
                <p className="text-white text-[10px] font-black uppercase tracking-widest">
                  Recorded!
                </p>
                <p className="text-green-200/60 text-[9px]">
                  {showToast.message}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- 1. GREEN CARPET --- */}
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          width: isHovered
            ? typeof window !== "undefined" && window.innerWidth > 1024
              ? "95%"
              : "100%"
            : "300px",
          height: isHovered && isWide ? "auto" : "85px",
        }}
        onAnimationComplete={() => {
          if (isHovered) setIsWide(true);
        }}
        className="relative z-50 flex flex-col lg:flex-row items-center bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#022c22] rounded-[2.5rem] lg:rounded-[5rem] shadow-2xl border border-green-400/25 cursor-pointer overflow-hidden min-w-fit max-w-[1200px]"
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 -z-10"
            >
              <div
                style={{
                  backgroundImage: "url('/image/Like_plant.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 35%",
                }}
                className="absolute inset-0 w-full h-full opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b]/90 via-[#064e3b]/40 to-[#022c22]/95" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center px-6 lg:px-8 py-5 gap-4 shrink-0 whitespace-nowrap">
          <div className="p-3 bg-green-400/15 rounded-full border border-green-400/30">
            <Sprout className="text-green-400 w-5 h-5 lg:w-6 lg:h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black uppercase tracking-widest text-xs lg:text-sm leading-none">
              Green Carpet
            </span>
            <span className="text-green-300/60 text-[8px] uppercase font-bold tracking-widest mt-1">
              Heritage Forest
            </span>
          </div>
          {!isHovered && <ChevronRight className="text-green-400 w-5 h-5" />}
        </div>

        <div className="flex-1 w-full overflow-hidden">
          <AnimatePresence>
            {isHovered && isWide && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-6 lg:py-8 gap-4 lg:gap-8 w-full"
              >
                <div className="flex gap-4 lg:gap-8 shrink-0">
                  {trees.map((tree, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-green-400/40 p-1 overflow-hidden bg-[#022c22]/50">
                        <img
                          src={tree.img}
                          className="w-full h-full object-cover rounded-full"
                          alt={tree.name}
                        />
                      </div>
                      <span className="text-[9px] lg:text-[10px] text-green-300 font-black uppercase mt-2">
                        {tree.name}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-white font-medium italic leading-relaxed text-[12px] lg:text-[13px] flex-1 max-w-[400px] text-center lg:text-left">
                  "Join Kubuk, mee tree plantation in the Island. Help to
                  protect our pristine world heritage geography..."
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAction("plant", "Planting preference updated.");
                  }}
                  className="px-6 lg:px-8 py-3 lg:py-4 bg-green-500 text-[#022c22] font-black uppercase text-[9px] lg:text-[10px] tracking-widest rounded-full flex items-center gap-2 whitespace-nowrap shrink-0 shadow-lg"
                >
                  Like to Plant <ExternalLink size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* --- 2. INVEST RIBBON --- */}
      <motion.div
        onMouseEnter={() => setIsInvestHovered(true)}
        onMouseLeave={() => setIsInvestHovered(false)}
        animate={{
          width: isInvestHovered
            ? typeof window !== "undefined" && window.innerWidth > 1024
              ? "95%"
              : "100%"
            : "fit-content",
          height: isInvestHovered && isInvestWide ? "auto" : "85px",
        }}
        onAnimationComplete={() => {
          if (isInvestHovered) setIsInvestWide(true);
        }}
        className="relative z-40 flex flex-col lg:flex-row items-center bg-gradient-to-r from-[#eab308] via-[#facc15] to-[#ca8a04] rounded-[2.5rem] lg:rounded-[5rem] shadow-2xl cursor-pointer overflow-hidden min-w-fit max-w-[1200px]"
      >
        <div className="flex items-center px-6 lg:px-8 py-5 gap-4 shrink-0 whitespace-nowrap">
          <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-[#111] rounded-full flex items-center justify-center shadow-xl">
            <MessageCircle className="text-white w-5 h-5 lg:w-6 lg:h-6 fill-white" />
            <div className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full border-2 border-[#111] animate-bounce" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#111] font-black uppercase tracking-tighter text-xs lg:text-sm leading-none">
              your partner in sri lanka
            </span>
            <span className="text-[#111]/70 text-[8px] uppercase font-black tracking-[0.1em] mt-1">
              partnership programs
            </span>
          </div>
          {!isInvestHovered && (
            <ArrowRight className="text-[#111] w-5 h-5 ml-2" />
          )}
        </div>

        <div className="flex-1 w-full overflow-hidden">
          <AnimatePresence>
            {isInvestHovered && isInvestWide && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-6 lg:py-8 gap-4 lg:gap-6 w-full"
              >
                <div className="flex gap-4 lg:gap-6 shrink-0">
                  <div className="flex flex-col items-center bg-black/10 p-3 lg:p-4 rounded-3xl">
                    <TrendingUp size={20} className="text-[#111] mb-1" />
                    <span className="text-[#111] font-black text-[9px] lg:text-[10px] uppercase">
                      ROI
                    </span>
                  </div>
                  <div className="flex flex-col items-center bg-black/10 p-3 lg:p-4 rounded-3xl">
                    <ShieldCheck size={20} className="text-[#111] mb-1" />
                    <span className="text-[#111] font-black text-[9px] lg:text-[10px] uppercase">
                      Secure
                    </span>
                  </div>
                </div>
                <p className="text-[#111] font-bold italic leading-relaxed text-[12px] lg:text-[13px] flex-1 max-w-[400px] text-center lg:text-left">
                  "Get professional advice on sustainable heritage investments.
                  Grow your capital while protecting the environment."
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAction("invest", "Consultation request recorded.");
                  }}
                  className="px-6 lg:px-8 py-3 lg:py-4 bg-[#111] text-[#facc15] font-black uppercase text-[9px] lg:text-[10px] tracking-widest rounded-full flex items-center gap-2 whitespace-nowrap shrink-0 shadow-2xl"
                >
                  like to invest? <ArrowRight size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
        />
      </motion.div>
    </div>
  );
}
