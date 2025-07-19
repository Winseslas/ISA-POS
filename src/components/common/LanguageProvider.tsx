import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { ReactNode } from 'react';
import { LanguageContext, type LanguageContextProps } from './LanguageContext';
import { DEFAULT_LANGUAGE } from '../../types/i18n';
import type { LanguageCode } from '../../types/i18n';

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState<LanguageCode>(DEFAULT_LANGUAGE);
    const [isInitialized, setIsInitialized] = useState(false);

    // Initialisation de la langue
    useEffect(() => {
        if (!isInitialized && i18n.isInitialized) {
            const savedLanguage = localStorage.getItem('i18nextLng') as LanguageCode;
            const initialLanguage = savedLanguage || i18n.language || DEFAULT_LANGUAGE;
            
            setLanguage(initialLanguage);
            i18n.changeLanguage(initialLanguage).then(() => {
                document.documentElement.lang = initialLanguage;
                document.documentElement.dir = i18n.dir(initialLanguage);
                setIsInitialized(true);
            });
        }
    }, [i18n, isInitialized]);

    // Gestion du changement de langue
    const changeLanguage = useCallback(async (newLanguage: LanguageCode) => {
        try {
            await i18n.changeLanguage(newLanguage);
            setLanguage(newLanguage);
            document.documentElement.lang = newLanguage;
            document.documentElement.dir = i18n.dir(newLanguage);
            localStorage.setItem('i18nextLng', newLanguage);
            return true;
        } catch (error) {
            console.error('Failed to change language:', error);
            return false;
        }
    }, [i18n]);

    // Mise à jour du contexte
    const contextValue: LanguageContextProps = {
        language,
        changeLanguage,
        isInitialized
    };

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
};