"use client";

import React, { useEffect, useRef } from "react";
import { Wallet, TrendingUp, LineChart, CheckCircle } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Dashboard() {
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
    <section id="dashboard" className="py-24 bg-lightSection text-navy px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 fade-up" ref={addToRefs}>
            <div className="grid grid-cols-2 gap-4">
              <div className="dashboard-card p-6 rounded-3xl">
                <Wallet className="text-3xl w-8 h-8 mb-4" />
                <p className="text-[10px] font-bold uppercase text-navy/40">
                  {t("dashboard_balance")}
                </p>
                <p className="text-2xl font-display font-bold">$12,450.00</p>
              </div>
              <div className="dashboard-card p-6 rounded-3xl">
                <TrendingUp className="text-3xl w-8 h-8 text-green-600 mb-4" />
                <p className="text-[10px] font-bold uppercase text-navy/40">
                  {t("dashboard_total_profit")}
                </p>
                <p className="text-2xl font-display font-bold text-green-600">
                  +$3,210.15
                </p>
              </div>
              <div className="col-span-2 dashboard-card p-6 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <LineChart className="text-6xl w-16 h-16" />
                </div>
                <p className="text-[10px] font-bold uppercase text-navy/40 mb-4">
                  {t("dashboard_perf_label")}
                </p>
                <div className="flex gap-2 items-end h-20">
                  <div className="w-full bg-navy/10 h-1/2 rounded-t-lg"></div>
                  <div className="w-full bg-navy/10 h-3/4 rounded-t-lg"></div>
                  <div className="w-full bg-lime h-full rounded-t-lg"></div>
                  <div className="w-full bg-navy/10 h-2/3 rounded-t-lg"></div>
                  <div className="w-full bg-navy/10 h-1/2 rounded-t-lg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 fade-up" ref={addToRefs}>
            <h2
              className="font-display text-4xl md:text-5xl font-bold uppercase mb-8 leading-tight text-navy"
              dangerouslySetInnerHTML={{ __html: t("dashboard_title") }}
            />
            <p
              className="text-navy/70 mb-8 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t("dashboard_subtitle") }}
            />
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-bold">
                <CheckCircle className="text-lime w-5 h-5" />
                <span>{t("dashboard_list1")}</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-bold">
                <CheckCircle className="text-lime w-5 h-5" />
                <span>{t("dashboard_list2")}</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-bold">
                <CheckCircle className="text-lime w-5 h-5" />
                <span>{t("dashboard_list3")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
