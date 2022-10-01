import { logoutUser, updateUser } from 'feature/profile/user';
import { postLogout } from 'utils/memberApis';
import { deleteChall } from 'utils/challengeApis';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

const doLogout = async (dispatch: Dispatch<AnyAction>): Promise<void> => {
  const { data, status } = await postLogout();
  if (status < 300) {
    dispatch(logoutUser());
  } else {
    console.log(data);
    alert('로그아웃에 실패했습니다.');
  }
};
const giveUp = async (dispatch: Dispatch<AnyAction>): Promise<void> => {
  const { data, status } = await deleteChall();
  if (status < 300) {
    dispatch(updateUser({ status: 'none', progress: -1 }));
  } else {
    console.log(data);
    alert('챌린지 삭제에 실패했습니다. ');
  }
};

export { doLogout, giveUp };
