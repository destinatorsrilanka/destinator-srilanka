"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
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

  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* --- COLUMN 1: BRAND --- */}
          <div className="space-y-4">
            <h3 className="text-xl font-black tracking-tighter italic">
              destinator<span className="text-yellow-500">.lk</span>
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Your premier gateway to the wonders of Sri Lanka. We craft
              memories that last a lifetime.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:border-yellow-500 transition-all"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* --- COLUMN 2: QUICK LINKS --- */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-500 mb-4">
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
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-500 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-yellow-500" />
                <span>Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-yellow-500" />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-yellow-500" />
                <span>hello@destinator.lk</span>
              </li>
            </ul>
          </div>

          {/* --- COLUMN 4: LOCAL TIME CARD (Height Reduced) --- */}
          <div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
              <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-500">
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
