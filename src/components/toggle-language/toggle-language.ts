import i18Obj from '../../shared/translate-data';
import { Translations } from '../../shared/types';
import { HasDataAttribute } from './types';
import { BODY } from '../../constants/constants';

const textReplacement = (button: HTMLElement) => {
  const placeholderEmail = document.querySelector('.form__email') as HTMLInputElement;
  let currentLanguage: keyof Translations = 'en';
  if (button.classList.contains('ru-lang')) {
    currentLanguage = 'ru';
    placeholderEmail.placeholder = i18Obj.ru.emailPlaceholder;
  } else {
    currentLanguage = 'en';
    placeholderEmail.placeholder = i18Obj.en.emailPlaceholder;
  }

  const dataLanguage: NodeListOf<HTMLElement & HasDataAttribute> = document.querySelectorAll('[data-i18]');
  // eslint-disable-next-line no-return-assign, no-param-reassign
  dataLanguage.forEach((el) => (el.textContent = i18Obj[currentLanguage][el.dataset.i18]));
};

const toggleLanguage = () => {
  const body = document.querySelector(BODY) as HTMLElement;
  const switchButton = document.querySelector('.nav__button_toggle-lang') as HTMLElement;
  switchButton.addEventListener('click', () => {
    switchButton.classList.toggle('ru-lang');
    body.classList.toggle('ru-lang');
    textReplacement(switchButton);
  });
};

export default toggleLanguage;
