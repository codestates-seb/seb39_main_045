import React from 'react';
import { GreenArea, BaseArea, GraphWrapper } from './CurrentChallengesPage.style';
import { MypageIcon } from 'views/components/icons/mypage';
import useSelectorTyped from 'utils/useSelectorTyped';
import type { ActiveChallenge } from 'feature/challenge/activeChallenge';

const StatusGraph = () => {
  const { stringProgress }: Partial<ActiveChallenge> = useSelectorTyped(state => state.activeChallenge);

  return (
    <GraphWrapper>
      <GreenArea progress={stringProgress}>
        <MypageIcon.GraphL />
        <MypageIcon.GraphM />
      </GreenArea>
      <BaseArea>
        <MypageIcon.GraphR />
      </BaseArea>
    </GraphWrapper>
  );
};

export default StatusGraph;
