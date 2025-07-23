import React from 'react';
import { Check, X, Star } from 'lucide-react';
import type { PricingPlan } from '../../../types/pricing.types';

interface PricingModalProps {
  plan: PricingPlan;
  isOpen: boolean;
  onClose: () => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({ plan, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 text-green-600">
              {plan.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Plan {plan.name}</h2>
              <p className="text-green-600 font-semibold">{plan.price}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {/* Plan Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-600">{plan.description}</p>
          </div>

          {/* Detailed Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fonctionnalités détaillées</h3>
            <div className="space-y-6">
              {plan.detailedFeatures.map((category, index) => (
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
              {plan.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Limitations */}
          {plan.limitations && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitations</h3>
              <div className="space-y-2">
                {plan.limitations.map((limitation, index) => (
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
  );
};
