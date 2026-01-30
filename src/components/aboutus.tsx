"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Globe,
  Award,
  ShieldCheck,
  MapPin,
  Instagram,
  Facebook,
  Music2, // TikTok සඳහා
  Phone,
} from "lucide-react";

const LOGO_COLOR = "#EAB308";

const aboutImages = [
  {
    src: "image/about.png",
    title: "",
    subtitle: "",
  },
  { src: "/image/kadu1.jpeg", title: "Sri Pada", subtitle: "The Sacred Peak" },
  {
    src: "/image/kadu2.jpeg",
    title: "Round Mountain",
    subtitle: "Deraniyagala Wilderness",
  },
  {
    src: "/image/kadu3.jpeg",
    title: "Lakegala Rock",
    subtitle: "The Matterhorn of SL",
  },
  {
    src: "/image/kadu4.jpeg",
    title: "Seven Virgins",
    subtitle: "Saptha Kanya Range",
  },
  {
    src: "/image/kadu5.jpeg",
    title: "Lakegala Summit",
    subtitle: "Majestic Pyramid View",
  },
  {
    src: "/image/kadu7.jpeg",
    title: "Hunnasgiriya",
    subtitle: "Mist-Clad Knuckles Edge",
  },
];

const stats = [
  { id: 1, label: "Travelers", value: "50K+", icon: Users },
  { id: 2, label: "Destinations", value: "120+", icon: Globe },
  { id: 3, label: "Heritage", value: "15+", icon: Award },
  { id: 4, label: "Safe Trips", value: "100%", icon: ShieldCheck },
];

export default function CreativeAboutUs() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Social Media Links
  const socialLinks = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/share/17dR9DX9c8/?mibextid=wwXIfr",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/destinatorlk?igsh=aGxwbzNpaHF3NmNo&utm_source=qr",
    },
    {
      Icon: Music2,
      href: "#", // TikTok ලින්ක් එක මෙතැනට එක් කරන්න
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden py-20 px-6 lg:px-20 text-white flex items-center font-montserrat">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* --- LEFT CONTENT --- */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start"
            >
              <h3 className="text-yellow-500 font-bold text-[9px] tracking-[0.5em] uppercase mb-4 leading-none ml-[-0.5em]">
                Our Vision & Story
              </h3>

              {/* Main Title Container */}
              <div className="relative mb-8 text-left w-full">
                <h2 className="text-4xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white">
                  CRAFTING ELITE <br />
                  <span className="text-white/30 text-3xl lg:text-6xl uppercase tracking-widest block mt-1">
                    Experiences.
                  </span>
                </h2>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2,
                    duration: 1,
                    ease: [0.45, 0, 0.55, 1],
                  }}
                  className="h-[3px] lg:h-[5px] mt-3 rounded-full origin-left"
                  style={{ backgroundColor: LOGO_COLOR }}
                />
              </div>

              {/* Story Details */}
              <div className="space-y-6 max-w-xl text-left">
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  Our journey began with a simple passion: to unveil the untold
                  stories and hidden paradises of Sri Lanka to the world. We
                  don't just organize tours; we curate immersive journeys that
                  connect you with the soul of our island.
                </p>
                <p className="text-gray-500 text-xs lg:text-sm leading-relaxed border-l-2 border-yellow-500/40 pl-5 italic font-medium text-left">
                  "At the core of our service is 'Atithi Devo Bhava'—the ancient
                  belief that every guest is a reflection of God."
                </p>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  With over 15 years of deep-rooted expertise, we specialize in
                  luxury, sustainable, and tailor-made travel. Your safety and
                  wonder are our priority.
                </p>
              </div>

              {/* Contact & Trust Badges */}
              <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:gap-16 border-t border-white/5 pt-10 w-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-yellow-500/30 flex items-center justify-center relative">
                    <ShieldCheck size={22} className="text-yellow-500" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 border-t border-yellow-500/60 rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white font-black leading-none mb-1.5">
                      Authorized Guidence
                    </p>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest font-medium">
                      SLTDA/SLITHM
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-yellow-500/80 font-bold">
                    Inquiries & Support
                  </p>
                  <div className="flex items-center gap-6">
                    <a
                      href="tel:+94777112434"
                      className="flex items-center gap-2 group"
                    >
                      <div className="p-1.5 bg-white/5 rounded-md group-hover:bg-yellow-500 transition-colors">
                        <Phone
                          size={12}
                          className="text-white group-hover:text-black"
                        />
                      </div>
                      <p className="text-xs lg:text-sm text-white font-bold tracking-tight">
                        +94 77 711 2434
                      </p>
                    </a>

                    {/* --- යාවත්කාලීන කරන ලද Social Media අංශය --- */}
                    <div className="flex gap-4 border-l border-white/10 pl-6">
                      {socialLinks.map(({ Icon, href }, idx) => (
                        <motion.a
                          key={idx}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, color: LOGO_COLOR }}
                          className="text-gray-500 transition-colors"
                        >
                          <Icon size={16} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT CONTENT: STATS & IMAGE SLIDER --- */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-3 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md text-center lg:text-left"
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

            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl h-[320px] lg:h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={aboutImages[currentImage].src}
                      alt={aboutImages[currentImage].title}
                      className="w-full h-full object-cover brightness-75 transition-transform duration-[5000ms] scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-5 left-6">
                      <span className="bg-yellow-500 text-black text-[7px] font-black px-2 py-1 rounded uppercase mb-2 inline-block">
                        Featured
                      </span>
                      <p className="text-white font-black text-xs tracking-[0.2em] uppercase text-left">
                        {aboutImages[currentImage].title}
                      </p>
                      <p className="text-white/40 text-[9px] uppercase tracking-tighter text-left">
                        {aboutImages[currentImage].subtitle}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Dots */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                {aboutImages.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === currentImage
                        ? "w-6 bg-yellow-500"
                        : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>

              {/* Floating Specialist Badge */}
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
                      Pristine Destinations
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
