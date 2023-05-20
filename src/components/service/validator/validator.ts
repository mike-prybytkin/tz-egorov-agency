const checkEmail = (input: HTMLInputElement) => {
  return !/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
};

export default checkEmail;
