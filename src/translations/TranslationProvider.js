import { createContext, useContext } from "react";

export const TranslationContext = createContext();

export const useLanguage = () => useContext(TranslationContext).locale;
