import React from 'react';
import { BigWrapper, BigTrack } from 'views/pages/Intro/Intro.style';
import BigCactusA from '../../../components/icons/intro/BigCactusA';

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
