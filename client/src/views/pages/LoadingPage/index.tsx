import React from 'react';
import { LetterWrapper } from '../IntroPage/Logo.style';
import { IntroContainer } from 'views/pages/IntroPage/Intro.style';

const LoadingPage = () => {
  return (
    <IntroContainer>
      <LetterWrapper>
        <div>
          <span>로</span>
          <span>딩</span>
          <span>중</span>
        </div>
      </LetterWrapper>
    </IntroContainer>
  );
};

export default LoadingPage;
