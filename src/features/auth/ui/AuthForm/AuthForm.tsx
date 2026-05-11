import { FormEvent, useState } from "react";
import { useI18n } from "../../../../shared/i18n/I18nProvider";
import styles from "./AuthForm.module.scss";

type AuthMode = "login" | "register";

type Props = {
  mode: AuthMode;
  onSubmit: (
    data: { username: string; email?: string; password: string }
  ) => void | Promise<void>;
  disabled?: boolean;
};

export const AuthForm = ({ mode, onSubmit, disabled = false }: Props) => {
  const { t } = useI18n();
  const isRegister = mode === "register";
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {};

    const username = String(formData.get("username") ?? "").trim();
    const password = String(formData.get("password") ?? "").trim();
    const email = isRegister ? String(formData.get("email") ?? "").trim() : "";

    if (!username) {
      newErrors.username = t.auth.errors.usernameRequired || "Username is required";
    }

    if (!password) {
      newErrors.password = t.auth.errors.passwordRequired || "Password is required";
    } else if (password.length < 8) {
      newErrors.password = t.auth.errors.passwordMinLength || "Password must be at least 8 characters";
    }

    if (isRegister) {
      if (!email) {
        newErrors.email = t.auth.errors.emailRequired || "Email is required";
      } else if (!validateEmail(email)) {
        newErrors.email = t.auth.errors.emailInvalid || "Please enter a valid email";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    if (!validateForm(formData)) {
      return;
    }

    onSubmit({
      username: String(formData.get("username") ?? "").trim(),
      email: isRegister ? String(formData.get("email") ?? "").trim() : undefined,
      password: String(formData.get("password") ?? "").trim()
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label>
        <span>{t.auth.username} *</span>
        <input 
          name="username" 
          disabled={disabled}
          className={errors.username ? styles.error : ''}
        />
        {errors.username && <span className={styles.errorMessage}>{errors.username}</span>}
      </label>

      {isRegister && (
        <label>
          <span>{t.auth.email} *</span>
          <input 
            name="email" 
            type="email" 
            disabled={disabled}
            className={errors.email ? styles.error : ''}
          />
          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        </label>
      )}

      <label>
        <span>{t.auth.password} *</span>
        <input 
          name="password" 
          type="password" 
          disabled={disabled}
          className={errors.password ? styles.error : ''}
        />
        {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
      </label>

      <button type="submit" disabled={disabled}>
        {disabled ? 'Loading...' : (isRegister ? t.auth.submitRegister : t.auth.submitLogin)}
      </button>
    </form>
  );
};
