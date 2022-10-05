import React from 'react';
import type { Challenges, TargetChallenge } from 'feature/challenge/previousChallenges';
import { TitleIcon } from 'views/components/UI/atoms/icon.style';
import { Title, Content } from 'views/components/UI/molecules/text.style';
import { Layout } from 'views/components/UI/Layout.style';
import { ImageBox } from './PreviousChallenges.style';

interface IStudyItemProps {
  study: Challenges
}

const StudyItem = (props: IStudyItemProps): React.ReactElement<IStudyItemProps> => {
  const {
    index,
    success,
    targetDate,
    targetTime,
    histories
  } = props.study;
  return (
    <>
      {histories?.map((history: TargetChallenge) => {
        const { createdAt, day, contents, time } = history;

        return (
          <Layout.ChallengeWrapper key={`${index}_${day}`}>
            <div>
              <Title.Day>
                {targetDate}일 챌린지
                {success ? '성공😎' : '실패🥲'}
              </Title.Day>
              <Title.Day>{day}일차: {createdAt}</Title.Day>
              <Content.Diary>
                <TitleIcon className="material-symbols-outlined">edit</TitleIcon>
                목표: {targetTime}시간 : 오늘은 {time}시간 공부했어요
              </Content.Diary>
            </div>
            <ImageBox src={`https://api.cactus-villeage.com/api/v1/images/${contents}`} alt="제출한 공부 기록" />
          </Layout.ChallengeWrapper >
        );
      }
      )}
    </>
  );
};
export default StudyItem;
