import checkEmail from '../service/validator/validator';
import createSubscriber from '../../api/api';
import { FORM, FORM_EMAIL, ERROR } from '../../constants/constants';
import { loaderOn } from '../UI/loader/loader';

const formAddClassError = (input: HTMLInputElement) => {
  input.parentElement?.classList.add(ERROR);
  input.classList.add(ERROR);
};

const formRemoveClassError = (input: HTMLInputElement) => {
  input.parentElement?.classList.remove(ERROR);
  input.classList.remove(ERROR);
};

const formValidate = (emailField: HTMLInputElement) => {
  formRemoveClassError(emailField);
  if (checkEmail(emailField)) {
    formAddClassError(emailField);
    return false;
  }
  return true;
};

const userSubscription = () => {
  const form = document.querySelector(FORM) as HTMLFormElement;
  const emailInput = document.querySelector(FORM_EMAIL) as HTMLInputElement;

  const formSend = (e: Event) => {
    e.preventDefault();
    const isValid = formValidate(emailInput);
    if (isValid) {
      loaderOn();
      createSubscriber({ email: emailInput.value });
      form.reset();
    }
  };

  form?.addEventListener('submit', formSend);
};

export default userSubscription;
