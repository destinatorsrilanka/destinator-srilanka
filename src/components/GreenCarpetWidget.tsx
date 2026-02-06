"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sprout,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Ban,
  TreeDeciduous,
} from "lucide-react";

export default function GreenRibbonPremiumStrip() {
  const [hoveredCard, setHoveredCard] = useState<"green" | "invest" | null>(
    null,
  );
  const [showAlert, setShowAlert] = useState(false);

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

  const handleAction = (type: "Planting" | "Investment") => {
    const url = new URL(window.location.href);
    url.searchParams.set(type === "Planting" ? "plant" : "invest", "true");
    window.history.replaceState({}, "", url.toString());
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  // Fixed transition object with 'as const'
  const smoothTransition = {
    type: "spring",
    stiffness: 250,
    damping: 30,
    mass: 0.8,
  } as const;

  return (
    <div className="relative w-full py-12 flex flex-col lg:flex-row justify-center items-center gap-8 bg-transparent px-4 overflow-hidden">
      {/* Alert Notification */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-10 right-1/2 translate-x-1/2 lg:right-10 lg:translate-x-0 z-[1000] flex items-center gap-3 bg-[#064e3b] text-white px-6 py-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-green-400/30 backdrop-blur-md"
          >
            <CheckCircle2 className="text-green-400 w-5 h-5" />
            <span className="font-bold text-sm tracking-tight">
              Selection Registered!
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. GREEN CARPET CARD */}
      <motion.div
        layout
        onMouseEnter={() => setHoveredCard("green")}
        onMouseLeave={() => setHoveredCard(null)}
        transition={smoothTransition}
        className="relative flex flex-col bg-[#064e3b] rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 cursor-pointer overflow-hidden group"
        style={{
          width: hoveredCard === "green" ? "100%" : "340px",
          maxWidth: hoveredCard === "green" ? "900px" : "340px",
          minHeight: "95px",
        }}
      >
        <AnimatePresence>
          {hoveredCard === "green" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-0"
            >
              <img
                src="/image/Like_plant.jpeg"
                className="w-full h-full object-cover scale-105"
                alt="bg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#064e3b]" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 w-full">
          {/* Header */}
          <div className="flex items-center px-8 h-[95px] gap-5">
            <div
              className={`p-3.5 rounded-2xl border transition-all duration-500 shadow-inner ${hoveredCard === "green" ? "bg-green-500 border-green-300 text-white scale-110" : "bg-white/5 border-white/10 text-green-400"}`}
            >
              <Sprout className="w-7 h-7" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-black uppercase tracking-[0.2em] text-[13px]">
                Green Carpet
              </span>
              <span className="text-green-400/60 text-[9px] uppercase font-bold tracking-[0.25em] mt-1">
                Heritage Forest Reserve
              </span>
            </div>
            {hoveredCard !== "green" && (
              <ChevronRight className="ml-auto text-white/10 w-6 h-6 group-hover:text-white group-hover:translate-x-1 transition-all" />
            )}
          </div>

          <AnimatePresence mode="wait">
            {hoveredCard === "green" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="px-10 pb-10 flex flex-col items-center gap-8">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* Enhanced Trees Section */}
                  <div className="flex flex-wrap justify-center gap-14">
                    <div className="flex flex-col items-center">
                      <span className="text-[8px] text-green-400/40 uppercase font-black mb-5 tracking-[0.3em]">
                        Signature Endemics
                      </span>
                      <div className="flex gap-10">
                        {trees.map((tree, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center group/tree"
                          >
                            <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full border-2 border-white/10 p-1.5 bg-black/40 backdrop-blur-sm transition-all duration-500 group-hover/tree:border-green-400 group-hover/tree:scale-110 shadow-2xl">
                              <img
                                src={tree.img}
                                className="w-full h-full object-cover rounded-full shadow-inner"
                                alt={tree.name}
                              />
                            </div>
                            <span className="text-[12px] text-white font-black uppercase mt-4 tracking-wider">
                              {tree.name}
                            </span>
                            <span className="text-[9px] text-green-400/70 italic font-medium mt-0.5 tracking-tight">
                              {tree.scientific}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ban Section */}
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[8px] text-red-400/40 uppercase font-black mb-5 tracking-[0.3em]">
                        Strict Guidelines
                      </span>
                      <div className="bg-red-500/5 border border-red-500/20 px-6 py-4 rounded-[2rem] flex items-center gap-5 backdrop-blur-md">
                        <div className="relative">
                          <TreeDeciduous
                            size={22}
                            className="text-red-500/10"
                          />
                          <Ban
                            size={36}
                            className="text-red-500 absolute -top-1.5 -left-1.5 opacity-80"
                          />
                        </div>
                        <div className="flex flex-col text-left border-l border-red-500/20 pl-5">
                          <span className="text-red-400 font-black text-[11px] uppercase tracking-tighter">
                            Anti-Invasive Protocol
                          </span>
                          <span className="text-white/30 text-[7px] font-bold uppercase tracking-widest mt-0.5">
                            Protecting Groundwater
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/60 italic text-[14px] max-w-[550px] leading-relaxed text-center font-medium">
                    "Join our mission to restore the{" "}
                    <span className="text-green-400 not-italic font-bold">
                      Central Highlands
                    </span>
                    . We strictly prohibit invasive species to safeguard our
                    natural heritage."
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction("Planting");
                    }}
                    className="px-12 py-4 bg-white text-[#064e3b] font-black uppercase text-[11px] rounded-2xl hover:bg-green-500 hover:text-white transition-all shadow-[0_15px_30px_rgba(0,0,0,0.3)] flex items-center gap-3 active:scale-95"
                  >
                    Request to Plant <ExternalLink size={16} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* 2. INVEST RIBBON CARD */}
      <motion.div
        layout
        onMouseEnter={() => setHoveredCard("invest")}
        onMouseLeave={() => setHoveredCard(null)}
        transition={smoothTransition}
        className="relative flex flex-col bg-gradient-to-br from-[#facc15] to-[#ca8a04] rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] border border-white/20 cursor-pointer overflow-hidden group"
        style={{
          width: hoveredCard === "invest" ? "100%" : "340px",
          maxWidth: hoveredCard === "invest" ? "900px" : "340px",
          minHeight: "95px",
        }}
      >
        <div className="relative z-10 w-full">
          <div className="flex items-center px-8 h-[95px] gap-5">
            <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:rotate-6">
              <MessageCircle className="text-yellow-500 w-7 h-7 fill-yellow-500" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-black font-black uppercase text-[13px] tracking-tight">
                Partner in Sri Lanka
              </span>
              <span className="text-black/50 text-[9px] uppercase font-black tracking-[0.2em] mt-1">
                Sustainable Growth
              </span>
            </div>
            {hoveredCard !== "invest" && (
              <ArrowRight className="ml-auto text-black/20 w-6 h-6 group-hover:text-black group-hover:translate-x-1 transition-all" />
            )}
          </div>

          <AnimatePresence mode="wait">
            {hoveredCard === "invest" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="px-10 pb-10 flex flex-col items-center gap-8">
                  <div className="w-full h-px bg-black/5" />

                  <div className="flex gap-6">
                    {[
                      {
                        icon: <TrendingUp size={22} />,
                        title: "High Yield",
                        sub: "Annual ROI",
                      },
                      {
                        icon: <ShieldCheck size={22} />,
                        title: "Escrowed",
                        sub: "100% Secure",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-black/5 border border-black/5 px-8 py-4 rounded-[1.5rem] flex flex-col items-center min-w-[130px] backdrop-blur-sm"
                      >
                        <div className="text-black/80 mb-2">{item.icon}</div>
                        <span className="text-black font-black text-[10px] uppercase">
                          {item.title}
                        </span>
                        <span className="text-black/40 text-[7px] font-bold uppercase mt-0.5">
                          {item.sub}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="text-black font-extrabold italic text-base max-w-[480px] leading-relaxed text-center">
                    "Secure your legacy with professional guidance on
                    sustainable heritage investments."
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction("Investment");
                    }}
                    className="px-12 py-4 bg-black text-yellow-500 font-black uppercase text-[11px] rounded-2xl shadow-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all"
                  >
                    Inquire for Investment <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
