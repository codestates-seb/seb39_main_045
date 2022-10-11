import React from 'react';
import { BtmWrapper, Track } from 'views/pages/IntroPage/Intro.style';
import CactusB from 'views/components/icons/intro/CactusB';

const BottomSlide = () => {
  return (
    <BtmWrapper>
      <Track>
        <CactusB />
        <CactusB />
        <CactusB />
        <CactusB />
        <CactusB />
        <CactusB />
      </Track>
    </BtmWrapper>
  );
};

export default BottomSlide;
