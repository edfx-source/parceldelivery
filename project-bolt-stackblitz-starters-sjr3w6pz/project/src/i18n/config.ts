import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        tracking: 'Track Parcel',
        locations: 'Find Locations',
        contact: 'Contact',
        about: 'About Us',
      },
      home: {
        title: 'Welcome to Modern Logistics',
        subtitle: 'Your trusted partner in global shipping',
        trackingLabel: 'Enter tracking number',
        trackButton: 'Track Now',
      },
      footer: {
        rights: 'All rights reserved',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
    },
  },
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        tracking: 'Sendungsverfolgung',
        locations: 'Standorte',
        contact: 'Kontakt',
        about: 'Über uns',
      },
      home: {
        title: 'Willkommen bei Modern Logistics',
        subtitle: 'Ihr vertrauenswürdiger Partner im globalen Versand',
        trackingLabel: 'Tracking-Nummer eingeben',
        trackButton: 'Jetzt verfolgen',
      },
      footer: {
        rights: 'Alle Rechte vorbehalten',
        privacy: 'Datenschutz',
        terms: 'AGB',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;