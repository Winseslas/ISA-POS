import React from 'react';
// eslint-disable-next-line no-shadow-restricted-names
import { Star, Crown, Zap, Infinity, Check, X } from 'lucide-react';
import type { PricingPlan, ComparisonFeature } from '../types/pricing.types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'lite',
    name: 'LITE',
    price: '99 €/mois',
    originalPrice: '129 €/mois',
    description: 'Parfait pour les petites entreprises qui débutent leur parcours numérique',
    icon: React.createElement(Star, { className: "h-8 w-8" }),
    features: [
      { name: 'Système POS de base', included: true },
      { name: 'Jusqu\'à 2 utilisateurs', included: true },
      { name: 'Rapports de base', included: true },
      { name: 'Support par email', included: true },
      { name: 'Gestion multi-emplacements', included: false },
      { name: 'API avancée', included: false }
    ],
    detailedFeatures: [
      {
        category: 'Fonctionnalités POS',
        items: [
          { name: 'Interface de caisse intuitive', included: true, details: 'Interface tactile optimisée' },
          { name: 'Gestion des produits', included: true, details: 'Jusqu\'à 1000 produits' },
          { name: 'Modes de paiement', included: true, details: 'Espèces, cartes, mobile money' },
          { name: 'Tickets de caisse', included: true, details: 'Impression thermique' },
          { name: 'Gestion des promotions', included: false },
          { name: 'Programme de fidélité', included: false }
        ]
      },
      {
        category: 'Gestion des stocks',
        items: [
          { name: 'Suivi des stocks en temps réel', included: true },
          { name: 'Alertes de stock bas', included: true },
          { name: 'Gestion des fournisseurs', included: false },
          { name: 'Commandes automatiques', included: false }
        ]
      },
      {
        category: 'Rapports et Analytics',
        items: [
          { name: 'Rapports de ventes quotidiens', included: true },
          { name: 'Statistiques de base', included: true },
          { name: 'Rapports personnalisés', included: false },
          { name: 'Analytics avancées', included: false }
        ]
      }
    ],
    benefits: [
      'Installation et formation incluses',
      'Mises à jour automatiques',
      'Sauvegarde quotidienne',
      'Support technique par email'
    ],
    limitations: [
      'Limité à 2 utilisateurs simultanés',
      'Pas de gestion multi-emplacements',
      'Rapports limités aux données de base'
    ]
  },
  {
    id: 'smart',
    name: 'SMART',
    price: '199 €/mois',
    originalPrice: '249 €/mois',
    description: 'Idéal pour les entreprises en croissance avec des besoins avancés',
    icon: React.createElement(Zap, { className: "h-8 w-8" }),
    popular: true,
    features: [
      { name: 'Système POS avancé', included: true },
      { name: 'Jusqu\'à 10 utilisateurs', included: true },
      { name: 'Analytics avancées', included: true },
      { name: 'Support prioritaire', included: true },
      { name: 'Gestion multi-emplacements', included: true },
      { name: 'API de base', included: true }
    ],
    detailedFeatures: [
      {
        category: 'Fonctionnalités POS',
        items: [
          { name: 'Interface de caisse avancée', included: true, details: 'Personnalisable et multi-écrans' },
          { name: 'Gestion illimitée des produits', included: true },
          { name: 'Tous modes de paiement', included: true, details: 'Incluant crypto et paiements différés' },
          { name: 'Tickets personnalisés', included: true },
          { name: 'Gestion des promotions', included: true, details: 'Promotions automatiques et manuelles' },
          { name: 'Programme de fidélité', included: true, details: 'Points et récompenses' }
        ]
      },
      {
        category: 'Gestion des stocks',
        items: [
          { name: 'Suivi multi-emplacements', included: true },
          { name: 'Transferts entre magasins', included: true },
          { name: 'Gestion des fournisseurs', included: true },
          { name: 'Commandes automatiques', included: true }
        ]
      },
      {
        category: 'CRM et Marketing',
        items: [
          { name: 'Base de données clients', included: true },
          { name: 'Campagnes SMS/Email', included: true },
          { name: 'Segmentation clientèle', included: true },
          { name: 'Historique d\'achats', included: true }
        ]
      }
    ],
    benefits: [
      'Formation approfondie incluse',
      'Support téléphonique prioritaire',
      'Intégration avec outils externes',
      'Rapports personnalisables',
      'Sauvegarde en temps réel'
    ]
  },
  {
    id: 'above-lite',
    name: 'AU-DELÀ DE LITE',
    price: '299 €/mois',
    originalPrice: '399 €/mois',
    description: 'Solution complète pour les entreprises établies',
    icon: React.createElement(Crown, { className: "h-8 w-8" }),
    features: [
      { name: 'Suite POS complète', included: true },
      { name: 'Utilisateurs illimités', included: true },
      { name: 'Support premium', included: true },
      { name: 'Intégrations avancées', included: true },
      { name: 'Rapports personnalisés', included: true },
      { name: 'API complète', included: true }
    ],
    detailedFeatures: [
      {
        category: 'Fonctionnalités Enterprise',
        items: [
          { name: 'Tableau de bord exécutif', included: true },
          { name: 'Gestion des rôles avancée', included: true },
          { name: 'Audit et traçabilité', included: true },
          { name: 'Intégration comptable', included: true },
          { name: 'Module RH intégré', included: true }
        ]
      },
      {
        category: 'Analytics et BI',
        items: [
          { name: 'Rapports en temps réel', included: true },
          { name: 'Prédictions de ventes', included: true },
          { name: 'Analyse de rentabilité', included: true },
          { name: 'KPI personnalisés', included: true }
        ]
      }
    ],
    benefits: [
      'Gestionnaire de compte dédié',
      'Formation sur site incluse',
      'Support 24/7 par téléphone',
      'Personnalisations incluses',
      'Intégrations illimitées'
    ]
  },
  {
    id: 'infinity',
    name: 'INFINITY',
    price: '499 €/mois',
    description: 'Solution d\'entreprise avec possibilités illimitées',
    icon: React.createElement(Infinity, { className: "h-8 w-8" }),
    features: [
      { name: 'Fonctionnalités d\'entreprise', included: true },
      { name: 'Intégration personnalisée', included: true },
      { name: 'Support prioritaire 24/7', included: true },
      { name: 'Développements sur mesure', included: true },
      { name: 'Tout illimité', included: true },
      { name: 'SLA garanti', included: true }
    ],
    detailedFeatures: [
      {
        category: 'Enterprise Premium',
        items: [
          { name: 'Architecture sur mesure', included: true },
          { name: 'Développements spécifiques', included: true },
          { name: 'Intégrations illimitées', included: true },
          { name: 'Support dédié 24/7', included: true },
          { name: 'SLA 99.9% garanti', included: true }
        ]
      }
    ],
    benefits: [
      'Équipe de développement dédiée',
      'Architecte solution personnel',
      'Support premium 24/7/365',
      'Développements illimités',
      'Garantie de performance'
    ]
  }
];

