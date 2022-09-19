import React from 'react';
import styled from 'styled-components';
import { Container, TapMenu, TapHome } from 'views/components/mypage/mypage';
import Arrow from 'views/components/icons/mypage/Arrow';
import Garden from 'views/components/icons/mypage/Garden';
import Notebook from 'views/components/icons/mypage/Notebook';
import Rank from 'views/components/icons/mypage/Rank';
import Credit from 'views/components/icons/mypage/Credit';

const Mypage = () => {
  return (
    <Container>
      <TapHome>마이페이지</TapHome>
      <TapInfo>
        <Left>
          <div>인장님, 안녕하세요!</div>
          <Info>abc@naver.com</Info>
        </Left>
        <Right>
          <Arrow />
        </Right>
      </TapInfo>
      <TapMenu>
        <Icon>
          <Garden />
        </Icon>
        진행중인 챌린지
      </TapMenu>
      <TapMenu>
        <Icon>
          <Notebook />
        </Icon>
        지난 챌린지 모아보기
        </TapMenu>
      <TapMenu>
        <Icon>
          <Rank />
        </Icon>
        실시간 도장 랭킹 확인하기
        </TapMenu>
      <TapMenu>
        <Icon>
          <Credit />
        </Icon>
        선인장 키우기를 만든 사람들</TapMenu>
    </Container>
  );
};

const TapInfo = styled.button`
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

export default Mypage;
