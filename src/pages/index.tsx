import { Footer } from "../components/common/Footer/Footer";
import { Header } from "../components/common/Header/Header";
import { Hero } from "../components/pages/home/Hero/Hero";
import { Features } from "../components/pages/home/Features/Features";
import { Navigation } from "../components/pages/home/Navigation";
import { Services } from "../components/pages/home/Services/Services";
import { CTA } from "../components/pages/home/CTA/CTA";
import { Pricing } from "../components/pages/home/Pricing/Pricing";
import { Download } from "../components/pages/home/Download/Download";
import { AboutISA } from "../components/pages/home/About/AboutISA";
import { Testimonials } from "../components/pages/home/Testimonials/Testimonials"
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