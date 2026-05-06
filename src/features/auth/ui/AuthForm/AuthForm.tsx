import { FormEvent } from "react";
import { useI18n } from "../../../../shared/i18n/I18nProvider";
import styles from "./AuthForm.module.scss";

type AuthMode = "login" | "register";

type Props = {
  mode: AuthMode;
  onSubmit: (
    data: { username: string; email?: string; password: string }
  ) => void | Promise<void>;
};

export const AuthForm = ({ mode, onSubmit }: Props) => {
  const { t } = useI18n();
  const isRegister = mode === "register";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onSubmit({
      username: String(formData.get("username") ?? ""),
      email: isRegister ? String(formData.get("email") ?? "") : undefined,
      password: String(formData.get("password") ?? "")
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <span>{t.auth.username}</span>
        <input name="username" required />
      </label>

      {isRegister && (
        <label>
          <span>{t.auth.email}</span>
          <input name="email" type="email" required />
        </label>
      )}

      <label>
        <span>{t.auth.password}</span>
        <input name="password" type="password" required />
      </label>

      <button type="submit">
        {isRegister ? t.auth.submitRegister : t.auth.submitLogin}
      </button>
    </form>
  );
};
