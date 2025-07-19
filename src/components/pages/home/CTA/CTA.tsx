import { useTranslation } from 'react-i18next';

export const CTA = () =>  {
    const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt={t('pages.indexPage.cta.alt_image')} 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
            />
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('pages.indexPage.cta.heading')}
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              {t('pages.indexPage.cta.description')}
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-white hover:ring-opacity-50">
              {t('pages.indexPage.cta.button')}
            </button>
          </div>
        </div>
      </section>
  )
}
