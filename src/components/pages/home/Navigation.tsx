import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

export const Navigation = () =>  {
  const [activeSection, setActiveSection] = useState('commerce-shopping');
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['restoration', 'beauty-institute', 'drinks-dancing', 'commerce-shopping', 'miscellaneous-services'];
      
      const scrollPosition = window.scrollY + 200; // Adding offset for better UX
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'restoration', label: t('pages.indexPage.navigation.restoration', 'Restoration') },
    { id: 'beauty-institute', label: t('pages.indexPage.navigation.beauty_institute', 'Beauty Institute') },
    { id: 'drinks-dancing', label: t('pages.indexPage.navigation.drinks_dancing', 'Drinks & Dancing') },
    { id: 'commerce-shopping', label: t('pages.indexPage.navigation.commerce_shopping', 'Commerce & Shopping') },
    { id: 'miscellaneous-services', label: t('pages.indexPage.navigation.miscellaneous_services', 'Miscellaneous Services') },
  ];

  return (
    <section className="bg-green-600 py-4 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-1 flex-wrap gap-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-white text-green-700 font-semibold'
                  : 'bg-gray-700 hover:bg-green-700 text-white'
              }`}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
