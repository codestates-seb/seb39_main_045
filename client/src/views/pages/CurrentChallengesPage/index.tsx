import React from 'react';
import type { ActiveChallenge } from 'feature/challenge/activeChallenge';
import { Title } from 'views/components/UI/molecules/text.style';
import { Layout } from 'views/components/UI/Layout.style';
import MyPageNav from 'views/components/common/MyPageNav';
import StatusGraph from './StatusGraph';
import SubmitContents from './SubmitContents';
import useCurrentChallenge from './useCurrentChallenge';
import useSelectorTyped from 'utils/useSelectorTyped';

const NowChallenge = () => {
  void useCurrentChallenge();
  const {
    challengeType,
    targetDate,
    histories,
    requestStatus
  }: ActiveChallenge = useSelectorTyped(state => state.activeChallenge);
  const submitDays = histories.length;

  return (
    <Layout.PageContainer>
      <MyPageNav />
      <Title.Main>진행중인 챌린지</Title.Main>
      <Layout.ContentBox>
        <Title.Main>
          {targetDate !== 0
            ? `📌 ${targetDate.toString()}일 ${challengeType ?? ''} 챌린지`
            : '📌 진행중인 챌린지가 없어요'}
        </Title.Main>
        <Title.Sub>
          {targetDate !== 0
            ? `도전 ${submitDays}일차예요!`
            : '챌린지를 시작하고 선인장을 키워보세요'}
        </Title.Sub>
        <StatusGraph />
        <Layout.AlignCenter>
          {targetDate !== 0
            ? `화이팅! 챌린지 성공까지 ${targetDate - submitDays}일 남았어요`
            : null}
        </Layout.AlignCenter>
      </Layout.ContentBox>
      {requestStatus !== null
        ? requestStatus
        : <SubmitContents />
      }
    </Layout.PageContainer>
  );
};

export default NowChallenge;
