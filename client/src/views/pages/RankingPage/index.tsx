import React from 'react';
import { ShareTitle, RankBox } from './RankingsPage.style';
import { Title } from 'views/components/UI/molecules/text.style';
import { Layout } from 'views/components/UI/Layout.style';
import { MypageIcon } from 'views/components/icons/mypage';
import KakaoShare from './KakaoShare';
import TwitterShare from './TwitterShare';
import StampList from './StampList';
import MyPageNav from 'views/components/common/MyPageNav';
// import axios from 'axios';

const iconMap = [
  <MypageIcon.GoldMedal key="goldMedal" />,
  <MypageIcon.SilverMedal key="silverMedal" />,
  <MypageIcon.BronzeMedal key="bronzeMedal" />
];

const MypageRanking = () => {
  // useEffect(() => {
  //   axios.get('/rankings', { headers: { accessToken } })
  //     .then(res => console.log(res.data.data))
  //     .catch(err => console.log(err));
  // });

  const dummy = [{ username: '이름', stamps: 35 }, { username: '이름', stamps: 35 }, { username: '이름', stamps: 35 }];

  return (
    <Layout.PageContainer>
      <MyPageNav />
      <Title.Main>실시간 도장 랭킹 확인하기</Title.Main>
      <Layout.ContentBox>
        {iconMap.map((el, idx) => {
          return (
            <RankBox key={idx}>
              {iconMap[idx]}
              <div>{dummy[idx].username}</div>
              <div>{dummy[idx].stamps}</div>
            </RankBox>
          );
        })}
        <Layout.AlignCenter>
          <MypageIcon.More />
        </Layout.AlignCenter>
        <RankBox >
          <div>50위</div>
          <div>나</div>
          <div>5</div>
        </RankBox>
      </Layout.ContentBox>
      <Layout.ScrollContainer>
        <ShareTitle>
          <Title.Sub>총 도장 갯수</Title.Sub>
          <div>
            <KakaoShare />
            <TwitterShare />
            으로 자랑하기✨
          </div>
        </ShareTitle>
        <StampList />
      </Layout.ScrollContainer>
    </Layout.PageContainer>
  );
};

export default MypageRanking;
