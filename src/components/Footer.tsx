"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Music2,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
  Compass,
} from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Colombo",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
      setDate(
        now.toLocaleDateString("en-US", {
          timeZone: "Asia/Colombo",
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const stripImages = [
    "/image/f1.jpeg",
    "/image/f2.PNG",
    "/image/f3.jpeg",
    "/image/f4.jpeg",
    "/image/f5.jpeg",
    "/image/f6.jpeg",
    "/image/f7.PNG",
    "/image/f9.jpeg",
    "/image/f10.jpeg",
  ];

  const socialLinks = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/share/17dR9DX9c8/?mibextid=wwXIfr",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/destinatorlk?igsh=aGxwbzNpaHF3NmNo&utm_source=qr",
    },
    { Icon: Music2, href: "#" },
    { Icon: MessageCircle, href: "#" },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 font-montserrat">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* --- COLUMN 1: BRAND --- */}
          <div className="space-y-4">
            <h3 className="text-orange-500 text-2xl font-black tracking-[0.15em] uppercase italic flex items-center gap-0 leading-none">
              DESTINAT
              <span className="relative inline-flex items-center justify-center mx-0.5">
                <span className="opacity-0">O</span>
                <Compass className="absolute w-5 h-5 animate-[spin_10s_linear_infinite]" />
              </span>
              R
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 shrink-0 border border-white/10 p-0.5 rounded-sm">
                <span className="w-2 h-3 bg-[#002395]"></span>
                <span className="w-2 h-3 bg-white"></span>
                <span className="w-2 h-3 bg-[#ED2939]"></span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">
                Guide Francophone
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs pt-2">
              Your premier gateway to the wonders of Sri Lanka. We craft
              memories that last a lifetime.
            </p>
          </div>

          {/* --- COLUMN 2: LINKS --- */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 mb-4">
              Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {["Home", "Packages", "Destinations", "Inquiry"].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COLUMN 3: CONTACT --- */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-orange-500" /> Colombo, Sri
                Lanka
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-orange-500" /> +94 77 711 2434
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-orange-500" />{" "}
                destinatorlk@gmail.com
              </li>
            </ul>
          </div>

          {/* --- COLUMN 4: TIME & SOCIALS --- */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
              <div className="bg-orange-500/10 p-2 rounded-lg text-orange-500">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-lg font-black font-mono leading-none">
                  {time}
                </p>
                <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">
                  {date}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* --- PHOTO GALLERY (ANIMATION AND GAP REMOVED) --- */}
        <div className="w-full mb-6 h-12 md:h-16 flex gap-0 group/gallery">
          {stripImages.map((src, idx) => (
            <div
              key={idx}
              className="relative flex-1 overflow-hidden cursor-pointer"
            >
              <img
                src={src}
                alt="trip"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 group-hover/gallery:bg-black/5 transition-colors" />
            </div>
          ))}
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-[0.1em] text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} destinator.lk. All Rights
            Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
