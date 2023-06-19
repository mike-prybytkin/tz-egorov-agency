import { HasDataAttribute } from '../../shared/types';

const sliderAccordion = () => {
  const accordionSlides: NodeListOf<HTMLElement & HasDataAttribute> = document.querySelectorAll('.accordion');
  const contents: NodeListOf<HTMLElement> = document.querySelectorAll('.accordion__content');

  accordionSlides.forEach((item) =>
    item.addEventListener('click', () => {
      const activeContent = document.querySelector(`#${item.dataset.tab}`) as HTMLElement;

      if (activeContent?.classList.contains('active')) {
        activeContent.classList.remove('active');
        item.classList.remove('active');
        activeContent.style.height = '0';
      } else {
        contents.forEach((element) => {
          element.classList.remove('active');
          // eslint-disable-next-line no-param-reassign
          element.style.height = '0';
        });

        accordionSlides.forEach((element) => element.classList.remove('active'));

        item.classList.add('active');
        activeContent.classList.add('active');
        activeContent.style.height = `560px`;
      }
    })
  );

  document.querySelector('[data-tab="tab-1"]')?.classList.add('active');
  const tab1 = document.querySelector('#tab-1') as HTMLElement;
  tab1.classList.add('active');
  tab1.style.height = `560px`;
};

export default sliderAccordion;
