import { Footer } from "../components/common/Footer/Footer";
import { Header } from "../components/common/Header/Header";
import { Hero } from "../components/sections/home/Hero/Hero";
import { Features } from "../components/sections/home/Features/Features";
import { Navigation } from "../components/sections/home/Navigation";
import { Services } from "../components/sections/home/Services/Services";
import { CTA } from "../components/sections/home/CTA/CTA";
import { Pricing } from "../components/sections/home/Pricing/Pricing";
import { Download } from "../components/sections/home/Download/Download";
import { AboutISA } from "../components/sections/home/About/AboutISA";
import { Testimonials } from "../components/sections/home/Testimonials/Testimonials";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function IndexPage() {

  const { t } = useTranslation();
  useEffect(() => {
    document.title = `ISA POS - ${t('components.header.home', 'Home')}`;
  }, [t]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Features Grid */}
      <Features />

      {/* Navigation Buttons */}
      <Navigation />

      {/* Services */}
      <Services />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CTA />

      {/* Pricing Section */}
      <Pricing />

      {/* Download Section */}
      <Download />

      {/* About ISA Section */}
      <AboutISA />

      {/* Footer */}
      <Footer />
    </div>
  )
}