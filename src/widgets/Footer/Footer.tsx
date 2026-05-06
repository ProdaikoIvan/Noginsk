import { NavLink } from "react-router-dom";
import { AppRoute } from "../../shared/config/routes";
import { useI18n } from "../../shared/i18n/I18nProvider";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.column}>
          <p className={styles.title}>L2Prestige x15 Interlude</p>
          <p className={styles.tagline}>{t.footer.tagline}</p>
          <p className={styles.publisher}>
            {t.common.serverBy} &quot;Noginsk&quot;
          </p>
        </div>

        <div className={styles.column}>
          <p className={styles.sectionTitle}>{t.footer.ratesTitle}</p>
          <ul className={styles.rates}>
            {t.footer.rates.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <p className={styles.sectionTitle}>{t.footer.quickLinks}</p>
          <nav className={styles.links} aria-label="Footer">
            <NavLink to={AppRoute.Home} end>
              {t.footer.linkHome}
            </NavLink>
            <NavLink to={AppRoute.Server}>{t.footer.linkServer}</NavLink>
            <NavLink to={AppRoute.Login}>{t.footer.linkLogin}</NavLink>
            <NavLink to={AppRoute.Register}>{t.footer.linkRegister}</NavLink>
          </nav>
          <p className={styles.note}>{t.footer.note}</p>
        </div>
      </div>
    </footer>
  );
};
