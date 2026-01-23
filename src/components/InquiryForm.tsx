"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";

export default function InquiryForm() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData(e.currentTarget);
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
    { Icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { Icon: Instagram, href: "#", color: "hover:bg-pink-600" },
    { Icon: MessageCircle, href: "#", color: "hover:bg-green-600" },
    { Icon: Twitter, href: "#", color: "hover:bg-sky-500" },
  ];

  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* --- LEFT SIDE: TEXT & SOCIALS --- */}
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
              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-6 uppercase">
                PLAN YOUR <br />
                <span className="text-gray-300">DREAM JOURNEY.</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                Ready to explore the hidden gems of Sri Lanka? Fill out the
                form, and our local experts will craft a personalized itinerary
                just for you.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 mb-10">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-all duration-300 shadow-sm ${social.color} hover:text-white`}
                  >
                    <social.Icon size={18} />
                  </motion.a>
                ))}
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-black font-bold text-sm mb-1 italic">
                  "Atithi Devo Bhava"
                </p>
                <p className="text-gray-400 text-xs uppercase tracking-widest">
                  Our Guest is Our God
                </p>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: THE FORM (Balanced & Responsive) --- */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase tracking-widest mb-2 ml-1">
                      Full Name
                    </label>
                    <input
                      name="name"
                      placeholder="John Doe"
                      required
                      className="p-4 rounded-xl bg-gray-50 text-black border border-gray-100 focus:outline-none focus:border-yellow-500 focus:bg-white transition-all text-sm"
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
                      className="p-4 rounded-xl bg-gray-50 text-black border border-gray-100 focus:outline-none focus:border-yellow-500 focus:bg-white transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Row 2: Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase tracking-widest mb-2 ml-1">
                      Arrival Date
                    </label>
                    <input
                      name="arrivalDate"
                      type="date"
                      required
                      className="p-4 rounded-xl bg-gray-50 text-black border border-gray-100 focus:outline-none focus:border-yellow-500 focus:bg-white transition-all text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-black font-bold text-[10px] uppercase tracking-widest mb-2 ml-1">
                      Departure Date
                    </label>
                    <input
                      name="departureDate"
                      type="date"
                      required
                      className="p-4 rounded-xl bg-gray-50 text-black border border-gray-100 focus:outline-none focus:border-yellow-500 focus:bg-white transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Row 3: Guests & Kids */}
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
                      className="p-4 rounded-xl bg-gray-50 text-black border border-gray-100 focus:outline-none focus:border-yellow-500 focus:bg-white transition-all text-sm"
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
                      className="p-4 rounded-xl bg-gray-50 text-black border border-gray-100 focus:outline-none focus:border-yellow-500 focus:bg-white transition-all text-sm"
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
                      className="p-4 rounded-xl bg-gray-50 text-black border border-gray-100 focus:outline-none focus:border-yellow-500 focus:bg-white transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Row 4: Transport & Location */}
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
                      Where do you want to visit?
                    </label>
                    <input
                      name="location"
                      placeholder="E.g. Ella, Sigiriya, Mirissa..."
                      required
                      className="p-4 rounded-xl bg-gray-50 text-black border border-gray-100 focus:outline-none focus:border-yellow-500 focus:bg-white transition-all text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black hover:bg-yellow-500 text-white hover:text-black py-5 rounded-2xl font-black text-[10px] tracking-[0.3em] uppercase transition-all flex items-center justify-center gap-3 disabled:opacity-50 group shadow-lg"
                >
                  {loading ? (
                    "Processing..."
                  ) : (
                    <>
                      Submit Inquiry{" "}
                      <Send
                        size={14}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className={`mt-6 p-4 rounded-xl flex items-center gap-3 text-xs font-bold uppercase tracking-wider ${status.type === "success" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  {status.message}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
