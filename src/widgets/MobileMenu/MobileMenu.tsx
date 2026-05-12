import { NavLink } from "react-router-dom";
import { AppRoute } from "../../shared/config/routes";
import { useI18n } from "../../shared/i18n/I18nProvider";
import { logout } from "../../shared/api/authApi";
import { useAuth } from "../../shared/hooks/useAuth";
import { useState } from "react";
import styles from "./MobileMenu.module.scss";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: Props) => {
  const { t } = useI18n();
  const { user } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      onClose();
      // Navigate to home will be handled by NavLink in the menu
      window.location.href = AppRoute.Home;
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoggingOut(false);
    }
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
        <NavLink to={AppRoute.Statistics} onClick={onClose}>
          {t.nav.statistics}
        </NavLink>
        <NavLink to={AppRoute.Payment} onClick={onClose}>
          {t.nav.payment}
        </NavLink>
        <div className={styles.authRow}>
          {user ? (
            <>
              <div className={styles.mobileUserInfo}>
                {user.username}
              </div>
              <button
                type="button"
                className={styles.authButton}
                onClick={handleLogout}
                disabled={isLoggingOut}
              >
                {isLoggingOut ? 'Loading...' : 'Logout'}
              </button>
            </>
          ) : (
            <>
              <NavLink to={AppRoute.Login} className={styles.authButton} onClick={onClose}>
                {t.nav.login}
              </NavLink>
              <NavLink 
                to={AppRoute.Register} 
                className={`${styles.authButton} ${styles.authButtonPrimary}`}
                onClick={onClose}
              >
                {t.nav.register}
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};
