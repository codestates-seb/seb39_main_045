import { logoutUser, updateUser } from 'feature/profile/user';
import { postLogout } from 'utils/memberApis';
import { deleteChall } from 'utils/challengeApis';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { setIsConfirm } from 'feature/challenge/form';

const doLogout = async (dispatch: Dispatch<AnyAction>): Promise<void> => {
  const { status } = await postLogout();
  if (status < 300) {
    dispatch(logoutUser());
    dispatch(setIsConfirm({ isConfirm: true }));
  } else {
    alert('로그아웃에 실패했습니다.');
  }
};
const giveUp = async (dispatch: Dispatch<AnyAction>): Promise<void> => {
  const { status } = await deleteChall();
  if (status < 300) {
    dispatch(updateUser({ challengeType: null, status: 'none', progress: -1 }));
    dispatch(setIsConfirm({ isConfirm: true }));
  } else {
    alert('챌린지 삭제에 실패했습니다. ');
  }
};

export { doLogout, giveUp };
