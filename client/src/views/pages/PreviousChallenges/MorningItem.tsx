import React from 'react';
import type { Challenges, TargetChallenge } from 'feature/challenge/previousChallenges';
import { Layout } from 'views/components/UI/Layout.style';
import { TitleIcon } from 'views/components/UI/atoms/icon.style';
import { Title, Content } from 'views/components/UI/molecules/text.style';

interface IMorningItemProps {
  morning: Challenges
}

const MorningItem = (props: IMorningItemProps): React.ReactElement<IMorningItemProps> => {
  const {
    index,
    success,
    targetDate,
    targetTime,
    histories
  } = props.morning;
  return (
    <>
      {histories.map((history: TargetChallenge) => {
        const { createdAt, day, contents } = history;

        return (
          <Layout.ChallengeWrapper key={`${index}_${day}`}>
            <Title.Day>
              {targetDate}일 챌린지
              {success ? '성공😎' : '실패🥲'}
            </Title.Day>
            <Title.Day>{day}일차: {createdAt}</Title.Day>
            <Content.Diary>
              <TitleIcon className="material-symbols-outlined">wb_sunny</TitleIcon>
              목표: {targetTime}시
              <div>{contents}에 일어났어요</div>
            </Content.Diary>
          </Layout.ChallengeWrapper>
        );
      })
      }
    </>
  );
};

export default MorningItem;
