import React from 'react';
import { GreenArea, BaseArea, GraphWrapper, NowChallengeGrid } from './CurrentChallengesPage.style';
import { Title } from 'views/components/UI/molecules/Text.style';
import { Layout } from 'views/components/UI/Layout.style';
import { MypageIcon } from 'views/components/icons/mypage';
import MyPageNav from 'views/components/common/MyPageNav';

const iconMap = [<MypageIcon.Day1 key='day1'/>, <MypageIcon.Day2 key='day2'/>, <MypageIcon.Day3 key='day3' />,
<MypageIcon.Day4 key='day4'/>, <MypageIcon.Day5 key='day5' />, <MypageIcon.Day6 key='day6'/>, <MypageIcon.Day7 key='day7'/>];

const NowChallenge = () => {
  // 0%~ 20% : * 0.2
  // 70% ~ : 0.7 - 60px
  // 90% ~ : * 0.9 - 92px
  const dummy = [
    { day: 1, content: 'hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi' },
    { day: 2, content: 'hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi2' },
    { day: 3, content: 'hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi2' },
    { day: 4, content: 'hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi2' },
    { day: 5, content: 'hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi2' }
  ];

  return (
    <Layout.PageContainer>
      <MyPageNav />
      <Title.Main>진행중인 챌린지</Title.Main>
      <Layout.ContentBox>
        <Title.Main>📌 5일 기상 챌린지</Title.Main>
        <Title.Sub>도전 3일차예요!</Title.Sub>
        <GraphWrapper>
          <GreenArea>
            <MypageIcon.GraphL />
            <MypageIcon.GraphM />
          </GreenArea>
          <BaseArea>
            <MypageIcon.GraphR />
          </BaseArea>
        </GraphWrapper>
        <Layout.AlignCenter>화이팅! 챌린지 성공까지 2일 남았어요</Layout.AlignCenter>
      </Layout.ContentBox>
      <Layout.ScrollContainer>
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
      </Layout.ScrollContainer>
    </Layout.PageContainer>
  );
};

export default NowChallenge;
