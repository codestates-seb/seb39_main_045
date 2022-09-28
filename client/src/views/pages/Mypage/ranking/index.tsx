import React from 'react';
import { ContentBox, ShareTitle, RankBox } from '../mypage.style';
import { Title } from '../../../components/UI/molecules/text.style';
import { ScrollContainer, AlignCenter } from 'views/components/UI/layout';
import GoldMedal from 'views/components/icons/mypage/GoldMedal';
import SilverMedal from 'views/components/icons/mypage/SilverMedal';
import BronzeMedal from 'views/components/icons/mypage/BronzeMedal';
import More from 'views/components/icons/mypage/More';
import KakaoShare from './KakaoShare';
import TwitterShare from './TwitterShare';
import StampList from './StampList';
// import axios from 'axios';

const iconMap = [<GoldMedal key="goldMedal" />, <SilverMedal key="silverMedal" />, <BronzeMedal key="bronzeMedal" />];

const MypageRanking = () => {
  // useEffect(() => {
  //   axios.get('/rankings', { headers: { accessToken } })
  //     .then(res => console.log(res.data.data))
  //     .catch(err => console.log(err));
  // });

  const dummy = [{ username: '이름', stamps: 35 }, { username: '이름', stamps: 35 }, { username: '이름', stamps: 35 }];

  return (
    <>
    <Title.Main>실시간 도장 랭킹 확인하기</Title.Main>
    <ContentBox>
      {iconMap.map((el, idx) => {
        return (
          <RankBox key={idx}>
            {iconMap[idx]}
            <div>{dummy[idx].username}</div>
            <div>{dummy[idx].stamps}</div>
          </RankBox>
        );
      })}
      <AlignCenter>
        <More />
      </AlignCenter>
      <RankBox >
        <div>50위</div>
        <div>나</div>
        <div>5</div>
      </RankBox>
    </ContentBox>
    <ScrollContainer>
      <ShareTitle>
        <Title.Sub>총 도장 갯수</Title.Sub>
        <div>
          <KakaoShare />
          <TwitterShare />
          으로 자랑하기✨
        </div>
      </ShareTitle>
      <StampList />
    </ScrollContainer>
    </>
  );
};

export default MypageRanking;
