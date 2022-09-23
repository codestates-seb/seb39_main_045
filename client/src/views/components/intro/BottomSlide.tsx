/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
import { Wrapper, Track } from './introStyle';
import CactusB from '../icons/intro/CactusB';

const BottomSlide = () => {
  return (
    <BtmWrapper>
      <Track>
        <CactusB className='slide' />
        <CactusB className='slide' />
        <CactusB className='slide' />
        <CactusB className='slide' />
        <CactusB className='slide' />
        <CactusB className='slide' />
      </Track>
    </BtmWrapper>
  );
};

const BtmWrapper = styled(Wrapper)`
  position: absolute;
  bottom: 70px;
`;

export default BottomSlide;
