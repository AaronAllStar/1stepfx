"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Languages, Menu } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 ${scrolled ? "bg-dark/90 backdrop-blur-md py-4 border-b border-white/5" : "py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-dark.png"
            alt="1StepFX Logo"
            width={80}
            height={80}
            className="rounded-lg object-contain"
            priority
          />
        </div>

        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em]">
          <a href="#dashboard" className="hover:text-lime transition-colors">
            {t("nav_dashboard")}
          </a>
          <a href="#tecnologia" className="hover:text-lime transition-colors">
            {t("nav_taptotrade")}
          </a>
          <a href="#planes" className="hover:text-lime transition-colors">
            {t("nav_prices")}
          </a>
          <a
            href="/1stepfx.apk"
            className="btn-official px-6 py-3 rounded-full"
            download
          >
            {t("nav_download")}
          </a>

          <button
            onClick={toggleLang}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/10 transition-all text-xs"
          >
            <Languages className="text-lime w-4 h-4" />
            <span>{lang === "es" ? "EN" : "ES"}</span>
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs"
          >
            <span>{lang === "es" ? "EN" : "ES"}</span>
          </button>
          <button className="text-lime text-3xl">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>
    </nav>
  );
}
