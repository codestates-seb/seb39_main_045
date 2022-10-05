import React from 'react';
import type { UserType } from 'feature/profile/user';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useSelectorTyped from 'utils/useSelectorTyped';
import {
  setEditUsernameValidity,
  setEditPrePasswordValidity,
  setEditError,
  setEditRequestStatus
} from 'feature/form';
import { redirectLogin } from 'feature/location';

const useSettingsPageMounted = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginStatus }: Pick<UserType, 'loginStatus'> = useSelectorTyped(state => state.user);

  React.useEffect(() => {
    if (!loginStatus) {
      dispatch(redirectLogin());
      navigate('/login');
    }
    dispatch(setEditUsernameValidity(false));
    dispatch(setEditPrePasswordValidity(false));
    dispatch(setEditError(''));
    dispatch(setEditRequestStatus(''));
  }, []);
};

export default useSettingsPageMounted;
