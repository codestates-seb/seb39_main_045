import React from 'react';
import { postLogin } from 'utils/memberApis';
import { loginUser } from 'feature/profile/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'store/store';
import { clickMain } from 'feature/location';
import { setIsValid } from 'feature/form';

const useLoginFlows = (next: string) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password } = useSelector(
    (state: RootState) => state.form.login_form
  );
  const { loginStatus } = useSelector((state: RootState) => state.user);

  const doLogin = async (): Promise<void> => {
    if (email === '' || password === '') {
      setIsValid({ isValid: false, err: '아이디와 비밀번호를 입력해주세요' });
      return;
    }

    const { data, status } = await postLogin({ email, password });
    if (status < 300) {
      dispatch(loginUser(data.data));
      dispatch(clickMain());
    } else if (status === 400) {
      dispatch(
        setIsValid({
          isValid: false,
          err: '비밀번호 값은 최소 8자에서 최대 20자 이하입니다.'
        })
      );
    } else if (status === 401) {
      dispatch(
        setIsValid({
          isValid: false,
          err: '이메일과 비밀번호가 일치하지 않습니다'
        })
      );
    } else {
      dispatch(
        setIsValid({ isValid: false, err: '알 수 없는 에러가 발생했습니다' })
      );
    }
  };

  React.useEffect(() => {
    if (loginStatus) navigate(next);
  }, [loginStatus]);

  return { doLogin };
};

export default useLoginFlows;
