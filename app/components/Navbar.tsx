"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Languages, Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#dashboard", label: t("nav_dashboard") },
    { href: "#tecnologia", label: t("nav_taptotrade") },
    { href: "#planes", label: t("nav_prices") },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-lime transition-colors"
            >
              {link.label}
            </a>
          ))}
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
            onClick={() => {
              toggleLang();
              closeMobileMenu();
            }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs"
          >
            <span>{lang === "es" ? "EN" : "ES"}</span>
          </button>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="text-lime text-3xl"
          >
            {mobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden max-w-7xl mx-auto overflow-hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "mt-4 max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="glass rounded-2xl p-4 flex flex-col gap-2 border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-[0.18em] text-white/90 hover:bg-white/10 hover:text-lime transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/1stepfx.apk"
            onClick={closeMobileMenu}
            className="btn-official mt-2 px-4 py-4 rounded-xl text-center text-xs font-bold uppercase tracking-[0.18em]"
            download
          >
            {t("nav_download")}
          </a>
        </div>
      </div>
    </nav>
  );
}
