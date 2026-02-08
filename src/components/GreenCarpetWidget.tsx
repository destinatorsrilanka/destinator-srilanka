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
    setHoveredCard(null); // Action එකෙන් පසු popup එක වසා දමයි
    setTimeout(() => setShowAlert(false), 3000);
  };

  const cardData = [
    {
      id: "green",
      title: "Green Carpet",
      sub: "Heritage Forest Reserve",
      icon: <Sprout className="w-5 h-5" />,
      bg: "/image/greencarpet.jpeg",
      popupBg: "/image/Plant-Trees.jpg",
      freeLabel: "FREE",
    },
    {
      id: "invest",
      title: "Partner in Sri Lanka",
      sub: "Sustainable Growth",
      icon: <TrendingUp className="w-5 h-5" />,
      bg: "/image/invest.jpeg",
      popupBg: "/image/invest2.jpeg",
      freeLabel: "FREE",
    },
    {
      id: "media",
      title: "Free Media Coverage",
      sub: "Photo & Video Services",
      icon: <Camera className="w-5 h-5" />,
      bg: "/image/freePoto.jpeg",
      popupBg: "/image/freePoto2.jpeg",
      freeLabel: "FREE",
    },
  ];

  return (
    <div className="relative w-full py-24 flex flex-col lg:flex-row justify-center items-center gap-5 bg-transparent px-4">
      {/* Alert */}
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
          {/* POPUP AREA */}
          <AnimatePresence>
            {hoveredCard === card.id && (
              <motion.div
                initial={{ opacity: 0, y: 15, x: "-50%" }}
                animate={{ opacity: 1, y: -12, x: "-50%" }}
                exit={{ opacity: 0, y: 15, x: "-50%" }}
                // Responsive positioning: Mobile වලදී මැදට, Desktop වලදී කාඩ් එකට සාපේක්ෂව
                className="fixed lg:absolute bottom-[20%] lg:bottom-full left-1/2 w-[90vw] max-w-[350px] lg:w-[400px] mb-6 z-[60] overflow-hidden border-4 border-white shadow-[0_30px_60px_rgba(0,0,0,0.7)] rounded-none bg-white"
              >
                {card.id === "media" ? (
                  <div className="relative p-3 flex flex-col items-center">
                    <div className="w-full flex justify-between items-center border border-gray-300 px-3 py-0.5 mb-3">
                      <span className="text-[6px] font-bold text-gray-500 uppercase tracking-tighter">
                        March 2025
                      </span>
                      <span className="text-[6px] font-bold text-gray-500 lowercase tracking-tighter">
                        www.destinator.com
                      </span>
                      <span className="text-[6px] font-bold text-gray-500 uppercase tracking-tighter">
                        Vol - 01
                      </span>
                    </div>

                    <div className="text-center mb-3 leading-none">
                      <h2 className="text-4xl font-black tracking-tighter text-black flex items-start justify-center">
                        T<span className="text-[#eab308]">r</span>avel
                      </h2>
                      <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-black -mt-1">
                        Magazine
                      </p>
                    </div>

                    <div className="w-full h-[130px] overflow-hidden shadow-inner mb-3">
                      <img
                        src={card.popupBg}
                        alt="magazine-cover"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="text-center px-4 mb-3">
                      <p className="text-[8px] font-black uppercase tracking-widest text-gray-800 leading-tight">
                        "TRAVEL FAR ENOUGH, YOU MEET YOURSELF."
                      </p>
                    </div>

                    <div className="w-full space-y-2 z-10 bg-white/80 backdrop-blur-sm p-1">
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          "Drone Coverage",
                          "Social Reels",
                          "Post-Production",
                          "4K RAW Clips",
                        ].map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1.5 bg-gray-50 p-1.5 border border-gray-100"
                          >
                            <CheckCircle2
                              size={10}
                              className="text-green-600"
                            />
                            <span className="text-black text-[7px] font-black uppercase">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAction("Media");
                        }}
                        className="w-full px-4 py-1.5 bg-black text-white font-black uppercase text-[8px] rounded-none shadow-lg flex items-center justify-center gap-2 hover:bg-yellow-500 hover:text-black transition-all"
                      >
                        Request Coverage <ArrowRight size={10} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="relative z-10 p-6">
                    <div className="absolute inset-0 z-0">
                      <img
                        src={card.popupBg}
                        alt="popup-bg"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    </div>

                    <div className="relative z-10">
                      {card.id === "green" && (
                        <div className="flex flex-col items-center gap-4">
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
                                    <div className="w-14 h-14 border-2 border-white overflow-hidden rounded-none shadow-xl">
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
                                  <Ban size={14} className="inline mr-1" /> Say
                                  NO ❌ Pine 🌲
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
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAction("Planting");
                            }}
                            className="px-6 py-2 bg-white text-[#064e3b] font-black uppercase text-[8px] rounded-none hover:bg-green-600 hover:text-white transition-all shadow-2xl flex items-center gap-2"
                          >
                            Like to Plant <ExternalLink size={10} />
                          </button>
                        </div>
                      )}

                      {card.id === "invest" && (
                        <div className="flex flex-col items-center gap-4">
                          <div className="flex gap-2">
                            {[
                              {
                                icon: <TrendingUp size={16} />,
                                title: "High Yield",
                              },
                              {
                                icon: <ShieldCheck size={16} />,
                                title: "Escrowed",
                              },
                            ].map((item, i) => (
                              <div
                                key={i}
                                className="bg-black/70 border border-white/20 px-4 py-1.5 flex flex-col items-center min-w-[100px]"
                              >
                                <div className="text-yellow-500 mb-0.5">
                                  {item.icon}
                                </div>
                                <span className="text-white font-black text-[8px] uppercase">
                                  {item.title}
                                </span>
                              </div>
                            ))}
                          </div>
                          <p className="text-white font-extrabold italic text-[12px] leading-tight text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                            "Secure your legacy with sustainable heritage
                            investments."
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAction("Investment");
                            }}
                            className="px-6 py-2 bg-yellow-500 text-black font-black uppercase text-[8px] rounded-none shadow-lg flex items-center gap-2 hover:bg-white transition-all"
                          >
                            Inquire for Investment <ArrowRight size={10} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* MAIN CARD STRIP */}
          <div
            className="relative w-[300px] h-[85px] overflow-hidden border border-white/20 cursor-pointer group rounded-none"
            onClick={(e) => {
              // Card එක click කළ විට form එක update නොවී, popup එක පමණක් පෙන්වීමට
              e.stopPropagation();
              setHoveredCard(card.id as any);
            }}
          >
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
              <img
                src={card.bg}
                alt="bg"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
            </div>
            <div className="absolute top-0 right-0 z-20">
              <div className="bg-yellow-500 text-black font-black text-[8px] px-3 py-1 flex items-center gap-1 shadow-lg">
                <Sparkles size={10} className="fill-black" /> {card.freeLabel}
              </div>
            </div>
            <div className="relative z-10 flex items-center h-full px-6 gap-4">
              <div className="p-2 bg-white/10 border border-white/30 text-white rounded-none group-hover:bg-white group-hover:text-black transition-all duration-300">
                {card.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black uppercase tracking-[0.15em] text-[12px]">
                  {card.title}
                </span>
                <span className="text-white/80 text-[7px] uppercase font-bold tracking-[0.2em] mt-0.5">
                  {card.sub}
                </span>
              </div>
              <ChevronRight className="ml-auto text-white group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
