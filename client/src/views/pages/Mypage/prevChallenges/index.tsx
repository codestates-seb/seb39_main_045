import React, { useState } from 'react';
import { ColumnWrapper, FlexRowMenu, HalfTapMenu, DiaryBox } from '../mypage.style';
import { Title } from '../../../components/UI/molecules/text.style';
import { Routes, Route } from 'react-router-dom';
import PrevChallengeHome from 'views/pages/Mypage/prevChallenges/index';
import StudyChallenge from 'views/pages/Mypage/prevChallenges/Study';
import DiaryChallenge from 'views/pages/Mypage/prevChallenges/Diary';
import MorningChallenge from 'views/pages/Mypage/prevChallenges/Morning';

const ChallengeBook = () => {
  const [currentTab, setCurrentTab] = useState('root');
  const onClick = (tab: string) => {
    setCurrentTab(tab);
  };
  return (
    <>
      <Title.Main>지난 챌린지 모아보기</Title.Main>
      <ColumnWrapper>
        <FlexRowMenu as='nav'>
          <HalfTapMenu isActive={currentTab === 'root'} onClick={() => onClick('root')} to='.' role='button'> 🏁</HalfTapMenu>
          <HalfTapMenu isActive={currentTab === 'study'} onClick={() => onClick('study')} to='study' role='button'>공부</HalfTapMenu>
          <HalfTapMenu isActive={currentTab === 'diary'} onClick={() => onClick('diary')} to='diary' role='button'>감사일기</HalfTapMenu>
          <HalfTapMenu isActive={currentTab === 'morning'} onClick={() => onClick('morning')} to='morning' role='button'>기상</HalfTapMenu>
        </FlexRowMenu>
        <DiaryBox>
          <Routes>
            <Route path='/' element={<PrevChallengeHome />}/>
            <Route path='study' element={<StudyChallenge />}/>
            <Route path='diary' element={<DiaryChallenge />}/>
            <Route path='morning' element={<MorningChallenge />}/>
          </Routes>
        </DiaryBox>
      </ColumnWrapper>
    </>
  );
};

export default ChallengeBook;
