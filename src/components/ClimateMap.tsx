"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Thermometer,
  CloudRain,
  Sun,
  CloudSun,
  Flame,
  Compass,
  Wind,
  MapPin,
} from "lucide-react";

const climateZones = [
  {
    id: "wet-zone",
    name: "Wet Zone",
    temp: "25°C - 30°C",
    color: "#059669",
    icon: <CloudRain size={24} />,
    description:
      "Covers the South-West. Characterized by high humidity and heavy rainfall from the monsoons. Features lush tropical rainforests.",
    transport: "Luxury Sedans, SUVs, Coaches",
    position: { top: "75%", left: "35%" }, // Colombo/Galle area
  },
  {
    id: "intermediate-zone",
    name: "Intermediate Zone",
    temp: "24°C - 28°C",
    color: "#10B981",
    icon: <CloudSun size={24} />,
    description:
      "The transition belt between wet and dry. Includes the central hills like Kandy, offering a mild and pleasant tropical climate.",
    transport: "Standard Cars, SUVs, Vans",
    position: { top: "58%", left: "52%" }, // Kandy/Kurunegala area
  },
  {
    id: "dry-zone",
    name: "Dry Zone",
    temp: "28°C - 34°C",
    color: "#F59E0B",
    icon: <Sun size={24} />,
    description:
      "The largest zone (North & East). Known for historic reservoirs, golden plains, and distinct dry seasons with bright sunshine.",
    transport: "4x4 Jeeps, SUVs, Vans",
    position: { top: "35%", left: "65%" }, // Cultural Triangle/Anuradhapura
  },
  {
    id: "arid-zone",
    name: "Arid Zone",
    temp: "32°C - 36°C",
    color: "#EF4444",
    icon: <Flame size={24} />,
    description:
      "Found in the far North (Mannar) and South-East (Yala). Unique semi-desert landscapes with high sun exposure and low rainfall.",
    transport: "Off-road 4x4, AC SUVs",
    position: { top: "18%", left: "48%" }, // Jaffna/Mannar area
  },
];

export default function SriLankaClimateSection() {
  const [hoveredZone, setHoveredZone] = useState<any>(null);

  return (
    <section className="bg-white relative">
      <div className="bg-[#050505] py-12 px-6 font-sans overflow-hidden flex flex-col items-center relative min-h-[700px]">
        {/* Header */}
        <div className="text-center mb-8 space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-[9px]">
              Climate Intelligence
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Climatic{" "}
            <span className="italic font-light text-yellow-500/80">
              Ecosystems
            </span>
          </h2>
        </div>

        <div className="max-w-[1200px] mx-auto w-full grid lg:grid-cols-12 gap-6 items-center">
          {/* LEFT: INFO */}
          <div className="lg:col-span-4 space-y-5 order-2 lg:order-1">
            <p className="text-gray-400 text-sm leading-relaxed border-l border-yellow-500/30 pl-4">
              Explore Sri Lanka's unique micro-climates, from misty highlands to
              sun-drenched coastal plains.
            </p>

            <div className="space-y-3">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-3">
                <Compass className="text-yellow-500" size={18} />
                <span className="text-white text-[10px] font-bold uppercase tracking-wider">
                  Diverse Terrains
                </span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-3">
                <Wind className="text-yellow-500" size={18} />
                <span className="text-white text-[10px] font-bold uppercase tracking-wider">
                  Monsoon Shifts
                </span>
              </div>
            </div>
          </div>

          {/* CENTER: INTERACTIVE MAP */}
          <div className="lg:col-span-8 relative flex justify-center order-1 lg:order-2 h-[500px] items-center">
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              {/* Animated Background Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-white/10 scale-110"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-yellow-500/10 scale-105"
              />

              {/* Map Image */}
              <motion.img
                src="/image/climet.png"
                alt="Sri Lanka Map"
                className={`w-full h-full object-contain transition-all duration-700 pointer-events-none ${hoveredZone ? "opacity-10 scale-90 blur-md" : "opacity-40 scale-100"}`}
              />

              {/* Pins */}
              {climateZones.map((zone) => (
                <div
                  key={zone.id}
                  className="absolute"
                  style={{
                    top: zone.position.top,
                    left: zone.position.left,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    onMouseEnter={() => setHoveredZone(zone)}
                    onMouseLeave={() => setHoveredZone(null)}
                    whileHover={{ scale: 1.3 }}
                    className="cursor-pointer relative z-20 group"
                  >
                    {/* Ripple Effect */}
                    <motion.div
                      animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: zone.color }}
                    />
                    <div
                      className="w-8 h-8 rounded-full bg-black border-2 flex items-center justify-center shadow-lg transition-colors"
                      style={{ borderColor: zone.color }}
                    >
                      <MapPin
                        size={16}
                        style={{ color: zone.color }}
                        fill={zone.color}
                        fillOpacity={0.2}
                      />
                    </div>
                  </motion.div>
                </div>
              ))}

              {/* Center Overlay Card */}
              <AnimatePresence>
                {hoveredZone && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute z-50 w-full max-w-[340px] px-4 pointer-events-none"
                  >
                    <div className="bg-white rounded-[1.5rem] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-yellow-500/20">
                      <div className="flex justify-between items-start mb-4">
                        <div
                          className="p-3 rounded-xl text-white shadow-lg shadow-black/20"
                          style={{ backgroundColor: hoveredZone.color }}
                        >
                          {hoveredZone.icon}
                        </div>
                        <div className="text-right">
                          <span className="block text-[8px] font-black uppercase text-gray-400">
                            Average Temp
                          </span>
                          <span className="text-xl font-black text-black">
                            {hoveredZone.temp}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg font-black text-black uppercase mb-2 tracking-tight">
                        {hoveredZone.name}
                      </h3>

                      <p className="text-gray-600 text-[11px] leading-relaxed mb-4 font-medium">
                        {hoveredZone.description}
                      </p>

                      <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
                        <Car size={12} className="text-yellow-600" />
                        <span className="text-[9px] font-bold text-gray-400 uppercase">
                          Recommended:
                        </span>
                        <span className="text-[9px] font-black text-black">
                          {hoveredZone.transport}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Gold Fade Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
      </div>
    </section>
  );
}
