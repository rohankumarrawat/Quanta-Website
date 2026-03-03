import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import es from './locales/es/translation.json';
import de from './locales/de/translation.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  es: { translation: es },
  de: { translation: de }
};

// Detect language: localStorage -> browser -> default 'en'
const supported = Object.keys(resources);
let detected = localStorage.getItem('i18nextLng') || (typeof navigator !== 'undefined' && navigator.language ? navigator.language.split('-')[0] : null);
if (!detected || !supported.includes(detected)) {
  detected = 'en';
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: detected,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;