"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TreePine,
  ShieldAlert,
  Leaf,
  Binoculars,
  Palmtree,
  Flower2,
} from "lucide-react";

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
      image: "image/national_park.jpeg",
    },
    {
      title: "Sanctuaries",
      tagline: "Nature & Life",
      accent: "from-emerald-400 to-green-600",
      image: "image/Sanctuaries.jpeg",
    },
    {
      title: "Strict Reserves",
      tagline: "Untouched Ecosystems",
      accent: "from-rose-500 to-red-700",
      image: "image/strict_nature.jpeg",
    },
    {
      title: "Rainforests",
      tagline: "The Ancient Canopy",
      accent: "from-blue-400 to-indigo-600",
      image: "image/rain_forest.jpeg",
    },
    {
      title: "Botanical Gardens",
      tagline: "Flora in Bloom",
      accent: "from-pink-500 to-rose-600",
      image: "image/Botenical.jpeg",
    },
    {
      title: "Conservation Forests",
      tagline: "The Green Lungs",
      accent: "from-teal-400 to-emerald-700",
      image: "image/Conservation_forest.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-[#0a0f0b] relative overflow-hidden text-slate-200">
      {/* Top Gold Line */}
      <div className="absolute top-0 left-0 w-full opacity-20">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/20 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-900/10 rounded-full blur-[120px] -ml-48 -mb-48" />

      {/* Header aligned to 7xl container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-2"
        >
          <TreePine size={14} className="text-emerald-500" />
          Ecological Treasures
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-white tracking-tight"
        >
          Sri Lanka's <span className="text-emerald-500">Green</span> Assets
        </motion.h2>
      </div>

      {/* Grid container with wider view for the 6 cards */}
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-72 flex flex-col justify-end p-5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              <div
                className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${item.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <h3 className="text-lg font-black text-white leading-tight group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-yellow-500 font-bold text-[9px] uppercase tracking-[0.15em] mt-1">
                  {item.tagline}
                </p>
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
