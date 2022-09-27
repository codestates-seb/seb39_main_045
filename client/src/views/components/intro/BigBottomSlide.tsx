import React from 'react';
import styled from 'styled-components';
import { BigWrapper, BigTrack } from './introStyle';
import BigCactusB from '../icons/intro/BigCactusB';

const BigBottomSlide = () => {
  return (
    <BtmWrapper>
      <BigTrack>
        <BigCactusB className='slide' />
        <BigCactusB className='slide' />
        <BigCactusB className='slide' />
        <BigCactusB className='slide' />
        <BigCactusB className='slide' />
        <BigCactusB className='slide' />
      </BigTrack>
    </BtmWrapper>
  );
};

const BtmWrapper = styled(BigWrapper)`
//nav 없앤뒤 bottom: 0으로 바꿀것
  top: auto;
  bottom: 90px;
`;

export default BigBottomSlide;