export const COMPARISON_FEATURES: ComparisonFeature[] = [
  {
    name: 'Nombre d\'utilisateurs',
    values: {
      lite: '2',
      smart: '10',
      'above-lite': 'Illimité',
      infinity: 'Illimité'
    }
  },
  {
    name: 'Produits en base',
    values: {
      lite: '1,000',
      smart: 'Illimité',
      'above-lite': 'Illimité',
      infinity: 'Illimité'
    }
  },
  {
    name: 'Emplacements',
    values: {
      lite: '1',
      smart: '5',
      'above-lite': 'Illimité',
      infinity: 'Illimité'
    }
  },
  {
    name: 'Support technique',
    values: {
      lite: 'Email',
      smart: 'Téléphone',
      'above-lite': '24/7',
      infinity: 'Dédié 24/7'
    }
  },
  {
    name: 'Rapports avancés',
    values: {
      lite: React.createElement(X, { className: "h-5 w-5 text-red-500 mx-auto" }),
      smart: React.createElement(Check, { className: "h-5 w-5 text-green-600 mx-auto" }),
      'above-lite': React.createElement(Check, { className: "h-5 w-5 text-green-600 mx-auto" }),
      infinity: React.createElement(Check, { className: "h-5 w-5 text-green-600 mx-auto" })
    }
  },
  {
    name: 'API disponible',
    values: {
      lite: React.createElement(X, { className: "h-5 w-5 text-red-500 mx-auto" }),
      smart: React.createElement(Check, { className: "h-5 w-5 text-green-600 mx-auto" }),
      'above-lite': React.createElement(Check, { className: "h-5 w-5 text-green-600 mx-auto" }),
      infinity: React.createElement(Check, { className: "h-5 w-5 text-green-600 mx-auto" })
    }
  },
  {
    name: 'Intégrations',
    values: {
      lite: 'Basiques',
      smart: 'Avancées',
      'above-lite': 'Complètes',
      infinity: 'Sur mesure'
    }
  },
  {
    name: 'Formation incluse',
    values: {
      lite: React.createElement(Check, { className: "h-5 w-5 text-green-600 mx-auto" }),
      smart: React.createElement(Check, { className: "h-5 w-5 text-green-600 mx-auto" }),
      'above-lite': React.createElement(Check, { className: "h-5 w-5 text-green-600 mx-auto" }),
      infinity: React.createElement(Check, { className: "h-5 w-5 text-green-600 mx-auto" })
    }
  }
];