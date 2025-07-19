import { TestimonialSlider } from './TestimonialSlider';
import { useTranslation } from "react-i18next";

export const Testimonials = () => {
    const { t } = useTranslation();
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('pages.indexPage.testimonials.heading')}</h2>
                    <p className="text-xl text-gray-600">
                        {t('pages.indexPage.testimonials.description')}
                    </p>
                </div>
                <TestimonialSlider />
            </div>
        </section>
    )
}