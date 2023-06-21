import getWindowWidth from '../service/html-size/getWindowWidth';

const getSlideHeight = () => {
  const windowWidth = getWindowWidth();
  let slideHeight = '560px';
  if (windowWidth < 1200) {
    slideHeight = '400px';
  }
  return slideHeight;
};

const sliderAccordion = () => {
  const accordionWrapper = document.querySelector('.wrapper-accordion__rotate') as HTMLElement;
  const accordionSlides: NodeListOf<HTMLElement> = document.querySelectorAll('.accordion');
  const accordionContentBlocks: NodeListOf<HTMLElement> = document.querySelectorAll('.accordion__content');
  const slideHeight = getSlideHeight();

  const openFirstSlide = () => {
    document.querySelector('[data-tab="tab-1"]')?.classList.add('active');
    const { style } = document.querySelector('#tab-1') as HTMLElement;
    style.height = slideHeight;
  };
  openFirstSlide();

  let isAnimateEnd = true;
  accordionWrapper.addEventListener('transitionend', () => {
    isAnimateEnd = true;
  });

  const slideHandler = (event: MouseEvent) => {
    console.log(getWindowWidth());
    const accordionTitle = (event.target as HTMLElement).closest('.accordion__title');

    if (accordionTitle) {
      const activeSlide = accordionTitle?.parentNode as HTMLElement;
      const activeContent = document.querySelector(`#${activeSlide.dataset.tab}`) as HTMLElement;

      if (isAnimateEnd) {
        accordionContentBlocks.forEach((block) => {
          const { style } = block;
          style.height = '0';
        });

        accordionSlides.forEach((slide) => slide.classList.remove('active'));

        activeSlide.classList.add('active');
        activeContent.style.height = slideHeight;
        isAnimateEnd = false;
      }
    }
  };

  accordionWrapper.addEventListener('click', slideHandler);
};

export default sliderAccordion;
