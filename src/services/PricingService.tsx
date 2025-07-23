import type { ComparisonFeature, PricingPlan } from "../types/pricing.types";

export interface IPricingRepository {
  getPlans(): PricingPlan[];
  getPlanById(id: string): PricingPlan | null;
  getComparisonFeatures(): ComparisonFeature[];
}

export class PricingService  {
    private pricingRepository: IPricingRepository;

    constructor(pricingRepository: IPricingRepository) {
        this.pricingRepository = pricingRepository;
    }
  
    getAllPlans(): PricingPlan[] {
      return this.pricingRepository.getPlans();
    }
  
    getPlanById(id: string): PricingPlan | null {
      return this.pricingRepository.getPlanById(id);
    }
  
    getComparisonFeatures(): ComparisonFeature[] {
      return this.pricingRepository.getComparisonFeatures();
    }
  }