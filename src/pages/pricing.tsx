import React, { useEffect } from 'react';
import { Header } from '../components/common/Header/Header';
import { Footer } from '../components/common/Footer/Footer';
import { useTranslation } from 'react-i18next';
import { usePricing } from '../hooks/usePricing';
import { PricingHero } from '../components/ui/pricing/PricingHero';
import { PricingCard } from '../components/ui/pricing/PricingCard';
import { PricingComparison } from '../components/ui/pricing/PricingComparison';
import { PricingModal } from '../components/ui/pricing/PricingModal';

const PricingPage: React.FC = () => {
  const { t } = useTranslation();
  const {
    plans,
    comparisonFeatures,
    selectedPlan,
    isModalOpen,
    openModal,
    closeModal
  } = usePricing();

  useEffect(() => {
    document.title = `ISA POS - ${t('pages.pricingPage.title', 'Tarification')}`;
  }, [t]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <PricingHero />

        {/* Pricing Cards */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan) => (
                <PricingCard
                  key={plan.id}
                  plan={plan}
                  onOpenModal={openModal}
                />
              ))}
            </div>
          </div>
        </section>

        <PricingComparison plans={plans} features={comparisonFeatures} />
      </main>

      {selectedPlan && (
        <PricingModal
          plan={selectedPlan}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}

      <Footer />
    </div>
  );
};

export default PricingPage;