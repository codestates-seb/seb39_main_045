import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Logout from 'views/components/mainpage/Logout';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Cactus } from '../components/icons/cactus/noCactus.svg';
import ChooseChall from 'views/components/mainpage/ChooseChallBtn';
import {
  CactusWrapper,
  NavBtns,
  NoCactusSpan,
  CactusStyle
} from 'views/components/mainpage/main.style';

const MainNoCactus = () => {
  const { loginStatus } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginStatus) {
      navigate('/');
    }
  }, [loginStatus]);
  return (
    <CactusWrapper>
      <NavBtns>
        <div>
          <div>
            <NoCactusSpan className="material-icons">water_drop</NoCactusSpan>
            <NoCactusSpan className="material-icons">wb_sunny</NoCactusSpan>
          </div>
          <ChooseChall />
        </div>
        <Logout />
      </NavBtns>
      <CactusStyle>
        <Cactus />
      </CactusStyle>
    </CactusWrapper>
  );
};

export default MainNoCactus;
