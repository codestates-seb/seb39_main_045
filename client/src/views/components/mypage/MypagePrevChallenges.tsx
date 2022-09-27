import React, { useState } from 'react';
import styled from 'styled-components';
import { Title, FlexColumn, FlexRowMenu, ContentWrapper } from './mypageStyle';
import { NavLink, Routes, Route } from 'react-router-dom';
import PrevChallengeHome from './PrevChallengeHome';
import StudyChallenge from './PrevStudyChallenge';
import DiaryChallenge from './PrevDiaryChallenge';
import MorningChallenge from './PrevMorningChallenge';

const ChallengeBook = () => {
  const [currentTab, setCurrentTab] = useState('root');
  const onClick = (tab: string) => {
    setCurrentTab(tab);
  };
  return (
    <>
      <Title marginBtm='25px'>지난 챌린지 모아보기</Title>
      <FlexColumn>
        <FlexRowMenu as='nav'>
          <HalfTapMenu isActive={currentTab === 'root'} onClick={() => onClick('root')} to='.' role='button'> 🏁</HalfTapMenu>
          <HalfTapMenu isActive={currentTab === 'study'} onClick={() => onClick('study')} to='study' role='button'>공부</HalfTapMenu>
          <HalfTapMenu isActive={currentTab === 'diary'} onClick={() => onClick('diary')} to='diary' role='button'>감사일기</HalfTapMenu>
          <HalfTapMenu isActive={currentTab === 'morning'} onClick={() => onClick('morning')} to='morning' role='button'>기상</HalfTapMenu>
        </FlexRowMenu>
        <DiaryBox padding='0'>
          <Routes>
            <Route path='/' element={<PrevChallengeHome />}/>
            <Route path='study' element={<StudyChallenge />}/>
            <Route path='diary' element={<DiaryChallenge />}/>
            <Route path='morning' element={<MorningChallenge />}/>
          </Routes>
        </DiaryBox>
      </FlexColumn>
    </>
  );
};

const HalfTapMenu = styled(NavLink).withConfig({
  shouldForwardProp: (p) => !['isActive'].includes(p)
})<{ isActive: boolean }>`
  cursor: pointer;
  flex: 1;
  height: 100px;
  width: 25%;
  padding-top: 7px;
  text-align: center;
  border-radius: 20px;
  border: ${p => p.isActive ? '1px solid var(--graph-bg-green)' : '1px solid var(--mypage-btn-yellow)'};
  background-color: ${p => p.isActive ? '#e0f5ce' : 'var(--mypage-btn-beige)'};
  box-shadow: ${p => p.isActive ? '0px 0px 1px rgba(0, 0, 0, 0.05)' : '0px 0px 3px rgba(0, 0, 0, 0.05)'};
`;

const DiaryBox = styled(ContentWrapper)`
  flex: 1;
  background: #e0f5ce;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  width: 100%;
  z-index: 3;
  height: calc(100vh - 200px);
  align-items: center;
  padding-bottom: 25px;
`;

export default ChallengeBook;
