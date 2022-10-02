import React from 'react';
import { postSignup } from 'utils/memberApis';
import useSelectorTyped from 'utils/useSelectorTyped';
import { useNavigate } from 'react-router-dom';
import { setSignupError } from 'feature/form';

const useSignupFlows = () => {
  const navigate = useNavigate();
  const { email, username, password } = useSelectorTyped((state) => state.form.signup_form);

  const doSignup = async () => {
    if (email === '' || username === '' || password === '') return false;

    const { data, status } = await postSignup({ email, username, password });
    if (status < 300) navigate('/login');
    else setSignupError(data.message);
  };

  return { doSignup };
};

export default useSignupFlows;
