"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../i18n";
import Image from "next/image";

export default function InquiryForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const [plantInterest, setPlantInterest] = useState(false);
  const [investInterest, setInvestInterest] = useState(false);
  const [mediaInterest, setMediaInterest] = useState(false);

  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  // --- ඔබේ WeChat ID එක මෙතනට ඇතුළත් කරන්න ---
  const weChatId = "Destinatorsrilanka84";

  useEffect(() => {
    const checkUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const hasPlant = params.get("plant") === "true";
      const hasInvest = params.get("invest") === "true";
      const hasMedia = params.get("media") === "true";

      if (hasPlant) setPlantInterest(true);
      if (hasInvest) setInvestInterest(true);
      if (hasMedia) setMediaInterest(true);

      if (hasPlant || hasInvest || hasMedia) {
        const newUrl = window.location.pathname;
        window.history.replaceState({}, "", newUrl);
      }
    };

    checkUrl();
    const interval = setInterval(checkUrl, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      arrivalDate: formData.get("arrivalDate"),
      departureDate: formData.get("departureDate"),
      guests: formData.get("guests"),
      kids: formData.get("kids"),
      country: formData.get("country"),
      transport: formData.get("transport"),
      location: formData.get("location"),
      interest_plant: plantInterest ? "Yes" : "No",
      interest_invest: investInterest ? "Yes" : "No",
      interest_media: mediaInterest ? "Yes" : "No",
    };

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          message: t("form.success"),
        });
        (e.target as HTMLFormElement).reset();
        setPlantInterest(false);
        setInvestInterest(false);
        setMediaInterest(false);
        setArrivalDate("");
        setDepartureDate("");
      } else {
        const result = await res.json();
        setStatus({
          type: "error",
          message: result.message || t("modal.messages.error"),
        });
      }
    } catch (error) {
      setStatus({ type: "error", message: t("form.error") });
    } finally {
      setLoading(false);
    }
  };

  // WeChat Copy Function
  const handleCopyWeChat = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(weChatId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      imgSrc: "/image/fb.webp",
      href: "https://www.facebook.com/share/18PzZ2dQdw/?mibextid=wwXIfr",
    },
    {
      imgSrc: "/image/intergram.webp",
      href: "https://www.instagram.com/destinator_sri_lanka?igsh=aGxwbzNpaHF3NmNo&utm_source=qr",
    },
    {
      imgSrc: "/image/tiktok.png",
      href: "https://www.tiktok.com/@destinator.lk?_r=1&_d=e24e5bdfi66221&sec_uid=MS4wLjABAAAAo9HUtOwWSVfoVyLRj5S81Y6BLz8JCUKou37P27o0QsuU7oq2RBDAUHNXUPqlMEpt&share_author_id=7104740320396018693&sharer_language=en&source=h5_m&u_code=e24e5mj67a47gl&item_author_type=1&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=EA2DD9F4-683C-40ED-976D-0D24E3020AFE&user_id=7104740320396018693&sec_user_id=MS4wLjABAAAAo9HUtOwWSVfoVyLRj5S81Y6BLz8JCUKou37P27o0QsuU7oq2RBDAUHNXUPqlMEpt&social_share_type=4&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233",
    },
    {
      imgSrc: "/image/youtube-icon.png",
      href: "https://youtube.com/@destinator_sri_lanka?si=l0ylz9DC8fIwvCi9",
    },
    {
      imgSrc: "/image/Telegram.webp",
      href: "https://t.me/Destinator_Sri_Lanka",
    },
    { imgSrc: "/image/wechat-icon.png", href: "#", isCopy: true },
    {
      imgSrc: "/image/whatsapp.png",
      href: "https://wa.me/message/L7DQU2A2QGEMJ1",
      isLarge: true,
    },
    {
      imgSrc: "/image/X-ICON.png",
      href: "https://x.com/destinator_?s=21&t=XpGmiFGYxwlYe26tu6QfAA",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white px-6">
      {/* Copy Alert Popup */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 right-10 z-[2000] bg-green-600 text-white px-6 py-3 rounded-2xl text-xs font-bold shadow-2xl flex items-center gap-2"
          >
            <Check size={16} /> WeChat ID Copied: {weChatId}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT SIDE (INFO) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-[2px] bg-yellow-500"></span>
                <h3 className="text-yellow-500 font-bold text-xs uppercase tracking-[0.4em]">
                  {t("form.tag")}
                </h3>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-2 uppercase">
                {t("form.title_main")} <br />
                <span className="text-gray-300">{t("form.title_sub")}</span>
              </h2>

              {/* INTEREST SELECTORS */}
              <div className="flex gap-4 mb-6 mt-8">
                {/* Plant Interest */}
                <div
                  onClick={() => setPlantInterest(!plantInterest)}
                  className={`relative w-24 h-24 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${plantInterest ? "border-green-500 scale-105 shadow-md" : "border-transparent hover:border-gray-200"}`}
                >
                  <Image
                    src="/image/form-plant.jpeg"
                    alt="Forest"
                    fill
                    className="object-cover"
                  />
                  {plantInterest && (
                    <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                      <div className="bg-green-500 rounded-full p-1 shadow-lg">
                        <Check size={18} className="text-white" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Invest Interest */}
                <div
                  onClick={() => setInvestInterest(!investInterest)}
                  className={`relative w-24 h-24 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${investInterest ? "border-yellow-500 scale-105 shadow-md" : "border-transparent hover:border-gray-200"}`}
                >
                  <Image
                    src="/image/form-invest.jpeg"
                    alt="Investment"
                    fill
                    className="object-cover"
                  />
                  {investInterest && (
                    <div className="absolute inset-0 bg-yellow-500/20 flex items-center justify-center">
                      <div className="bg-yellow-500 rounded-full p-1 shadow-lg">
                        <Check size={18} className="text-white" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Media Interest */}
                <div
                  onClick={() => setMediaInterest(!mediaInterest)}
                  className={`relative w-24 h-24 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${mediaInterest ? "border-blue-500 scale-105 shadow-md" : "border-transparent hover:border-gray-200"}`}
                >
                  <Image
                    src="/image/digital-camera.jpg"
                    alt="Media"
                    fill
                    className="object-cover"
                  />
                  {mediaInterest && (
                    <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                      <div className="bg-blue-500 rounded-full p-1 shadow-lg">
                        <Check size={18} className="text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* RESPONSIVE INBOX CARD */}
              <div className="mb-8 p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-7 h-7 bg-green-500 rounded-full">
                    <Zap size={14} className="text-white fill-white" />
                  </div>
                  <span className="text-black font-black text-[18px] uppercase tracking-widest">
                    {t("form.responsive_inbox")}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  {socials.map((social, i) =>
                    social.isCopy ? (
                      <button
                        key={i}
                        onClick={handleCopyWeChat}
                        className="w-8 h-8 flex items-center justify-center transition-all hover:scale-125 bg-transparent border-none outline-none cursor-pointer"
                        title="Copy WeChat ID"
                      >
                        <img
                          src={social.imgSrc}
                          alt="wechat"
                          className="w-full h-full object-contain"
                        />
                      </button>
                    ) : (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center transition-all hover:scale-125"
                      >
                        <img
                          src={social.imgSrc}
                          alt="social"
                          className={`w-full h-full object-contain ${social.isLarge ? "scale-125" : "scale-100"}`}
                        />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-50">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form fields remain exactly same as your code */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase mb-2">
                      {t("form.labels.name")}
                    </label>
                    <input
                      name="name"
                      required
                      className="p-4 rounded-xl bg-gray-50 border outline-none text-sm text-black focus:border-yellow-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase mb-2">
                      {t("form.labels.email")}
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="p-4 rounded-xl bg-gray-50 border outline-none text-sm text-black focus:border-yellow-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase mb-2">
                      {t("form.labels.arrival")}
                    </label>
                    <input
                      name="arrivalDate"
                      type="date"
                      value={arrivalDate}
                      onChange={(e) => setArrivalDate(e.target.value)}
                      required
                      className="p-4 rounded-xl bg-gray-50 border outline-none text-sm text-black focus:border-yellow-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase mb-2">
                      {t("form.labels.departure")}
                    </label>
                    <input
                      name="departureDate"
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      required
                      className="p-4 rounded-xl bg-gray-50 border outline-none text-sm text-black focus:border-yellow-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase mb-2">
                      {t("form.labels.guests")}
                    </label>
                    <input
                      name="guests"
                      type="number"
                      required
                      className="p-4 rounded-xl bg-gray-50 border outline-none text-sm text-black focus:border-yellow-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase mb-2">
                      {t("form.labels.kids")}
                    </label>
                    <input
                      name="kids"
                      type="number"
                      className="p-4 rounded-xl bg-gray-50 border outline-none text-sm text-black focus:border-yellow-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase mb-2">
                      {t("form.labels.country")}
                    </label>
                    <input
                      name="country"
                      required
                      className="p-4 rounded-xl bg-gray-50 border outline-none text-sm text-black focus:border-yellow-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-black font-bold text-[10px] uppercase mb-2">
                    {t("form.labels.transport")}
                  </label>
                  <div className="flex gap-4">
                    {["Car", "Van", "Bus"].map((mode) => (
                      <label
                        key={mode}
                        className="flex items-center gap-2 text-xs font-bold text-gray-600 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="transport"
                          value={mode}
                          required
                          className="accent-yellow-500"
                        />{" "}
                        {t(`form.transport_modes.${mode.toLowerCase()}`)}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-black font-bold text-[10px] uppercase mb-2">
                    {t("form.labels.locations")}
                  </label>
                  <input
                    name="location"
                    required
                    className="p-4 rounded-xl bg-gray-50 border outline-none text-sm text-black focus:border-yellow-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black hover:bg-yellow-500 text-white hover:text-black py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3"
                >
                  {loading ? (
                    t("form.processing")
                  ) : (
                    <>
                      {t("form.submit")} <Send size={14} />
                    </>
                  )}
                </button>
              </form>

              {status.message && (
                <div
                  className={`mt-6 p-4 rounded-xl text-xs font-bold uppercase ${status.type === "success" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"}`}
                >
                  {status.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
