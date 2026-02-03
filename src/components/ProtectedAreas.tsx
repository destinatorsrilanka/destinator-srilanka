"use client";

import React from "react";
import { motion } from "framer-motion";
import { TreePine, ShieldAlert, Leaf, Binoculars } from "lucide-react";

interface Category {
  title: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  highlights: string[];
  stats: string;
  accent: string;
}

const ProtectedAreas: React.FC = () => {
  const categories: Category[] = [
    {
      title: "National Parks",
      icon: <Binoculars className="w-6 h-6" />,
      tagline: "Wilderness Within Reach",
      description:
        "Regulated access to observe wildlife in their natural habitat.",
      highlights: ["Jeep Safaris", "Wildlife"],
      stats: "26 Parks",
      accent: "from-yellow-500 to-orange-600",
    },
    {
      title: "Sanctuaries",
      icon: <TreePine className="w-6 h-6" />,
      tagline: "Nature & Life",
      description:
        "Habitats where wildlife and human activities coexist peacefully.",
      highlights: ["Bird Watching", "Eco-trails"],
      stats: "60+ Areas",
      accent: "from-emerald-400 to-green-600",
    },
    {
      title: "Strict Reserves",
      icon: <ShieldAlert className="w-6 h-6" />,
      tagline: "Untouched Ecosystems",
      description: "Entry is strictly prohibited to ensure zero disturbance.",
      highlights: ["Research", "Pristine"],
      stats: "3 Locations",
      accent: "from-rose-500 to-red-700",
    },
    {
      title: "Conservation Forests",
      icon: <Leaf className="w-6 h-6" />,
      tagline: "The Green Lungs",
      description:
        "Fragile ecosystems protecting watersheds and endemic species.",
      highlights: ["Endemic Flora", "Watersheds"],
      stats: "15+ Forests",
      accent: "from-teal-400 to-emerald-700",
    },
  ];

  return (
    <section className="py-12 bg-[#0a0f0b] relative overflow-hidden text-slate-200">
      {/* Dark Forest background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/20 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-900/10 rounded-full blur-[120px] -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-10">
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
            className="text-2xl md:text-4xl font-black text-white tracking-tight"
          >
            Sri Lanka's <span className="text-emerald-500">Green</span> Assets
          </motion.h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-6 rounded-2xl bg-[#121a13] border border-white/5 hover:border-emerald-500/30 shadow-2xl transition-all duration-500"
            >
              {/* Subtle top gradient line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r ${item.accent} opacity-20 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="mb-5 inline-flex p-3 rounded-xl bg-white/5 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shadow-inner">
                  {item.icon}
                </div>

                <div className="mb-3">
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-yellow-500/80 font-semibold text-[9px] uppercase tracking-wide">
                    {item.tagline}
                  </p>
                </div>

                <p className="text-slate-400 mb-5 text-[11px] leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.highlights.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[8px] font-bold px-2 py-0.5 bg-emerald-950/50 text-emerald-400 rounded border border-emerald-900/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  {item.stats}
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] opacity-40 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtectedAreas;
