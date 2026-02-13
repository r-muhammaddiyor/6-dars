import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import uz from './lang/uz.json';
import en from './lang/en.json';
import ru from './lang/ru.json';
import es from './lang/es.json';
import ko from './lang/ko.json';
import zh from './lang/zh.json';
import tr from './lang/tr.json';

i18next.use(initReactI18next).init({
  resources: {
    uz,
    en,
    ru,
    es,
    ko,
    tr,
    zh,
  },
  lng: 'uz',
  fallbackLng: 'uz',

  interpolation: {
    escapeValue: false,
  },
});
