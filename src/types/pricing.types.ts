export interface PlanFeature {
    name: string;
    included: boolean;
    details?: string;
  }
  
  export interface DetailedFeatureCategory {
    category: string;
    items: PlanFeature[];
  }
  
  export interface PricingPlan {
    id: string;
    name: string;
    price: string;
    originalPrice?: string;
    description: string;
    icon: React.ReactNode;
    popular?: boolean;
    features: PlanFeature[];
    detailedFeatures: DetailedFeatureCategory[];
    benefits: string[];
    limitations?: string[];
  }
  
  export interface ComparisonFeature {
    name: string;
    values: Record<string, string | React.ReactNode>;
  }