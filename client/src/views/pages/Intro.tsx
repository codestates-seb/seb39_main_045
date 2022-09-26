import React from 'react';
import styled from 'styled-components';
import Logo from 'views/components/intro/Logo';
import TopSlide from 'views/components/intro/TopSlide';
import BottomSlide from 'views/components/intro/BottomSlide';
import BigTopSlide from 'views/components/intro/BigTopSlide';
import BigBottomSlide from 'views/components/intro/BigBottomSlide';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const navigate = useNavigate();

  return (
    <IntroContainer>
      <BigTopSlide />
      <TopSlide />
      <Logo />
      <EnterBtn onClick={() => navigate('/login')} >
        입장하기
      </EnterBtn>
      <BottomSlide />
      <BigBottomSlide />
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  background-color: var(--intro-bg-green);
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EnterBtn = styled.button`
  background-color: var(--intro-btn-yellow);
  padding: 15px 20px;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  align-self: center;
  margin: 30px 0;
  font-size: 2rem;
  transition: all 0.3s;
  z-index: 1;
  &:hover {
    padding: 20px 25px;
  }
`;

export default Intro;
