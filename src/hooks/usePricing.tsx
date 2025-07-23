import { useEffect, useState } from "react";
import type { PricingPlan } from "../types/pricing.types";
import { PricingService } from "../services/PricingService";
import { PricingRepository } from "../repositories/PricingRepository";


export const usePricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pricingUseCases = new PricingService(new PricingRepository());

  const plans = pricingUseCases.getAllPlans();
  const comparisonFeatures = pricingUseCases.getComparisonFeatures();

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

  // Cleanup effect
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return {
    plans,
    comparisonFeatures,
    selectedPlan,
    isModalOpen,
    openModal,
    closeModal
  };
};
