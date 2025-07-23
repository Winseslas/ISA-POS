import { useTranslation } from "react-i18next";

export const AboutISA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('pages.indexPage.aboutISA.heading')}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('pages.indexPage.aboutISA.description_1')}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('pages.indexPage.aboutISA.description_2')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('pages.indexPage.aboutISA.description_3')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt={t('pages.indexPage.aboutISA.image_alt_1')}
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt={t('pages.indexPage.aboutISA.image_alt_2')}
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt={t('pages.indexPage.aboutISA.image_alt_3')}
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt={t('pages.indexPage.aboutISA.image_alt_4')}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
