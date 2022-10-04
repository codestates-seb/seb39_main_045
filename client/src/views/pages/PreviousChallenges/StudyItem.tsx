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
          <Layout.ChallengeWrapper key={index}>
            <div>
              <Title.Day>
                {targetDate}일 챌린지
                {success ? '성공😎' : '실패🥲'}
              </Title.Day>
              <Title.Day>{day}일차: {createdAt}</Title.Day>
              <Content.Diary>
                <TitleIcon className="material-symbols-outlined">edit</TitleIcon>
                목표: {targetTime}시간
                <div>{time}시간 공부했어요</div>
              </Content.Diary>
            </div>
            {/* 이미지 주소 변경할 것 */}
            <ImageBox src={`https://cactus-villeage.s3.ap-northeast-2.amazonaws.com/${contents}.png`} />
          </Layout.ChallengeWrapper>
        );
      }
      )}
    </>
  );
};
export default StudyItem;
