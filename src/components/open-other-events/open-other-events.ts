import { FOOTER_EVENTS_BUTTON, BODY, SHOW_OTHER_EVENTS, WRAPPER_ACCORDION } from '../../constants/constants';

const scrollDown = () => {
  const wrapperAccordion = document.querySelector(WRAPPER_ACCORDION) as HTMLElement;
  wrapperAccordion.scrollIntoView({ block: 'end', behavior: 'smooth' });
};

const scrollUp = (body: HTMLElement) => {
  body.scrollIntoView({ block: 'start', behavior: 'smooth' });
};

const scrollWindow = (body: HTMLElement) => {
  const isScrollDown = body.classList.contains(SHOW_OTHER_EVENTS);
  if (isScrollDown) {
    scrollDown();
  } else {
    scrollUp(body);
  }
};

const openOtherEvents = () => {
  const openButton = document.querySelector(FOOTER_EVENTS_BUTTON);
  const body = document.querySelector(BODY) as HTMLElement;

  openButton?.addEventListener('click', () => {
    body?.classList.toggle(SHOW_OTHER_EVENTS);
    scrollWindow(body);
  });
};

export default openOtherEvents;
