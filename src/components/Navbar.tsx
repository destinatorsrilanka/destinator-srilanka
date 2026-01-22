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
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about" },
    { name: "CATEGORIES", href: "#categories" },
    { name: "SERVICES", href: "#services" },
    { name: "CONTACT US", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out px-6 md:px-16 flex justify-between items-center ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl py-3 border-b border-white/10 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      {/* Logo Section - Adjusted size for better balance */}
      <Link
        href="/"
        className="relative z-[110] transition-transform duration-300 hover:scale-105"
      >
        <div className="relative w-14 h-14 ">
          <Image
            src="/image/Logo.png"
            alt="Destinator Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>

      {/* Desktop Navigation - Modern styling with indicators */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white/90 text-[12px] font-bold tracking-[0.15em] px-4 py-2 transition-all duration-300 hover:text-destinator-orange relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-destinator-orange transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Side Actions */}
      <div className="flex items-center gap-8">
        {/* Social Icons with subtle glow */}
        <div className="hidden lg:flex items-center gap-5 text-white/80">
          {[
            { Icon: Facebook, href: "#" },
            { Icon: Instagram, href: "#" },
            { Icon: Twitter, href: "#" },
          ].map(({ Icon, href }, idx) => (
            <Link
              key={idx}
              href={href}
              className="hover:text-destinator-orange transition-all duration-300 transform hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>

        {/* Action Button - Balanced sizing */}
        <Button className="hidden sm:flex bg-destinator-orange hover:bg-white hover:text-black text-white font-extrabold text-[11px] px-8 py-6 rounded-full transition-all duration-500 uppercase tracking-widest shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          BOOK NOW
        </Button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-[110] text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={32} className="animate-in spin-in-90" />
          ) : (
            <Menu size={32} />
          )}
        </button>
      </div>

      {/* Modern Mobile Overlay - Full screen with blur */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-2xl z-[105] flex flex-col items-center justify-center transition-all duration-700 ease-in-out md:hidden ${
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-10 text-center">
          {navLinks.map((link, i) => (
            <li
              key={link.name}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`transition-all duration-500 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Link
                href={link.href}
                className="text-white text-3xl font-black tracking-tighter hover:text-destinator-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex gap-10 text-white/50">
          <Facebook size={28} className="hover:text-white transition-colors" />
          <Instagram size={28} className="hover:text-white transition-colors" />
          <Twitter size={28} className="hover:text-white transition-colors" />
        </div>
      </div>
    </header>
  );
}
