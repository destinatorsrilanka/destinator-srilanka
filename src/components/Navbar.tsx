"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { Button } from "./ui/button"; // Shadcn button

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about" },
    { name: "CATEGORIES", href: "#categories" },
    { name: "SERVICES", href: "#services" },
    { name: "CONTACT US", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md py-4 px-8 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Destinator Logo"
          width={100}
          height={40}
          className="home-logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-grow justify-center">
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white text-sm font-semibold tracking-wider hover:bg-main-red rounded-full-rounded px-4 py-2 transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Icons & Contact Button */}
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex social-icons-nav gap-2">
          {["facebook", "instagram", "tiktok"].map((icon) => (
            <Link
              key={icon}
              href="#"
              className="bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Image
                src={`/image/${icon}.png`}
                alt={icon}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
        <Button className="button-nav bg-main-red hover:bg-white hover:text-main-red text-white font-poppins font-medium text-xs px-4 py-2 rounded-lg tracking-wider">
          BOOK NOW
        </Button>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-main-red text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-black/90 flex flex-col items-center py-4 md:hidden">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white text-base font-semibold tracking-wider hover:bg-main-red rounded-full-rounded px-4 py-2 transition-all block text-center"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
