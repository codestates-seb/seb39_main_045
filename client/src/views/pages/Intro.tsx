import React from 'react';
import styled from 'styled-components';
import Logo from 'views/components/intro/Logo';
import TopSlide from 'views/components/intro/TopSlide';
import BottomSlide from 'views/components/intro/BottomSlide';
import { SignUpBtn } from './Signup';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const navigate = useNavigate();

  return (
    <IntroContainer>
      <TopSlide />
      <Logo />
      <SignUpBtn fontSize="2rem" onClick={() => navigate('/login')} >
        입장하기
      </SignUpBtn>
      <BottomSlide />
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  background-color: var(--intro-bg-green);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default Intro;
