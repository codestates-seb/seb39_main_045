import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Logout from 'views/components/mainpage/Logout';
import GiveUpChall from 'views/components/mainpage/GiveUpChall';
import Cactus from 'views/components/mainpage/Cactus';
import TodayChallBtn from 'views/components/mainpage/TodayChallBtn';
import GiveWater from 'views/components/mainpage/GiveWater';
import {
  CactusWrapper,
  NavBtns,
  NowPercent
} from 'views/components/mainpage/main.style';
import SuccessFailModal from 'views/components/mainpage/SuccessFailModal';
interface Data {
  [index: string]: string | number
  name: string
  percent: number
}

const MainCactus = () => {
  const user = useSelector((state: RootState) => state.user.userInfo);
  const [isOpen, setIsOpen] = useState(false);
  const data: Data = {
    name: '기상',
    percent: Math.floor(Math.random() * 100)
  };
  useEffect(() => {
    if (user.status === 'fail') {
      setIsOpen(true);
    }
    // setIsOpen(true);
    console.log('성공페이지확인용');
  }, []);

  return (
    <CactusWrapper>
      <GiveUpChall />
      <NavBtns>
        <div>
          <div>
            <GiveWater />
            <TodayChallBtn />
          </div>
          <NowPercent>
            {user.challengeType}챌린지 {user.progress}%
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
