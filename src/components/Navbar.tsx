"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import InquiryModal from "./InquiryModal"; // Path එක නිවැරදි බව පරීක්ෂා කරන්න

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modal එක හෝ Menu එක ඇරී ඇති විට scroll lock කිරීම
  useEffect(() => {
    if (isMenuOpen || isInquiryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen, isInquiryOpen]);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "HERITAGE MAP", href: "#heritage" },
    { name: "OUR LEGACY", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "CONTACT US", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 ease-in-out ${
          scrolled || isMenuOpen ? "py-3 shadow-2xl bg-black" : "py-5 bg-black"
        } border-b border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between items-center w-full relative z-[160]">
          {/* LEFT: MENU & LINKS */}
          <div className="flex items-center">
            <button
              className="xl:hidden relative text-white p-2 -ml-2 focus:outline-none z-[170]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <X
                  size={30}
                  className={`absolute transition-all duration-500 text-[#EAB308] ${
                    isMenuOpen
                      ? "scale-100 rotate-0 opacity-100"
                      : "scale-0 rotate-90 opacity-0"
                  }`}
                />
                <Menu
                  size={30}
                  className={`absolute transition-all duration-500 ${
                    isMenuOpen
                      ? "scale-0 -rotate-90 opacity-0"
                      : "scale-100 rotate-0 opacity-100"
                  }`}
                />
              </div>
            </button>

            <nav className="hidden xl:block">
              <ul className="flex items-center gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white text-[12px] font-bold tracking-[0.2em] px-4 py-2 transition-all duration-300 hover:text-[#EAB308] relative group whitespace-nowrap uppercase"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-4 w-0 h-[2px] bg-[#EAB308] transition-all duration-300 group-hover:w-[calc(100%-32px)]"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* RIGHT: BOOK NOW */}
          <div className="flex items-center">
            <Button
              onClick={() => setIsInquiryOpen(true)}
              className={`bg-[#EAB308] hover:bg-white hover:text-black text-black font-black text-[10px] sm:text-[11px] px-6 sm:px-8 py-4 sm:py-5 h-9 sm:h-11 rounded-full transition-all duration-500 uppercase tracking-widest shadow-lg ${
                isMenuOpen
                  ? "opacity-0 invisible translate-x-5"
                  : "opacity-100 visible translate-x-0"
              }`}
            >
              BOOK NOW
            </Button>
          </div>
        </div>

        {/* MOBILE OVERLAY */}
        <div
          className={`fixed inset-0 bg-black transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] xl:hidden ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ zIndex: 140 }}
        >
          <div className="h-full flex flex-col justify-center items-center">
            <nav>
              <ul className="flex flex-col space-y-8 text-center">
                {navLinks.map((link, index) => (
                  <li
                    key={link.name}
                    className={`overflow-hidden transition-all duration-700 ${
                      isMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-20 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMenuOpen
                        ? `${index * 100 + 300}ms`
                        : "0ms",
                    }}
                  >
                    <Link
                      href={link.href}
                      className="text-white text-4xl sm:text-5xl font-black tracking-tighter uppercase transition-all duration-300 hover:text-[#EAB308] block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div
              className={`flex gap-8 mt-16 transition-all duration-1000 delay-[800ms] ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Facebook
                size={26}
                className="text-white/40 hover:text-[#EAB308] cursor-pointer"
              />
              <Instagram
                size={26}
                className="text-white/40 hover:text-[#EAB308] cursor-pointer"
              />
              <Twitter
                size={26}
                className="text-white/40 hover:text-[#EAB308] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </header>

      {/* MODAL (Header එකට පිටින් තබා ඇත) */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </>
  );
}
