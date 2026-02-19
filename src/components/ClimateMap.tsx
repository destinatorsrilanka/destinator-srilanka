"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Navigation, ArrowRight, Wind } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../i18n";

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
  const { t } = useTranslation();
  const [startPoint, setStartPoint] = useState<string>("");
  const [endPoint, setEndPoint] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState(false);

  const climateZones = [
    { id: "wet", x: 35, y: 75, color: "#059669", temp: "25-30°C" },
    { id: "intermediate", x: 52, y: 58, color: "#10B981", temp: "24-28°C" },
    { id: "dry", x: 65, y: 35, color: "#F59E0B", temp: "28-34°C" },
    { id: "arid_north", x: 48, y: 18, color: "#EF4444", temp: "32-36°C" },
    { id: "arid_south", x: 68, y: 78, color: "#EF4444", temp: "32-36°C" },
  ];

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
      <YellowSeparator className="mb-16" />

      <div className="text-center mb-10 z-10">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
          <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-[10px]">
            {t("climate.badge")}
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
          {t("climate.title_main")}{" "}
          <span className="italic font-light text-yellow-500/80">
            {t("climate.title_sub")}
          </span>
        </h2>
      </div>

      <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20 justify-items-center">
        {/* LEFT: PLANNER */}
        <div className="w-full max-w-[400px] flex flex-col gap-5">
          <div className="bg-white/[0.03] border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-md shadow-2xl">
            <h4 className="text-white font-bold text-[10px] uppercase mb-5 flex items-center gap-2 tracking-widest">
              <Navigation size={14} className="text-yellow-500" />{" "}
              {t("climate.route_planner")}
            </h4>
            <div className="space-y-3">
              <select
                value={startPoint}
                onChange={(e) => {
                  setStartPoint(e.target.value);
                  setIsAnimating(false);
                }}
                className="w-full bg-black/60 border border-white/10 text-white p-4 rounded-2xl text-xs focus:border-yellow-500 outline-none"
              >
                <option value="">{t("climate.start_placeholder")}</option>
                {climateZones.map((z) => (
                  <option key={z.id} value={z.id}>
                    {t(`climate.zones.${z.id}.name`)}
                  </option>
                ))}
              </select>
              <select
                value={endPoint}
                onChange={(e) => {
                  setEndPoint(e.target.value);
                  setIsAnimating(false);
                }}
                className="w-full bg-black/60 border border-white/10 text-white p-4 rounded-2xl text-xs focus:border-yellow-500 outline-none"
              >
                <option value="">{t("climate.dest_placeholder")}</option>
                {climateZones.map((z) => (
                  <option key={z.id} value={z.id}>
                    {t(`climate.zones.${z.id}.name`)}
                  </option>
                ))}
              </select>
              <button
                onClick={handleGo}
                disabled={!startPoint || !endPoint || startPoint === endPoint}
                className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:bg-neutral-800 text-black font-black uppercase text-[10px] py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
              >
                {t("climate.btn_start")} <ArrowRight size={16} />
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
                    {t(`climate.zones.${endZone.id}.name`)}
                  </h3>
                  <p className="text-gray-400 text-[11px] mb-4">
                    {t(`climate.zones.${endZone.id}.desc`)}
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
                        {t(`climate.zones.${endZone.id}.transport`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="h-[180px] border border-dashed border-white/10 rounded-[2.5rem] flex items-center justify-center text-gray-600 text-[10px] uppercase font-bold tracking-widest text-center px-6">
                  {t("climate.empty_profile")}
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: MAP SECTION */}
        <div className="w-full flex justify-center items-center relative">
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center overflow-visible">
            {/* Map Image */}
            <img
              src="/image/climet.png"
              alt="Sri Lanka Map"
              className="w-[115%] h-[115%] object-contain opacity-30 pointer-events-none absolute z-10"
            />

            {/* SVG: Original Smooth Animation for Car & Lines */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full overflow-visible z-20 pointer-events-none"
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
                        height="20"
                        className="overflow-visible"
                      >
                        <div className="flex flex-col items-center">
                          <div className="bg-yellow-500 px-1.5 py-0.5 rounded-sm shadow-xl">
                            <p className="text-black font-black text-[3.5px] uppercase">
                              {calculateDistance()} KM
                            </p>
                          </div>
                          <div className="w-0 h-0 border-l-[1.5px] border-r-[1.5px] border-t-[2.5px] border-t-yellow-500" />
                        </div>
                      </foreignObject>
                      <foreignObject x="-4" y="-4" width="8" height="8">
                        <div className="w-full h-full flex items-center justify-center bg-white rounded-full shadow-lg border-[0.3px] border-black/10">
                          <Car
                            size={5}
                            strokeWidth={3}
                            className="text-black"
                          />
                        </div>
                      </foreignObject>
                    </motion.g>
                  </g>
                )}
              </AnimatePresence>
            </svg>

            {/* NEW LABELS: Fixed for iPhone Text Clipping */}
            <div className="absolute inset-0 w-full h-full z-30 pointer-events-none">
              {climateZones.map((zone) => (
                <div
                  key={zone.id}
                  className="absolute flex items-center"
                  style={{
                    left: `${zone.x}%`,
                    top: `${zone.y}%`,
                    transform: "translate(-4px, -4px)", // Center dot with zone coordinate
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)] flex-shrink-0"
                    style={{ backgroundColor: zone.color }}
                  />
                  <span
                    className="ml-2 text-[10px] md:text-[12px] font-black uppercase tracking-tighter whitespace-nowrap drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                    style={{ color: zone.color }}
                  >
                    {t(`climate.zones.${zone.id}.name`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <YellowSeparator className="mt-16" />
    </section>
  );
}
