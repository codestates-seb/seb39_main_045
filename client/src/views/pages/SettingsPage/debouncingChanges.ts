import debounce from 'utils/debounce';
import { useDispatch } from 'react-redux';
import { setEditUsername, setEditPrePW, setEditNewPW, setEditUsernameValidity, setEditPrePasswordValidity, setEditNewPasswordValidity, setEditError, setEditRequestStatus } from 'feature/form';
import { userNameValidate, passwordValidate } from 'utils/validates';

const handleDebouncedChange = () => {
  const dispatch = useDispatch();

  const debouncedSetUsername = debounce((value) => dispatch(setEditUsername({ username: value })), 30);
  const debouncedUsernameValidate = debounce(value => dispatch(setEditUsernameValidity(userNameValidate(value))));
  const debouncedSetPrePassword = debounce((value) => dispatch(setEditPrePW({ prePassword: value })), 30);
  const debouncedPrePasswordValidate = debounce((value) => dispatch(setEditPrePasswordValidity(passwordValidate(value))));
  const debouncedSetNewPassword = debounce((value) => dispatch(setEditNewPW({ newPassword: value })), 30);
  const debouncedNewPasswordValidate = debounce((value) => dispatch(setEditNewPasswordValidity(passwordValidate(value))));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEditError(''));
    dispatch(setEditRequestStatus(''));
    const { id, value } = e.currentTarget;

    switch (id) {
      case 'username':
        debouncedSetUsername(value);
        debouncedUsernameValidate(value);
        break;
      case 'prePassword':
        debouncedSetPrePassword(value);
        debouncedPrePasswordValidate(value);
        break;
      case 'newPassword':
        debouncedSetNewPassword(value);
        debouncedNewPasswordValidate(value);
        break;
      default:
        break;
    }
  };
  return { onChange };
};

export default handleDebouncedChange;
