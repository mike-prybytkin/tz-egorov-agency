import { IFetchData } from '../../../shared/types';
import { IFetchStatus } from './types';
import {
  POPUP,
  POPUP_CONTENT,
  POPUP_CONTENT_CONTAINER,
  POPUP_OPEN,
  POPUP_HEADER,
  POPUP_MESSAGE,
  POPUP_CLOSE_BUTTON_MAIN,
  POPUP_CLOSE_BUTTON_SECONDARY,
} from '../../../constants/constants';

const prepareTemplate = (data: IFetchData | null) => {
  const successMessage = 'You have successfully subscribed to the email newsletter. Hot news is already in your email';
  const failedMessage = 'Sorry, something went wrong. Try again';

  const template = `
    <h3 class=${POPUP_HEADER}>${data?.email ? 'success!' : 'failed...'}</h3>
    <p class=${POPUP_MESSAGE}>${data?.email ? `${successMessage} </br><b>${data.email}</b>` : failedMessage}</p>
    `;
  return template;
};

const openPopup = (popup: HTMLElement, data?: IFetchData) => {
  let template = '';
  if (data) {
    template = prepareTemplate(data);
  } else {
    template = prepareTemplate(null);
  }
  const popupContentContainer = document.querySelector(`.${POPUP_CONTENT_CONTAINER}`) as HTMLElement;
  const newContainer = document.createElement('div');
  newContainer.className = POPUP_CONTENT_CONTAINER;
  newContainer.innerHTML = template;
  popupContentContainer.replaceWith(newContainer);

  popup.classList.add(POPUP_OPEN);
};

const closePopup = (popup: HTMLElement) => {
  popup.classList.remove(POPUP_OPEN);
};

const callPopup = (fetchStatus: IFetchStatus, data?: IFetchData) => {
  const popupElement = document.querySelector(POPUP) as HTMLElement;
  const popupContent = document.querySelector(POPUP_CONTENT) as HTMLElement;
  const closePopupButtonMain = document.querySelector(POPUP_CLOSE_BUTTON_MAIN) as HTMLElement;
  const closePopupButtonSecond = document.querySelector(POPUP_CLOSE_BUTTON_SECONDARY) as HTMLElement;

  if (fetchStatus === 'success' && data) {
    openPopup(popupElement, data);
  }
  if (fetchStatus === 'failed') {
    openPopup(popupElement);
  }

  popupElement.addEventListener('click', () => closePopup(popupElement));
  popupContent.addEventListener('click', (event) => event.stopPropagation());
  closePopupButtonMain.addEventListener('click', () => closePopup(popupElement));
  closePopupButtonSecond.addEventListener('click', () => closePopup(popupElement));
};

export default callPopup;
