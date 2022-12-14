import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Logout from 'views/components/mainpage/Logout';
import GiveUpChall from 'views/components/mainpageModal/GiveUpChall';
import Cactus from 'views/components/mainpage/Cactus';
import TodayChallBtn from 'views/components/mainpage/TodayChallBtn';
import GiveWater from 'views/components/mainpage/GiveWater';
import {
  CactusWrapper,
  NavBtns,
  NowPercent
} from 'views/components/mainpage/main.style';
import SuccessFailModal from 'views/components/mainpageModal/SuccessFailModal';
import { TodayTitle } from 'types/mainPageTypes';
const title: TodayTitle = {
  study: '공부',
  morning: '기상',
  thanks: '감사'
};

const MainCactus = () => {
  const user = useSelector((state: RootState) => state.user.userInfo);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (user.status === 'fail' || user.status === 'success') {
      setIsOpen(true);
    }
  }, [user.status, user.progress]);

  return (
    <CactusWrapper>
      <GiveUpChall />
      <NavBtns>
        <div>
          <div>
            <GiveWater />
            <TodayChallBtn status={user.challengeType} />
          </div>
          <NowPercent>
            {title[user.challengeType]}챌린지 {user.progress}%
          </NowPercent>
        </div>
        <Logout />
      </NavBtns>
      <Cactus percent={user.progress} />
      {isOpen && (
        <SuccessFailModal status={user.status} setIsOpen={setIsOpen} />
      )}
    </CactusWrapper>
  );
};

export default MainCactus;
