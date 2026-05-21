"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";

export default function Legal() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#030a14] px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl font-bold uppercase mb-10 text-center tracking-widest">
          {t("legal_title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h4 className="text-[10px] font-bold uppercase text-lime mb-2 tracking-widest italic">
                {t("legal_h1")}
              </h4>
              <p
                className="text-[11px] text-muted leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t("legal_p1") }}
              />
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase text-lime mb-2 tracking-widest italic">
                {t("legal_h2")}
              </h4>
              <p
                className="text-[11px] text-muted leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t("legal_p2") }}
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-[10px] font-bold uppercase text-lime mb-2 tracking-widest italic">
                {t("legal_h3")}
              </h4>
              <p
                className="text-[11px] text-muted leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t("legal_p3") }}
              />
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase text-lime mb-2 tracking-widest italic">
                {t("legal_h4")}
              </h4>
              <p
                className="text-[11px] text-muted leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t("legal_p4") }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
