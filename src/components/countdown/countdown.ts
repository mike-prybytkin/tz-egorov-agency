import { IFullDifferenceTime } from './types';
import { COUNTDOWN_DAYS, COUNTDOWN_HOURS, COUNTDOWN_MINUETS, COUNTDOWN_SECONDS } from '../../constants/constants';

const renderTimeOnPage = (fullDifferenceTime: IFullDifferenceTime) => {
  const daysBlock = document.querySelector(COUNTDOWN_DAYS) as HTMLElement;
  const hoursBlock = document.querySelector(COUNTDOWN_HOURS) as HTMLElement;
  const minuetsBlock = document.querySelector(COUNTDOWN_MINUETS) as HTMLElement;
  const secondsBlock = document.querySelector(COUNTDOWN_SECONDS) as HTMLElement;

  daysBlock.innerHTML = `0${fullDifferenceTime.daysLeft}`.slice(-2);
  hoursBlock.innerHTML = `0${fullDifferenceTime.hoursLeft}`.slice(-2);
  minuetsBlock.innerHTML = `0${fullDifferenceTime.minutesLeft}`.slice(-2);
  secondsBlock.innerHTML = `0${fullDifferenceTime.secondsLeft}`.slice(-2);
};

const convertToEmbedOnPage = (timeDifference: number) => {
  const daysLeft = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(timeDifference / 1000 / 60) % 60;
  const secondsLeft = Math.floor(timeDifference / 1000) % 60;

  const fullDifferenceTime: IFullDifferenceTime = { daysLeft, hoursLeft, minutesLeft, secondsLeft };
  renderTimeOnPage(fullDifferenceTime);
};

const calcTimeDifference = (setDate: '2023, 5, 31') => {
  const currentTime = Date.parse(new Date().toString());
  const selectedDate = Date.parse(new Date(setDate).toString());

  const timeDifference = selectedDate - currentTime;
  convertToEmbedOnPage(timeDifference);
};

const runCountdown = () => {
  calcTimeDifference('2023, 5, 31');

  setInterval(() => {
    calcTimeDifference('2023, 5, 31');
  }, 1000);
};

export default runCountdown;
