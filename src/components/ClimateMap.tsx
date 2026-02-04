"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  CloudRain,
  Sun,
  CloudSun,
  Flame,
  Navigation,
  ArrowRight,
  Wind,
} from "lucide-react"; // Lucide React ලෙස වෙනස් විය යුතුයි ඔබගේ imports අනුව

const climateZones = [
  {
    id: "wet-zone",
    name: "Wet Zone",
    temp: "25-30°C",
    color: "#059669",
    icon: <CloudRain size={24} />,
    x: 35,
    y: 75,
    description: "South-West. High humidity and heavy monsoon rainfall.",
    transport: "Luxury Sedans, SUVs",
  },
  {
    id: "intermediate-zone",
    name: "Intermediate Zone",
    temp: "24-28°C",
    color: "#10B981",
    icon: <CloudSun size={24} />,
    x: 52,
    y: 58,
    description: "Central hills. Mild and pleasant tropical climate.",
    transport: "Standard Cars, Vans",
  },
  {
    id: "dry-zone",
    name: "Dry Zone",
    temp: "28-34°C",
    color: "#F59E0B",
    icon: <Sun size={24} />,
    x: 65,
    y: 35,
    description: "North & East. Golden plains and bright sunshine.",
    transport: "4x4 Jeeps, SUVs",
  },
  {
    id: "arid-north",
    name: "Arid Zone (North)",
    temp: "32-36°C",
    color: "#EF4444",
    icon: <Flame size={24} />,
    x: 48,
    y: 18,
    description: "Mannar/Jaffna. Intense heat and minimal rainfall.",
    transport: "Off-road 4x4",
  },
  {
    id: "arid-south",
    name: "Arid Zone (South)",
    temp: "32-36°C",
    color: "#EF4444",
    x: 68,
    y: 78,
    description: "Hambantota/Yala. Scrublands and wildlife safaris.",
    transport: "Safari Jeeps",
  },
];

const YellowSeparator = ({ className = "" }: { className?: string }) => (
  <div
    className={`w-full max-w-[1200px] relative flex flex-col items-center justify-center ${className}`}
  >
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "100%", opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="h-[1.5px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent shadow-[0_0_15px_rgba(234,179,8,0.5)]"
    />
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="absolute w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_12px_#eab308,0_0_20px_#eab308]"
    />
  </div>
);

