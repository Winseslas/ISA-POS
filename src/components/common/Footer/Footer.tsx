import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear: number = new Date().getFullYear();
  const displayYear: string = currentYear > 2020 ? `- ${currentYear}` : '';

  
  const handleLanguageChange = (language: string) => {
    // La logique de changement de langue est déjà gérée par le contexte
    console.log(`Language changed to: ${language}`);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-green-600">I</span>
              <span className="text-orange-500">S</span>
              <span className="text-green-600">A</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('components.footer.description', 'Innovative solutions for modern businesses. Transform your operations with our comprehensive POS and management systems.')}
            </p>
            <div className="mt-4">
              <LanguageSelector 
                onLanguageChange={handleLanguageChange}
                formClassName="flex items-center space-x-2"
                labelClassName="text-sm text-gray-400"
                selectClassName="relative"
              />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('components.footer.services.title', 'Services')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{t('components.footer.services.restaurant_pos', 'Restaurant POS')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('components.footer.services.beauty_salon', 'Beauty Salon')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('components.footer.services.retail_management', 'Retail Management')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('components.footer.services.entertainment', 'Entertainment')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('components.footer.support.title', 'Support')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{t('components.footer.support.help_center', 'Help Center')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('components.footer.support.documentation', 'Documentation')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('components.footer.support.training', 'Training')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('components.footer.support.contact_us', 'Contact Us')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('components.footer.contact.title', 'Contact')}</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <span>contact@isa.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5" />
                <span>123 Business Ave<br />Suite 100<br />City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            {t('components.footer.copyright', { displayYear: displayYear })}
          </p>
        </div>
      </div>
    </footer>
  );
};
