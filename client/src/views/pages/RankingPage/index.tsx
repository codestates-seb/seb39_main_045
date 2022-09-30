import React from 'react';
import { ShareTitle } from './RankingsPage.style';
import { Title } from 'views/components/UI/molecules/text.style';
import { Layout } from 'views/components/UI/Layout.style';
import KakaoShare from './KakaoShare';
import TwitterShare from './TwitterShare';
import StampList from './StampList';
import MyPageNav from 'views/components/common/MyPageNav';
import Rankers from './Rankers';
// import axios from 'axios';

const MypageRanking = () => {
  // useEffect(() => {
  //   axios.get('/rankings', { headers: { accessToken } })
  //     .then(res => console.log(res.data.data))
  //     .catch(err => console.log(err));
  // });

  return (
    <Layout.PageContainer>
      <MyPageNav />
      <Title.Main>실시간 도장 랭킹 확인하기</Title.Main>
      <Rankers />
      <ShareTitle>
        <Title.Sub>총 도장 갯수</Title.Sub>
        <div>
          <KakaoShare />
          <TwitterShare />
          으로 자랑하기✨
        </div>
      </ShareTitle>
      <StampList />
    </Layout.PageContainer>
  );
};

export default MypageRanking;
