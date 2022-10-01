export const emailValidate = (text: string): boolean => {
  const isValidEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return isValidEmail.test(text);
};

export const userNameValidate = (text: string): boolean => {
  const isValidUserName = text !== '' && text.length > 1 && text.length < 9;
  return isValidUserName;
};

export const passwordValidate = (text: string): boolean => {
  const isValidPassword = text !== '' && text.length > 7 && text.length < 21;
  return isValidPassword;
};
