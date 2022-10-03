import { setIsValid, clearChooseForm } from 'feature/challenge/form';
import { updateUser } from 'feature/profile/user';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { postChall } from 'utils/challengeApis';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { DefaultChalls, ExtendChalls } from '../../../types/challengePageTypes';
// 엔드포인트가 같다. 같으면 데이터 verify만 하면된다.
const challSubmit = async (
  dispatch: Dispatch<AnyAction>,
  challengeType: string,
  formData: DefaultChalls | ExtendChalls
): Promise<void> => {
  const { data, status } = await postChall(challengeType, formData);
  if (status < 300) {
    dispatch(updateUser({ ...data.data, status: 'in_progress' }));
    dispatch(clearChooseForm());
  } else {
    alert('챌린지 등록에 실패했습니다 다시 시도해 주세요');
  }
};

const challVerify = () => {
  const { challengeType, targetDate, targetTime } = useSelector(
    (state: RootState) => state.chall.challenge_form
  );
  const dispatch = useDispatch();
  const verifyForm = () => {
    if (challengeType === 'none') {
      dispatch(setIsValid({ isValid: false }));
      alert('챌린지를 선택해주세요');
      return;
    }
    if (targetDate === 0) {
      dispatch(setIsValid({ isValid: false }));
      alert('목표일을 선택해주세요');
      return;
    }
    if (challengeType === 'study' && (targetTime < 1 || targetTime > 23)) {
      dispatch(setIsValid({ isValid: false }));
      alert('선택 가능한 시간을 선택해주세요');
      return;
    }
    if (challengeType === 'morning' && (targetTime < 5 || targetTime > 8)) {
      dispatch(setIsValid({ isValid: false }));
      alert('선택 가능한 시간을 선택해주세요');
      return;
    }

    dispatch(setIsValid({ isValid: true }));
    if (challengeType === 'thanks') {
      return challSubmit(dispatch, challengeType, { targetDate });
    } else {
      return challSubmit(dispatch, challengeType, { targetDate, targetTime });
    }
  };
  return verifyForm;
};
export default challVerify;
