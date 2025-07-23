import { Minus, Plus } from 'lucide-react';
import React from 'react';
import type { FAQItemData } from '../../../pages/faq';

interface FAQItemProps {
    item: FAQItemData;
    isOpen: boolean;
    toggleItem: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, toggleItem }) => {

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
            <button
                onClick={toggleItem}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-lg transition-colors flex-1"
                aria-expanded={isOpen}
                aria-controls={`faq-${item.id}`}
            >
                <div className="flex items-center space-x-4">
                    <div className="text-green-600">
                        {item.icon}
                    </div>
                    <span className="font-semibold text-gray-900 text-lg">
                        {item.question}
                    </span>
                </div>
                <div className="text-green-600 ml-4 flex-shrink-0">
                    {isOpen ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                </div>
            </button>
            <div 
                id={`faq-${item.id}`}
                className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
                aria-hidden={!isOpen}
            >
                <div className="px-6 pb-6 pt-0">
                    <div className="border-l-4 border-green-600 pl-4">
                        <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
