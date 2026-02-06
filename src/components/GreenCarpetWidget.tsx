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
  Camera,
  Video,
  Sparkles,
} from "lucide-react";

export default function GreenRibbonPremiumStrip() {
  const [hoveredCard, setHoveredCard] = useState<
    "green" | "invest" | "media" | null
  >(null);
  const [showAlert, setShowAlert] = useState(false);

  const trees = [
    {
      name: "Kumbuk",
      scientific: "Terminalia arjuna",
      img: "/image/kubuk.webp",
    },
    { name: "Mee", scientific: "Madhuca longifolia", img: "/image/mee.jpg" },
  ];

  const handleAction = (type: "Planting" | "Investment" | "Media") => {
    const url = new URL(window.location.href);
    const param =
      type === "Planting"
        ? "plant"
        : type === "Investment"
          ? "invest"
          : "media";
    url.searchParams.set(param, "true");
    window.history.replaceState({}, "", url.toString());
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const smoothTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  } as const;

  return (
    <div className="relative w-full py-6 flex flex-col lg:flex-row justify-center items-center gap-4 bg-transparent px-4 overflow-hidden">
      {/* Alert Notification */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-10 right-1/2 translate-x-1/2 lg:right-10 lg:translate-x-0 z-[1000] flex items-center gap-3 bg-[#064e3b] text-white px-6 py-3 rounded-2xl shadow-2xl border border-green-400/30 backdrop-blur-md"
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
        className="relative flex flex-col bg-[#064e3b] rounded-[2rem] shadow-xl border border-white/10 cursor-pointer overflow-hidden group"
        style={{
          width: hoveredCard === "green" ? "100%" : "300px",
          maxWidth: hoveredCard === "green" ? "400px" : "300px",
          minHeight: "80px",
          height: "auto",
        }}
      >
        <AnimatePresence>
          {hoveredCard === "green" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-0"
            >
              <img
                src="/image/Like_plant.jpeg"
                className="w-full h-full object-cover"
                alt="bg"
              />
              <div className="absolute inset-0 bg-black/10 shadow-inner" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 w-full">
          <div className="flex items-center px-6 h-[80px] gap-4">
            <div
              className={`p-2 rounded-xl border transition-all duration-500 ${hoveredCard === "green" ? "bg-green-500 border-green-300 text-white" : "bg-white/5 border-white/10 text-green-400"}`}
            >
              <Sprout className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-black uppercase tracking-[0.15em] text-[11px] drop-shadow-md">
                Green Carpet
              </span>
              <span className="text-green-400/80 text-[7px] uppercase font-bold tracking-[0.2em] mt-0.5 drop-shadow-sm">
                Heritage Forest Reserve
              </span>
            </div>
            {!hoveredCard && (
              <ChevronRight className="ml-auto text-white/10 w-5 h-5 group-hover:text-white" />
            )}
          </div>

          <AnimatePresence>
            {hoveredCard === "green" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="px-6 pb-5 flex flex-col items-center gap-4">
                  <div className="w-full h-px bg-white/30" />
                  <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex flex-col items-center">
                      <span className="text-[7px] text-green-300 uppercase font-black mb-2 tracking-[0.2em] drop-shadow-sm">
                        Signature Endemics
                      </span>
                      <div className="flex gap-3">
                        {trees.map((tree, idx) => (
                          <div key={idx} className="flex flex-col items-center">
                            <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-white/50 bg-black/40">
                              <img
                                src={tree.img}
                                className="w-full h-full object-cover"
                                alt={tree.name}
                              />
                            </div>
                            <span className="text-[9px] text-white font-black uppercase mt-1.5 drop-shadow-md">
                              {tree.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[7px] text-red-400 uppercase font-black mb-2 tracking-[0.2em] drop-shadow-sm">
                        Strict Guidelines
                      </span>
                      <div className="bg-black/60 border border-red-500/30 px-3 py-2 rounded-xl flex flex-col items-center gap-1 backdrop-blur-sm">
                        <div className="flex items-center gap-1.5">
                          <Ban size={14} className="text-red-500" />
                          <span className="text-red-500 font-black text-[9px] uppercase tracking-tighter">
                            Say NO ❌ Pine 🌲 and Turpentine
                          </span>
                        </div>
                        <span className="text-white/80 text-[5px] font-bold uppercase">
                          trees Cultivation in High altitude lands!
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white italic text-[11px] max-w-[400px] leading-tight text-center font-bold drop-shadow-lg">
                    "Join our mission to restore the{" "}
                    <span className="text-green-400 not-italic font-black">
                      Central Highlands
                    </span>
                    . We strictly prohibit invasive species."
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction("Planting");
                    }}
                    className="px-6 py-2 bg-white text-[#064e3b] font-black uppercase text-[8px] rounded-lg hover:bg-green-600 hover:text-white transition-all shadow-2xl flex items-center gap-2 active:scale-95"
                  >
                    Request to Plant <ExternalLink size={10} />
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
        className="relative flex flex-col bg-gradient-to-br from-[#facc15] to-[#ca8a04] rounded-[2rem] shadow-xl border border-white/20 cursor-pointer overflow-hidden group"
        style={{
          width: hoveredCard === "invest" ? "100%" : "300px",
          maxWidth: hoveredCard === "invest" ? "400px" : "300px",
          minHeight: "80px",
          height: "auto",
        }}
      >
        <div className="relative z-10 w-full">
          <div className="flex items-center px-6 h-[80px] gap-4">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-3">
              <MessageCircle className="text-yellow-500 w-5 h-5 fill-yellow-500" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-black font-black uppercase text-[11px] tracking-tight">
                Partner in Sri Lanka
              </span>
              <span className="text-black/50 text-[7px] uppercase font-black tracking-[0.15em] mt-0.5">
                Sustainable Growth
              </span>
            </div>
            {!hoveredCard && (
              <ArrowRight className="ml-auto text-black/20 w-5 h-5" />
            )}
          </div>

          <AnimatePresence>
            {hoveredCard === "invest" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="px-6 pb-5 flex flex-col items-center gap-4">
                  <div className="w-full h-px bg-black/10" />
                  <div className="flex gap-2">
                    {[
                      { icon: <TrendingUp size={16} />, title: "High Yield" },
                      { icon: <ShieldCheck size={16} />, title: "Escrowed" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-black/5 border border-black/5 px-4 py-1.5 rounded-xl flex flex-col items-center min-w-[100px] backdrop-blur-sm"
                      >
                        <div className="text-black/80 mb-0.5">{item.icon}</div>
                        <span className="text-black font-black text-[8px] uppercase">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-black font-extrabold italic text-[12px] max-w-[350px] leading-tight text-center">
                    "Secure your legacy with sustainable heritage investments."
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction("Investment");
                    }}
                    className="px-6 py-2 bg-black text-yellow-500 font-black uppercase text-[8px] rounded-lg shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
                  >
                    Inquire for Investment <ArrowRight size={10} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* 3. FREE MEDIA CARD (NEWLY ADDED) */}
      <motion.div
        layout
        onMouseEnter={() => setHoveredCard("media")}
        onMouseLeave={() => setHoveredCard(null)}
        transition={smoothTransition}
        className="relative flex flex-col bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] rounded-[2rem] shadow-xl border border-white/20 cursor-pointer overflow-hidden group"
        style={{
          width: hoveredCard === "media" ? "100%" : "300px",
          maxWidth: hoveredCard === "media" ? "400px" : "300px",
          minHeight: "80px",
          height: "auto",
        }}
      >
        <div className="relative z-10 w-full">
          <div className="flex items-center px-6 h-[80px] gap-4">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
              <Camera className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-black uppercase text-[11px] tracking-widest">
                Free Media Coverage
              </span>
              <span className="text-white/60 text-[7px] uppercase font-black tracking-[0.15em] mt-0.5">
                Photo & Video Services
              </span>
            </div>
            {!hoveredCard && (
              <Sparkles className="ml-auto text-white/30 w-4 h-4 animate-pulse" />
            )}
          </div>

          <AnimatePresence>
            {hoveredCard === "media" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="px-6 pb-5 flex flex-col items-center gap-4">
                  <div className="w-full h-px bg-white/20" />
                  <div className="flex gap-2">
                    {[
                      { icon: <Camera size={16} />, title: "Pro Photos" },
                      { icon: <Video size={16} />, title: "4K Filming" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-white/10 border border-white/10 px-4 py-1.5 rounded-xl flex flex-col items-center min-w-[100px] backdrop-blur-md"
                      >
                        <div className="text-white mb-0.5">{item.icon}</div>
                        <span className="text-white font-black text-[8px] uppercase">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-white font-extrabold italic text-[12px] max-w-[350px] leading-tight text-center drop-shadow-sm">
                    "We capture your environmental impact for free. Professional
                    media for your noble cause."
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction("Media");
                    }}
                    className="px-6 py-2 bg-white text-[#4f46e5] font-black uppercase text-[8px] rounded-lg shadow-lg flex items-center gap-2 hover:bg-yellow-400 hover:text-black active:scale-95 transition-all"
                  >
                    Book Free Session <ArrowRight size={10} />
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
