import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Afficher le bouton après avoir défilé de 300px
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    
    // Nettoyer l'écouteur d'événement lors du démontage
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Rien à afficher si le bouton n'est pas visible
  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-green-600 hover:bg-white text-white hover:text-green-600 
                 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 
                 border-2 border-transparent hover:border-green-600 focus:outline-none focus:ring-2 
                 focus:ring-green-500 focus:ring-opacity-50"
      aria-label="Retour en haut de la page"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}