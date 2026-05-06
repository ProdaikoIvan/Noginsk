import { AuthForm } from "../../features/auth/ui/AuthForm/AuthForm";
import { register } from "../../shared/api/authApi";
import { useI18n } from "../../shared/i18n/I18nProvider";
import styles from "./RegisterPage.module.scss";

export const RegisterPage = () => {
  const { t } = useI18n();

  return (
    <section className={styles.page}>
      <h1>{t.auth.registerTitle}</h1>
      <AuthForm mode="register" onSubmit={register} />
    </section>
  );
};
