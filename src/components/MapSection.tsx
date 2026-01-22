"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { MapPin, ArrowUpRight, MousePointer2, Globe2 } from "lucide-react";
import Image from "next/image";

const destinations = [
  {
    id: "sigiriya",
    name: "SIGIRIYA",
    tagline: "The Lion Rock",
    coords: { top: "35%", left: "52%" },
    description:
      "Witness the eighth wonder of the world. A celestial palace carved into a monolithic rock, surrounded by emerald gardens.",
    image: "/image/sigiriya.jpg",
    accent: "#F59E0B",
    stats: { altitude: "349m", period: "5th Century" },
  },
  {
    id: "kandy",
    name: "KANDY",
    tagline: "Sacred Kingdom",
    coords: { top: "48%", left: "50%" },
    description:
      "The spiritual heart of the island. Walk through the mist-covered hills and ancient heritage of the hill capital.",
    image: "/image/kandy.jpg",
    accent: "#10B981",
    stats: { altitude: "500m", period: "15th Century" },
  },
  {
    id: "ella",
    name: "ELLA",
    tagline: "Mountain Mist",
    coords: { top: "62%", left: "58%" },
    description:
      "A backpacker's paradise where the tea trails meet the sky. Home to the legendary Nine Arch Bridge.",
    image: "/image/ella.jpg",
    accent: "#3B82F6",
    stats: { altitude: "1041m", period: "Scenic Era" },
  },
  {
    id: "galle",
    name: "GALLE",
    tagline: "Ocean Bastion",
    coords: { top: "82%", left: "45%" },
    description:
      "Where history meets the tide. A colonial fortress frozen in time, overlooking the vast turquoise Indian Ocean.",
    image: "/image/galle.jpg",
    accent: "#EC4899",
    stats: { altitude: "Sea Level", period: "16th Century" },
  },
];

export default function HeroThreeDMap() {
  const [selectedId, setSelectedId] = useState(destinations[0].id);
  const active =
    destinations.find((d) => d.id === selectedId) || destinations[0];

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // smooth 3D movement
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col justify-center items-center py-10 lg:py-0"
      onMouseMove={handleMouseMove}
    >
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <motion.h1
          key={active.name + "bg"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-[25vw] font-black tracking-tighter text-black leading-none"
        >
          {active.name}
        </motion.h1>
      </div>

      {/* Header */}
      <div className="absolute top-6 left-6 md:top-10 md:left-12 z-50">
        <div className="flex items-center gap-3 mb-2">
          <Globe2 className="text-black" size={20} />
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-gray-400">
            Discover the Pearl
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-black">
          SRI LANKA <span className="text-gray-300 font-light">360°</span>
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-20 lg:pt-0">
        {/* LEFT PANEL */}
        <div className="order-2 lg:order-1 lg:col-span-4 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-[10px] font-black tracking-widest text-gray-500 uppercase mb-4">
                {active.tagline}
              </div>

              <h3 className="text-5xl md:text-7xl xl:text-8xl font-black text-black leading-[0.9] mb-6 tracking-tighter">
                {active.name}
              </h3>

              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-sm mb-8 font-medium italic border-l-2 border-black pl-4">
                "{active.description}"
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8 max-w-sm">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Elevation
                  </p>
                  <p className="text-lg font-bold text-black">
                    {active.stats.altitude}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    History
                  </p>
                  <p className="text-lg font-bold text-black">
                    {active.stats.period}
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group flex items-center gap-6 bg-black text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-xl"
              >
                Plan Your Journey
                <ArrowUpRight
                  size={18}
                  className="group-hover:rotate-45 transition-transform"
                />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CENTER 3D MAP */}
        <div className="order-1 lg:order-2 lg:col-span-8 relative h-[450px] md:h-[650px] lg:h-[800px] flex items-center justify-center [perspective:1500px]">
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-[500px] aspect-[3/4] flex items-center justify-center"
          >
            {/* Map Image Layer */}
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{ transform: "translateZ(0px)" }}
            >
              <Image
                src="/image/lk.svg"
                alt="Sri Lanka Map"
                width={700}
                height={900}
                priority
                className="w-full h-full object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.1)] pointer-events-none"
              />

              {/* Interactive Pins - High translateZ to make them clickable and popping out */}
              {destinations.map((loc) => (
                <div
                  key={loc.id}
                  className="absolute"
                  style={{
                    top: loc.coords.top,
                    left: loc.coords.left,
                    transformStyle: "preserve-3d",
                    zIndex: 50,
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedId(loc.id);
                    }}
                    className="group relative flex flex-col items-center -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ transform: "translateZ(100px)" }} // This makes pins pop out and clickable
                  >
                    <motion.div
                      animate={
                        selectedId === loc.id
                          ? { scale: 1.25, y: -5 }
                          : { scale: 1 }
                      }
                      className={`w-10 h-10 md:w-11 md:h-11 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-2xl border-2
                        ${selectedId === loc.id ? "bg-black border-black text-white" : "bg-white/95 backdrop-blur-md border-white text-gray-400 hover:text-black"}`}
                    >
                      <MapPin size={20} />
                      {selectedId === loc.id && (
                        <span className="absolute -inset-2 rounded-3xl bg-black/5 animate-pulse" />
                      )}
                    </motion.div>

                    <div
                      className={`mt-2 px-2 py-1 bg-black text-white text-[8px] font-black uppercase rounded shadow-lg transition-all duration-300 
                      ${selectedId === loc.id ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                    >
                      {loc.name}
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Floating Preview Card */}
            <AnimatePresence>
              <motion.div
                key={active.id + "card"}
                initial={{ opacity: 0, scale: 0.8, z: 50 }}
                animate={{ opacity: 1, scale: 1, z: 150 }}
                exit={{ opacity: 0, scale: 0.8, z: 50 }}
                className="absolute right-[-5%] bottom-[15%] hidden xl:block w-44 h-56 rounded-[2rem] overflow-hidden border-[6px] border-white shadow-2xl pointer-events-none"
                style={{ transform: "translateZ(180px)" }}
              >
                <Image
                  src={active.image}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
