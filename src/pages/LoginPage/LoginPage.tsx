import { AuthForm } from "../../features/auth/ui/AuthForm/AuthForm";
import { login } from "../../shared/api/authApi";
import { useI18n } from "../../shared/i18n/I18nProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AppRoute } from "../../shared/config/routes";
import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: { username: string; password: string }) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await login(data);
      navigate(AppRoute.Home);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.page}>
      <h1>{t.auth.loginTitle}</h1>
      {error && <div className={styles.error}>{error}</div>}
      <AuthForm mode="login" onSubmit={handleSubmit} disabled={isLoading} />
      <div className={styles.authLink}>
        <span>{t.auth.noAccount} </span>
        <button 
          type="button" 
          className={styles.linkButton}
          onClick={() => navigate(AppRoute.Register)}
        >
          {t.nav.register}
        </button>
      </div>
    </section>
  );
};
