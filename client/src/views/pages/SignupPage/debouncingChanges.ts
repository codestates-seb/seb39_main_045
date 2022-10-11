import debounce from 'utils/debounce';
import { useDispatch } from 'react-redux';
import {
  setSignupEmail,
  setSignupUsername,
  setSignupPassword,
  setSignupEmailValidity,
  setSignupPasswordValidity,
  setSignupUsernameValidity,
  setSignupRequestStatus,
  setSignupError
} from 'feature/form';
import { emailValidate, userNameValidate, passwordValidate } from 'utils/validates';

const handleDebouncedChange = () => {
  const dispatch = useDispatch();

  const debouncedSetEmail = debounce((value) => dispatch(setSignupEmail({ email: value })), 30);
  const debouncedEmailValidate = debounce((value) => dispatch(setSignupEmailValidity(emailValidate(value))));
  const debouncedSetUsername = debounce((value) => dispatch(setSignupUsername({ username: value })), 30);
  const debouncedUsernameValidate = debounce(value => dispatch(setSignupUsernameValidity(userNameValidate(value))));
  const debouncedSetPassword = debounce((value) => dispatch(setSignupPassword({ password: value })), 30);
  const debouncedPasswordValidate = debounce((value) => dispatch(setSignupPasswordValidity(passwordValidate(value))));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSignupRequestStatus(''));
    dispatch(setSignupError(''));
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
      case 'password':
        debouncedSetPassword(value);
        debouncedPasswordValidate(value);
        break;
      default:
        break;
    }
  };
  return { onChange };
};

export default handleDebouncedChange;
