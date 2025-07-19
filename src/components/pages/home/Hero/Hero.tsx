import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-r from-green-50 to-orange-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('pages.indexPage.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('pages.indexPage.hero.description')}
            </p>
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
              {t('pages.indexPage.hero.button')}
            </button>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt={t('pages.indexPage.hero.image_alt')}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};