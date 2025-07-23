import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const location = useLocation();
  const navItems = [
    { name: t('components.header.home', 'Home'), href: '/' },
    { name: t('components.header.faq', 'FAQ'), href: '/faq' },
    { name: t('components.header.pricing', 'Pricing'), href: '/pricing' },
    { name: t('components.header.contact', 'Contact'), href: '/contact' },
  ];

  const handleLanguageChange = (language: string) => {
    console.log(`Language changed to: ${language}`);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer" title={t('siteTitle', 'ISA POS')}>
            <div className="text-2xl font-bold">
              <span className="text-green-600">I</span>
              <span className="text-orange-500">S</span>
              <span className="text-green-600">A</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={
                      `transition-colors ${
                        isActive
                          ? 'text-green-600 font-bold'
                          : 'text-gray-700 hover:text-green-600'
                      }`
                    }
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            
            <div className="border-l border-gray-200 h-6"></div>
            
            <div className="pl-2">
              <LanguageSelector 
                onLanguageChange={handleLanguageChange}
                formClassName="flex items-center space-x-1"
                labelClassName="hidden"
                selectClassName="relative"
              />
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <div className="mr-4">
              <LanguageSelector 
                onLanguageChange={handleLanguageChange}
                formClassName="flex items-center"
                labelClassName="hidden"
                selectClassName="relative"
              />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-green-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:bg-gray-50 rounded px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
