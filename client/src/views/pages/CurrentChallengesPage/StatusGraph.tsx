import React from 'react';
import { GreenArea, BaseArea, GraphWrapper } from './CurrentChallengesPage.style';
import { MypageIcon } from 'views/components/icons/mypage';

// 0%~ 20% : * 0.2
// 70% ~ : 0.7 - 60px
// 90% ~ : * 0.9 - 92px

const StatusGraph = () => {
  return (
    <GraphWrapper>
    <GreenArea>
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
