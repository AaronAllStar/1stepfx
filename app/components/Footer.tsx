"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark py-12 px-6 md:px-12 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-dark.png"
              alt="1StepFX Logo"
              width={80}
              height={80}
              className="rounded-lg object-contain"
            />
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-muted">
            <a href="#" className="hover:text-lime">
              {t("footer_privacy")}
            </a>
            <a href="#" className="hover:text-lime">
              {t("footer_terms")}
            </a>
            <a href="#" className="hover:text-lime">
              {t("footer_cookies")}
            </a>
            <a href="#" className="hover:text-lime">
              {t("footer_support")}
            </a>
          </div>
        </div>
        <p className="text-[9px] text-muted/40 uppercase tracking-[0.2em] max-w-2xl mx-auto">
          {t("footer_disclaimer")}
        </p>
      </div>
    </footer>
  );
}
