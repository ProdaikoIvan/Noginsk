import { AuthForm } from "../../features/auth/ui/AuthForm/AuthForm";
import { register } from "../../shared/api/authApi";
import { useI18n } from "../../shared/i18n/I18nProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AppRoute } from "../../shared/config/routes";
import styles from "./RegisterPage.module.scss";

export const RegisterPage = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: { username: string; email?: string; password: string }) => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (!data.email) {
        throw new Error("Email is required");
      }
      await register(data);
      navigate(AppRoute.Home);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.page}>
      <h1>{t.auth.registerTitle}</h1>
      {error && <div className={styles.error}>{error}</div>}
      <AuthForm mode="register" onSubmit={handleSubmit} disabled={isLoading} />
      <div className={styles.authLink}>
        <span>{t.auth.hasAccount} </span>
        <button 
          type="button" 
          className={styles.linkButton}
          onClick={() => navigate(AppRoute.Login)}
        >
          {t.nav.login}
        </button>
      </div>
    </section>
  );
};
