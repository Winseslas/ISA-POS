import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import postProcessor from 'i18next-sprintf-postprocessor';
import enTranslation from "./i18n/locales/en/translation.json";
import frTranslation from "./i18n/locales/fr/translation.json";
import deTranslation from "./i18n/locales/de/translation.json";

const resources = {
  en: { translation: enTranslation },
  fr: { translation: frTranslation },
  de: { translation: deTranslation }
};

const languageDetectorOptions = {
  order: ['localStorage', 'navigator'],
  lookupLocalStorage: 'i18nextLng',
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'],
  checkWhitelist: true,
};

i18n
  .use(Backend)
  .use(postProcessor)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'de'],
    debug: process.env.NODE_ENV === 'development',
    saveMissing: false,
    returnObjects: false,
    interpolation: {
      escapeValue: false,
    },
    detection: languageDetectorOptions,
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged',
      bindI18nStore: '',
    }
  });

export default i18n;