"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Globe,
  Award,
  ShieldCheck,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

const LOGO_COLOR = "#EAB308";

const stats = [
  { id: 1, label: "Travelers", value: "50K+", icon: Users },
  { id: 2, label: "Destinations", value: "120+", icon: Globe },
  { id: 3, label: "Heritage", value: "15+", icon: Award },
  { id: 4, label: "Safe Trips", value: "100%", icon: ShieldCheck },
];

export default function CreativeAboutUs() {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden py-20 px-6 lg:px-20 text-white flex items-center">
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* --- LEFT CONTENT: TEXT & STORY --- */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-yellow-500 font-bold text-[9px] tracking-[0.5em] uppercase mb-4">
                Our Vision & Story
              </h3>

              <div className="relative inline-block mb-8">
                <h2 className="text-4xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white">
                  CRAFTING ELITE <br />
                  <span className="text-white/30 text-3xl lg:text-6xl uppercase tracking-widest">
                    Experiences.
                  </span>
                </h2>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    delay: 0.2,
                    duration: 1,
                    ease: [0.45, 0, 0.55, 1],
                  }}
                  className="h-[3px] lg:h-[5px] mt-3 rounded-full origin-left"
                  style={{ backgroundColor: LOGO_COLOR }}
                />
              </div>

              <div className="space-y-6 max-w-xl">
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  Our journey began with a simple passion: to unveil the untold
                  stories and hidden paradises of Sri Lanka to the world. We
                  don't just organize tours; we curate immersive journeys that
                  connect you with the soul of our island.
                </p>
                <p className="text-gray-500 text-xs lg:text-sm leading-relaxed border-l-2 border-yellow-500/40 pl-5 italic font-medium">
                  "At the core of our service is 'Atithi Devo Bhava'—the ancient
                  belief that every guest is a reflection of God. We take pride
                  in showing you not just the places on a map, but the heart of
                  our culture."
                </p>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  With over 15 years of deep-rooted expertise, we specialize in
                  luxury, sustainable, and tailor-made travel. Whether it's the
                  mist-covered mountains or the golden southern shores, your
                  safety and wonder are our priority.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <button className="px-7 py-3.5 bg-white text-black rounded-xl font-black text-[9px] tracking-widest uppercase hover:bg-yellow-500 transition-all flex items-center gap-3 active:scale-95 shadow-lg shadow-white/5">
                  Explore Heritage <ArrowUpRight size={14} />
                </button>
                <button className="px-7 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl font-black text-[9px] tracking-widest uppercase hover:bg-white/10 transition-all active:scale-95">
                  View Gallery
                </button>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT CONTENT: MINI STATS & IMAGE --- */}
          <div className="lg:col-span-5 relative">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -3,
                    backgroundColor: "rgba(255,255,255,0.04)",
                  }}
                  className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md transition-all text-center lg:text-left"
                >
                  <stat.icon
                    size={16}
                    className="text-yellow-500 mb-2 mx-auto lg:mx-0"
                  />
                  <h5 className="text-lg font-black text-white">
                    {stat.value}
                  </h5>
                  <p className="text-[7px] font-bold text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Featured Image Block with Highlighted Text */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[2rem] overflow-hidden group border border-white/10 shadow-2xl"
              >
                <img
                  src="image/about.png"
                  alt="Elite Experience"
                  className="w-full h-[320px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-1000 brightness-75 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-5 left-6">
                  <span className="bg-yellow-500 text-black text-[7px] font-black px-2 py-1 rounded uppercase mb-2 inline-block">
                    Featured
                  </span>
                  <p className="text-white font-black text-xs tracking-[0.2em] uppercase">
                    The Hill Kingdom
                  </p>
                  <p className="text-white/40 text-[9px] uppercase tracking-tighter">
                    Authentic Heritage
                  </p>
                </div>
              </motion.div>

              {/* --- NEW HIGHLIGHTED BADGE ON IMAGE --- */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.5 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -top-4 -left-4 lg:-left-10 z-20"
              >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[200px] lg:max-w-[240px]">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                    <MapPin size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="text-[10px] text-yellow-500 font-black uppercase tracking-widest leading-none mb-1">
                      Specialist in
                    </p>
                    <p className="text-xs lg:text-sm text-white font-bold leading-tight">
                      Pristine Central Highlands
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
