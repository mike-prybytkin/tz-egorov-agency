import './style/main.scss';
import runCountdown from './components/countdown/countdown';
import userSubscription from './components/user-subscription/user-subscription';
import toggleLanguage from './components/toggle-language/toggle-language';
import initialAnimation from './components/UI/initial-animation/initial-animation';

window.addEventListener('load', initialAnimation);
runCountdown();
userSubscription();
toggleLanguage();
