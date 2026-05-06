import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState
} from "react";
import { Locale, TranslationSchema } from "./types";
import { translations } from "./translations";

type I18nContextValue = {
  locale: Locale;
  t: TranslationSchema;
  setLocale: (locale: Locale) => void;
};

const DEFAULT_LOCALE: Locale = "ua";
const STORAGE_KEY = "app_locale";

const I18nContext = createContext<I18nContextValue | null>(null);

const readInitialLocale = (): Locale => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "ua" || saved === "ru") {
    return saved;
  }
  return DEFAULT_LOCALE;
};

export const I18nProvider = ({ children }: PropsWithChildren) => {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    localStorage.setItem(STORAGE_KEY, nextLocale);
  };

  const value = useMemo(
    () => ({
      locale,
      t: translations[locale],
      setLocale
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
};
