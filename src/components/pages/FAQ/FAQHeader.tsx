import type { FAQHeaderProps } from '../../../types/faq.types';

export const FAQHeader: React.FC<FAQHeaderProps> = ({ t }) => {
    return (
        <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
                <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt={t('pages.faqPage.image_alt')}
                    className="w-32 h-32 object-cover rounded-lg shadow-lg mr-8"
                />
                <div className="text-left">
                    <div className="text-3xl font-bold mb-2">
                        <span className="text-green-600">ISA</span>{t('pages.faqPage.description_1')}
                    </div>
                    <p className="text-gray-600 max-w-2xl">
                        {t('pages.faqPage.description_2')}
                    </p>
                    <p className="text-gray-600 max-w-2xl mt-2">
                        <span className="text-green-600 font-semibold">ISA</span> {t('pages.faqPage.description_3')}
                    </p>
                </div>
            </div>
            <h1 className="text-5xl font-bold text-green-600 mb-4">{t('pages.faqPage.title')}</h1>
        </div>
    );
};