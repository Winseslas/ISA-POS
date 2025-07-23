import React from 'react';
import { Check, X } from 'lucide-react';
import type { PricingPlan } from '../../../types/pricing.types';

interface PricingCardProps {
  plan: PricingPlan;
  onOpenModal: (plan: PricingPlan) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, onOpenModal }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden relative flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        plan.popular ? 'ring-4 ring-green-500 scale-105 z-20' : ''
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
          onClick={() => onOpenModal(plan)}
          className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
            plan.popular
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
        >
          Voir les détails
        </button>
      </div>
    </div>
  );
};