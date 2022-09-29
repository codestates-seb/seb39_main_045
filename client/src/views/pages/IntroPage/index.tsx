import React from 'react';
import Logo from 'views/pages/IntroPage/Logo';
import TopSlide from 'views/pages/IntroPage/mobile/TopSlide';
import BottomSlide from 'views/pages/IntroPage/mobile/BottomSlide';
import BigTopSlide from 'views/pages/IntroPage/pc/BigTopSlide';
import BigBottomSlide from 'views/pages/IntroPage/pc/BigBottomSlide';
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
