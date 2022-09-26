/* eslint-disable no-tabs */
import React from 'react';
import { BigWrapper, BigTrack } from './introStyle';
import BigCactusA from '../icons/intro/BigCactusA';

const BigTopSlide = () => {
  return (
    <BigWrapper>
      <BigTrack>
        <BigCactusA className='slide' />
        <BigCactusA className='slide' />
        <BigCactusA className='slide' />
        <BigCactusA className='slide' />
        <BigCactusA className='slide' />
        <BigCactusA className='slide' />
      </BigTrack>
    </BigWrapper>
  );
};

export default BigTopSlide;
