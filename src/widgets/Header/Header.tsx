import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AppRoute } from "../../shared/config/routes";
import { useI18n } from "../../shared/i18n/I18nProvider";
import { logout } from "../../shared/api/authApi";
import { useAuth } from "../../shared/hooks/useAuth";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import styles from "./Header.module.scss";

export const Header = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      navigate(AppRoute.Home);
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to={AppRoute.Home} className={styles.brand} end>
          <span className={styles.brandText}>L2Prestige x15 Interlude</span>
        </NavLink>

        <nav className={styles.nav} aria-label="Main">
          <NavLink to={AppRoute.Home}>{t.nav.home}</NavLink>
          <NavLink to={AppRoute.Server}>{t.nav.server}</NavLink>
          <NavLink to={AppRoute.Statistics}>{t.nav.statistics}</NavLink>
          <NavLink to={AppRoute.Payment}>{t.nav.payment}</NavLink>
        </nav>

        <div className={styles.spacer} aria-hidden />

        <div className={styles.actions}>
          <div className={styles.authCluster}>
            {user ? (
              <>
                <span className={styles.userInfo}>
                  {user.username}
                </span>
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
                <button
                  type="button"
                  className={styles.authButton}
                  onClick={() => navigate(AppRoute.Login)}
                >
                  {t.nav.login}
                </button>
                <button
                  type="button"
                  className={`${styles.authButton} ${styles.authButtonPrimary}`}
                  onClick={() => navigate(AppRoute.Register)}
                >
                  {t.nav.register}
                </button>
              </>
            )}
          </div>
          <div className={styles.langSlot}>
            <LanguageSwitcher />
          </div>
          <button
            type="button"
            className={styles.mobileButton}
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={t.common.mobileMenu}
          >
            ☰
          </button>
        </div>
      </div>
      <MobileMenu isOpen={mobileOpen} onClose={closeMobile} />
    </header>
  );
};
