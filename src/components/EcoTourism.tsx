"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../i18n";

const EcoTourism: React.FC = () => {
  const { t } = useTranslation();
  const [showInfo, setShowInfo] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null); // වීඩියෝව සඳහා ref එකක් එක් කළා

  // Fallback අගයන් සහිතව මාතෘකා සකසා ගැනීම
  const displayTitleMain =
    t("eco.title_main") !== "eco.title_main"
      ? t("eco.title_main")
      : "ECO TOURISM";
  const displayTitleSub =
    t("eco.title_sub") !== "eco.title_sub"
      ? t("eco.title_sub")
      : "GO GREEN PLANS";

  const allCategories = [
    t("eco.categories.nature_reserve"),
    t("eco.categories.conservation"),
    t("eco.categories.rainforests"),
    t("eco.categories.plains"),
    t("eco.categories.botanical"),
    t("eco.categories.sanctuaries"),
    t("eco.categories.national_parks"),
  ];

  // Instagram/iOS Autoplay Fix
  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          videoRef.current?.play();
        });
      }
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        showInfo &&
        infoRef.current &&
        !infoRef.current.contains(event.target as Node)
      ) {
        setShowInfo(false);
      }
    }
    if (showInfo) {
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 0);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showInfo]);

  return (
    <section className="w-full bg-[#050805] py-2 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-6 relative">
        <div className="relative border border-white/10 overflow-hidden flex flex-col min-h-[250px] md:min-h-[300px] rounded-sm">
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              {...{
                "webkit-playsinline": "true",
                playsinline: "true",
              }} // TypeScript error එක මගහැරීමට සහ iPhone browsers වල autoplay ස්ථාවර කිරීමට
              preload="auto"
              disablePictureInPicture
              controls={false}
              className="w-full h-full object-cover opacity-100"
            >
              <source src="/image/eco-bg.MP4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <h2 className="text-white text-2xl md:text-4xl font-black tracking-[0.05em] uppercase leading-tight drop-shadow-2xl ">
                {displayTitleMain} | {displayTitleSub}
              </h2>

              <button
                onClick={() => setShowInfo(true)}
                className="mt-4 flex flex-col items-center group pointer-events-auto cursor-pointer"
              >
                <div className="flex items-center justify-center -space-x-5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.4, 1, 0.4], x: [0, 8, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.2,
                        delay: i * 0.15,
                      }}
                    >
                      <ChevronRight className="text-white w-8 h-8 md:w-12 md:h-12 stroke-[4px]" />
                    </motion.div>
                  ))}
                </div>
              </button>
            </motion.div>
          </div>

          <AnimatePresence>
            {showInfo && (
              <motion.div
                ref={infoRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 bg-white p-6 md:p-10 overflow-y-auto flex flex-col items-center justify-center text-center"
              >
                <button
                  onClick={() => setShowInfo(false)}
                  className="absolute top-4 right-4 text-black/50 hover:text-black transition-colors"
                >
                  <X size={28} />
                </button>
                <div className="max-w-2xl w-full text-black">
                  <h3 className="font-black text-xl md:text-2xl mb-4 tracking-tighter uppercase border-b-2 border-emerald-500 inline-block">
                    {t("eco.modal_title")}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 font-medium">
                    {t("eco.modal_desc")}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {allCategories.map((cat, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-black text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-sm border border-black/5"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EcoTourism;
