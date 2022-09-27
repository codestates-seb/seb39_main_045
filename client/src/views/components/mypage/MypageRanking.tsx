import React from 'react';
import styled from 'styled-components';
import { Title, ContentBox, Words, ContentWrapper } from './mypageStyle';
import GoldMedal from '../icons/mypage/GoldMedal';
import SilverMedal from '../icons/mypage/SilverMedal';
import BronzeMedal from '../icons/mypage/BronzeMedal';
import More from '../icons/mypage/More';
// import axios from 'axios';

const MypageRanking = () => {
  // useEffect(() => {
  //   axios.get('/rankings', { headers: { accessToken } })
  //     .then(res => console.log(res.data.data))
  //     .catch(err => console.log(err));
  // });

  return (
    <>
    <Title>실시간 도장 랭킹 확인하기</Title>
    <ContentBox height='330px'>
      <RankBox className='goldMedal'>
        <GoldMedal />
        <RankerName>이름s</RankerName>
        <Ranker>35</Ranker>
      </RankBox>
      <RankBox className='silverMedal'>
        <SilverMedal />
        <RankerName>이름ss</RankerName>
        <Ranker>20</Ranker>
      </RankBox>
      <RankBox className='bronzeMedal'>
        <BronzeMedal />
        <RankerName>이름sssså</RankerName>
        <Ranker>10</Ranker>
      </RankBox>
      <Words>
        <More />
      </Words>
      <RankBox className='noMedal'>
        <Ranker>50위</Ranker>
        <RankerName>나</RankerName>
        <Ranker>5</Ranker>
      </RankBox>
    </ContentBox>
    <ContentWrapper padding='10px'>
      <ShareTitle>
        <Title fontSize='1.2rem'>총 도장 갯수</Title>
      </ShareTitle>
    </ContentWrapper>
    </>
  );
};

const RankBox = styled.div`
  box-shadow: 2px 3px 5px rgba(192, 180, 152, 0.2);
  padding: 5px 20px;
  border-radius: 5px;
  display: flex;
  font-size: 1.2rem;
  margin-bottom: 15px;
  border: 0.5px solid var(--graph-bg-green);
  height: 50px;
  &.goldMedal {
    background-color: #d3efbb;
  }
  &.silverMedal {
    background-color: #d3efbb89;
  }
  &.bronzeMedal {
    background-color: #d3efbb3f;
  }
  &.noMedal {
    margin-top: 10px;
    border: 1px solid var(--shadow-beige-02);
  }
`;

const Ranker = styled.div`
  align-self: center;
  text-align: center;
`;

const RankerName = styled(Ranker)`
  flex: 1;
`;

const ShareTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default MypageRanking;
