import { logoutUser, updateUser } from 'feature/profile/user';
import { deleteUser, postLogout } from 'utils/memberApis';
import { deleteChall, getEnding, getWater } from 'utils/challengeApis';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { setAlertOpen } from 'feature/challenge/form';

const doLogout = async (dispatch: Dispatch<AnyAction>): Promise<void> => {
  const { status } = await postLogout();
  if (status < 500) {
    dispatch(logoutUser());
    dispatch(setAlertOpen({ isOpen: false, status: 'none' }));
  } else {
    alert('로그아웃에 실패했습니다.');
  }
};
const giveUp = async (dispatch: Dispatch<AnyAction>): Promise<void> => {
  const { status } = await deleteChall();
  if (status < 300) {
    dispatch(
      updateUser({
        challengeType: 'none',
        status: 'none',
        progress: -1,
        now: 0,
        targetDate: 0
      })
    );
    dispatch(setAlertOpen({ isOpen: false, status: 'none' }));
  } else {
    alert('챌린지 삭제에 실패했습니다. ');
  }
};
const resign = async (dispatch: Dispatch<AnyAction>): Promise<void> => {
  const { status } = await deleteUser();
  if (status < 300) {
    dispatch(logoutUser());
    dispatch(setAlertOpen({ isOpen: false, status: 'none' }));
  } else {
    alert('챌린지 삭제에 실패했습니다. ');
  }
};
const handleGiveWater = async (
  setMessage: (state: string) => void,
  setIsOpen: (state: boolean) => void
): Promise<void> => {
  const { data, status } = await getWater();
  if (status < 300) {
    setMessage(data.data.text);
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 1200);
  }
};
const confirmSuccessFail = async (
  dispatch: Dispatch<AnyAction>,
  setIsOpen: (state: boolean) => void
): Promise<void> => {
  const { status } = await getEnding();

  if (status < 300) {
    dispatch(
      updateUser({
        challengeType: 'none',
        status: 'none',
        progress: -1,
        now: 0,
        targetDate: 0
      })
    );
    setIsOpen(false);
  } else {
    alert('확인이 안먹혀요;;');
  }
};
export { doLogout, giveUp, handleGiveWater, confirmSuccessFail, resign };
