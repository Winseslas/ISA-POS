import type { IPricingRepository } from '../services/PricingService';
import type { PricingPlan, ComparisonFeature } from '../types/pricing.types';
import { PRICING_PLANS, COMPARISON_FEATURES } from '../data/pricing.data';

export class PricingRepository implements IPricingRepository {
  getPlans(): PricingPlan[] {
    return PRICING_PLANS;
  }

  getPlanById(id: string): PricingPlan | null {
    return PRICING_PLANS.find(plan => plan.id === id) || null;
  }

  getComparisonFeatures(): ComparisonFeature[] {
    return COMPARISON_FEATURES;
  }
}
