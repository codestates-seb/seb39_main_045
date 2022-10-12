import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setEditUsernameValidity,
  setEditError,
  setEditRequestStatus
} from 'feature/form';

const useSettingsPageMounted = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setEditUsernameValidity(false));
    dispatch(setEditError(''));
    dispatch(setEditRequestStatus(''));
  }, []);
};

export default useSettingsPageMounted;
