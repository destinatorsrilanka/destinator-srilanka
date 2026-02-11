"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Facebook,
  Instagram,
  MessageCircle,
  Music2,
  X,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlant?: boolean;
  initialInvest?: boolean;
  initialMedia?: boolean;
}

export default function InquiryModal({
  isOpen,
  onClose,
  initialPlant = false,
  initialInvest = false,
  initialMedia = false,
}: InquiryModalProps) {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Checkbox States
  const [plantChecked, setPlantChecked] = useState(false);
  const [investChecked, setInvestChecked] = useState(false);
  const [mediaChecked, setMediaChecked] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const plant = initialPlant || searchParams.get("plant") === "true";
      const invest = initialInvest || searchParams.get("invest") === "true";
      const media = initialMedia || searchParams.get("media") === "true";

      setPlantChecked(plant);
      setInvestChecked(invest);
      setMediaChecked(media);

      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setStatus({ type: "", message: "" });
    }
  }, [isOpen, searchParams, initialPlant, initialInvest, initialMedia]);

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
      location: formData.get("location"),
      interest_plant: plantChecked ? "Yes" : "No",
      interest_invest: investChecked ? "Yes" : "No",
      interest_media: mediaChecked ? "Yes" : "No",
    };

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus({ type: "success", message: t("modal.messages.success") });
        setTimeout(() => {
          onClose();
          setPlantChecked(false);
          setInvestChecked(false);
          setMediaChecked(false);
        }, 2000);
      } else {
        setStatus({ type: "error", message: t("modal.messages.error") });
      }
    } catch (error) {
      setStatus({ type: "error", message: t("modal.messages.connection") });
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/share/...",
      color: "hover:bg-[#1877F2]",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/...",
      color: "hover:bg-[#E4405F]",
    },
    {
      Icon: Music2,
      href: "https://www.tiktok.com/...",
      color: "hover:bg-black",
    },
    {
      Icon: MessageCircle,
      href: "https://wa.me/...",
      color: "hover:bg-[#25D366]",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[2rem] shadow-2xl overflow-y-auto z-[1000]"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black bg-gray-100 rounded-full z-10"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-[2px] bg-yellow-500"></span>
                  <h3 className="text-yellow-500 font-bold text-[10px] uppercase tracking-[0.4em]">
                    {t("form.tag")}
                  </h3>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-black mb-4 uppercase leading-tight">
                  {t("form.title_main")} <br />
                  <span className="text-gray-300">{t("form.title_sub")}</span>
                </h2>

                <div className="space-y-2 mb-8">
                  {/* PLANTING SELECTOR */}
                  <div
                    onClick={() => setPlantChecked(!plantChecked)}
                    className={`text-[10px] font-bold p-2 rounded-lg border transition-all cursor-pointer select-none ${plantChecked ? "bg-green-50 border-green-200 text-green-700" : "bg-gray-50 border-gray-100 text-gray-400"}`}
                  >
                    {plantChecked
                      ? t("modal.interests.plant_true")
                      : t("modal.interests.plant_false")}
                  </div>

                  {/* INVESTMENT SELECTOR */}
                  <div
                    onClick={() => setInvestChecked(!investChecked)}
                    className={`text-[10px] font-bold p-2 rounded-lg border transition-all cursor-pointer select-none ${investChecked ? "bg-yellow-50 border-yellow-200 text-yellow-700" : "bg-gray-50 border-gray-100 text-gray-400"}`}
                  >
                    {investChecked
                      ? t("modal.interests.invest_true")
                      : t("modal.interests.invest_false")}
                  </div>

                  {/* MEDIA SELECTOR */}
                  <div
                    onClick={() => setMediaChecked(!mediaChecked)}
                    className={`text-[10px] font-bold p-2 rounded-lg border transition-all cursor-pointer select-none ${mediaChecked ? t("modal.interests.media_true") : t("modal.interests.media_false")}`}
                  >
                    {mediaChecked
                      ? t("modal.interests.media_true")
                      : t("modal.interests.media_false")}
                  </div>
                </div>

                <div className="flex gap-4 mb-8">
                  {socials.map(({ Icon, href, color }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 ${color} hover:text-white transition-all cursor-pointer`}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      name="name"
                      placeholder={t("modal.placeholders.name")}
                      required
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-black text-sm outline-none focus:border-yellow-500"
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder={t("modal.placeholders.email")}
                      required
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-black text-sm outline-none focus:border-yellow-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      name="arrivalDate"
                      type="date"
                      required
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-black text-sm outline-none focus:border-yellow-500"
                    />
                    <input
                      name="departureDate"
                      type="date"
                      required
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-black text-sm outline-none focus:border-yellow-500"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <input
                      name="guests"
                      type="number"
                      placeholder={t("modal.placeholders.guests")}
                      required
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-black text-sm outline-none focus:border-yellow-500"
                    />
                    <input
                      name="kids"
                      type="number"
                      placeholder={t("modal.placeholders.kids")}
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-black text-sm outline-none focus:border-yellow-500"
                    />
                    <input
                      name="country"
                      placeholder={t("modal.placeholders.country")}
                      required
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-black text-sm outline-none focus:border-yellow-500"
                    />
                  </div>
                  <input
                    name="location"
                    placeholder={t("modal.placeholders.location")}
                    required
                    className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-black text-sm outline-none focus:border-yellow-500"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black hover:bg-yellow-500 text-white hover:text-black py-4 rounded-xl font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? t("form.processing") : t("form.submit")}
                    <Send size={14} />
                  </button>
                </form>

                {status.message && (
                  <div
                    className={`mt-4 p-4 rounded-xl text-xs flex items-center gap-2 ${status.type === "success" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <AlertCircle size={16} />
                    )}
                    {status.message}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
