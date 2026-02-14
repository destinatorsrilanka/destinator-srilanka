"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  Send,
  X,
  MessageSquare,
  Youtube,
  Check,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [copied, setCopied] = useState(false);

  // --- ඔබේ WeChat ID එක මෙතනට ඇතුළත් කරන්න ---
  const weChatId = "Destinatorsrilanka84";

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

  // WeChat ID එක copy කිරීමේ function එක
  const handleCopyWeChat = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(weChatId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      href: "https://www.facebook.com/share/18PzZ2dQdw/?mibextid=wwXIfr",
      isCopy: false,
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/destinator_sri_lanka?igsh=aGxwbzNpaHF3NmNo&utm_source=qr",
      isCopy: false,
    },
    {
      Icon: Music2,
      href: "https://www.tiktok.com/@destinator.lk?_r=1&_d=e24e5bdfi66221&sec_uid=MS4wLjABAAAAo9HUtOwWSVfoVyLRj5S81Y6BLz8JCUKou37P27o0QsuU7oq2RBDAUHNXUPqlMEpt&share_author_id=7104740320396018693&sharer_language=en&source=h5_m&u_code=e24e5mj67a47gl&item_author_type=1&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=EA2DD9F4-683C-40ED-976D-0D24E3020AFE&user_id=7104740320396018693&sec_user_id=MS4wLjABAAAAo9HUtOwWSVfoVyLRj5S81Y6BLz8JCUKou37P27o0QsuU7oq2RBDAUHNXUPqlMEpt&social_share_type=4&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233",
      isCopy: false,
    },
    {
      Icon: MessageCircle,
      href: "https://wa.me/message/L7DQU2A2QGEMJ1",
      isCopy: false,
    },
    { Icon: Send, href: "https://t.me/Destinator_Sri_Lanka", isCopy: false },
    {
      Icon: X,
      href: "https://x.com/destinator_?s=21&t=XpGmiFGYxwlYe26tu6QfAA",
      isCopy: false,
    },
    { Icon: MessageSquare, href: "#", isCopy: true }, // WeChat
    {
      Icon: Youtube,
      href: "https://youtube.com/@destinatorsrilanka?si=yz0cy9CkzUYb8azt",
      isCopy: false,
    },
  ];

  return (
    <>
      {/* Copy වූ විට පෙන්වන Alert එක */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[1000] bg-orange-500 text-white px-6 py-3 rounded-full text-xs font-bold shadow-2xl flex items-center gap-2 border border-white/20"
          >
            <Check size={16} /> WeChat ID Copied: {weChatId}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full h-12 md:h-16 flex gap-0 group/gallery bg-white">
        {stripImages.map((src, idx) => (
          <div
            key={idx}
            className="relative flex-1 overflow-hidden cursor-pointer"
          >
            <img
              src={src}
              alt="trip gallery"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 group-hover/gallery:bg-black/5 transition-colors" />
          </div>
        ))}
      </div>

      <footer className="bg-black text-white pt-12 pb-6 px-6 font-montserrat">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
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
                  {t("footer.guide_label")}
                </span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs pt-2">
                {t("footer.description")}
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 mb-4">
                {t("footer.sections.links")}
              </h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    {t("footer.nav.home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#packages"
                    className="hover:text-white transition-colors"
                  >
                    {t("footer.nav.packages")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#destinations"
                    className="hover:text-white transition-colors"
                  >
                    {t("footer.nav.destinations")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    {t("footer.nav.inquiry")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 mb-4">
                {t("footer.sections.contact")}
              </h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex items-center gap-2">
                  <MapPin size={14} className="text-orange-500" /> Colombo, Sri
                  Lanka
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-orange-500" /> +94 77 711
                  2434
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-orange-500" />{" "}
                  destinatorlk@gmail.com
                </li>
              </ul>
            </div>

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
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map(({ Icon, href, isCopy }, i) =>
                  isCopy ? (
                    <button
                      key={i}
                      onClick={handleCopyWeChat}
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all cursor-pointer bg-transparent"
                      title="Copy WeChat ID"
                    >
                      <Icon size={16} />
                    </button>
                  ) : (
                    <Link
                      key={i}
                      href={href}
                      target="_blank"
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all"
                    >
                      <Icon size={16} />
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-[0.1em] text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} destinator.lk.{" "}
              {t("footer.legal.rights")}
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                {t("footer.legal.privacy")}
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                {t("footer.legal.terms")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
