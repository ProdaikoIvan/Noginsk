export type Locale = "ua" | "ru";

export type TranslationSchema = {
  nav: {
    home: string;
    server: string;
    login: string;
    register: string;
  };
  common: {
    serverBy: string;
    languageLabel: string;
    switchLanguage: string;
    mobileMenu: string;
  };
  footer: {
    tagline: string;
    ratesTitle: string;
    rates: string[];
    note: string;
    quickLinks: string;
    linkHome: string;
    linkServer: string;
    linkLogin: string;
    linkRegister: string;
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
  };
};
