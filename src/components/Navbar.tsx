"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about" },
    { name: "CATEGORIES", href: "#categories" },
    { name: "SERVICES", href: "#services" },
    { name: "CONTACT US", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 ease-in-out ${
        isMenuOpen
          ? "bg-black"
          : scrolled
            ? "bg-black/95 backdrop-blur-2xl border-b border-white/10 py-2 md:py-3"
            : "bg-white/5 backdrop-blur-md border-b border-white/10 py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between items-center w-full relative z-[160]">
        {/* --- LOGO --- */}
        <Link href="/" className="relative flex items-center shrink-0">
          <div className="relative w-28 h-10 sm:w-36 sm:h-12 md:w-52 md:h-14 overflow-hidden rounded-sm">
            <Image
              src="/image/Logo.jpeg"
              alt="Destinator Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white text-[11px] font-black tracking-[0.15em] px-4 py-2 transition-all duration-300 hover:text-[#EAB308] relative group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#EAB308] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- RIGHT ACTIONS --- */}
        <div className="flex items-center gap-3 sm:gap-6">
          <Button
            className={`hidden sm:flex bg-[#EAB308] hover:bg-white hover:text-black text-black font-black text-[10px] px-8 py-5 h-10 md:h-12 rounded-full transition-all duration-500 uppercase tracking-widest ${isMenuOpen ? "opacity-0 invisible scale-90" : "opacity-100 visible scale-100"}`}
          >
            BOOK NOW
          </Button>

          {/* --- MOBILE TOGGLE BUTTON --- */}
          <button
            className="xl:hidden relative text-white p-2 focus:outline-none z-[170]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* මෙනු අයිකන මාරුවීමේදී සිදුවන කුඩා ඇනිමේෂන් එකක් */}
              <X
                size={32}
                className={`absolute transition-all duration-500 text-[#EAB308] ${isMenuOpen ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"}`}
              />
              <Menu
                size={32}
                className={`absolute transition-all duration-500 ${isMenuOpen ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* --- MOBILE OVERLAY (RE-ENGINEERED ANIMATION) --- */}
      <div
        className={`fixed inset-0 bg-black transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] xl:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ zIndex: 140 }}
      >
        <div className="h-full flex flex-col justify-center items-center">
          <nav>
            <ul className="flex flex-col space-y-6 text-center">
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
                    className="text-white text-4xl sm:text-5xl font-black tracking-tighter uppercase transition-all duration-300 hover:text-[#EAB308] hover:tracking-normal active:scale-95 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons with fade-in */}
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
  );
}
