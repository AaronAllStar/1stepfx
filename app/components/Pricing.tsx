"use client";

import React, { useEffect, useRef } from "react";
import {
  Zap,
  MessageSquare,
  LayoutDashboard,
  MousePointer,
  Brain,
  CheckCircle,
  Users,
  PlusCircle,
  ArrowUpCircle,
  Plus,
  Clock,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Pricing() {
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
    <section id="planes" className="py-24 bg-dark relative px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up" ref={addToRefs}>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4">
            {t("pricing_title")}
          </h2>
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest">
            {t("pricing_warning")}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <div className="glass p-10 rounded-3xl fade-up flex flex-col" ref={addToRefs}>
            <div className="mb-8">
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2 tracking-widest">
                {t("plan_lite_name")}
              </h3>
              <p className="text-4xl font-bold">
                $29.99<span className="text-xs text-muted"> /mes</span>
              </p>
            </div>
            <ul className="space-y-4 mb-10 text-xs text-muted font-semibold uppercase tracking-widest flex-grow">
              <li className="flex items-center gap-3">
                <Zap className="text-lime w-4 h-4" />
                <span>{t("plan_lite_feature1")}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="text-lime w-4 h-4" />
                <span>{t("plan_lite_feature2")}</span>
              </li>
              <li className="flex items-center gap-3">
                <LayoutDashboard className="text-lime w-4 h-4" />
                <span>{t("plan_lite_feature3")}</span>
              </li>
              <li className="flex items-center gap-3">
                <MousePointer className="text-lime w-4 h-4" />
                <span>{t("plan_lite_feature4")}</span>
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl border border-lime/30 font-bold uppercase text-[10px] tracking-widest hover:bg-lime/10 transition-all">
              {t("plan_lite_cta")}
            </button>
          </div>

          <div
            className="bg-navy p-10 rounded-[40px] fade-up border-2 border-lime scale-105 flex flex-col relative"
            ref={addToRefs}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime text-navy px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              {t("plan_premium_tag")}
            </div>
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold uppercase text-lime mb-2 tracking-widest italic">
                {t("plan_premium_name")}
              </h3>
              <p className="text-5xl font-bold text-white">
                $79.99<span className="text-xs text-lime/60"> /mes</span>
              </p>
            </div>
            <ul className="space-y-5 mb-10 text-xs text-white/80 font-bold uppercase tracking-widest flex-grow">
              <li className="flex items-center gap-3">
                <Zap className="text-lime w-5 h-5" />
                <span>{t("plan_premium_feature1")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Brain className="text-lime w-5 h-5" />
                <span>{t("plan_premium_feature2")}</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-lime w-5 h-5" />
                <span>{t("plan_premium_feature3")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Users className="text-lime w-5 h-5" />
                <span>{t("plan_premium_feature4")}</span>
              </li>
            </ul>
            <button className="w-full py-5 rounded-2xl btn-official font-bold uppercase text-xs tracking-widest">
              {t("plan_premium_cta")}
            </button>
          </div>

          <div className="glass p-10 rounded-3xl fade-up flex flex-col border-lime/20" ref={addToRefs}>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-lime mb-2">
                <PlusCircle className="w-6 h-6" />
                <h3 className="font-display text-xl font-bold uppercase tracking-widest">
                  {t("extra_boost_name")}
                </h3>
              </div>
              <p className="text-4xl font-bold text-white">
                $19.99<span className="text-xs text-muted"> /recarga</span>
              </p>
            </div>
            <div className="bg-lime/5 p-4 rounded-2xl mb-8 border border-lime/10">
              <p className="text-[10px] font-bold text-lime uppercase tracking-widest mb-4">
                {t("extra_boost_benefits_title")}
              </p>
              <ul className="space-y-3 text-[9px] text-muted font-bold uppercase tracking-widest">
                <li className="flex items-center gap-2">
                  <ArrowUpCircle className="w-4 h-4" />
                  <span>{t("extra_boost_benefit1")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>{t("extra_boost_benefit2")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{t("extra_boost_benefit3")}</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-4 rounded-xl border border-lime/30 font-bold uppercase text-[10px] tracking-widest hover:bg-lime/10 transition-all mt-auto">
              {t("extra_boost_cta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
