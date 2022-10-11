import React from 'react';
import { Title } from 'views/components/UI/molecules/text.style';
import { MypageIcon } from 'views/components/icons/mypage';
import { Center } from './PreviousChallenges.style';
import useSelectorTyped from 'utils/useSelectorTyped';
import type { PreviousChallenges } from 'feature/challenge/previousChallenges';

const PreviousHome = () => {
  const { totalDate, totalChall, requestStatus }: Partial<PreviousChallenges> = useSelectorTyped(state => state.previousChallenges);

  return (
    <Center>
      <MypageIcon.NoticeCactus />
      <Title.Day>{requestStatus}</Title.Day>
      <Title.Day>
        {totalChall === 0
          ? '챌린지를 시작하고 선인장을 키워보세요🌵'
          : null}
      </Title.Day>
      <Title.Day>
        {totalChall !== null && totalChall > 0
          ? '대단해요!'
          : null}
      </Title.Day>
      <Title.Day>
        {totalDate !== null && totalChall !== null && totalChall > 0
          ? `${totalDate}일동안 ${totalChall}번의 도전을 하셨어요🥳`
          : null}
      </Title.Day>
    </Center>
  );
};

export default PreviousHome;
