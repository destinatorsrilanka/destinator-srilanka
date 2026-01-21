"use client";
import { useState } from "react";

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
      const res = await fetch("/api/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: result.message });
        e.currentTarget.reset();
      } else {
        setStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Failed to connect to server." });
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="inquiry-section bg-[#4a0059] py-20">
      <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-md p-10 rounded-3xl shadow-2xl">
        <h2 className="text-white text-3xl font-bold mb-8">GET IN TOUCH</h2>
        <form
          id="inquiryForm"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          <div className="flex flex-col">
            <label className="text-white mb-2 text-sm">Full Name</label>
            <input
              name="name"
              required
              className="p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-destinator-orange"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2 text-sm">Email</label>
            <input
              name="email"
              type="email"
              required
              className="p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="text-white mb-2 text-sm">Visiting Location</label>
            <input
              name="location"
              className="p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-main-red hover:bg-white hover:text-main-red text-white py-4 rounded-xl font-bold tracking-widest transition-all"
          >
            {loading ? "SENDING..." : "SUBMIT INQUIRY"}
          </button>
        </form>

        {status.message && (
          <div
            className={`mt-6 p-4 rounded-lg ${status.type === "success" ? "bg-green-500" : "bg-red-500"} text-white`}
          >
            {status.message}
          </div>
        )}
      </div>
    </section>
  );
}
