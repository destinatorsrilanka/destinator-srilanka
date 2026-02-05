"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sprout } from "lucide-react";
import Image from "next/image";

const AgroTourism: React.FC = () => {
  const agroImages = [
    { id: 1, src: "/image/k1.jpeg", title: "Tea Estates" },
    { id: 2, src: "/image/k2.jpeg", title: "Paddy Fields" },
    { id: 3, src: "/image/k4.jpeg", title: "Cinnamon" },
    { id: 4, src: "/image/k5.jpeg", title: "Spice Garden" },
    { id: 5, src: "/image/k6.jpeg", title: "Coconut" },
    { id: 6, src: "/image/k7.jpeg", title: "Organic" },
    { id: 7, src: "/image/k8.jpeg", title: "Orchards" },
    { id: 8, src: "/image/k9.WEBP", title: "Vegetable" },
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 relative">
        {/* --- HEADER OVERLAY --- */}
        {/* bg-black ඉවත් කර අකුරු පිටුපසින් පමණක් Gradient එකක් එක් කර ඇත */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center items-center px-6 md:px-12 text-center bg-[radial-gradient(circle,rgba(0,0,0,0.5)_0%,transparent_70%)]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-[0.4em] text-[10px] md:text-[12px] mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"
          >
            <Sprout size={14} />
            Cultivating Journeys
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-black tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,1)]"
          >
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.9)",
                letterSpacing: "0.05em",
              }}
              className="text-transparent"
            >
              AGRO
            </span>{" "}
            <span className="text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]">
              TOURISM
            </span>
          </motion.h2>
        </div>

        {/* --- IMAGE GRID --- */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-0 border border-white/5 relative z-10">
          {agroImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative h-24 md:h-32 overflow-hidden border-r border-white/5"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                // Opacity එක 0.7 දක්වා වැඩි කර පින්තූර තවත් පැහැදිලි කළා
                className="object-cover opacity-70"
              />

              {/* Minimal Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgroTourism;
