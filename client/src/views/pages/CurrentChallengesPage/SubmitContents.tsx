import React from 'react';
import { Layout } from 'views/components/UI/Layout.style';
import { NowChallengeGrid } from './CurrentChallengesPage.style';
import { MypageIcon } from 'views/components/icons/mypage';

const iconMap = [<MypageIcon.Day1 key='day1'/>, <MypageIcon.Day2 key='day2'/>, <MypageIcon.Day3 key='day3' />,
<MypageIcon.Day4 key='day4'/>, <MypageIcon.Day5 key='day5' />, <MypageIcon.Day6 key='day6'/>, <MypageIcon.Day7 key='day7'/>];

const dummy = [
  { day: 1, content: 'hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi' },
  { day: 2, content: 'hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi2' },
  { day: 3, content: 'hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi2' },
  { day: 4, content: 'hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi2' },
  { day: 5, content: 'hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi2' }
];

const SubmitContents = () => {
  return (
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
  );
};

export default SubmitContents;
