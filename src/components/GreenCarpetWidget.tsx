"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion";
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
  LeafyGreen,
} from "lucide-react";

export default function GreenRibbonPremiumStrip() {
  const [isHovered, setIsHovered] = useState(false);
  const [isInvestHovered, setIsInvestHovered] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const trees = [
    { name: "Kumbuk", img: "/image/kubuk.webp" },
    { name: "Mee", img: "/image/mee.jpg" },
  ];

  const handleAction = (type: "Planting" | "Investment") => {
    const url = new URL(window.location.href);
    if (type === "Planting") {
      url.searchParams.set("plant", "true");
    } else {
      url.searchParams.set("invest", "true");
    }
    window.history.replaceState({}, "", url.toString());

    const inquirySection = document.getElementById("contact");
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" });
    }

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const smoothTransition: Transition = {
    type: "spring",
    stiffness: 200,
    damping: 25,
    mass: 0.5,
  };

  return (
    <div className="relative w-full py-12 flex flex-col lg:flex-row justify-center items-center gap-8 bg-transparent px-4 font-sans box-border">
      {/* Success Alert */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed top-5 right-5 z-[999] flex items-center gap-3 bg-[#064e3b] text-white px-6 py-4 rounded-2xl shadow-2xl border border-green-400/30"
          >
            <CheckCircle2 className="text-green-400 w-6 h-6" />
            <div className="flex flex-col">
              <span className="font-bold text-sm">Selection Saved!</span>
              <span className="text-[11px] text-green-200">
                Inquiry options updated below.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. GREEN CARPET (HIGHLIGHTED ANTI-INVASIVE FOCUS) */}
      <motion.div
        layout
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={smoothTransition}
        className="relative flex flex-col bg-[#064e3b] rounded-[2.5rem] lg:rounded-[6rem] shadow-2xl border border-green-400/20 cursor-pointer overflow-hidden"
        style={{
          width: isHovered ? "100%" : "320px",
          maxWidth: isHovered ? "1100px" : "320px",
        }}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-0"
            >
              <div
                style={{
                  backgroundImage: "url('/image/Like_plant.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#064e3b]/90 via-transparent to-[#064e3b]/95" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 w-full">
          <motion.div
            layout="position"
            className="flex items-center px-8 h-[85px] gap-4 shrink-0"
          >
            <div className="p-3 bg-green-400/20 rounded-2xl backdrop-blur-md border border-green-400/30">
              <Sprout className="text-green-400 w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black uppercase tracking-widest text-sm leading-none">
                Green Carpet
              </span>
              <span className="text-green-400/60 text-[9px] uppercase font-bold tracking-widest mt-1">
                Heritage Forest
              </span>
            </div>
            {!isHovered && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-auto"
              >
                <ChevronRight className="text-green-400 w-5 h-5" />
              </motion.div>
            )}
          </motion.div>

          <AnimatePresence mode="wait">
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={smoothTransition}
                className="w-full overflow-hidden"
              >
                <div className="flex flex-col items-center justify-center px-8 pb-7 gap-5 w-full text-center">
                  {/* Environmental Protection Highlight */}
                  <div className="flex flex-wrap justify-center items-center gap-6 w-full">
                    <div className="flex flex-col items-center">
                      <span className="text-[8px] text-green-400/60 uppercase font-black mb-2 tracking-widest">
                        Endemic Only
                      </span>
                      <div className="flex gap-4">
                        {trees.map((tree, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center group"
                          >
                            <div className="w-14 h-14 rounded-full border-2 border-green-400/40 p-1 bg-black/40">
                              <img
                                src={tree.img}
                                className="w-full h-full object-cover rounded-full"
                                alt={tree.name}
                              />
                            </div>
                            <span className="text-[9px] text-green-300 font-bold uppercase mt-1">
                              {tree.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlighted Ban Section */}
                    <div className="flex flex-col items-center">
                      <span className="text-[8px] text-red-400 uppercase font-black mb-2 tracking-widest">
                        Environmental Ban
                      </span>
                      <div className="bg-red-500/10 border border-red-500/30 px-5 py-3 rounded-[2rem] backdrop-blur-md flex items-center gap-4 shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                        <div className="relative flex items-center justify-center">
                          <TreeDeciduous
                            size={22}
                            className="text-red-500/20"
                          />
                          <Ban size={28} className="text-red-500 absolute" />
                        </div>
                        <div className="flex flex-col text-left border-l border-red-500/20 pl-4">
                          <span className="text-red-400 font-black text-[10px] uppercase leading-none">
                            Anti-Invasive Policy
                          </span>
                          <span className="text-red-200/60 text-[8px] font-bold uppercase mt-1 leading-none tracking-tight">
                            Opposing Non-Native Cultivation
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/90 font-medium italic text-[13px] max-w-[650px] leading-relaxed">
                    "Join Kubuk, mee tree plantation in the Island. Help to
                    protect our pristine world heritage geography of Central
                    highlands.
                    <span className="text-green-400 font-bold ml-1">
                      We strictly oppose invasive monocultures that destroy our
                      groundwater and damage our unique Sri Lankan ecosystem.
                    </span>
                    "
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction("Planting");
                    }}
                    className="px-10 py-3 bg-green-500 text-[#022c22] font-black uppercase text-[11px] rounded-full mt-2 hover:bg-white transition-all shadow-xl flex items-center gap-2"
                  >
                    Like to Plant <ExternalLink size={15} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* 2. ENHANCED INVEST RIBBON (UNCHANGED) */}
      <motion.div
        layout
        onMouseEnter={() => setIsInvestHovered(true)}
        onMouseLeave={() => setIsInvestHovered(false)}
        transition={smoothTransition}
        className="relative flex flex-col bg-gradient-to-br from-[#facc15] via-[#eab308] to-[#ca8a04] rounded-[2.5rem] lg:rounded-[6rem] shadow-[0_20px_50px_rgba(234,179,8,0.3)] border border-white/30 cursor-pointer overflow-hidden"
        style={{
          width: isInvestHovered ? "100%" : "320px",
          maxWidth: isInvestHovered ? "1100px" : "320px",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        <motion.div
          layout="position"
          className="flex items-center px-8 h-[85px] gap-4 shrink-0 relative z-10"
        >
          <div className="relative w-12 h-12 bg-[#111] rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
            <MessageCircle className="text-yellow-500 w-6 h-6 fill-yellow-500" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-yellow-400/20 rounded-2xl blur-md"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-black font-black uppercase text-sm leading-none tracking-tight">
              your partner in sri lanka
            </span>
            <span className="text-black/70 text-[9px] uppercase font-black tracking-[0.2em] mt-1">
              Partnership Programs
            </span>
          </div>
          {!isInvestHovered && (
            <motion.div layout className="ml-auto bg-black/10 p-2 rounded-full">
              <ArrowRight className="text-black w-5 h-5" />
            </motion.div>
          )}
        </motion.div>

        <AnimatePresence mode="wait">
          {isInvestHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={smoothTransition}
              className="w-full overflow-hidden relative z-10"
            >
              <div className="flex flex-col items-center justify-center px-8 pb-6 gap-3 w-full text-center">
                <div className="flex gap-4 mb-2">
                  <div className="bg-black/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-black/10 flex flex-col items-center shadow-inner group hover:bg-black/20 transition-colors">
                    <TrendingUp
                      size={22}
                      className="text-black mb-1 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-black font-black text-[10px] uppercase">
                      ROI
                    </span>
                  </div>
                  <div className="bg-black/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-black/10 flex flex-col items-center shadow-inner group hover:bg-black/20 transition-colors">
                    <ShieldCheck
                      size={22}
                      className="text-black mb-1 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-black font-black text-[10px] uppercase">
                      Secure
                    </span>
                  </div>
                </div>
                <p className="text-black font-extrabold italic text-[14px] max-w-[550px] leading-relaxed drop-shadow-sm">
                  "Get professional advice on sustainable heritage investments.
                  Grow your capital while protecting the environment."
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAction("Investment");
                  }}
                  className="group relative px-10 py-3 bg-[#111] text-yellow-500 font-black uppercase text-[11px] rounded-full mt-2 shadow-2xl transition-all"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Like to Invest?{" "}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                  <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
