"use client";

import React, { useEffect, useRef } from "react";
import { ShieldCheck, Eye, Brain } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden px-6 md:px-12">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-lime/5 blur-[120px] rounded-full"></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="fade-up" ref={addToRefs}>
          <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-lime rounded-full"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-lime">
              {t("hero_badge")}
            </span>
          </div>
          <h1
            className="font-display text-5xl md:text-7xl font-bold leading-tight uppercase mb-6 tracking-tight"
            dangerouslySetInnerHTML={{ __html: t("hero_title") }}
          />
          <p
            className="text-muted text-lg max-w-lg mb-10 font-light leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t("hero_subtitle") }}
          />
          <div className="flex flex-wrap gap-4 border-l-2 border-lime/30 pl-6 mb-10">
            <div className="text-xs uppercase tracking-widest text-muted flex items-center gap-2">
              <ShieldCheck className="text-lime w-4 h-4" />
              <span>{t("hero_bullet1")}</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-muted flex items-center gap-2">
              <Eye className="text-lime w-4 h-4" />
              <span>{t("hero_bullet2")}</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-muted flex items-center gap-2">
              <Brain className="text-lime w-4 h-4" />
              <span>{t("hero_bullet3")}</span>
            </div>
          </div>
          <a
            href="#planes"
            className="btn-official px-12 py-5 rounded-2xl font-bold text-center inline-block"
          >
            {t("hero_cta")}
          </a>
        </div>

        <div className="relative fade-up flex justify-center" ref={addToRefs}>
          <div className="phone-mockup w-[280px] h-[580px] p-4 relative overflow-hidden">
            <div className="h-full w-full flex flex-col bg-dark rounded-[32px] p-5">
              <div className="flex justify-between items-center mb-10 text-[9px] font-bold text-muted uppercase">
                <span>{t("mockup_active_signal")}</span>
                <span className="text-lime">{t("mockup_prob")}</span>
              </div>
              <div className="bg-navy/30 rounded-3xl p-5 border border-lime/10 mb-6 text-center">
                <h3 className="font-display text-xl text-white font-bold mb-1">
                  EUR / USD
                </h3>
                <p className="font-display text-3xl text-lime font-bold tracking-wider">
                  1.09240
                </p>
                <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-lime" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div className="mt-auto space-y-3 pb-4">
                <button className="w-full py-5 rounded-2xl bg-lime text-navy font-bold text-xs uppercase tracking-widest">
                  Touch
                </button>
                <button className="w-full py-5 rounded-2xl border border-lime/30 text-lime font-bold text-xs uppercase tracking-widest italic">
                  No Touch
                </button>
                <p className="text-[8px] text-center text-muted uppercase tracking-[0.2em]">
                  {t("mockup_sending")}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -right-8 top-1/3 glass p-4 rounded-2xl z-20 border-lime/40 animate-pulse">
            <p className="text-[9px] font-bold text-muted uppercase mb-1">
              {t("mockup_profit_label")}
            </p>
            <p className="text-xl font-display font-bold text-lime">+$284.50</p>
          </div>
        </div>
      </div>
    </section>
  );
}
