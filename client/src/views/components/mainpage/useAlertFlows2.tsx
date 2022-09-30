import React from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'feature/profile/user';
import { deleteChall } from 'utils/challengeApis';
export const useAlertFlows = () => {
  // 얘는 챌린지
  const dispatch = useDispatch();
  const giveUp = async (): Promise<void> => {
    const { data, status } = await deleteChall();
    if (status < 300) {
      dispatch(updateUser({ status: 'none', progress: -1 }));
    } else {
      console.log(data);
      alert('챌린지 삭제에 실패했습니다. ');
    }
  };

  return { giveUp };
};
export default useAlertFlows;
