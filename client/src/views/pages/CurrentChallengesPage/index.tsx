import React from 'react';
import { Title } from 'views/components/UI/molecules/text.style';
import { Layout } from 'views/components/UI/Layout.style';
import MyPageNav from 'views/components/common/MyPageNav';
import StatusGraph from './StatusGraph';
import SubmitContents from './SubmitContents';

const NowChallenge = () => {
  return (
    <Layout.PageContainer>
      <MyPageNav />
      <Title.Main>진행중인 챌린지</Title.Main>
      <Layout.ContentBox>
        <Title.Main>📌 5일 기상 챌린지</Title.Main>
        <Title.Sub>도전 3일차예요!</Title.Sub>
        <StatusGraph />
        <Layout.AlignCenter>화이팅! 챌린지 성공까지 2일 남았어요</Layout.AlignCenter>
      </Layout.ContentBox>
      <SubmitContents />
    </Layout.PageContainer>
  );
};

export default NowChallenge;
