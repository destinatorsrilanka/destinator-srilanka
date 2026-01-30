"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Music2, // TikTok සඳහා
  MessageCircle, // WhatsApp සඳහා
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

  // Social Media Links mapping
  const socialLinks = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/share/17dR9DX9c8/?mibextid=wwXIfr",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/destinatorlk?igsh=aGxwbzNpaHF3NmNo&utm_source=qr",
    },
    { Icon: Music2, href: "#" }, // TikTok සඳහා ලින්ක් එකක් ඇත්නම් මෙතැනට එක් කරන්න
    { Icon: MessageCircle, href: "#" }, // WhatsApp සඳහා ලින්ක් එකක් ඇත්නම් මෙතැනට එක් කරන්න
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 font-montserrat">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* --- COLUMN 1: BRAND --- */}
          <div className="space-y-4">
            {/* Destinator Logo Style */}
            <h3 className="text-destinator-orange text-2xl font-black tracking-[0.15em] uppercase italic flex items-center gap-0 leading-none">
              DESTINAT
              <span className="relative inline-flex items-center justify-center mx-0.5">
                <span className="opacity-0">O</span>
                <Compass className="absolute w-5 h-5 animate-[spin_10s_linear_infinite]" />
              </span>
              R
            </h3>

            {/* French Flag & Guide Francophone Label */}
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

            {/* යාවත්කාලීන කරන ලද Social Media අයිකන සහ ලින්ක් */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-destinator-orange hover:border-destinator-orange transition-all"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* --- COLUMN 2: QUICK LINKS --- */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-destinator-orange mb-4">
              Links
            </h4>
            <ul className="space-y-2 text-xs">
              {["Home", "Packages", "Destinations", "Inquiry"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COLUMN 3: CONTACT INFO --- */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-destinator-orange mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-destinator-orange" />
                <span>Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-destinator-orange" />
                <span>+94 77 711 2434</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-destinator-orange" />
                <span>destinatorlk@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* --- COLUMN 4: LOCAL TIME CARD --- */}
          <div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
              <div className="bg-destinator-orange/10 p-2 rounded-lg text-destinator-orange">
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
          </div>
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
