import React from 'react';
import { postLogin } from 'utils/memberApis';
import { loginUser } from 'feature/profile/user';
import { LoginData } from 'types/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'store/store';

const useLoginFlows = (next: string) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password, isValid } = useSelector(
    (state: RootState) => state.form.login_form
  );
  const { loginStatus } = useSelector((state) => state.user.profile);

  const doLogin = async () => {
    if (!email || !password) return false;

    const { data, status } = await postLogin(loginData);
    if (status < 300) {
      dispatch(loginUser(data.data));
      return true;
    }

    return false;
  };

  React.useEffect(() => {
    if (loginStatus) navigate(next);
  }, [loginStatus]);

  return { doLogin };
};

export default useLoginFlows;
