import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';
import { Header } from '../components/common/Header/Header';
import { Footer } from '../components/common/Footer/Footer';
import { useTranslation } from 'react-i18next';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `ISA POS - 404 - ${t('pages.404.title', 'Page non trouvée')}`;
  }, [t]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50 min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            {/* Logo ISA */}
            <div className="mb-8">
              <div className="text-6xl font-bold mb-4">
                <span className="text-green-600">I</span>
                <span className="text-orange-500">S</span>
                <span className="text-green-600">A</span>
              </div>
            </div>

            {/* 404 Animation */}
            <div className="mb-8">
              <div className="text-9xl font-bold text-gray-200 mb-4 animate-pulse">
                404
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Personne perdue"
                  className="w-64 h-64 object-cover rounded-full mx-auto shadow-2xl border-8 border-white"
                />
                <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full p-3 animate-bounce">
                  <HelpCircle className="h-8 w-8" />
                </div>
              </div>
            </div>

            {/* Titre et description */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {t('pages.404.heading', 'Oups ! Page introuvable')}
              </h1>
              <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
                {t('pages.404.description', 'La page que vous recherchez semble avoir disparu dans le cyberespace. Ne vous inquiétez pas, même nos meilleurs développeurs se perdent parfois !')}
              </p>
              <p className="text-lg text-green-600 font-semibold">
                {t('pages.404.suggestion', 'Retournons ensemble vers un territoire familier.')}
              </p>
            </div>

            {/* Boutons d\'action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Home className="h-5 w-5" />
                <span>{t('pages.404.home_button', 'Retour à l\'accueil')}</span>
              </Link>

              <button
                onClick={() => window.history.back()}
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>{t('pages.404.back_button', 'Page précédente')}</span>
              </button>
            </div>

            {/* Liens utiles */}
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                <Search className="h-6 w-6 mr-2 text-green-600" />
                {t('pages.404.helpful_links.title', 'Liens utiles')}
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  to="/"
                  className="p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-300 group"
                >
                  <div className="text-green-600 font-semibold group-hover:text-green-700">
                    {t('pages.404.helpful_links.home', 'Accueil')}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t('pages.404.helpful_links.home_desc', 'Découvrez nos solutions ISA')}
                  </div>
                </Link>

                <Link
                  to="/faq"
                  className="p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-300 group"
                >
                  <div className="text-green-600 font-semibold group-hover:text-green-700">
                    {t('pages.404.helpful_links.faq', 'FAQ')}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t('pages.404.helpful_links.faq_desc', 'Questions fréquentes')}
                  </div>
                </Link>

                <Link
                  to="/contact"
                  className="p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-300 group"
                >
                  <div className="text-green-600 font-semibold group-hover:text-green-700">
                    {t('pages.404.helpful_links.contact', 'Contact')}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t('pages.404.helpful_links.contact_desc', 'Contactez notre équipe')}
                  </div>
                </Link>

                <div className="p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 group cursor-pointer">
                  <div className="text-orange-500 font-semibold group-hover:text-orange-700">
                    {t('pages.404.helpful_links.demo', 'Démo gratuite')}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t('pages.404.helpful_links.demo_desc', 'Testez ISA gratuitement')}
                  </div>
                </div>
              </div>
            </div>

            {/* Message d'encouragement */}
            <div className="mt-12 p-6 bg-green-100 rounded-xl">
              <p className="text-green-800 font-medium">
                💡 {t('pages.404.tip', 'Astuce : Utilisez notre menu de navigation pour explorer toutes nos fonctionnalités ISA !')}
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;