import React from 'react';
import type { ActiveChallenge, SubmitHistories } from 'feature/challenge/activeChallenge';
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
  const { challengeType }: ActiveChallenge = useSelectorTyped(state => state.activeChallenge);
  const { histories }: IHistoriesProps = useSelectorTyped(state => state.activeChallenge);

  return (
    <Layout.FlexColumn>
      {histories.map((history, historyIdx) => {
        const { day, createdAt, contents, time }: SubmitHistories = history;

        return (
          <NowChallengeGrid key={historyIdx}>
            {iconMap[day - 1]}
            <div>{createdAt}</div>
            {challengeType === '공부'
              ? <Layout.Image src={`https://api.cactus-villeage.com/api/v1/images/${contents}`} alt="제출한 공부 기록" />
              : <div>{contents}</div>}
            <div>{time !== null ? `제출 시간: ${time}` : null}</div>
          </NowChallengeGrid>
        );
      })}
    </Layout.FlexColumn>
  );
};

export default SubmitContents;
