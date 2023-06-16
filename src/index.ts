import './style/main.scss';
import runCountdown from './components/countdown/countdown';
import userSubscription from './components/user-subscription/user-subscription';
import toggleLanguage from './components/toggle-language/toggle-language';
import initialAnimation from './components/UI/initial-animation/initial-animation';
import sliderAccordion from './components/slider-accordion/slider-accordion';
import openOtherEvents from './components/open-other-events/open-other-events';

window.addEventListener('load', initialAnimation);
runCountdown();
userSubscription();
toggleLanguage();
sliderAccordion();
openOtherEvents();
