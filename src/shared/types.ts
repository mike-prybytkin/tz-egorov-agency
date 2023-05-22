export interface IUserData {
  email: string;
}

export interface IFetchData {
  email: string;
  id: number;
}

export type Translations = {
  en: {
    buttonLang: string;
    promoHeading: string;
    promoSlogan: string;
    goToEventComment: string;
    eventButton: string;
    formErrorMessage: string;
    emailPlaceholder: string;
    close: string;
    successMessage: string;
    failedMessage: string;
    success: string;
    failed: string;
  };
  ru: {
    buttonLang: string;
    promoHeading: string;
    promoSlogan: string;
    goToEventComment: string;
    eventButton: string;
    formErrorMessage: string;
    emailPlaceholder: string;
    close: string;
    success: string;
    failed: string;
  };
};
