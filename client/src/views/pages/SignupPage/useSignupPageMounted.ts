import { useDispatch } from 'react-redux';
import { setSignupEmailValidity, setSignupUsernameValidity, setSignupPasswordValidity, setSignupError, setSignupRequestStatus } from 'feature/form';
import React from 'react';

const useSignupPageMounted = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setSignupEmailValidity(false));
    dispatch(setSignupUsernameValidity(false));
    dispatch(setSignupPasswordValidity(false));
    dispatch(setSignupError(''));
    dispatch(setSignupRequestStatus(''));
  }, []);
};

export default useSignupPageMounted;
