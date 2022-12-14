import React from 'react';
import { useDispatch } from 'react-redux';
import { getRanking } from 'utils/challengeApis';
import { getData, updateStatus } from 'feature/ranking';

const useRankingPage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    // window.Kakao.init(process.env.REACT_APP_KAKAO_JS);
    // window.Kakao.isInitialized();

    const getState = async () => {
      dispatch(updateStatus('순위를 불러오고 있어요'));
      const { data, status } = await getRanking();
      if (status > 299) {
        dispatch(updateStatus('데이터를 불러오는 데 실패했습니다. 페이지를 새로고침해주세요.'));
        return false;
      }
      if (data.data.myStamps.length === 0) dispatch(updateStatus('아직 도장이 없어요.'));
      else dispatch(updateStatus(''));
      dispatch(getData(data.data));
    };

    void getState();
  }, []);
};

export default useRankingPage;
