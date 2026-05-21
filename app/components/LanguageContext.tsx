"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  es: {
    nav_dashboard: "Dashboard",
    nav_taptotrade: "Tap-to-Trade",
    nav_prices: "Precios",
    nav_download: "Descargar APK",
    hero_badge: "Precisión IA > 80% Garantizada",
    hero_title: "Tú tienes el dinero. <br> <span class='text-gradient'>Nosotros la IA.</span>",
    hero_subtitle: "1StepFX no toca tus fondos. Tú pagas la suscripción, nosotros te damos las señales. Ejecución vía <span class='text-lime font-bold'>Tap-to-Trade</span> directa a tu MT5.",
    hero_bullet1: "Fondos en tu Bróker",
    hero_bullet2: "Acceso Solo Lectura",
    hero_bullet3: "IA FXMS-25",
    hero_cta: "Ver Planes de Suscripción",
    mockup_active_signal: "Señal Activa",
    mockup_prob: "Prob: 92.4%",
    mockup_sending: "Enviando señal a MT5...",
    mockup_profit_label: "Profit Hoy",
    dashboard_balance: "Balance MT5",
    dashboard_total_profit: "Total Profit",
    dashboard_perf_label: "Rendimiento Últimas 24h",
    dashboard_title: "Monitorea tus <span class='text-lime bg-navy px-4 italic'>Ganancias</span> en Tiempo Real",
    dashboard_subtitle: "Nuestra app incluye un <strong>Dashboard de Monitoreo Pro</strong> que se conecta a tu MT5 en modo solo lectura. Visualiza tu crecimiento diario sin necesidad de abrir la terminal de trading.",
    dashboard_list1: "Historial de señales ejecutadas",
    dashboard_list2: "Cálculo automático de ROI",
    dashboard_list3: "Notificaciones de cierre de profit",
    pricing_title: "Planes de Suscripción",
    pricing_warning: "Nosotros no tocamos tu dinero, para eso es la suscripción",
    plan_lite_name: "Plan Lite",
    plan_lite_feature1: "20 Señales IA Diarias",
    plan_lite_feature2: "Chatbot IA Incorporado",
    plan_lite_feature3: "Dashboard de Ganancias",
    plan_lite_feature4: "Tap-to-Trade MT5",
    plan_lite_cta: "Suscribirse Lite",
    plan_premium_tag: "Recomendado",
    plan_premium_name: "Plan Premium",
    plan_premium_feature1: "50 Señales IA Diarias",
    plan_premium_feature2: "Chatbot Prioritario",
    plan_premium_feature3: "Precisión Optimizada",
    plan_premium_feature4: "Soporte 24/7",
    plan_premium_cta: "Suscribirse Premium",
    extra_boost_name: "Extra Boost",
    extra_boost_benefits_title: "Beneficios de la Recarga:",
    extra_boost_benefit1: "Límite Chatbot x4 más alto",
    extra_boost_benefit2: "+5 Señales IA Extra al día",
    extra_boost_benefit3: "Válido por 30 días",
    extra_boost_cta: "Comprar Créditos",
    legal_title: "Aviso Legal y Transparencia",
    legal_h1: "Responsabilidad de Ejecución",
    legal_p1: "1StepFX proporciona señales basadas en algoritmos de IA con una precisión histórica >80%. Sin embargo, el sistema <strong>NO se hace responsable</strong> si el usuario decide modificar manualmente los parámetros de la señal (lotaje, SL, TP) una vez enviada a MetaTrader 5.",
    legal_h2: "Propiedad de los Fondos",
    legal_p2: "<strong>El sistema no toca, gestiona, ni retira el dinero del usuario.</strong> Tus fondos permanecen siempre en tu bróker personal. La relación con 1StepFX es estrictamente de suscripción por software de análisis.",
    legal_h3: "Naturaleza de la IA",
    legal_p3: "Aunque la precisión es superior al 80%, el mercado financiero es volátil. Cada operación muestra su probabilidad individual; el usuario asume el riesgo inherente al trading. Resultados pasados no garantizan beneficios futuros.",
    legal_h4: "Modo Solo Lectura",
    legal_p4: "El Dashboard de ganancias utiliza credenciales de inversión (solo lectura). 1StepFX utiliza esta información únicamente para reportar estadísticas al usuario y optimizar el motor de IA.",
    footer_privacy: "Privacidad",
    footer_terms: "Términos",
    footer_cookies: "Cookies",
    footer_support: "Soporte",
    footer_disclaimer: "1StepFX es una marca registrada. El uso de este software implica la aceptación de los riesgos del trading manual y algorítmico. No somos asesores financieros bajo ninguna regulación."
  },
  en: {
    nav_dashboard: "Dashboard",
    nav_taptotrade: "Tap-to-Trade",
    nav_prices: "Pricing",
    nav_download: "Download APK",
    hero_badge: "AI Accuracy > 80% Guaranteed",
    hero_title: "You have the money. <br> <span class='text-gradient'>We have the AI.</span>",
    hero_subtitle: "1StepFX doesn't touch your funds. You pay the subscription, we give you the signals. Direct <span class='text-lime font-bold'>Tap-to-Trade</span> execution to your MT5.",
    hero_bullet1: "Funds in your Broker",
    hero_bullet2: "Read-Only Access",
    hero_bullet3: "FXMS-25 AI",
    hero_cta: "View Subscription Plans",
    mockup_active_signal: "Active Signal",
    mockup_prob: "Prob: 92.4%",
    mockup_sending: "Sending signal to MT5...",
    mockup_profit_label: "Profit Today",
    dashboard_balance: "MT5 Balance",
    dashboard_total_profit: "Total Profit",
    dashboard_perf_label: "24h Performance",
    dashboard_title: "Monitor your <span class='text-lime bg-navy px-4 italic'>Profits</span> in Real-Time",
    dashboard_subtitle: "Our app includes a <strong>Pro Monitoring Dashboard</strong> that connects to your MT5 in read-only mode. Visualize your daily growth without opening the trading terminal.",
    dashboard_list1: "Executed signals history",
    dashboard_list2: "Automatic ROI calculation",
    dashboard_list3: "Profit close notifications",
    pricing_title: "Subscription Plans",
    pricing_warning: "We don't touch your money, that's what the subscription is for",
    plan_lite_name: "Lite Plan",
    plan_lite_feature1: "20 AI Signals Daily",
    plan_lite_feature2: "Built-in AI Chatbot",
    plan_lite_feature3: "Profits Dashboard",
    plan_lite_feature4: "MT5 Tap-to-Trade",
    plan_lite_cta: "Subscribe Lite",
    plan_premium_tag: "Recommended",
    plan_premium_name: "Premium Plan",
    plan_premium_feature1: "50 AI Signals Daily",
    plan_premium_feature2: "Priority Chatbot",
    plan_premium_feature3: "Optimized Accuracy",
    plan_premium_feature4: "24/7 Support",
    plan_premium_cta: "Subscribe Premium",
    extra_boost_name: "Extra Boost",
    extra_boost_benefits_title: "Boost Benefits:",
    extra_boost_benefit1: "4x Higher Chatbot Limit",
    extra_boost_benefit2: "+5 Extra AI Signals daily",
    extra_boost_benefit3: "Valid for 30 days",
    extra_boost_cta: "Buy Credits",
    legal_title: "Legal Notice & Transparency",
    legal_h1: "Execution Responsibility",
    legal_p1: "1StepFX provides signals based on AI algorithms with >80% historical accuracy. However, the system is <strong>NOT responsible</strong> if the user manually modifies signal parameters (lot size, SL, TP) once sent to MetaTrader 5.",
    legal_h2: "Funds Ownership",
    legal_p2: "<strong>The system does not touch, manage, or withdraw the user's money.</strong> Your funds always remain in your personal broker. The relationship with 1StepFX is strictly software-as-a-service.",
    legal_h3: "Nature of AI",
    legal_p3: "Although accuracy is over 80%, financial markets are volatile. Each operation shows its individual probability; the user assumes inherent trading risk. Past results do not guarantee future profits.",
    legal_h4: "Read-Only Mode",
    legal_p4: "The profits dashboard uses investor credentials (read-only). 1StepFX uses this information solely to report statistics and optimize the AI engine.",
    footer_privacy: "Privacy",
    footer_terms: "Terms",
    footer_cookies: "Cookies",
    footer_support: "Support",
    footer_disclaimer: "1StepFX is a registered trademark. Use of this software implies acceptance of manual and algorithmic trading risks. We are not financial advisors under any regulation."
  }
};

type Lang = "es" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang;
    if (savedLang && (savedLang === "es" || savedLang === "en")) {
      setLang(savedLang);
      document.documentElement.lang = savedLang;
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === "es" ? "en" : "es";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
  };

  const t = (key: string) => {
    // @ts-ignore
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
