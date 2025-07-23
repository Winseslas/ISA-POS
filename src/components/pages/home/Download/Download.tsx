import { Download as DownloadIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Download = () => {
    const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('pages.indexPage.download.heading')}</h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
              <DownloadIcon className="h-5 w-5" />
              <span>{t('pages.indexPage.download.app_store_button')}</span>
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              {t('pages.indexPage.download.google_play_button')}
            </button>
          </div>
        </div>
      </section>
  )
}
