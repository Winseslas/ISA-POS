import { useTranslation } from 'react-i18next';
import { Users, Building, ShoppingCart, Phone } from 'lucide-react';

export const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg text-center">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">{t('pages.indexPage.features.sales_management.title')}</h3>
            <p className="text-sm text-gray-600">{t('pages.indexPage.features.sales_management.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <Building className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">{t('pages.indexPage.features.business_analytics.title')}</h3>
            <p className="text-sm text-gray-600">{t('pages.indexPage.features.business_analytics.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <ShoppingCart className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">{t('pages.indexPage.features.point_of_sale.title')}</h3>
            <p className="text-sm text-gray-600">{t('pages.indexPage.features.point_of_sale.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <Phone className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">{t('pages.indexPage.features.mobile_support.title')}</h3>
            <p className="text-sm text-gray-600">{t('pages.indexPage.features.mobile_support.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};