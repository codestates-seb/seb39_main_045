import React from 'react';
import Logo from 'views/pages/Intro/Logo';
import TopSlide from 'views/pages/Intro/mobile/TopSlide';
import BottomSlide from 'views/pages/Intro/mobile/BottomSlide';
import BigTopSlide from 'views/pages/Intro/pc/BigTopSlide';
import BigBottomSlide from 'views/pages/Intro/pc/BigBottomSlide';
import { useNavigate } from 'react-router-dom';
import { IntroContainer, EnterBtn } from './Intro.style';

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

export default Intro;
