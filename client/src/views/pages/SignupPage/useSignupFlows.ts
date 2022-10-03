import { postSignup } from 'utils/memberApis';
import useSelectorTyped from 'utils/useSelectorTyped';
import { useNavigate } from 'react-router-dom';
import { setSignupError, setSignupRequestStatus } from 'feature/form';
import { useDispatch } from 'react-redux';

const useSignupFlows = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, username, password, isValidEmail, isValidPassword, isValidUserName } = useSelectorTyped((state) => state.form.signup_form);

  const doSignup = async () => {
    if (!isValidEmail || !isValidPassword || !isValidUserName) {
      dispatch(setSignupError('입력 정보를 확인해주세요.'));
      return false;
    }
    dispatch(setSignupRequestStatus('처리중입니다...'));
    const { data, status } = await postSignup({ email, username, password });
    if (status < 300) {
      dispatch(setSignupRequestStatus('가입되었습니다! 3초 후 로그인 페이지로 이동합니다.'));
      setTimeout(() => navigate('/login'), 3000);
    } else {
      dispatch(setSignupRequestStatus(''));
      dispatch(setSignupError(data.fieldErrors[0].reason ?? '입력 정보를 확인해주세요.'));
    }
  };

  return { doSignup };
};

export default useSignupFlows;
