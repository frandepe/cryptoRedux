import i18n from "i18next";
// libreria intermedia para tratar i18next con react
import { initReactI18next } from "react-i18next";
import es from "./es";
import en from "./en";

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

const defaultLang = localStorage.getItem("lang") || "es";

i18n.use(initReactI18next).init({
  resources,
  lang: defaultLang,
  // el interpolation nos asegura que no explote
  interpolation: {
    escapeValue: false,
  },
});

// Esta funcion cambia de idioma
export const updateLang = async (language) => {
  await i18n.changeLanguage(language);
  localStorage.setItem("lang", language);
};

// Cuando se inicie la app, cada vez q updatee el lenguaje, lo ejecuta (es un doble chequeo poco necesario, por las dudas)
const defaultLangSetter = () => {
  updateLang(defaultLang);
};

defaultLangSetter();

export default i18n;
