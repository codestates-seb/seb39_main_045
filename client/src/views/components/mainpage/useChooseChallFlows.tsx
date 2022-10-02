import { postChall } from 'utils/challengeApis';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import challVerify from './challVerify';
const useChooseChallFlows = () => {
  const dispatch = useDispatch();
  const { isValid, challengeType, targetDate, targetTime } = useSelector(
    (state: RootState) => state.challChoose.challenge_form
  );
  // challVerify();
  const challSubmit = async (): Promise<void> => {
    const { data, status } = await postChall(challengeType, {
      targetDate,
      targetTime
    });
    if (status < 300) {
      alert('성공했당께!');
    } else {
      alert('실패했슈...');
    }
  };
  return { challSubmit };
};
export default useChooseChallFlows;
