import checkEmail from '../service/validator/validator';
import createSubscriber from '../../api/api';

const formAddClassError = (input: HTMLInputElement) => {
  input.parentElement?.classList.add('error');
  input.classList.add('error');
};

const formRemoveClassError = (input: HTMLInputElement) => {
  input.parentElement?.classList.remove('error');
  input.classList.remove('error');
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
  const form = document.querySelector('.form') as HTMLFormElement;
  const emailInput = document.querySelector('.form__email') as HTMLInputElement;

  const formSend = (e: Event) => {
    e.preventDefault();
    const isValid = formValidate(emailInput);
    if (isValid) {
      createSubscriber({ email: emailInput.value });
      form.reset();
    }
  };

  form?.addEventListener('submit', formSend);
};

export default userSubscription;
