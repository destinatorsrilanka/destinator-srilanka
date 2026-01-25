"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  X,
} from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
          message: "Inquiry sent successfully!",
        });
        setTimeout(() => {
          onClose();
          setStatus({ type: "", message: "" });
        }, 3000);
      } else {
        const result = await res.json();
        setStatus({ type: "error", message: result.message || "Server Error" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Connection failed." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen ? (
        <div
          key="modal-overlay"
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6 overflow-hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />

          {/* Modal Content */}
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
                    Get in Touch
                  </h3>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-black mb-4 uppercase leading-tight">
                  PLAN YOUR <br />{" "}
                  <span className="text-gray-300">DREAM JOURNEY.</span>
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Ready to explore? Fill out the form and we will contact you.
                </p>

                <div className="flex gap-4 mb-8">
                  {[Facebook, Instagram, MessageCircle, Twitter].map(
                    (Icon, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-yellow-500 hover:text-white transition-all cursor-pointer"
                      >
                        <Icon size={18} />
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      name="name"
                      placeholder="Full Name"
                      required
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-black text-sm outline-none focus:border-yellow-500"
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
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
                      placeholder="Guests"
                      required
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-black text-sm outline-none focus:border-yellow-500"
                    />
                    <input
                      name="kids"
                      type="number"
                      placeholder="Kids"
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-black text-sm outline-none focus:border-yellow-500"
                    />
                    <input
                      name="country"
                      placeholder="Country"
                      required
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-black text-sm outline-none focus:border-yellow-500"
                    />
                  </div>
                  <input
                    name="location"
                    placeholder="Visit Locations"
                    required
                    className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-black text-sm outline-none focus:border-yellow-500"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black hover:bg-yellow-500 text-white hover:text-black py-4 rounded-xl font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? "Sending..." : "Submit Inquiry"}{" "}
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
      ) : null}
    </AnimatePresence>
  );
}
