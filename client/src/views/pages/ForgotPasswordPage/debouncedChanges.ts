import debounce from 'utils/debounce';
import { useDispatch } from 'react-redux';
import {
  setForgotPWEmail,
  setForgotPWUsername,
  setForgotPWEmailValidity,
  setForgotPWUsernameValidity,
  setForgotPWRequsetStatus
} from 'feature/form';
import { emailValidate, userNameValidate } from 'utils/validates';

const handleDebouncedChange = () => {
  const dispatch = useDispatch();

  const debouncedSetEmail = debounce((value) => dispatch(setForgotPWEmail(value)), 30);
  const debouncedEmailValidate = debounce((value) => dispatch(setForgotPWEmailValidity(emailValidate(value))));
  const debouncedSetUsername = debounce((value) => dispatch(setForgotPWUsername(value)), 30);
  const debouncedUsernameValidate = debounce(value => dispatch(setForgotPWUsernameValidity(userNameValidate(value))));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setForgotPWRequsetStatus(''));
    const { id, value } = e.currentTarget;

    switch (id) {
      case 'email':
        debouncedSetEmail(value);
        debouncedEmailValidate(value);
        break;
      case 'username':
        debouncedSetUsername(value);
        debouncedUsernameValidate(value);
        break;
      default:
        break;
    }
  };
  return { onChange };
};

export default handleDebouncedChange;
