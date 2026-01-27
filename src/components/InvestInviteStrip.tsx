"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Landmark, ArrowRight } from "lucide-react";

export default function InvestInviteStrip() {
  return (
    <section className="relative overflow-hidden">
      {/* Top Border */}
      <div className="h-[1px] w-full bg-white/5" />

      {/* Main Gold Bar */}
      <div className="bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] py-3 shadow-[0_10px_30px_rgba(218,165,32,0.3)]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left Side: Text Content */}
            <div className="flex items-center gap-4">
              <div className="bg-black/10 p-2 rounded-full hidden sm:block">
                <Landmark size={20} className="text-black/80" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-black text-[13px] md:text-[15px] font-black uppercase tracking-[0.2em] leading-none">
                  Exclusive Investment Invitation
                </h3>
                <p className="text-black/60 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1">
                  Secure your stake in luxury island ventures
                </p>
              </div>
            </div>

            {/* Right Side: Clean WhatsApp Link (No Box) */}
            <motion.a
              href="https://wa.me/yournumber"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ x: 5 }}
            >
              {/* Animated WhatsApp Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-black/20 rounded-full blur-md group-hover:bg-green-600/20 transition-all" />
                <div className="relative bg-black text-white p-2.5 rounded-full shadow-xl group-hover:bg-green-600 transition-colors duration-300">
                  <MessageCircle size={20} fill="currentColor" />
                </div>
                {/* Ping Animation */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 border border-[#FFD700]"></span>
                </span>
              </div>

              {/* Text Link */}
              <div className="flex flex-col items-start">
                <span className="text-black text-[11px] font-black uppercase tracking-wider group-hover:text-black/70 transition-colors">
                  Chat with an Expert
                </span>
                <div className="h-[1.5px] w-0 group-hover:w-full bg-black transition-all duration-300" />
              </div>

              <ArrowRight
                size={14}
                className="text-black opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
              />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Subtle bottom glow */}
      <div className="h-[5px] bg-gradient-to-b from-[#DAA520]/20 to-transparent" />
    </section>
  );
}
