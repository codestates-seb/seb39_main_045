import React from 'react';
import { Wrapper, Track } from './introStyle';
import CactusA from '../icons/intro/CactusA';

const TopSlide = () => {
  return (
    <Wrapper>
      <Track>
        <CactusA className='slide' />
        <CactusA className='slide' />
        <CactusA className='slide' />
        <CactusA className='slide' />
        <CactusA className='slide' />
        <CactusA className='slide' />
      </Track>
    </Wrapper>
  );
};

export default TopSlide;
