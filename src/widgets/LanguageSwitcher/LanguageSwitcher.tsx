import { useI18n } from "../../shared/i18n/I18nProvider";
import { Locale } from "../../shared/i18n/types";
import styles from "./LanguageSwitcher.module.scss";

const nextLocale: Record<Locale, Locale> = {
  ua: "ru",
  ru: "ua"
};

export const LanguageSwitcher = () => {
  const { locale, setLocale, t } = useI18n();

  const toggle = () => setLocale(nextLocale[locale]);

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={t.common.switchLanguage}
      title={t.common.switchLanguage}
    >
      {locale.toUpperCase()}
    </button>
  );
};
