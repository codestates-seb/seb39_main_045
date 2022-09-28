import React from 'react';
import { Wrapper, Track } from 'views/pages/Intro/Intro.style';
import CactusA from '../../../components/icons/intro/CactusA';

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
