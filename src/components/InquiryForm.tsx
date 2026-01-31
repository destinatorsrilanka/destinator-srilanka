"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Facebook,
  Instagram,
  MessageCircle,
  Music2,
  TreePine,
  Landmark,
  Camera,
  Check,
} from "lucide-react"; // ඔබ පාවිච්චි කරන්නේ lucide-react නම් එය වෙනස් නොකරන්න

export default function InquiryForm() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  // States
  const [plantInterest, setPlantInterest] = useState(false);
  const [investInterest, setInvestInterest] = useState(false);

  // Date States
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  useEffect(() => {
    // URL එක පරීක්ෂා කරන function එක
    const checkUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const hasPlant = params.get("plant") === "true";
      const hasInvest = params.get("invest") === "true";

      if (hasPlant) setPlantInterest(true);
      if (hasInvest) setInvestInterest(true);

      // ටික් එක වැටුණා නම් URL එක පිරිසිදු කරන්න
      if (hasPlant || hasInvest) {
        const newUrl = window.location.pathname;
        window.history.replaceState({}, "", newUrl);
      }
    };

    // 1. පේජ් එක ලෝඩ් වන විට පරීක්ෂා කරන්න
    checkUrl();

    // 2. තත්පරයකට වරක් URL එක බලන්න (පිටත බටන් එකක් එබුවොත් අල්ලා ගැනීමට)
    const interval = setInterval(checkUrl, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData(e.currentTarget);

    // API එකට යවන දත්ත
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
          message:
            "Your inquiry has been sent! Check your email for confirmation.",
        });
        (e.target as HTMLFormElement).reset();
        setPlantInterest(false);
        setInvestInterest(false);
        setArrivalDate("");
        setDepartureDate("");
      } else {
        const result = await res.json();
        setStatus({ type: "error", message: result.message || "Server Error" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Failed to connect to the server." });
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/share/...",
      color: "hover:bg-blue-600",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/...",
      color: "hover:bg-pink-600",
    },
    {
      Icon: Music2,
      href: "https://www.tiktok.com/...",
      color: "hover:bg-black",
    },
    {
      Icon: MessageCircle,
      href: "https://wa.me/...",
      color: "hover:bg-green-600",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white px-6">
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
                  Get in Touch
                </h3>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-8 uppercase">
                PLAN YOUR <br />{" "}
                <span className="text-gray-300">DREAM JOURNEY.</span>
              </h2>

              {/* INTEREST SELECTORS */}
              <div className="space-y-4 mb-10">
                <div
                  onClick={() => setPlantInterest(!plantInterest)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer flex items-center gap-4 transition-all ${plantInterest ? "border-green-500 bg-green-50" : "border-gray-100 bg-gray-50"}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${plantInterest ? "bg-green-500 text-white" : "bg-white text-gray-400 border"}`}
                  >
                    <TreePine size={20} />
                  </div>
                  <div className="flex-1 text-black font-bold text-xs uppercase">
                    Heritage Forest
                  </div>
                  <div
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center ${plantInterest ? "bg-green-500 border-green-500" : "border-gray-200"}`}
                  >
                    {plantInterest && (
                      <Check size={14} className="text-white" />
                    )}
                  </div>
                </div>

                <div
                  onClick={() => setInvestInterest(!investInterest)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer flex items-center gap-4 transition-all ${investInterest ? "border-yellow-500 bg-yellow-50" : "border-gray-100 bg-gray-50"}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${investInterest ? "bg-yellow-500 text-white" : "bg-white text-gray-400 border"}`}
                  >
                    <Landmark size={20} />
                  </div>
                  <div className="flex-1 text-black font-bold text-xs uppercase">
                    Investment
                  </div>
                  <div
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center ${investInterest ? "bg-yellow-500 border-yellow-500" : "border-gray-200"}`}
                  >
                    {investInterest && (
                      <Check size={14} className="text-white" />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-all ${social.color} hover:text-white`}
                  >
                    <social.Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase mb-2">
                      Full Name
                    </label>
                    <input
                      name="name"
                      required
                      className="p-4 rounded-xl bg-gray-50 border outline-none text-sm text-black"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase mb-2">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="p-4 rounded-xl bg-gray-50 border outline-none text-sm text-black"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase mb-2">
                      Arrival Date
                    </label>
                    <input
                      name="arrivalDate"
                      type="date"
                      value={arrivalDate}
                      onChange={(e) => setArrivalDate(e.target.value)}
                      required
                      className="p-4 rounded-xl bg-gray-50 border outline-none text-sm text-black"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase mb-2">
                      Departure Date
                    </label>
                    <input
                      name="departureDate"
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      required
                      className="p-4 rounded-xl bg-gray-50 border outline-none text-sm text-black"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase mb-2">
                      Guests
                    </label>
                    <input
                      name="guests"
                      type="number"
                      required
                      className="p-4 rounded-xl bg-gray-50 border outline-none text-sm text-black"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase mb-2">
                      Kids
                    </label>
                    <input
                      name="kids"
                      type="number"
                      className="p-4 rounded-xl bg-gray-50 border outline-none text-sm text-black"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase mb-2">
                      Country
                    </label>
                    <input
                      name="country"
                      required
                      className="p-4 rounded-xl bg-gray-50 border outline-none text-sm text-black"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-black font-bold text-[10px] uppercase mb-2">
                    Preferred Transport
                  </label>
                  <div className="flex gap-4">
                    {["Car", "Van", "Bus"].map((mode) => (
                      <label
                        key={mode}
                        className="flex items-center gap-2 text-xs font-bold text-gray-600"
                      >
                        <input
                          type="radio"
                          name="transport"
                          value={mode}
                          required
                          className="accent-yellow-500"
                        />{" "}
                        {mode}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-black font-bold text-[10px] uppercase mb-2">
                    Visit Locations
                  </label>
                  <input
                    name="location"
                    required
                    className="p-4 rounded-xl bg-gray-50 border outline-none text-sm text-black"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black hover:bg-yellow-500 text-white hover:text-black py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3"
                >
                  {loading ? (
                    "Processing..."
                  ) : (
                    <>
                      Submit Inquiry <Send size={14} />
                    </>
                  )}
                </button>
              </form>
              {status.message && (
                <div
                  className={`mt-6 p-4 rounded-xl text-xs font-bold uppercase ${status.type === "success" ? "text-green-600" : "text-red-600"}`}
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
