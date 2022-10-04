import React from 'react';
import { ColumnWrapper, FlexRowMenu, HalfTapMenu, GreenContainer } from './PreviousChallenges.style';
import { Title } from 'views/components/UI/molecules/text.style';
import { Layout } from 'views/components/UI/Layout.style';
import MyPageNav from 'views/components/common/MyPageNav';
import PreviousHome from './Home';
import PreviousStudy from './Study';
import PreviousDiary from './Diary';
import PreviousMorning from './Morning';
import usePreviousChallenges from './usePreviousChallenges';

const MyPageWrapper = () => {
  void usePreviousChallenges();
  const [currentTab, setCurrentTab] = React.useState<string>('home');
  const onClick = (tab: string) => {
    setCurrentTab(tab);
  };
  return (
    <Layout.PageContainer>
      <MyPageNav />
      <Title.Main>지난 챌린지 모아보기</Title.Main>
      <ColumnWrapper>
        <FlexRowMenu as='nav'>
          <HalfTapMenu isActive={currentTab === 'home'} onClick={() => onClick('home')} role='button'> 🏁</HalfTapMenu>
          <HalfTapMenu isActive={currentTab === 'study'} onClick={() => onClick('study')} role='button'>공부</HalfTapMenu>
          <HalfTapMenu isActive={currentTab === 'diary'} onClick={() => onClick('diary')} role='button'>감사일기</HalfTapMenu>
          <HalfTapMenu isActive={currentTab === 'morning'} onClick={() => onClick('morning')} role='button'>기상</HalfTapMenu>
        </FlexRowMenu>
        <GreenContainer>
          {currentTab === 'home' ? <PreviousHome /> : null}
          {currentTab === 'study' ? <PreviousStudy /> : null}
          {currentTab === 'diary' ? <PreviousDiary /> : null}
          {currentTab === 'morning' ? <PreviousMorning /> : null}
        </GreenContainer>
      </ColumnWrapper>
    </Layout.PageContainer>
  );
};

export default MyPageWrapper;
