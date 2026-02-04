"use client";

import React from "react";
import { motion } from "framer-motion";
import { TreePine } from "lucide-react";
import Image from "next/image";

interface Category {
  title: string;
  tagline: string;
  accent: string;
  image: string;
}

const ProtectedAreas: React.FC = () => {
  const categories: Category[] = [
    {
      title: "National Parks",
      tagline: "Wilderness Within Reach",
      accent: "from-yellow-500 to-orange-600",
      image: "/image/national_park.jpeg",
    },
    {
      title: "Sanctuaries",
      tagline: "Nature & Life",
      accent: "from-emerald-400 to-green-600",
      image: "/image/Sanctuaries.jpeg",
    },
    {
      title: "Strict Reserves",
      tagline: "Untouched Ecosystems",
      accent: "from-rose-500 to-red-700",
      image: "/image/strict_nature.jpeg",
    },
    {
      title: "Rainforests",
      tagline: "The Ancient Canopy",
      accent: "from-blue-400 to-indigo-600",
      image: "/image/rain_forest.jpeg",
    },
    {
      title: "Botanical Gardens",
      tagline: "Flora in Bloom",
      accent: "from-pink-500 to-rose-600",
      image: "/image/Botenical.jpeg",
    },
    {
      title: "Conservation Forests",
      tagline: "The Green Lungs",
      accent: "from-teal-400 to-emerald-700",
      image: "/image/Conservation_forest.jpeg",
    },
  ];

  return (
    <section
      className="py-20 bg-[#0a0f0b] relative overflow-hidden text-slate-200"
      style={{
        // Gradient එකේ opacity එක 0.4 සහ 0.6 දක්වා අඩු කළා (පින්තූරය උපරිමයෙන් පෙනීමට)
        backgroundImage: `linear-gradient(to bottom, rgba(10, 15, 11, 0.4) 0%, rgba(10, 15, 11, 0.6) 100%), url('/image/greenassect.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Gold Line */}
      <div className="absolute top-0 left-0 w-full opacity-20">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      </div>

      {/* Lighting effects - මේවාත් පොඩ්ඩක් bright කළා පින්තූරය ඉස්මතු වෙන්න */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] -ml-48 -mb-48" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center md:justify-start gap-2 text-yellow-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-2"
        >
          <TreePine size={14} className="text-emerald-500" />
          Ecological Treasures
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg"
        >
          Sri Lanka's <span className="text-emerald-500">Green</span> Assets
        </motion.h2>
      </div>

      {/* Grid container */}
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative h-32 flex flex-col justify-end p-4 rounded-none overflow-hidden border border-white/20 shadow-2xl transition-all duration-500 backdrop-blur-[2px]"
            >
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity" />
              </div>

              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <h3 className="text-[11px] md:text-xs font-black text-white leading-tight group-hover:text-emerald-400 transition-colors uppercase tracking-wider">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Gold Line */}
      <div className="absolute bottom-0 left-0 w-full opacity-20">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      </div>
    </section>
  );
};

export default ProtectedAreas;