export default function SriLankaClimateSection() {
  const [startPoint, setStartPoint] = useState<string>("");
  const [endPoint, setEndPoint] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState(false);

  const startZone = climateZones.find((z) => z.id === startPoint);
  const endZone = climateZones.find((z) => z.id === endPoint);

  const calculateDistance = () => {
    if (!startZone || !endZone) return 0;
    const dist = Math.sqrt(
      Math.pow(endZone.x - startZone.x, 2) +
        Math.pow(endZone.y - startZone.y, 2),
    );
    return Math.round(dist * 6.8);
  };

  const handleGo = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 100);
  };

  return (
    <section className="bg-[#050505] py-16 px-6 relative overflow-hidden flex flex-col items-center min-h-[750px] justify-center">
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none z-0"
      />

      {/* INFINITE CATEGORY STRIP REMOVED FROM HERE */}

      <YellowSeparator className="mb-16" />

      <div className="text-center mb-10 z-10">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
          <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-[10px]">
            Climate Intelligence
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
          Climatic{" "}
          <span className="italic font-light text-yellow-500/80">
            Conditions
          </span>
        </h2>
      </div>

      <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20 justify-items-center">
        <div className="w-full max-w-[400px] flex flex-col gap-5">
          <div className="bg-white/[0.03] border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-md shadow-2xl">
            <h4 className="text-white font-bold text-[10px] uppercase mb-5 flex items-center gap-2 tracking-widest">
              <Navigation size={14} className="text-yellow-500" /> Route Planner
            </h4>
            <div className="space-y-3">
              <select
                value={startPoint}
                onChange={(e) => {
                  setStartPoint(e.target.value);
                  setIsAnimating(false);
                }}
                className="w-full bg-black/60 border border-white/10 text-white p-4 rounded-2xl text-xs outline-none focus:border-yellow-500 appearance-none transition-all"
              >
                <option value="">Starting Point</option>
                {climateZones.map((z) => (
                  <option key={z.id} value={z.id}>
                    {z.name}
                  </option>
                ))}
              </select>
              <select
                value={endPoint}
                onChange={(e) => {
                  setEndPoint(e.target.value);
                  setIsAnimating(false);
                }}
                className="w-full bg-black/60 border border-white/10 text-white p-4 rounded-2xl text-xs outline-none focus:border-yellow-500 appearance-none transition-all"
              >
                <option value="">Destination</option>
                {climateZones.map((z) => (
                  <option key={z.id} value={z.id}>
                    {z.name}
                  </option>
                ))}
              </select>
              <button
                onClick={handleGo}
                disabled={!startPoint || !endPoint || startPoint === endPoint}
                className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:bg-neutral-800 text-black font-black uppercase text-[10px] py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Start Journey <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="min-h-[180px]">
            <AnimatePresence mode="wait">
              {endZone ? (
                <motion.div
                  key={endZone.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white/[0.03] border border-white/10 p-6 rounded-[2.5rem]"
                >
                  <h3 className="text-white text-xl font-black uppercase mb-2">
                    {endZone.name}
                  </h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed mb-4">
                    {endZone.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-black/40 p-3 rounded-2xl border border-white/5">
                      <Wind size={14} className="text-yellow-500 mb-1" />
                      <p className="text-white text-[11px] font-bold">
                        {endZone.temp}
                      </p>
                    </div>
                    <div className="bg-black/40 p-3 rounded-2xl border border-white/5">
                      <Car size={14} className="text-yellow-500 mb-1" />
                      <p className="text-white text-[9px] font-bold truncate">
                        {endZone.transport}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="h-[180px] border border-dashed border-white/10 rounded-[2.5rem] flex items-center justify-center text-gray-600 text-[10px] uppercase font-bold tracking-widest">
                  Select destination
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: MAP */}
        <div className="w-full flex justify-center items-center">
          <div className="relative w-full max-w-[500px] aspect-square rounded-full border border-white/15 shadow-[0_0_50px_rgba(255,255,255,0.03)] flex items-center justify-center overflow-visible bg-white/[0.01]">
            <img
              src="/image/climet.png"
              alt="Sri Lanka Map"
              className="w-full h-full scale-[1.15] object-contain opacity-30 pointer-events-none z-10"
            />
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full overflow-visible z-30 pointer-events-none"
            >
              <AnimatePresence>
                {isAnimating && startZone && endZone && (
                  <g>
                    <motion.line
                      x1={startZone.x}
                      y1={startZone.y}
                      x2={endZone.x}
                      y2={endZone.y}
                      stroke="#EAB308"
                      strokeWidth="0.4"
                      strokeDasharray="1,1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                    />
                    <motion.g
                      initial={{ x: startZone.x, y: startZone.y }}
                      animate={{ x: endZone.x, y: endZone.y }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    >
                      <foreignObject
                        x="-15"
                        y="-18"
                        width="30"
                        height="15"
                        className="overflow-visible"
                      >
                        <div className="flex flex-col items-center">
                          <div className="bg-yellow-500 px-1.5 py-0.5 rounded-sm shadow-xl">
                            <p className="text-black font-black text-[3.5px] uppercase">
                              {calculateDistance()} KM
                            </p>
                          </div>
                          <div className="w-0 h-0 border-l-[1.5px] border-l-transparent border-r-[1.5px] border-r-transparent border-t-[2.5px] border-t-yellow-500" />
                        </div>
                      </foreignObject>

                      <foreignObject x="-4" y="-4" width="8" height="8">
                        <div className="w-full h-full flex items-center justify-center bg-white rounded-full shadow-lg border-[0.3px] border-black/10">
                          <div className="text-black">
                            <Car size={5} strokeWidth={3} />
                          </div>
                        </div>
                      </foreignObject>
                    </motion.g>
                  </g>
                )}
              </AnimatePresence>
              {climateZones.map((zone) => (
                <g key={zone.id}>
                  <circle cx={zone.x} cy={zone.y} r="1.5" fill={zone.color} />
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-12 mb-10 opacity-30">
        {climateZones.map((z) => (
          <div key={z.id} className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: z.color }}
            />
            <span className="text-[9px] text-white font-bold uppercase tracking-widest">
              {z.name}
            </span>
          </div>
        ))}
      </div>

      <YellowSeparator className="mt-10" />
    </section>
  );
}
