"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Landmark,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function FixedInvestInvite() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-72 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#FFD700]/30 rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#FFD700]/10 rounded-lg">
                <ShieldCheck size={18} className="text-[#FFD700]" />
              </div>
              <span className="text-white font-black text-[10px] uppercase tracking-widest">
                Verified Asset
              </span>
            </div>

            <h4 className="text-white text-[15px] font-black uppercase tracking-tight mb-2">
              Premium Island Ventures
            </h4>
            <p className="text-white/60 text-[11px] leading-relaxed mb-5">
              Secure high-yield stakes in Sri Lanka's most exclusive luxury real
              estate and hospitality projects.
            </p>

            <div className="flex items-center gap-4 border-t border-white/10 pt-4">
              <div className="flex flex-col">
                <span className="text-[#FFD700] font-black text-[12px]">
                  12.5%
                </span>
                <span className="text-white/40 text-[8px] uppercase font-bold">
                  Proj. ROI
                </span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-4">
                <span className="text-[#FFD700] font-black text-[12px]">
                  USD
                </span>
                <span className="text-white/40 text-[8px] uppercase font-bold">
                  Currency
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Action Bar */}
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        layout
        className="flex items-center gap-4 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] p-1.5 rounded-full shadow-[0_15px_40px_rgba(218,165,32,0.4)] cursor-pointer overflow-hidden border border-white/20"
      >
        <motion.a
          href="https://wa.me/yournumber"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 pr-6"
        >
          {/* WhatsApp Icon */}
          <div className="relative">
            <div className="bg-black text-white p-3.5 rounded-full shadow-2xl">
              <MessageCircle size={22} fill="currentColor" />
            </div>
            {/* Online Pulse */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 border-2 border-[#FFD700]"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-black text-[12px] font-black uppercase tracking-[0.15em] leading-none">
              Consult Investment
            </span>
            <span className="text-black/60 text-[9px] font-bold uppercase tracking-widest mt-1">
              Expert Guidance
            </span>
          </div>

          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="ml-2"
          >
            <ArrowRight size={16} className="text-black" />
          </motion.div>
        </motion.a>
      </motion.div>
    </div>
  );
}
