import React, { useMemo, useState, useEffect } from 'react';
import { HelpCircle, Smartphone, Laptop, CreditCard, Download, Users, Settings, Zap } from 'lucide-react';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { useTranslation } from 'react-i18next';
import { FAQSupportSection } from '../components/sections/FAQ/FAQSupportSection';
import { FAQHeader } from '../components/sections/FAQ/FAQHeader';
import { FAQCategory } from '../components/sections/FAQ/FAQCategory';

export interface FAQItemData {
    id: number;
    category: string;
    question: string;
    answer: string;
    icon: React.ReactNode;
}

export interface FAQTranslation {
    title: string;
    faq_items: Array<{
        id: number;
        category: string;
        question: string;
        answer: string;
    }>;
    support_section: {
        title: string;
        description: string;
        button_text: string;
    };
}

const iconComponents: { [key: number]: React.ReactNode } = {
    1: <HelpCircle className="h-5 w-5" />,
    2: <Smartphone className="h-5 w-5" />,
    3: <Laptop className="h-5 w-5" />,
    4: <Settings className="h-5 w-5" />,
    5: <Download className="h-5 w-5" />,
    6: <Zap className="h-5 w-5" />,
    7: <Users className="h-5 w-5" />,
    8: <CreditCard className="h-5 w-5" />,
};

export const FAQPage: React.FC = () => {
    const { t } = useTranslation();
    useEffect(() => {
        document.title = `ISA POS - ${t('pages.faqPage.title')}`;
    }, [t]);
    const faqTranslation = t('pages.faqPage', { returnObjects: true }) as unknown as FAQTranslation;

    const faqData: FAQItemData[] = useMemo(() => {
        return faqTranslation.faq_items.map((item) => ({
            ...item,
            icon: iconComponents[item.id] || <HelpCircle className="h-5 w-5" />,
        }));
    }, [faqTranslation.faq_items]);

    const categories = useMemo(() => Array.from(new Set(faqData.map(item => item.category))), [faqData]);

    const [openItemId, setOpenItemId] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenItemId(prevId => (prevId === id ? null : id));
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FAQHeader t={t} />
                        {categories.map(category => (
                            <FAQCategory
                                key={category}
                                category={category}
                                items={faqData.filter(item => item.category === category)}
                                t={t}
                                openItemId={openItemId}
                                toggleItem={toggleItem}
                            />
                        ))}
                        <FAQSupportSection t={t} />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};