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
import { useNavigate } from 'react-router-dom';
const MainCactus = () => {
  const user = useSelector((state: RootState) => state.user.userInfo);
  const [isOpen, setIsOpen] = useState(false);
  const { loginStatus } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginStatus) {
      navigate('/');
    }
  }, [loginStatus]);

  useEffect(() => {
    if (user.status === 'fail' || user.progress === 100) {
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
            {user.challengeType}챌린지 {user.progress}%
          </NowPercent>
        </div>
        <Logout />
      </NavBtns>
      <Cactus percent={user.progress} />
      {isOpen && (
        <SuccessFailModal
          status={user.progress === 100 ? 'success' : user.status}
          setIsOpen={setIsOpen}
        />
      )}
    </CactusWrapper>
  );
};

export default MainCactus;
