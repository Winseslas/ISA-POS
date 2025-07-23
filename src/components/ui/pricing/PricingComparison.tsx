import React from 'react';
import type { PricingPlan, ComparisonFeature } from '../../../types/pricing.types';

interface PricingComparisonProps {
  plans: PricingPlan[];
  features: ComparisonFeature[];
}

export const PricingComparison: React.FC<PricingComparisonProps> = ({ plans, features }) => {
  return (
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
                {features.map((feature) => (
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
  );
};
