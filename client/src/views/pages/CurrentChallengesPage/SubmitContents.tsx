import React from 'react';
import type { SubmitHistories } from 'feature/challenge/activeChallenge';
import { Layout } from 'views/components/UI/Layout.style';
import { NowChallengeGrid } from './CurrentChallengesPage.style';
import { MypageIcon } from 'views/components/icons/mypage';
import useSelectorTyped from 'utils/useSelectorTyped';

interface IHistoriesProps {
  histories: SubmitHistories[]
}

const iconMap: JSX.Element[] = [<MypageIcon.Day1 key='day1' />, <MypageIcon.Day2 key='day2' />, <MypageIcon.Day3 key='day3' />,
<MypageIcon.Day4 key='day4' />, <MypageIcon.Day5 key='day5' />, <MypageIcon.Day6 key='day6' />, <MypageIcon.Day7 key='day7' />];

const SubmitContents = () => {
  const { histories }: IHistoriesProps = useSelectorTyped(state => state.activeChallenge);

  return (
    <Layout.ScrollContainer>
      {histories.map((history, historyIdx) => {
        const { day, createdAt, contents, time }: SubmitHistories = history;
        return (
          <NowChallengeGrid key={historyIdx}>
            {iconMap[day - 1]}
            <div>{createdAt}</div>
            <div>{contents}</div>
            <div>{time}</div>
            {/* <img src='https://yt3.ggpht.com/jNJ6FV83KdlgTHor9nqmxPQi6zDMhXZJl9wBNWHVgixbUUZikFg_TGrxJ9CK7ZXW_2zzWvmi1g=s176-c-k-c0x00ffffff-no-rj'></img> */}
          </NowChallengeGrid>
        );
      })}
    </Layout.ScrollContainer>
  );
};

export default SubmitContents;
