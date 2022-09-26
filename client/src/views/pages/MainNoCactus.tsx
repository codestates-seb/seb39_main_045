import React from 'react';
import styled from 'styled-components';
import Logout from 'views/components/mainpage/Logout';
import { ReactComponent as Cactus } from '../components/icons/cactus/noCactus.svg';
import ChooseChall from 'views/components/mainpage/ChooseChallBtn';
import { CactusWrapper, NavBtns } from 'views/components/mainpage/MainStyles';

const MainNoCactus = () => {
  return (
    <CactusWrapper>
      <NavBtns>
        <div className="leftBtns">
          <div className="waterNsun">
            <NoCactusSpan className="material-icons">water_drop</NoCactusSpan>
            <NoCactusSpan className="material-icons">wb_sunny</NoCactusSpan>
          </div>
          <ChooseChall />
        </div>
        <Logout />
      </NavBtns>
      <Cactus className="cactus" />
    </CactusWrapper>
  );
};
export const NoCactusSpan = styled.span`
  color: white;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background-color: var(--main-btn-brown);
  border-radius: 50%;
  user-select: none;
`;

export default MainNoCactus;
