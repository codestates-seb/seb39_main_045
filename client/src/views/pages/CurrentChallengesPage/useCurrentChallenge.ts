import React from 'react';
import { getData, updateStatus, setTypeToKorean, setProgressToString } from 'feature/challenge/activeChallenge';
import { getNowChall } from 'utils/challengeApis';
import { useDispatch } from 'react-redux';

const useCurrentChallenge = () => {
  const dispatch = useDispatch();
  const labelMap: { [key: string]: string } = { morning: '기상', study: '공부', thanks: '감사일기' };

  React.useEffect(() => {
    const getState = async () => {
      dispatch(updateStatus('기록을 불러오고 있어요.'));
      const { data, status } = await getNowChall();
      if (status > 299) {
        dispatch(updateStatus('데이터를 불러오는 데 실패했습니다. 페이지를 새로고침하여 다시 시도해주세요.'));
        return false;
      }
      dispatch(updateStatus(''));
      dispatch(getData(data.data));
      dispatch(setTypeToKorean(labelMap[data.data.challengeType]));

      const PROGRESS: number = data.data.progress;
      if (PROGRESS === 0) dispatch(setProgressToString('0'));
      if (PROGRESS >= 1 && PROGRESS <= 20) dispatch(setProgressToString('calc(100% * 0.15)'));
      if (PROGRESS >= 31 && PROGRESS <= 40) dispatch(setProgressToString('calc(100% * 0.25)'));
      if (PROGRESS >= 41 && PROGRESS <= 60) dispatch(setProgressToString('calc(100% * 0.4)'));
      if (PROGRESS >= 61 && PROGRESS <= 70) dispatch(setProgressToString('calc(100% * 0.7 - 90px)'));
      if (PROGRESS >= 71 && PROGRESS <= 89) dispatch(setProgressToString('calc(100% * 0.7 - 50px)'));
      if (PROGRESS >= 90) dispatch(setProgressToString('calc(100% * 0.9 - 92px)'));
    };
    void getState();
  }, []);
};
export default useCurrentChallenge;
