import React from 'react';
import type { UserType } from 'feature/profile/user';
import useSelectorTyped from 'utils/useSelectorTyped';
import { useNavigate } from 'react-router-dom';
import { redirectLogin } from 'feature/location';
import { useDispatch } from 'react-redux';

const useRedirectLogoutUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginStatus }: Pick<UserType, 'loginStatus'> = useSelectorTyped(state => state.user);
  React.useEffect(() => {
    if (!loginStatus) {
      dispatch(redirectLogin());
      navigate('/login');
    }
  }, []);
};

export default useRedirectLogoutUser;
