"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion"; // Transition එකතු කළා
import {
  Sprout,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
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

  // මෙතන Type එක සඳහන් කිරීමෙන් Build error එක නැති වෙනවා
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

      {/* 1. GREEN CARPET */}
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
              <div className="absolute inset-0 bg-gradient-to-b from-[#064e3b]/80 via-transparent to-[#064e3b]/90" />
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
                <div className="flex flex-col items-center justify-center px-8 pb-5 gap-2 w-full text-center">
                  <div className="flex gap-8 mb-1">
                    {trees.map((tree, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full border-2 border-green-400/40 p-1 bg-black/30">
                          <img
                            src={tree.img}
                            className="w-full h-full object-cover rounded-full"
                            alt={tree.name}
                          />
                        </div>
                        <span className="text-[10px] text-green-300 font-bold uppercase mt-1">
                          {tree.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/90 font-medium italic text-[13px] max-w-[500px]">
                    "Join Kubuk, mee tree plantation in the Island. Help to
                    protect our pristine world heritage geography of Central
                    highlands. understand sensitive ecosystems and protect fauna
                    and flora while roaming the country."
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction("Planting");
                    }}
                    className="px-8 py-2.5 bg-green-500 text-[#022c22] font-black uppercase text-[10px] rounded-full mt-1 hover:bg-white transition-colors"
                  >
                    Like to Plant{" "}
                    <ExternalLink size={14} className="inline ml-1" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* 2. INVEST RIBBON */}
      <motion.div
        layout
        onMouseEnter={() => setIsInvestHovered(true)}
        onMouseLeave={() => setIsInvestHovered(false)}
        transition={smoothTransition}
        className="relative flex flex-col bg-gradient-to-r from-[#eab308] via-[#facc15] to-[#ca8a04] rounded-[2.5rem] lg:rounded-[6rem] shadow-2xl border border-yellow-400/30 cursor-pointer overflow-hidden"
        style={{
          width: isInvestHovered ? "100%" : "320px",
          maxWidth: isInvestHovered ? "1100px" : "320px",
        }}
      >
        <motion.div
          layout="position"
          className="flex items-center px-8 h-[85px] gap-4 shrink-0"
        >
          <div className="relative w-12 h-12 bg-black rounded-2xl flex items-center justify-center border border-white/10">
            <MessageCircle className="text-yellow-500 w-6 h-6 fill-yellow-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-black font-black uppercase text-sm leading-none">
              your partner in sri lanka
            </span>
            <span className="text-black/60 text-[9px] uppercase font-black tracking-widest mt-1">
              Partnership Programs
            </span>
          </div>
          {!isInvestHovered && (
            <motion.div layout className="ml-auto">
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
              className="w-full overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center px-8 pb-5 gap-2 w-full text-center">
                <div className="flex gap-4 mb-1">
                  <div className="bg-black/10 px-5 py-2 rounded-xl border border-black/5 flex flex-col items-center">
                    <TrendingUp size={20} className="text-black mb-1" />
                    <span className="text-black font-black text-[9px] uppercase">
                      ROI
                    </span>
                  </div>
                  <div className="bg-black/10 px-5 py-2 rounded-xl border border-black/5 flex flex-col items-center">
                    <ShieldCheck size={20} className="text-black mb-1" />
                    <span className="text-black font-black text-[9px] uppercase">
                      Secure
                    </span>
                  </div>
                </div>
                <p className="text-black font-bold italic text-[13px] max-w-[500px]">
                  "Get professional advice on sustainable heritage investments.
                  Grow your capital while protecting the environment."
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAction("Investment");
                  }}
                  className="px-8 py-2.5 bg-[#111] text-yellow-500 font-black uppercase text-[10px] rounded-full mt-1 hover:bg-yellow-500 hover:text-black transition-colors"
                >
                  Like to Invest?{" "}
                  <ArrowRight size={14} className="inline ml-1" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
