"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Colombo",
          hour12: true,
        }),
      );
      setDate(
        now.toLocaleDateString("en-US", {
          timeZone: "Asia/Colombo",
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer bg-main-red text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="footer-heading">DESTINATOR LANKA</h3>
          <p className="fs">
            Your trusted travel partner in Sri Lanka. Experience the paradise
            with us.
          </p>
        </div>

        <div>
          <h3 className="footer-heading">LOCAL TIME</h3>
          <p className="text-sm">
            Date: <span id="date">{date}</span>
          </p>
          <p className="text-sm">
            Time: <span id="time">{time}</span>
          </p>
        </div>

        <div>
          <h3 className="footer-heading">FOLLOW US</h3>
          <div className="social-icons">
            <Link href="#">
              <img src="/image/facebook.png" alt="FB" />
            </Link>
            <Link href="#">
              <img src="/image/instagram.png" alt="IG" />
            </Link>
            <Link href="#">
              <img src="/image/tiktok.png" alt="TK" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom-text mt-10 text-center border-t border-white/10 pt-5 text-xs">
        &copy; {new Date().getFullYear()} Destinator Lanka. All Rights Reserved.
      </div>
    </footer>
  );
}
