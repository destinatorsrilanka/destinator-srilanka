"use client";
import React from "react";
import { motion } from "framer-motion";

const visualHighlights = [
  { src: "/image/herbal.jpg", title: "Herbal massage" },
  { src: "/image/medication.jpg", title: "Meditation programs" },
  { src: "/image/abseiling.jpg", title: "Trekking hiking abseiling" },
  { src: "/image/water_sport.jpg", title: "Water sports (rafting kayaking)" },
  { src: "/image/Glamping.jpg", title: "Camping / Glamping" },
  { src: "/image/Cooking.jpg", title: "Cooking / Village experiences" },
  { src: "/image/Sunrise.jpg", title: "Sunrise spots (pidurangala etc)" },
  { src: "/image/Handicrafts.jpeg", title: "Handicrafts" },
  { src: "/image/leopard.jpg", title: "Sri Lankan Leopard" },
  { src: "/image/Secret-Beach-Mirissa.jpg", title: "Secret Shores" },
  { src: "/image/Surfing.jpg", title: "Surfing 🏄 (hiriketiya Arugambay)" },
  { src: "/image/Dolphing.jpg", title: "Dolphing and whale watching" },
  { src: "/image/Snorkeling.jpg", title: "Scuba Diving . Snorkelling 🤿" },
  { src: "/image/Cinnamon.jpg", title: "Pure Cinnamon" },
  { src: "/image/gems.webp", title: "Ceylon Sapphires" },
];

const fullList = [
  ...visualHighlights,
  ...visualHighlights,
  ...visualHighlights,
];

export default function CompactPhotoStrip() {
  return (
    <section className="py-10 bg-[#080808] overflow-hidden">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-10 h-[1.5px] bg-yellow-500 shadow-[0_0_8px_#eab308]"></span>
          <h2 className="text-white text-xs md:text-sm font-black uppercase tracking-[0.4em]">
            Visual Highlights
          </h2>
        </div>
      </div>

      {/* The Strip Container */}
      <div className="relative">
        {/* Side Fades */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-5 py-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          style={{ width: "max-content" }}
        >
          {fullList.map((item, index) => (
            <div
              key={index}
              className="relative shrink-0 h-[180px] md:h-[260px] rounded-[1.5rem] overflow-hidden border border-white/10 bg-[#111]"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-auto object-contain transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Updated Tag Design */}
              <div className="absolute bottom-4 left-3 right-3 flex justify-start">
                <div className="flex items-start gap-2.5 bg-black/40 backdrop-blur-xl border border-white/20 px-3 py-2 rounded-xl shadow-2xl max-w-full">
                  {/* Glowing Dot - දැන් අකුරු සමඟ පෙළ ගැසීමට items-start සහ mt-1.5 භාවිතා කර ඇත */}
                  <div className="relative flex h-2 w-2 shrink-0 mt-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500 shadow-[0_0_10px_#eab308]"></span>
                  </div>

                  {/* Text Container */}
                  <span className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] leading-tight overflow-hidden text-ellipsis">
                    {item.title}
                  </span>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-500/40 via-transparent to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-10 opacity-30">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
      </div>
    </section>
  );
}
