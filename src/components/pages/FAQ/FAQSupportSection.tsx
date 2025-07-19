import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { type FAQSupportSectionProps } from '../../../types/faq';

export const FAQSupportSection: React.FC<FAQSupportSectionProps> = ({ t }) => {
    const [isHoveringContact, setIsHoveringContact] = useState(false);
    const [isHoveringDemo, setIsHoveringDemo] = useState(false);

    return (
        <div className="mt-16 bg-green-600 rounded-2xl p-8 text-center text-white">
            <HelpCircle className="h-16 w-16 mx-auto mb-4 text-green-100" />
            <h3 className="text-2xl font-bold mb-4">
                {t('pages.faqPage.support_section.heading')}
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                {t('pages.faqPage.support_section.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
                    className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${isHoveringContact ? 'bg-green-700 text-white shadow-lg transform -translate-y-1' : 'bg-white text-green-600'}`}
                    onMouseEnter={() => setIsHoveringContact(true)}
                    onMouseLeave={() => setIsHoveringContact(false)}
                    onMouseDown={() => setIsHoveringContact(false)}
                    onMouseUp={() => setIsHoveringContact(true)}
                    onClick={() => window.open('https://isa-pos.com/contact', '_blank')}
                >
                    {t('pages.faqPage.support_section.contact_button')}
                </button>
                <button 
                    className={`border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${isHoveringDemo ? 'bg-white text-green-600 transform -translate-y-1' : 'border-white text-white'}`}
                    onMouseEnter={() => setIsHoveringDemo(true)}
                    onMouseLeave={() => setIsHoveringDemo(false)}
                    onMouseDown={() => setIsHoveringDemo(false)}
                    onMouseUp={() => setIsHoveringDemo(true)}
                    onClick={() => window.open('https://isa-pos.com/demo', '_blank')}
                >
                    {t('pages.faqPage.support_section.demo_button')}
                </button>
            </div>
        </div>
    );
};