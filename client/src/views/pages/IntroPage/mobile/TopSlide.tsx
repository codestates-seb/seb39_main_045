import React from 'react';
import { Wrapper, Track } from 'views/pages/IntroPage/Intro.style';
import CactusA from 'views/components/icons/intro/CactusA';

const TopSlide = () => {
  return (
    <Wrapper>
      <Track>
        <CactusA />
        <CactusA />
        <CactusA />
        <CactusA />
        <CactusA />
        <CactusA />
      </Track>
    </Wrapper>
  );
};

export default TopSlide;
