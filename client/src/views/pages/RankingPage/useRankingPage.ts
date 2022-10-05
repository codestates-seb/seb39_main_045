import React from 'react';
import { useDispatch } from 'react-redux';
import { getRanking } from 'utils/challengeApis';
import { getData, updateStatus } from 'feature/ranking';

const useRankingPage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const getState = async () => {
      dispatch(updateStatus('순위를 불러오고 있어요'));
      const { data, status } = await getRanking();
      if (status > 299) {
        dispatch(updateStatus('데이터를 불러오는 데 실패했습니다. 페이지를 새로고침해주세요.'));
        return false;
      }
      dispatch(updateStatus(''));
      dispatch(getData(data.data));
    };

    void getState();
  }, []);
};

export default useRankingPage;
