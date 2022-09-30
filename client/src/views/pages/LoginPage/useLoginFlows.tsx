import React from 'react';
import { postLogin } from 'utils/memberApis';
import { loginUser } from 'feature/profile/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'store/store';

const useLoginFlows = (next: string) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password } = useSelector(
    (state: RootState) => state.form.login_form
  );
  const { loginStatus } = useSelector((state: RootState) => state.user);

  const doLogin = async (): Promise<void> => {
    if (email === '' || password === '') return;

    const { data, status } = await postLogin({ email, password });
    if (status < 300) {
      console.log(data);
      dispatch(loginUser(data.data));
    }
  };

  React.useEffect(() => {
    if (loginStatus) navigate(next);
  }, [loginStatus]);

  return { doLogin };
};

export default useLoginFlows;
