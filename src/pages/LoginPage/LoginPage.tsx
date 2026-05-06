import { AuthForm } from "../../features/auth/ui/AuthForm/AuthForm";
import { login } from "../../shared/api/authApi";
import { useI18n } from "../../shared/i18n/I18nProvider";
import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
  const { t } = useI18n();

  return (
    <section className={styles.page}>
      <h1>{t.auth.loginTitle}</h1>
      <AuthForm mode="login" onSubmit={login} />
    </section>
  );
};
