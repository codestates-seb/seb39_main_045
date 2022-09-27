import React from 'react';
import styled from 'styled-components';
import { Title } from './mypageStyle';
import NoticeCactus from '../icons/mypage/NoticeCactus';

const PrevChallengeHome = () => {
  return (
    <>
      <CactusWrapper>
        <NoticeCactus />
      </CactusWrapper>
      <Title fontSize='1rem'>대단해요!</Title>
      <Title fontSize='1.2rem' paddingTop='20px'>50일동안 10번의 도전을 하셨어요🥳</Title>
    </>
  );
};

const CactusWrapper = styled.div`
padding: 50px 0;
`;

export default PrevChallengeHome;
