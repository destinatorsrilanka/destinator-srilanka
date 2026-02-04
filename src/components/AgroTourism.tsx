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
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-[0.4em] text-[9px] mb-2"
        >
          <Sprout size={12} />
          Cultivating Journeys
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-black text-white tracking-tight"
        >
          AGRO <span className="text-emerald-500">TOURISM</span>
        </motion.h2>
      </div>

      {/* Grid Container with No Gaps */}
      <div className="max-w-[1600px] mx-auto px-6">
        {/* gap-0 මගින් පින්තූර අතර පරතරය සම්පූර්ණයෙන් ඉවත් කර ඇත */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-0 border border-white/5">
          {agroImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative h-24 md:h-32 overflow-hidden"
            >
              {/* Image - Plain Solid Visual */}
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover"
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
