import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import Pricing from "./components/Pricing";
import Legal from "./components/Legal";
import Footer from "./components/Footer";
import { LanguageProvider } from "./components/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <Dashboard />
      <Pricing />
      <Legal />
      <Footer />
    </LanguageProvider>
  );
}
