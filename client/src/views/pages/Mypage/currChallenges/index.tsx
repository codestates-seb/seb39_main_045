import React from 'react';
import { ContentBox, GreenArea, BaseArea, GraphWrapper, NowChallengeGrid } from '../mypage.style';
import { Title } from '../../../components/UI/molecules/text.style';
import { ScrollContainer, AlignCenter } from 'views/components/UI/layout';
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
// 0%~ 20% : * 0.2
// 70% ~ : 0.7 - 60px
// 90% ~ : * 0.9 - 92px

  const dummy = [{ day: 1, content: 'hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi' }, { day: 2, content: 'hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi2' },
    { day: 3, content: 'hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi2' }, { day: 4, content: 'hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi2' }, { day: 5, content: 'hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi2' }];
  return (
    <>
      <Title.Main>진행중인 챌린지</Title.Main>
      <ContentBox>
        <Title.Main>📌 5일 기상 챌린지</Title.Main>
        <Title.Sub>도전 3일차예요!</Title.Sub>
        <GraphWrapper>
          <GreenArea>
            <GraphL />
            <GraphM />
          </GreenArea>
          <BaseArea>
            <GraphR />
          </BaseArea>
        </GraphWrapper>
        <AlignCenter>화이팅! 챌린지 성공까지 2일 남았어요</AlignCenter>
      </ContentBox>
      <ScrollContainer>
        {dummy.map((el, idx) => {
          return (
            <NowChallengeGrid key={idx}>
              {iconMap[el.day - 1]}
              <div>{el.day}</div>
              <div>{el.content}</div>
              {/* <img src='https://yt3.ggpht.com/jNJ6FV83KdlgTHor9nqmxPQi6zDMhXZJl9wBNWHVgixbUUZikFg_TGrxJ9CK7ZXW_2zzWvmi1g=s176-c-k-c0x00ffffff-no-rj'></img> */}
            </NowChallengeGrid>
          );
        })}
      </ScrollContainer>
    </>
  );
};

export default NowChallenge;
