"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/common.json";
import deTranslation from "./locales/de/common.json";
import frTranslation from "./locales/fr/common.json";
import itTranslation from "./locales/it/common.json";
import ruTranslation from "./locales/ru/common.json";
import zhTranslation from "./locales/zh/common.json";
import spTranslation from "./locales/sp/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: { ...enTranslation } },
      de: { translation: { ...deTranslation } },
      fr: { translation: { ...frTranslation } },
      sp: { translation: { ...spTranslation } },
      it: { translation: { ...itTranslation } },
      ru: { translation: { ...ruTranslation } },
      zh: { translation: { ...zhTranslation } },
    },
    fallbackLng: "en",
    debug: true, // මේකෙන් ඔයාට Console එකේ වැරැද්ද බලාගන්න පුළුවන්
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
