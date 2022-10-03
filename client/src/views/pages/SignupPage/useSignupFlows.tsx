import React from 'react';
import { postSignup } from 'utils/memberApis';
import useSelectorTyped from 'utils/useSelectorTyped';
import { useNavigate } from 'react-router-dom';
import { setSignupError } from 'feature/form';
import { useDispatch } from 'react-redux';

const useSignupFlows = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, username, password, isValidEmail, isValidPassword, isValidUserName } = useSelectorTyped((state) => state.form.signup_form);

  const doSignup = async () => {
    if (!isValidEmail || !isValidPassword || !isValidUserName) return false;

    const { data, status } = await postSignup({ email, username, password });
    if (status < 300) navigate('/login');
    else dispatch(setSignupError(data.message ?? '입력 정보를 확인해주세요.'));
  };

  return { doSignup };
};

export default useSignupFlows;
