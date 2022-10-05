import { postFindpw } from 'utils/memberApis';
import type { ForgotPWForm } from 'feature/form';
import useSelectorTyped from 'utils/useSelectorTyped';
import { setForgotPWRequsetStatus } from 'feature/form';
import { useDispatch } from 'react-redux';

const useForgotPasswordFlows = () => {
  const dispatch = useDispatch();
  const {
    email,
    username,
    isValidUserName,
    isValidEmail
  }: ForgotPWForm = useSelectorTyped((state) =>
    state.form.forgotPW_form);

  const findForgotPW = async () => {
    if (!isValidEmail || !isValidUserName) {
      dispatch(setForgotPWRequsetStatus('입력하신 정보를 확인해주세요.'));
      return false;
    }
    dispatch(setForgotPWRequsetStatus('처리중입니다...'));
    const { data, status } = await postFindpw({ email, username });
    if (status > 299) {
      dispatch(setForgotPWRequsetStatus(data.message ?? '요청이 실패했습니다. 잠시후 다시 시도해주세요.'));
      return false;
    }
    dispatch(setForgotPWRequsetStatus('입력하신 이메일로 임시 비밀번호를 발송했습니다.'));
    setTimeout(() => {
      dispatch(setForgotPWRequsetStatus(''));
    }, 10000);
  };
  return { findForgotPW };
};

export default useForgotPasswordFlows;
