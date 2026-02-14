"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  ChevronRight,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Ban,
  CheckSquare,
} from "lucide-react";
import "../i18n";

export default function GreenRibbonPremiumStrip() {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<
    "green" | "invest" | "media" | null
  >(null);
  const [showAlert, setShowAlert] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const trees = [
    {
      name: "Kumbuk",
      scientific: "Terminalia arjuna",
      img: "/image/kubuk.jpeg",
    },
    { name: "Mee", scientific: "Madhuca longifolia", img: "/image/mee.PNG" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        hoveredCard &&
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setHoveredCard(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [hoveredCard]);

  const handleAction = (type: "plant" | "invest" | "media") => {
    const url = new URL(window.location.href);
    url.searchParams.set(type, "true");
    window.history.replaceState({}, "", url.toString());
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setShowAlert(true);
    setHoveredCard(null);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const cardData = [
    {
      id: "green",
      bg: "/image/greencarpet.jpeg",
      popupBg: "/image/Plant-Trees.jpg",
      position: "left",
    },
    {
      id: "invest",
      bg: "/image/invest.jpeg",
      popupBg: "/image/invest2.jpeg",
      position: "right",
    },
    {
      id: "media",
      bg: "/image/freePoto.jpeg",
      popupBg: "/image/freePoto2.jpeg",
      position: "right",
    },
  ];

  return (
    <div className="relative w-full py-20 flex flex-col items-center bg-transparent px-4">
      {/* --- SECTION TITLE --- */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="text-white text-3xl md:text-4xl font-black tracking-[0.2em] uppercase">
          <span className="text-yellow-400">{t("benefits.title_main")}</span>{" "}
          {t("benefits.title_sub")}
        </h2>
        <div className="h-1 w-24 bg-yellow-400 mx-auto mt-4" />
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-5 w-full">
        {/* Success Alert */}
        <AnimatePresence>
          {showAlert && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-10 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-3 bg-[#064e3b] text-white px-6 py-3 border border-green-400 shadow-2xl font-bold uppercase text-[10px] tracking-widest whitespace-nowrap"
            >
              <CheckCircle2 className="text-green-400 w-5 h-5" />
              {t("benefits.selection_registered")}
            </motion.div>
          )}
        </AnimatePresence>

        {cardData.map((card) => (
          <div
            key={card.id}
            className="relative group z-20"
            onMouseEnter={() => setHoveredCard(card.id as any)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setHoveredCard(card.id as any)}
          >
            <AnimatePresence>
              {hoveredCard === card.id && (
                <motion.div
                  ref={popupRef}
                  initial={{ opacity: 0, y: 15, x: "-50%" }}
                  animate={{ opacity: 1, y: -10, x: "-50%" }}
                  exit={{ opacity: 0, y: 15, x: "-50%" }}
                  className={`absolute bottom-full left-1/2 z-[100] overflow-hidden border-4 border-white shadow-[0_30px_60px_rgba(0,0,0,0.7)] rounded-none bg-white mb-4 
                  ${card.id === "invest" ? "w-[90vw] max-w-[450px] lg:w-[500px]" : "w-[85vw] max-w-[350px] lg:w-[400px]"}`}
                >
                  {/* INVESTMENT POPUP */}
                  {card.id === "invest" ? (
                    <div className="relative w-full h-[220px] overflow-hidden bg-slate-900">
                      <Image
                        src={card.popupBg}
                        alt="Consultation"
                        fill
                        className="object-cover opacity-60"
                      />
                      <div className="relative z-10 h-full flex flex-col p-5 text-white bg-gradient-to-r from-black/80 to-transparent">
                        <div className="flex justify-between items-start">
                          <div>
                            <h2 className="text-xl lg:text-2xl font-black uppercase tracking-tighter">
                              {t("benefits.invest.title")}
                            </h2>
                            <p className="text-[10px] font-medium opacity-80 max-w-[200px] leading-tight">
                              {t("benefits.invest.subtitle")}
                            </p>
                          </div>
                          <div className="bg-white p-1.5 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center shadow-xl">
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
                          <p className="text-[10px] lg:text-[11px] font-bold uppercase tracking-widest text-yellow-400">
                            {t("benefits.invest.tags")}
                          </p>
                        </div>
                        <div className="mt-auto flex justify-end">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAction("invest");
                            }}
                            className="bg-yellow-400 text-black px-6 py-2 font-black uppercase text-[10px] flex items-center gap-2 hover:bg-white transition-colors shadow-lg group/btn"
                          >
                            {t("benefits.invest.button")}{" "}
                            <CheckSquare
                              size={14}
                              className="group-hover/btn:scale-110 transition-transform"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : card.id === "media" ? (
                    /* TRAVEL ALBUM POPUP */
                    <div className="relative p-3 flex flex-col items-center">
                      <div className="text-center mb-2 leading-none">
                        <h2 className="text-3xl font-black tracking-tighter text-black flex items-start justify-center">
                          T<span className="text-[#eab308]">r</span>avel
                        </h2>
                        <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-black -mt-1">
                          {t("benefits.media.title")}
                        </p>
                      </div>
                      <div className="relative w-full h-[120px] overflow-hidden shadow-inner mb-2">
                        <Image
                          src={card.popupBg}
                          alt="magazine"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-yellow-400 text-black text-[7px] font-black px-2 py-0.5 tracking-tighter shadow-lg">
                          {t("benefits.media.soft_copy")}
                        </div>
                      </div>
                      <div className="text-center px-4 mb-2 italic font-bold text-[8px] tracking-widest text-black">
                        {t("benefits.media.quote")}
                      </div>
                      <div className="w-full space-y-2 z-10 bg-white/80 backdrop-blur-sm p-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAction("media");
                          }}
                          className="w-full px-4 py-1.5 bg-black text-white font-black uppercase text-[8px] flex items-center justify-center gap-2 hover:bg-yellow-500 transition-all"
                        >
                          {t("benefits.media.button")} <ArrowRight size={10} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* TREE PLANTING POPUP */
                    <div className="relative z-10 p-6">
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={card.popupBg}
                          alt="Nature"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                      </div>
                      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                          <div className="flex flex-col items-center">
                            <span className="text-[7px] text-green-300 uppercase font-black mb-2 tracking-[0.2em] bg-black/40 px-2">
                              {t("benefits.planting.title")}
                            </span>
                            <div className="flex gap-3">
                              {trees.map((tree, idx) => (
                                <div
                                  key={idx}
                                  className="flex flex-col items-center"
                                >
                                  <div className="w-12 h-12 lg:w-14 lg:h-14 border-2 border-white overflow-hidden relative shadow-xl">
                                    <Image
                                      src={tree.img}
                                      alt={tree.name}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <span className="text-[8px] lg:text-[9px] text-white font-black uppercase mt-1.5 drop-shadow-md">
                                    {tree.name}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <span className="text-[7px] text-red-400 uppercase font-black mb-2 tracking-[0.2em] bg-black/40 px-2">
                              {t("benefits.planting.guidelines")}
                            </span>
                            <div className="bg-black/80 border border-red-500/50 px-3 py-2 flex flex-col items-center gap-1">
                              <span className="text-red-500 font-black text-[9px] uppercase tracking-tighter">
                                <Ban size={14} className="inline mr-1" />{" "}
                                {t("benefits.planting.no_pine")} ❌🌲
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-white italic text-[10px] lg:text-[11px] leading-tight text-center font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                          {t("benefits.planting.desc")}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAction("plant");
                          }}
                          className="px-6 py-2 bg-white text-[#064e3b] font-black uppercase text-[8px] hover:bg-yellow-500 hover:text-black transition-all shadow-2xl flex items-center gap-2"
                        >
                          {t("benefits.planting.button")}{" "}
                          <ExternalLink size={10} />
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* MAIN CARD STRIP */}
            <div className="relative w-[280px] lg:w-[300px] h-[85px] overflow-hidden border border-white/20 cursor-pointer group bg-zinc-900">
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                <Image
                  src={card.bg}
                  alt="benefit-bg"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              </div>

              {/* ARROW & LINES (Always Visible) */}
              <div className="relative z-10 flex items-center justify-end h-full px-8 transition-all duration-500">
                <div className="flex flex-col items-end gap-1.5 mr-4">
                  <div className="h-0.5 w-16 bg-white/70 rounded-full" />
                  <div className="h-0.5 w-10 bg-yellow-400 rounded-full" />
                </div>
                <div className="p-2 bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.6)]">
                  <ChevronRight size={18} className="text-black" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-[0_0_15px_#facc15]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
