import React from 'react';
import { useTranslation } from 'react-i18next';

export const PricingHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-4xl font-bold mb-6">
          <span className="text-green-600">I</span>
          <span className="text-orange-500">S</span>
          <span className="text-green-600">A</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          {t('pricing.hero.title', 'Choose your ISA package')}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Des solutions adaptées à chaque taille d'entreprise. Profitez d'un mois gratuit lors de votre abonnement annuel.
        </p>
        <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full inline-block font-semibold">
          🎉 Offre spéciale : 1 mois gratuit pour tout abonnement annuel !
        </div>
      </div>
    </section>
  );
};