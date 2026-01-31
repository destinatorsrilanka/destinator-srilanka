"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  X,
} from "lucide-react";

export default function FixedInvestInvite() {
  const [isHovered, setIsHovered] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // --- නිවැරදි කරන ලද handleInvestClick Function එක ---
  const handleInvestClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const url = new URL(window.location.href);
    const currentInvest = url.searchParams.get("invest") === "true";

    // Invest අගය පමණක් Toggle කරන්න.
    // Plant අගය දැනටමත් තිබේ නම් එය වෙනස් නොවේ.
    url.searchParams.set("invest", (!currentInvest).toString());

    window.history.pushState({}, "", url);
    window.dispatchEvent(new Event("urlchange"));

    setShowToast(true);
  };

  return (
    <div
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end pointer-events-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* --- Toast Notification --- */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            className="pointer-events-auto mb-4 flex items-center gap-3 bg-black border border-green-500/50 p-4 rounded-2xl shadow-2xl min-w-[280px]"
          >
            <div className="bg-green-500/20 p-2 rounded-full">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-white text-[11px] font-black uppercase tracking-widest">
                Recorded!
              </p>
              <p className="text-gray-400 text-[9px] font-medium">
                Investment preference updated.
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-gray-500 hover:text-white"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Hover Card එක --- */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="pointer-events-auto mb-3 w-[260px] md:w-72 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#FFD700]/30 rounded-[1.2rem] md:rounded-[2rem] p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 md:gap-3 mb-3 text-left">
              <div className="p-1.5 bg-[#FFD700]/10 rounded-lg shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#FFD700]" />
              </div>
              <span className="text-white font-black text-[8px] md:text-[10px] uppercase tracking-widest">
                Service Beyond Money!
              </span>
            </div>
            <h4 className="text-white text-[12px] md:text-[15px] font-black uppercase tracking-tight mb-1 md:mb-2 text-left">
              Sri Lanka is your Second Home
            </h4>
            <p className="text-white/60 text-[9px] md:text-[11px] leading-relaxed mb-4 md:mb-5 text-left">
              Marketplace for your product or service Partnership project. Build
              your own house in Sri Lanka.
            </p>

            <button
              onClick={handleInvestClick}
              className="w-full mb-4 py-3 bg-[#FFD700] text-black text-[10px] font-black uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-all cursor-pointer shadow-lg shadow-yellow-500/20"
            >
              Interested <ExternalLink size={12} />
            </button>

            <div className="flex items-center justify-between border-t border-white/10 pt-3">
              <div className="flex flex-col items-start">
                <span className="text-[#FFD700] font-black text-[10px] md:text-[12px]">
                  50%
                </span>
                <span className="text-white/40 text-[7px] md:text-[8px] uppercase font-bold">
                  Proj. ROI
                </span>
              </div>
              <div className="h-6 border-l border-white/10"></div>
              <div className="flex flex-col items-end">
                <span className="text-[#FFD700] font-black text-[10px] md:text-[12px]">
                  USD
                </span>
                <span className="text-white/40 text-[7px] md:text-[8px] uppercase font-bold">
                  Currency
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ප්‍රධාන Floating Button එක --- */}
      <motion.div
        layout
        className="pointer-events-auto flex items-center bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] p-1 md:p-1.5 rounded-full shadow-[0_10px_30px_rgba(218,165,32,0.3)] border border-white/20 active:scale-95 transition-transform"
      >
        <div className="flex items-center gap-2 md:gap-3 pr-4 md:pr-6">
          <div className="relative">
            <div className="bg-black text-white p-2 md:p-3.5 rounded-full shadow-2xl">
              <MessageCircle
                className="w-[16px] h-[16px] md:w-[22px] md:h-[22px]"
                fill="currentColor"
              />
            </div>
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5 md:h-4 md:w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-4 md:w-4 bg-red-600 border-2 border-[#FFD700]"></span>
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-black text-[9px] md:text-[12px] font-black uppercase tracking-[0.05em] md:tracking-[0.15em] leading-none">
              Your Partner in Sri Lanka
            </span>
            <span className="text-black/60 text-[7px] md:text-[9px] font-bold uppercase tracking-widest mt-0.5 md:mt-1">
              Interested in parntership programs
            </span>
          </div>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="ml-1 md:ml-2"
          >
            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-black" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
