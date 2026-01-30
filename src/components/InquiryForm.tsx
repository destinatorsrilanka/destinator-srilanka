"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Facebook,
  Instagram,
  MessageCircle, // WhatsApp සඳහා
  Music2, // TikTok සඳහා
  TreePine,
  Landmark,
  Camera,
  Check,
} from "lucide-react";

export default function InquiryForm() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  // States
  const [plantInterest, setPlantInterest] = useState(false);
  const [investInterest, setInvestInterest] = useState(false);

  // Date States
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const updateFieldsFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    setPlantInterest(params.get("plant") === "true");
    setInvestInterest(params.get("invest") === "true");
  };

  useEffect(() => {
    updateFieldsFromURL();
    window.addEventListener("urlchange", updateFieldsFromURL);
    window.addEventListener("popstate", updateFieldsFromURL);
    return () => {
      window.removeEventListener("urlchange", updateFieldsFromURL);
      window.removeEventListener("popstate", updateFieldsFromURL);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData(e.currentTarget);
    formData.append("interest_plant", plantInterest ? "Yes" : "No");
    formData.append("interest_invest", investInterest ? "Yes" : "No");

    const data = Object.fromEntries(formData);

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
        window.history.replaceState({}, "", window.location.pathname);
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

  // යාවත්කාලීන කරන ලද Social Media ලින්ක්
  const socials = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/share/17dR9DX9c8/?mibextid=wwXIfr",
      color: "hover:bg-blue-600",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/destinatorlk?igsh=aGxwbzNpaHF3NmNo&utm_source=qr",
      color: "hover:bg-pink-600",
    },
    {
      Icon: Music2,
      href: "#", // TikTok ලින්ක් එක මෙතැනට එක් කරන්න
      color: "hover:bg-black",
    },
    {
      Icon: MessageCircle,
      href: "https://wa.me/94777112434", // WhatsApp ලින්ක් එක
      color: "hover:bg-green-600",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT SIDE */}
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

              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-2 uppercase">
                PLAN YOUR <br />{" "}
                <span className="text-gray-300">DREAM JOURNEY.</span>
              </h2>

              <p className="text-sm font-bold text-yellow-600 tracking-[0.2em] uppercase mb-8 italic">
                — Creative Travel Plans
              </p>

              {/* Drone & Media Coverage Section */}
              <motion.div
                className="relative mb-10 p-6 rounded-[2rem] bg-gradient-to-br from-gray-900 to-black border border-gray-800 flex items-center gap-5 overflow-hidden group shadow-2xl shadow-yellow-500/10"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotateY: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-yellow-500 p-3.5 rounded-2xl text-black shadow-[0_0_20px_rgba(234,179,8,0.4)] z-10"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" />
                    <path d="M5.3 11c.1-.5.3-1 .5-1.5M18.2 11c-.1-.5-.3-1-.5-1.5" />
                    <path d="M10.5 5.3c.5-.1 1-.3 1.5-.5M13.5 18.2c-.5.1-1 .3-1.5.5" />
                    <path d="m2 2 3 3M22 22l-3-3M22 2l-3 3M2 22l3-3" />
                  </svg>
                </motion.div>

                <div className="flex-1 z-10">
                  <h4 className="text-[10px] font-black uppercase text-yellow-500 tracking-[0.3em] mb-1">
                    Exclusive Offer
                  </h4>
                  <p className="text-lg font-black text-white leading-none mb-1 uppercase tracking-tighter">
                    Free{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                      Photography
                    </span>
                  </p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    Professional Drone & Video Coverage
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <Camera
                  size={60}
                  className="absolute -right-4 -bottom-4 text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-500"
                />
              </motion.div>

              {/* INTEREST SELECTORS */}
              <div className="space-y-4 mb-10">
                <div
                  onClick={() => setPlantInterest(!plantInterest)}
                  className={`group relative p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer flex items-center gap-4 overflow-hidden
                    ${plantInterest ? "border-green-500 bg-green-50/50" : "border-gray-100 bg-gray-50/50 hover:border-green-200"}`}
                >
                  <div
                    className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 
                    ${plantInterest ? "bg-green-500 text-white rotate-[360deg]" : "bg-white text-gray-400 border shadow-sm"}`}
                  >
                    <TreePine size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-black uppercase text-black">
                      Heritage Forest
                    </p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">
                      Like to Plant a Tree
                    </p>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 
                    ${plantInterest ? "bg-green-500 border-green-500 scale-110 shadow-lg shadow-green-200" : "border-gray-200 bg-white"}`}
                  >
                    <AnimatePresence>
                      {plantInterest && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                        >
                          <Check
                            size={14}
                            className="text-white stroke-[4px]"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div
                  onClick={() => setInvestInterest(!investInterest)}
                  className={`group relative p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer flex items-center gap-4 overflow-hidden
                    ${investInterest ? "border-yellow-500 bg-yellow-50/50" : "border-gray-100 bg-gray-50/50 hover:border-yellow-200"}`}
                >
                  <div
                    className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 
                    ${investInterest ? "bg-yellow-500 text-white rotate-[360deg]" : "bg-white text-gray-400 border shadow-sm"}`}
                  >
                    <Landmark size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-black uppercase text-black">
                      Investment
                    </p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">
                      Join as a Partner
                    </p>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 
                    ${investInterest ? "bg-yellow-500 border-yellow-500 scale-110 shadow-lg shadow-yellow-200" : "border-gray-200 bg-white"}`}
                  >
                    <AnimatePresence>
                      {investInterest && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                        >
                          <Check
                            size={14}
                            className="text-white stroke-[4px]"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* SOCIAL MEDIA SECTION */}
              <div className="flex items-center gap-4 mb-10">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-all ${social.color} hover:text-white`}
                  >
                    <social.Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE (THE FORM) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase tracking-widest mb-2 ml-1">
                      Full Name
                    </label>
                    <input
                      name="name"
                      placeholder="John Doe"
                      required
                      className="p-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-yellow-500 outline-none text-sm text-black"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase tracking-widest mb-2 ml-1">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="p-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-yellow-500 outline-none text-sm text-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase tracking-widest mb-2 ml-1">
                      Arrival Date
                    </label>
                    <input
                      name="arrivalDate"
                      type="date"
                      value={arrivalDate}
                      onChange={(e) => setArrivalDate(e.target.value)}
                      required
                      className="p-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-yellow-500 outline-none text-sm text-black w-full block min-h-[54px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase tracking-widest mb-2 ml-1">
                      Departure Date
                    </label>
                    <input
                      name="departureDate"
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      required
                      className="p-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-yellow-500 outline-none text-sm text-black w-full block min-h-[54px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase tracking-widest mb-2 ml-1">
                      Guests
                    </label>
                    <input
                      name="guests"
                      type="number"
                      placeholder="0"
                      required
                      className="p-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-yellow-500 outline-none text-sm text-black"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase tracking-widest mb-2 ml-1">
                      Kids
                    </label>
                    <input
                      name="kids"
                      type="number"
                      placeholder="0"
                      className="p-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-yellow-500 outline-none text-sm text-black"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase tracking-widest mb-2 ml-1">
                      Country
                    </label>
                    <input
                      name="country"
                      placeholder="Your Country"
                      required
                      className="p-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-yellow-500 outline-none text-sm text-black"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase tracking-widest mb-2 ml-1">
                      Preferred Transport
                    </label>
                    <div className="flex flex-wrap gap-4 px-2">
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
                          {mode}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase tracking-widest mb-2 ml-1">
                      Visit Locations
                    </label>
                    <input
                      name="location"
                      placeholder="Ella, Sigiriya..."
                      required
                      className="p-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-yellow-500 outline-none text-sm text-black"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black hover:bg-yellow-500 text-white hover:text-black py-5 rounded-2xl font-black text-[10px] tracking-[0.3em] uppercase transition-all flex items-center justify-center gap-3"
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
                  className={`mt-6 p-4 rounded-xl flex items-center gap-3 text-xs font-bold uppercase ${status.type === "success" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}{" "}
                  {status.message}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
