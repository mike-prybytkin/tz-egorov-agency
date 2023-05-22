import { BODY, INITIAL_ANIMATION } from '../../../constants/constants';

const initialAnimation = () => {
  const body = document.querySelector(BODY) as HTMLElement;
  body.classList.add(INITIAL_ANIMATION);
};

export default initialAnimation;
