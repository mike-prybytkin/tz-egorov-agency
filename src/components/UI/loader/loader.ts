import { LOADER, LOADER_LOADING } from '../../../constants/constants';

const loaderOn = () => {
  const loader = document.querySelector(LOADER);
  loader?.classList.add(LOADER_LOADING);
};

const loaderOff = () => {
  const loader = document.querySelector(LOADER);
  loader?.classList.remove(LOADER_LOADING);
};

export { loaderOn, loaderOff };
