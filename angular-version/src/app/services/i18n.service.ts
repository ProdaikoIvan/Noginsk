import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Locale = 'ua' | 'ru';

export interface TranslationSchema {
  nav: {
    home: string;
    server: string;
    login: string;
    register: string;
  };
  home: {
    title: string;
    subtitle: string;
    cta: string;
    features: {
      interlude: string;
      rates: string;
      community: string;
    };
  };
  server: {
    pageTitle: string;
    lead: string;
    tocTitle: string;
    blocks: Array<{
      id: string;
      title: string;
      paragraphs?: string[];
      bullets?: string[];
    }>;
  };
  auth: {
    loginTitle: string;
    registerTitle: string;
    username: string;
    email: string;
    password: string;
    submitLogin: string;
    submitRegister: string;
    errors: {
      usernameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      passwordRequired: string;
      passwordMinLength: string;
    };
  };
  footer: {
    tagline: string;
    serverBy: string;
    ratesTitle: string;
    rates: string[];
    quickLinks: string;
    linkHome: string;
    linkServer: string;
    linkLogin: string;
    linkRegister: string;
    note: string;
  };
  common: {
    serverBy: string;
    switchLanguage: string;
    mobileMenu: string;
  };
}

const translations: Record<Locale, TranslationSchema> = {
  ua: {
    nav: {
      home: "Головна",
      server: "Про сервер",
      login: "Логін",
      register: "Реєстрація"
    },
    home: {
      title: "L2Prestige x15 Interlude",
      subtitle: "Найкращий класичний сервер Lineage 2 з унікальним геймплеєм",
      cta: "Почати гру",
      features: {
        interlude: "Класичний Interlude",
        rates: "Високі рейтинги",
        community: "Дружня спільнота"
      }
    },
    server: {
      pageTitle: "Про сервер L2Prestige x15 Interlude",
      lead: "Детальна інформація про сервер, ігрові механіки та умови гри",
      tocTitle: "Зміст",
      blocks: [
        {
          id: "about",
          title: "Про сервер",
          paragraphs: [
            "L2Prestige x15 Interlude - це класичний сервер Lineage 2 Epilogue з унікальним підходом до гри.",
            "Ми пропонуємо стабільний ігровий процес без лагів та багів."
          ]
        },
        {
          id: "rates",
          title: "Рейтинги",
          paragraphs: [
            "Основний рейтинк на сервері становить x15.",
            "Бонуси для VIP гравців та події для всіх."
          ]
        },
        {
          id: "community",
          title: "Спільнота",
          bullets: [
            "Дружній адміністративний склад",
            "Регулярні ігрові події",
            "Активний Discord сервер",
            "Допомога новим гравцям"
          ]
        }
      ]
    },
    auth: {
      loginTitle: "Вхід в акаунт",
      registerTitle: "Створення акаунта",
      username: "Ім'я користувача",
      email: "Email",
      password: "Пароль",
      submitLogin: "Увійти",
      submitRegister: "Зареєструватися",
      errors: {
        usernameRequired: "Ім'я користувача є обов'язковим",
        emailRequired: "Email є обов'язковим",
        emailInvalid: "Будь ласка, введіть коректний email",
        passwordRequired: "Пароль є обов'язковим",
        passwordMinLength: "Пароль повинен містити мінімум 8 символів"
      }
    },
    footer: {
      tagline: "Класичний Lineage 2 з унікальним геймплеєм",
      serverBy: "Сервер від",
      ratesTitle: "Рейтинги",
      rates: [
        "Основний: x15",
        "VIP: x20",
        "Події: x25"
      ],
      quickLinks: "Швидкі посилання",
      linkHome: "Головна",
      linkServer: "Сервер",
      linkLogin: "Логін",
      linkRegister: "Реєстрація",
      note: "© 2024 L2Prestige. Всі права захищені."
    },
    common: {
      serverBy: "Сервер від",
      switchLanguage: "Переключити мову",
      mobileMenu: "Мобільне меню"
    }
  },
  ru: {
    nav: {
      home: "Главная",
      server: "О сервере",
      login: "Логин",
      register: "Регистрация"
    },
    home: {
      title: "L2Prestige x15 Interlude",
      subtitle: "Лучший классический сервер Lineage 2 с уникальным геймплеем",
      cta: "Начать игру",
      features: {
        interlude: "Классический Interlude",
        rates: "Высокие рейтинги",
        community: "Дружное сообщество"
      }
    },
    server: {
      pageTitle: "О сервере L2Prestige x15 Interlude",
      lead: "Подробная информация о сервере, игровые механики и условия игры",
      tocTitle: "Содержание",
      blocks: [
        {
          id: "about",
          title: "О сервере",
          paragraphs: [
            "L2Prestige x15 Interlude - это классический сервер Lineage 2 Epilogue с уникальным подходом к игре.",
            "Мы предлагаем стабильный игровой процесс без лагов и багов."
          ]
        },
        {
          id: "rates",
          title: "Рейтинги",
          paragraphs: [
            "Основной рейтинг на сервере составляет x15.",
            "Бонусы для VIP игроков и события для всех."
          ]
        },
        {
          id: "community",
          title: "Сообщество",
          bullets: [
            "Дружный административный состав",
            "Регулярные игровые события",
            "Активный Discord сервер",
            "Помощь новым игрокам"
          ]
        }
      ]
    },
    auth: {
      loginTitle: "Вход в аккаунт",
      registerTitle: "Создание аккаунта",
      username: "Имя пользователя",
      email: "Email",
      password: "Пароль",
      submitLogin: "Войти",
      submitRegister: "Зарегистрироваться",
      errors: {
        usernameRequired: "Имя пользователя является обязательным",
        emailRequired: "Email является обязательным",
        emailInvalid: "Пожалуйста, введите корректный email",
        passwordRequired: "Пароль является обязательным",
        passwordMinLength: "Пароль должен содержать минимум 8 символов"
      }
    },
    footer: {
      tagline: "Классический Lineage 2 с уникальным геймплеем",
      serverBy: "Сервер от",
      ratesTitle: "Рейтинги",
      rates: [
        "Основной: x15",
        "VIP: x20",
        "События: x25"
      ],
      quickLinks: "Быстрые ссылки",
      linkHome: "Главная",
      linkServer: "Сервер",
      linkLogin: "Логин",
      linkRegister: "Регистрация",
      note: "© 2024 L2Prestige. Все права защищены."
    },
    common: {
      serverBy: "Сервер от",
      switchLanguage: "Переключить язык",
      mobileMenu: "Мобильное меню"
    }
  }
};

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private currentLocaleSubject = new BehaviorSubject<Locale>('ua');
  public currentLocale$: Observable<Locale>;

  constructor() {
    this.currentLocale$ = this.currentLocaleSubject.asObservable();
    this.loadStoredLocale();
  }

  private loadStoredLocale(): void {
    const stored = localStorage.getItem('locale');
    if (stored && (stored === 'ua' || stored === 'ru')) {
      this.currentLocaleSubject.next(stored);
    }
  }

  setLocale(locale: Locale): void {
    this.currentLocaleSubject.next(locale);
    localStorage.setItem('locale', locale);
  }

  get currentLocale(): Locale {
    return this.currentLocaleSubject.value;
  }

  translate(): TranslationSchema {
    return translations[this.currentLocaleSubject.value];
  }

  t(key: keyof TranslationSchema): string {
    const translation = this.translate();
    const keys = key.split('.');
    let result: any = translation;
    
    for (const k of keys) {
      result = result?.[k];
    }
    
    return result || key;
  }
}
