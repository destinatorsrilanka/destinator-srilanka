"use client";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import InquiryModal from "./InquiryModal";
import { useTranslation } from "react-i18next";
import "../i18n";

function NavbarContent() {
  const { i18n, t } = useTranslation();
  const searchParams = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // භාෂා සහ අදාළ රටවල කොඩි වල රූප (SVG URLs)
  const languages = [
    { code: "en", name: "English", flag: "https://flagcdn.com/w40/gb.png" },
    { code: "de", name: "Deutsch", flag: "https://flagcdn.com/w40/de.png" },
    { code: "fr", name: "Français", flag: "https://flagcdn.com/w40/fr.png" },
    { code: "sp", name: "Español", flag: "https://flagcdn.com/w40/es.png" }, // ස්පාඤ්ඤ භාෂාව ඇතුළත් කරන ලදී
    { code: "it", name: "Italiano", flag: "https://flagcdn.com/w40/it.png" },
    { code: "ru", name: "Русский", flag: "https://flagcdn.com/w40/ru.png" },
    { code: "zh", name: "中文", flag: "https://flagcdn.com/w40/cn.png" },
  ];

  const currentLanguage =
    languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen || isInquiryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen, isInquiryOpen]);

  // මෙතනදී JSON එකේ ඇති Keys පාවිච්චි කර ඇත
  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.heritage_map"), href: "#heritage" },
    { name: t("nav.climate"), href: "#climate" },
    { name: t("nav.legacy"), href: "#about" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 ease-in-out ${
          scrolled || isMenuOpen ? "py-3 shadow-2xl bg-black" : "py-5 bg-black"
        } border-b border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between items-center w-full relative z-[160]">
          <div className="flex items-center">
            <button
              className="xl:hidden relative text-white p-2 -ml-2 focus:outline-none z-[170]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <X
                  size={30}
                  className={`absolute transition-all duration-500 text-[#EAB308] ${isMenuOpen ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"}`}
                />
                <Menu
                  size={30}
                  className={`absolute transition-all duration-500 ${isMenuOpen ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
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

          <div className="flex items-center gap-3 sm:gap-6">
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-3 text-white bg-white/5 hover:bg-white/10 border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all duration-300 backdrop-blur-md"
              >
                <img
                  src={currentLanguage.flag}
                  alt={currentLanguage.name}
                  className="w-5 h-auto rounded-sm object-cover"
                />
                <span className="text-[10px] font-black tracking-widest uppercase hidden md:block">
                  {currentLanguage.code}
                </span>
                <ChevronDown
                  size={14}
                  className={`text-[#EAB308] transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="px-4 py-2 text-[9px] font-black text-white/40 tracking-[0.2em] uppercase border-b border-white/5 mb-1">
                    Select Language
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 text-left transition-all duration-300 group ${
                        i18n.language === lang.code
                          ? "bg-white/5"
                          : "hover:bg-[#EAB308]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={lang.flag}
                          alt={lang.name}
                          className="w-5 h-auto rounded-sm shadow-sm"
                        />
                        <span
                          className={`text-[11px] font-bold tracking-wider uppercase ${
                            i18n.language === lang.code
                              ? "text-[#EAB308]"
                              : "text-white group-hover:text-black"
                          }`}
                        >
                          {lang.name}
                        </span>
                      </div>
                      {i18n.language === lang.code && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button
              onClick={() => setIsInquiryOpen(true)}
              className={`bg-[#EAB308] hover:bg-white hover:text-black text-black font-black text-[10px] sm:text-[11px] px-6 sm:px-8 py-4 sm:py-5 h-9 sm:h-11 rounded-full transition-all duration-500 uppercase tracking-widest shadow-lg ${isMenuOpen ? "opacity-0 invisible translate-x-5" : "opacity-100 visible translate-x-0"}`}
            >
              {t("nav.book_now")}
            </Button>
          </div>
        </div>

        {/* Mobile Overlay */}
        <div
          className={`fixed inset-0 bg-black transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] xl:hidden ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
          style={{ zIndex: 140 }}
        >
          <div className="h-full flex flex-col justify-center items-center">
            <nav>
              <ul className="flex flex-col space-y-8 text-center">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white text-4xl sm:text-5xl font-black tracking-tighter uppercase block hover:text-[#EAB308] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialPlant={searchParams.get("plant") === "true"}
        initialInvest={searchParams.get("invest") === "true"}
      />
    </>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={<div className="h-20 bg-black w-full" />}>
      <NavbarContent />
    </Suspense>
  );
}
