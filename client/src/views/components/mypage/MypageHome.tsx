import React from 'react';
import styled from 'styled-components';
import Arrow from 'views/components/icons/mypage/Arrow';
import Garden from 'views/components/icons/mypage/Garden';
import Notebook from 'views/components/icons/mypage/Notebook';
import Rank from 'views/components/icons/mypage/Rank';
import Credit from 'views/components/icons/mypage/Credit';
import { Link } from 'react-router-dom';

const MypageHome = () => {
  return (
    <>
      <TapInfo to='settings'>
        <Left>
          <div>인장님, 안녕하세요!</div>
          <Info>abc@naver.com</Info>
        </Left>
        <Right>
          <Arrow />
        </Right>
      </TapInfo>
        <TapMenu to='challenge'>
          <Icon>
            <Garden />
          </Icon>
          진행중인 챌린지
        </TapMenu>
      <TapMenu to='book'>
        <Icon>
            <Notebook />
        </Icon>
        지난 챌린지 모아보기
        </TapMenu>
      <TapMenu to='rank'>
        <Icon>
          <Rank />
        </Icon>
        실시간 도장 랭킹 확인하기
        </TapMenu>
      <TapMenu to='credit'>
        <Icon>
          <Credit />
        </Icon>
        선인장 키우기를 만든 사람들
        </TapMenu>
    </>
  );
};

const TapInfo = styled(Link)`
background: none;
font-size: 1.2rem;
padding-bottom: 1rem;
border-bottom: 0.5px solid var(--shadow-beige-01);
display: flex;
justify-content: space-between;
`;

const Info = styled.div`
margin-top: 0.5rem;
font-size: 1.1rem;
text-align: left;
`;

const Left = styled.div`
justify-content: flex-start;
`;

const Right = styled.div`
display: flex;
align-items: center;
padding-top: 10px;
`;

const Icon = styled.div`
margin: 0 10px;
`;

const TapMenu = styled(Link)`
background: none;
box-shadow: 2px 3px 5px rgba(192, 180, 152, 0.2);
border-radius: 10px;
border: 0.1px solid var(--shadow-beige-01);
font-size: 1.5rem;
height: 80px;
display: flex;
align-items: center;
margin-top: 30px;
`;

export default MypageHome;
