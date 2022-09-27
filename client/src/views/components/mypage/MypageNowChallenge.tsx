import React from 'react';
import styled from 'styled-components';
import { Title, ContentBox, Words, ContentWrapper } from './mypageStyle';
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
  const dummy = [{ day: 1, content: 'hi' }, { day: 2, content: 'hi2' },
    { day: 3, content: 'hi2' }, { day: 4, content: 'hi2' }, { day: 5, content: 'hi2' }];
  return (
    <>
      <Title>진행중인 챌린지</Title>
      <ContentBox height='220px'>
        <Title>📌 5일 기상 챌린지</Title>
        <Title fontSize='1.2rem' paddingTop='23px'>도전 3일차예요!</Title>
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
      <ContentWrapper padding='0 30px'>
        {dummy.map((el, idx) => {
          return (
            <Content key={idx}>
              {iconMap[el.day - 1]}
              <EachDay>
                <div>{el.day}</div>
                <div>{el.content}</div>
                {/* <img src=''></img> */}
              </EachDay>
          </Content>
          );
        })}
      </ContentWrapper>
    </>
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
