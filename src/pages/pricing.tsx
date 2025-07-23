import React, { useState, useEffect } from 'react';
import { Header } from '../components/common/Header/Header';
import { Footer } from '../components/common/Footer/Footer';
import { Check, X, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PRICING_PLANS, COMPARISON_FEATURES } from '../data/pricing.data';

interface PlanFeature {
  name: string;
  included: boolean;
  details?: string;
}

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  icon: React.ReactNode;
  popular?: boolean;
  features: PlanFeature[];
  detailedFeatures: {
    category: string;
    items: PlanFeature[];
  }[];
  benefits: string[];
  limitations?: string[];
}

const PricingPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = `ISA POS - ${t('pages.pricingPage.title', 'Tarification')}`;
  }, [t]);

  const plans: PricingPlan[] = PRICING_PLANS;

  const openModal = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-4xl font-bold mb-6">
              <span className="text-green-600">I</span>
              <span className="text-orange-500">S</span>
              <span className="text-green-600">A</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Choisissez votre forfait ISA
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Des solutions adaptées à chaque taille d'entreprise. Profitez d'un mois gratuit lors de votre abonnement annuel.
            </p>
            <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full inline-block font-semibold">
              🎉 Offre spéciale : 1 mois gratuit pour tout abonnement annuel !
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden relative flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${plan.popular ? 'ring-4 ring-green-500 scale-105 z-20' : ''
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 mt-10">
                      <div className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ POPULAIRE
                      </div>
                    </div>
                  )}

                  <div className={`p-8 ${plan.popular ? 'mt-10' : ''}`}>
                    {/* Plan Header */}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="mb-2">
                        <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                        {plan.originalPrice && (
                          <span className="text-lg text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">{plan.description}</p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                          )}
                          <span className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-500'}`}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => openModal(plan)}
                      className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${plan.popular
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                        }`}
                    >
                      Voir les détails
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comparaison détaillée des fonctionnalités
              </h2>
              <p className="text-xl text-gray-600">
                Trouvez le plan qui correspond parfaitement à vos besoins
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Fonctionnalités</th>
                      {plans.map((plan) => (
                        <th key={plan.id} className="text-center py-4 px-6 font-semibold text-gray-900">
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_FEATURES.map((feature) => (
                      <tr key={feature.name} className="border-b border-gray-200 last:border-b-0">
                        <td className="py-4 px-6 font-medium text-gray-800">{feature.name}</td>
                        {plans.map((plan) => (
                          <td key={`${plan.id}-${feature.name}`} className="py-4 px-6 text-center text-gray-600">
                            {feature.values[plan.id as keyof typeof feature.values]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal for Plan Details */}
      {isModalOpen && selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 text-green-600">
                  {selectedPlan.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Plan {selectedPlan.name}</h2>
                  <p className="text-green-600 font-semibold">{selectedPlan.price}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              {/* Plan Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600">{selectedPlan.description}</p>
              </div>

              {/* Detailed Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fonctionnalités détaillées</h3>
                <div className="space-y-6">
                  {selectedPlan.detailedFeatures.map((category, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">{category.category}</h4>
                      <div className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start">
                            {item.included ? (
                              <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            ) : (
                              <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                            )}
                            <div>
                              <span className={`${item.included ? 'text-gray-900' : 'text-gray-500'}`}>
                                {item.name}
                              </span>
                              {item.details && (
                                <p className="text-sm text-gray-500 mt-1">{item.details}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Avantages inclus</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedPlan.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Limitations */}
              {selectedPlan.limitations && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitations</h3>
                  <div className="space-y-2">
                    {selectedPlan.limitations.map((limitation, index) => (
                      <div key={index} className="flex items-center">
                        <X className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{limitation}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button className="flex-1 bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Choisir ce plan
                </button>
                <button className="flex-1 border-2 border-green-600 text-green-600 py-4 px-6 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Essai gratuit 14 jours
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PricingPage;