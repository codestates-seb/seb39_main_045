import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'feature/profile/user';
import { postLogout } from 'utils/memberApis';

export const useAlertFlows = () => {
  const dispatch = useDispatch();
  const doLogout = async (): Promise<void> => {
    const { data, status } = await postLogout();
    if (status < 300) {
      dispatch(logoutUser());
    } else {
      console.log(data);
      alert('로그아웃에 실패했습니다.');
    }
  };

  return { doLogout };
};
export default useAlertFlows;
