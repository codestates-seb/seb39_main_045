import { useDispatch } from 'react-redux';
import { setEditUsernameValidity, setEditPrePasswordValidity, setEditNewPasswordValidity, setEditError, setEditRequestStatus } from 'feature/form';
import React from 'react';

const useSettingsPageMounted = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setEditUsernameValidity(false));
    dispatch(setEditPrePasswordValidity(false));
    dispatch(setEditNewPasswordValidity(false));
    dispatch(setEditError(''));
    dispatch(setEditRequestStatus(''));
  }, []);
};

export default useSettingsPageMounted;
