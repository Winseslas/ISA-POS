import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Pricing = () => {
    const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-3xl font-bold mb-4">
              <span className="text-green-600">I</span>
              <span className="text-orange-500">S</span>
              <span className="text-green-600">A</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('pages.indexPage.pricing.title')}</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">L</span>
              </div>
              <h3 className="text-xl font-bold mb-2">LITE</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">{t('pages.indexPage.pricing.lite_plan.price')}</p>
              <p className="text-gray-600 mb-6">{t('pages.indexPage.pricing.lite_plan.description')}</p>
              <ul className="space-y-2 mb-8 text-left">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">{t('pages.indexPage.pricing.lite_plan.features.0')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">{t('pages.indexPage.pricing.lite_plan.features.1')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">{t('pages.indexPage.pricing.lite_plan.features.2')}</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                {t('pages.indexPage.pricing.lite_plan.button')}
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">S</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('pages.indexPage.pricing.smart_plan.name')}</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">{t('pages.indexPage.pricing.smart_plan.price')}</p>
              <p className="text-gray-600 mb-6">{t('pages.indexPage.pricing.smart_plan.description')}</p>
              <ul className="space-y-2 mb-8 text-left">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">{t('pages.indexPage.pricing.smart_plan.features.0')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">{t('pages.indexPage.pricing.smart_plan.features.1')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">{t('pages.indexPage.pricing.smart_plan.features.2')}</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                {t('pages.indexPage.pricing.smart_plan.button')}
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">A</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('pages.indexPage.pricing.above_lite_plan.name')}</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">{t('pages.indexPage.pricing.above_lite_plan.price')}</p>
              <p className="text-gray-600 mb-6">{t('pages.indexPage.pricing.above_lite_plan.description')}</p>
              <ul className="space-y-2 mb-8 text-left">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">{t('pages.indexPage.pricing.above_lite_plan.features.0')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">{t('pages.indexPage.pricing.above_lite_plan.features.1')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">{t('pages.indexPage.pricing.above_lite_plan.features.2')}</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              {t('pages.indexPage.pricing.above_lite_plan.button')}
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">∞</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('pages.indexPage.pricing.infinity_plan.name')}</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">{t('pages.indexPage.pricing.infinity_plan.price')}</p>
              <p className="text-gray-600 mb-6">{t('pages.indexPage.pricing.infinity_plan.description')}</p>
              <ul className="space-y-2 mb-8 text-left">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">{t('pages.indexPage.pricing.infinity_plan.features.0')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">{t('pages.indexPage.pricing.infinity_plan.features.1')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">{t('pages.indexPage.pricing.infinity_plan.features.2')}</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                {t('pages.indexPage.pricing.infinity_plan.button')}
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}
