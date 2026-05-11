export type Locale = "ua" | "ru";

export type TranslationSchema = {
  nav: {
    home: string;
    server: string;
    statistics: string;
    payment: string;
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
    errors: {
      usernameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      passwordRequired: string;
      passwordMinLength: string;
    };
    noAccount: string;
    hasAccount: string;
    logout: string;
    loading: string;
  };
  payment: {
    title: string;
    subtitle: string;
    packages: {
      starter: string;
      bronze: string;
      silver: string;
      gold: string;
      platinum: string;
      diamond: string;
      custom: string;
    };
    bonus: string;
    currency: string;
    selectedPackage: string;
    totalCoins: string;
    totalPrice: string;
    bonusCoins: string;
    paymentMethod: string;
    methods: {
      card: string;
      mobile: string;
      bank: string;
    };
    payButton: string;
    processing: string;
    successMessage: string;
    info: string;
    customAmount: string;
    enterAmount: string;
    minAmount: string;
    pricePerCoin: string;
  };
};
