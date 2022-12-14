import React from 'react';
import { BigWrapper, BigTrack } from 'views/pages/IntroPage/Intro.style';
import BigCactusA from 'views/components/icons/intro/BigCactusA';

const BigTopSlide = () => {
  return (
    <BigWrapper>
      <BigTrack>
        <BigCactusA />
        <BigCactusA />
        <BigCactusA />
        <BigCactusA />
        <BigCactusA />
        <BigCactusA />
      </BigTrack>
    </BigWrapper>
  );
};

export default BigTopSlide;
