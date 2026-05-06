import { useI18n } from "../../shared/i18n/I18nProvider";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const { t } = useI18n();

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <h1>{t.home.title}</h1>
        <p>{t.home.subtitle}</p>
        <button type="button">{t.home.cta}</button>
      </div>

      <div className={styles.grid}>
        <article className={styles.card}>
          <img src="https://crazzd.com/images/XpXqFZ.png" alt="Interlude world" />
          <h3>{t.home.features.interlude}</h3>
        </article>
        <article className={styles.card}>
          <img src="https://crazzd.com/images/server_icon-1.png" alt="Server rates" />
          <h3>{t.home.features.rates}</h3>
        </article>
        <article className={styles.card}>
          <img src="https://crazzd.com/images/s4d9JN.jpg" alt="Community" />
          <h3>{t.home.features.community}</h3>
        </article>
      </div>
    </section>
  );
};
