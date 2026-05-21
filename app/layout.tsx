import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "1StepFX | Señales de Trading IA & Dashboard — Tap-to-Trade MT5",
  description: "Recibe señales de trading generadas por IA con +80% de precisión. Dashboard de monitoreo, Chatbot experto y ejecución Tap-to-Trade directa a MetaTrader 5. Tus fondos nunca salen de tu bróker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} bg-dark text-white font-sans overflow-x-hidden min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
