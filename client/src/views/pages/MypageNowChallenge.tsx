import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Container, TapHome, Title, ContentBox, Words } from 'views/components/mypage/mypage';
import GraphL from 'views/components/icons/mypage/GraphL';
import GraphM from 'views/components/icons/mypage/GraphM';
import GraphR from 'views/components/icons/mypage/GraphR';
import Day1 from 'views/components/icons/mypage/Day1';
import Day2 from 'views/components/icons/mypage/Day2';
import Day3 from 'views/components/icons/mypage/Day3';
import Day4 from 'views/components/icons/mypage/Day4';
import Day5 from 'views/components/icons/mypage/Day5';
import Day6 from 'views/components/icons/mypage/Day6';
import Day7 from 'views/components/icons/mypage/Day7';

const iconMap = [<Day1 key='day1'/>, <Day2 key='day2'/>, <Day3 key='day3' />, <Day4 key='day4'/>, <Day5 key='day5' />, <Day6 key='day6'/>, <Day7 key='day7'/>];

const NowChallenge = () => {
  const navigate = useNavigate();
  const dummy = [{ day: 1, content: 'hi' }, { day: 2, content: 'hi2' },
    { day: 2, content: 'hi2' }, { day: 2, content: 'hi2' }, { day: 2, content: 'hi2' }];

  return (
    <Container>
      <TapHome onClick={() => navigate('/mypage')}>
        <span className="material-symbols-outlined">
        keyboard_backspace
        </span>
        마이페이지
      </TapHome>
      <Title size='title'>
        진행중인 챌린지
      </Title>
      <ContentBox>
        <Title size='title'>📌 5일 기상 챌린지</Title>
        <Title size='content'>도전 3일차예요!</Title>
        <GraphWrapper>
          <GreenArea>
            <GraphL />
            <GraphM />
          </GreenArea>
          <BaseArea>
            <GraphR />
          </BaseArea>
        </GraphWrapper>
        <Words>화이팅! 챌린지 성공까지 2일 남았어요</Words>
      </ContentBox>
      <DayContentWrapper>
        {dummy.map((el, idx) => {
          return (
            <Content key={idx}>
              {iconMap[idx]}
              <EachDay>
                <div>2022년 9월 16일 금요일</div>
                <div>7시 10분 기상</div>
                {/* <img src=''></img> */}
              </EachDay>
          </Content>
          );
        })}
      </DayContentWrapper>
    </Container>
  );
};

const GreenArea = styled.div`
// 0%~ 20% : * 0.2 
// 70% ~ : 0.7 - 60px
// 90% ~ : * 0.9 - 92px
width: calc(100% * 0.8 - 60px);
height: 35px;
z-index: 1;
background-color: var(--graph-bg-green);
position: absolute;
display: flex;
justify-content: space-between;
`;

const BaseArea = styled.div`
height: 100%;
background-color: var(--mypage-bg-beige);
position: relative;
display: flex;
justify-content: flex-end;
box-shadow: 1px 1px 5px 1px var(--shadow-beige-03);
`;

const GraphWrapper = styled.div`
width: 100%;
height: 35px;
margin: 28px 0;
`;

const DayContentWrapper = styled.div`
padding: 0 30px;
margin-bottom: 30px;
overflow-y: scroll;
display: flex;
flex-direction: column;
//스크롤바 너비
::-webkit-scrollbar {
width: 8px;
}
//스크롤바
::-webkit-scrollbar-thumb {
  height: 30%;
  background: var(--shadow-beige-03);
  border-radius: 10px;
}
//스크롤바 배경
/* ::-webkit-scrollbar-track {
background: blue;
} */
`;

const Content = styled.div`
display: flex;
margin: 30px 0;
min-height: 50px;
`;

const EachDay = styled.div`
flex: 1;
margin: 0 30px;
font-size: 1.1rem;
`;

export default NowChallenge;
