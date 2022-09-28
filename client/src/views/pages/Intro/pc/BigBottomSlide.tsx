import React from 'react';
import { BigBtmWrapper, BigTrack } from 'views/pages/Intro/Intro.style';
import BigCactusB from '../../../components/icons/intro/BigCactusB';

const BigBottomSlide = () => {
  return (
    <BigBtmWrapper>
      <BigTrack>
        <BigCactusB/>
        <BigCactusB/>
        <BigCactusB/>
        <BigCactusB/>
        <BigCactusB/>
        <BigCactusB/>
      </BigTrack>
    </BigBtmWrapper>
  );
};

export default BigBottomSlide;
