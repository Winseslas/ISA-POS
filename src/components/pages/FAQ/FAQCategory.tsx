import React from 'react';
import { FAQItem } from './FAQItem';
import type { FAQItemData } from '../../../pages/faq';

export interface FAQCategoryProps {
  category: string;
  items: FAQItemData[];
  t: (key: string) => string;
  openItemId: string | null;
  toggleItem: (id: string) => void;
}

export const FAQCategory: React.FC<FAQCategoryProps> = ({ category, items, t, openItemId, toggleItem }) => {
  return (
    <div className="mb-10">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{t(`pages.faqPage.categories.${category}`)}</h2>
        <div className="flex-1 h-1 bg-green-600 ml-6 rounded"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map(item => (
          <FAQItem
            key={`${category}-${item.id}`}
            item={item}
            isOpen={openItemId === `${category}-${item.id}`}
            toggleItem={() => toggleItem(`${category}-${item.id}`)}
          />
        ))}
      </div>
    </div>
  );
};
