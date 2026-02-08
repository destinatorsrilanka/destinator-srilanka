"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sprout,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Ban,
  Camera,
  Sparkles,
  CheckSquare,
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
      img: "/image/kubuk.jpeg",
    },
    { name: "Mee", scientific: "Madhuca longifolia", img: "/image/mee.PNG" },
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
    setHoveredCard(null);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const cardData = [
    {
      id: "green",
      icon: <Sprout className="w-6 h-6" />,
      bg: "/image/greencarpet.jpeg",
      popupBg: "/image/Plant-Trees.jpg",
      freeLabel: "FREE",
    },
    {
      id: "invest",
      icon: <TrendingUp className="w-6 h-6" />,
      bg: "/image/invest.jpeg",
      popupBg: "/image/invest2.jpeg",
      freeLabel: "FREE",
    },
    {
      id: "media",
      icon: <Camera className="w-6 h-6" />,
      bg: "/image/freePoto.jpeg",
      popupBg: "/image/freePoto2.jpeg",
      freeLabel: "FREE",
    },
  ];

  return (
    <div className="relative w-full py-24 flex flex-col lg:flex-row justify-center items-center gap-5 bg-transparent px-4">
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-10 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-3 bg-[#064e3b] text-white px-6 py-3 border border-green-400 shadow-2xl font-bold uppercase text-[10px] tracking-widest whitespace-nowrap"
          >
            <CheckCircle2 className="text-green-400 w-5 h-5" />
            Selection Registered!
          </motion.div>
        )}
      </AnimatePresence>

      {cardData.map((card) => (
        <div
          key={card.id}
          className="relative group"
          onMouseEnter={() => setHoveredCard(card.id as any)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <AnimatePresence>
            {hoveredCard === card.id && (
              <motion.div
                initial={{ opacity: 0, y: 15, x: "-50%" }}
                animate={{ opacity: 1, y: -12, x: "-50%" }}
                exit={{ opacity: 0, y: 15, x: "-50%" }}
                className={`fixed lg:absolute bottom-[20%] lg:bottom-full left-1/2 z-[60] overflow-hidden border-4 border-white shadow-[0_30px_60px_rgba(0,0,0,0.7)] rounded-none bg-white mb-6 ${
                  card.id === "invest"
                    ? "w-[95vw] max-w-[500px]"
                    : "w-[90vw] max-w-[350px] lg:w-[400px]"
                }`}
              >
                {/* 1. INVESTMENT POPUP */}
                {card.id === "invest" ? (
                  <div className="relative w-full h-[220px] overflow-hidden bg-slate-900">
                    <img
                      src={card.popupBg}
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                      alt="Consultation"
                    />
                    <div className="relative z-10 h-full flex flex-col p-5 text-white bg-gradient-to-r from-black/80 to-transparent">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-2xl font-black uppercase tracking-tighter">
                            Free Consultation
                          </h2>
                          <p className="text-[10px] font-medium opacity-80 max-w-[200px] leading-tight">
                            Start your business in sri lanka with trusted
                            partnerships{" "}
                          </p>
                        </div>
                        <div className="bg-white p-1.5 w-14 h-14 flex items-center justify-center shadow-xl">
                          <div className="text-black text-[5px] font-black text-center leading-none">
                            INVEST<span className="text-yellow-500">IN</span>
                            <br />
                            TOURISM
                            <br />
                            SL
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-yellow-400">
                          buy a land | own'hotel | build your second Home | sell
                          your products
                        </p>
                      </div>
                      <div className="mt-auto flex justify-end">
                        <button
                          onClick={() => handleAction("Investment")}
                          className="bg-yellow-400 text-black px-6 py-2 font-black uppercase text-[10px] flex items-center gap-2 hover:bg-white transition-colors shadow-lg group/btn"
                        >
                          Interesting{" "}
                          <CheckSquare
                            size={14}
                            className="group-hover/btn:scale-110 transition-transform"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : card.id === "media" ? (
                  /* 2. MEDIA POPUP */
                  <div className="relative p-3 flex flex-col items-center">
                    <div className="text-center mb-3 leading-none">
                      <h2 className="text-4xl font-black tracking-tighter text-black flex items-start justify-center">
                        T<span className="text-[#eab308]">r</span>avel
                      </h2>
                      <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-black -mt-1">
                        Album
                      </p>
                    </div>
                    <div className="w-full h-[130px] overflow-hidden shadow-inner mb-3">
                      <img
                        src={card.popupBg}
                        alt="magazine"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center px-4 mb-3 italic font-bold text-[8px] tracking-widest text-black">
                      "TRAVEL FAR ENOUGH, YOU MEET YOURSELF."
                    </div>
                    <div className="w-full space-y-2 z-10 bg-white/80 backdrop-blur-sm p-1">
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          "Drone Coverage",
                          "Social Reels",
                          "Post-Production",
                          "4K RAW Clips",
                        ].map((f, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1.5 bg-gray-50 p-1.5 border border-gray-100"
                          >
                            <CheckCircle2
                              size={10}
                              className="text-green-600"
                            />
                            <span className="text-black text-[7px] font-black uppercase">
                              {f}
                            </span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => handleAction("Media")}
                        className="w-full px-4 py-1.5 bg-black text-white font-black uppercase text-[8px] rounded-none flex items-center justify-center gap-2 hover:bg-yellow-500 transition-all"
                      >
                        Request Coverage <ArrowRight size={10} />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* 3. GREEN CARPET POPUP (With Updated Detailed Content) */
                  <div className="relative z-10 p-6">
                    <div className="absolute inset-0 z-0">
                      <img
                        src={card.popupBg}
                        alt="bg"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                      <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex flex-col items-center">
                          <span className="text-[7px] text-green-300 uppercase font-black mb-2 tracking-[0.2em] bg-black/40 px-2">
                            Signature Endemics
                          </span>
                          <div className="flex gap-3">
                            {trees.map((tree, idx) => (
                              <div
                                key={idx}
                                className="flex flex-col items-center"
                              >
                                <div className="w-14 h-14 border-2 border-white overflow-hidden shadow-xl">
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
                          <span className="text-[7px] text-red-400 uppercase font-black mb-2 tracking-[0.2em] bg-black/40 px-2">
                            Strict Guidelines
                          </span>
                          <div className="bg-black/80 border border-red-500/50 px-3 py-2 flex flex-col items-center gap-1">
                            <span className="text-red-500 font-black text-[9px] uppercase tracking-tighter">
                              <Ban size={14} className="inline mr-1" /> Say NO
                              ❌ Pine 🌲
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-white italic text-[11px] leading-tight text-center font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        "Join us in making an exemplary contribution to the
                        world by planting a valuable sapling that we provide
                        FREE OF CHARGE."
                      </p>
                      <button
                        onClick={() => handleAction("Planting")}
                        className="px-6 py-2 bg-white text-[#064e3b] font-black uppercase text-[8px] rounded-none hover:bg-yellow-500 hover:text-black transition-all shadow-2xl flex items-center gap-2"
                      >
                        Like to Plant <ExternalLink size={10} />
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* MAIN CARD STRIP */}
          <div
            className="relative w-[300px] h-[85px] overflow-hidden border border-white/10 cursor-pointer group bg-black"
            onClick={() => setHoveredCard(card.id as any)}
          >
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <img
                src={card.bg}
                alt="bg"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute top-0 right-0 z-30"
            >
              <div className="bg-yellow-400 text-black font-[900] text-[14px] px-5 py-2 flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                <Sparkles size={14} className="fill-black animate-pulse" />
                <span>{card.freeLabel}</span>
              </div>
              <div className="absolute top-0 right-full w-0 h-0 border-t-[37px] border-t-yellow-400 border-l-[20px] border-l-transparent" />
            </motion.div>
            <div className="relative z-10 flex items-center h-full px-8">
              <div className="p-3 bg-white/10 backdrop-blur-md border border-white/30 text-white group-hover:bg-yellow-400 group-hover:text-black transition-all">
                {card.icon}
              </div>
              <div className="ml-6 flex flex-col gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                <div className="h-1 w-20 bg-white rounded-full" />
                <div className="h-1 w-12 bg-yellow-400 rounded-full" />
              </div>
              <ChevronRight className="ml-auto text-white group-hover:translate-x-1 group-hover:text-yellow-400 transition-all" />
            </div>
            <div className="absolute bottom-0 left-0 h-[3px] w-full bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-[0_0_15px_#facc15]" />
          </div>
        </div>
      ))}
    </div>
  );
}
