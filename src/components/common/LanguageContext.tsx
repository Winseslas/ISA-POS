import { createContext } from 'react';
import type { LanguageCode } from '../../types/i18n';

export interface LanguageContextProps {
    language: LanguageCode;
    changeLanguage: (newLanguage: LanguageCode) => Promise<boolean>;
    isInitialized: boolean;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);
