import { NavLink, useNavigate } from "react-router-dom";
import { AppRoute } from "../../shared/config/routes";
import { useI18n } from "../../shared/i18n/I18nProvider";
import styles from "./MobileMenu.module.scss";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: Props) => {
  const { t } = useI18n();
  const navigate = useNavigate();

  const go = (path: AppRoute) => {
    navigate(path);
    onClose();
  };

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`}>
      <nav className={styles.menu} aria-label="Mobile">
        <NavLink to={AppRoute.Home} end onClick={onClose}>
          {t.nav.home}
        </NavLink>
        <NavLink to={AppRoute.Server} onClick={onClose}>
          {t.nav.server}
        </NavLink>
        <div className={styles.authRow}>
          <button
            type="button"
            className={styles.authButton}
            onClick={() => go(AppRoute.Login)}
          >
            {t.nav.login}
          </button>
          <button
            type="button"
            className={`${styles.authButton} ${styles.authButtonPrimary}`}
            onClick={() => go(AppRoute.Register)}
          >
            {t.nav.register}
          </button>
        </div>
      </nav>
    </div>
  );
};
