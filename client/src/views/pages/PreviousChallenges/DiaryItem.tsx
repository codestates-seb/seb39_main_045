import React from 'react';
import type { Challenges, TargetChallenge } from 'feature/challenge/previousChallenges';
import { TitleIcon } from 'views/components/UI/atoms/icon.style';
import { Layout } from 'views/components/UI/Layout.style';
import { Title, Content } from 'views/components/UI/molecules/text.style';

interface IDiaryItemProps {
  diary: Challenges
}

const DiaryItem = (props: IDiaryItemProps): React.ReactElement<IDiaryItemProps> => {
  const {
    index,
    success,
    targetDate,
    histories
  } = props.diary;
  return (
    <>
      {
        histories.map((history: TargetChallenge) => {
          const { createdAt, day, contents } = history;

          return (
            <Layout.ChallengeWrapper key={index}>
              <Title.Day>
                {targetDate}일 챌린지
                {success ? '성공😎' : '실패🥲'}
              </Title.Day>
              <Title.Day>{day}일차: {createdAt}</Title.Day>
              <Content.Diary>
                <TitleIcon className="material-symbols-outlined">notes</TitleIcon>
                {contents}
              </Content.Diary>
            </Layout.ChallengeWrapper>
          );
        })
      }
    </>
  );
};

export default DiaryItem;
