import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logout from 'views/components/mainpage/Logout';
import GiveUpChall from 'views/components/mainpage/GiveUpChall';
import Cactus from 'views/components/mainpage/Cactus';
import TodayChallBtn from 'views/components/mainpage/TodayChallBtn';
import GiveWater from 'views/components/mainpage/GiveWater';
import { CactusWrapper, NavBtns } from 'views/components/mainpage/MainStyles';
import SuccessFailModal from 'views/components/mainpage/SuccessFailModal';
interface Data {
  [index: string]: string | number
  name: string
  percent: number
}
const MainCactus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data: Data = {
    name: '기상',
    percent: Math.floor(Math.random() * 100)
  };
  useEffect(() => {
    // setIsOpen(true);
    console.log('성공페이지확인용');
  }, []);

  return (
    <CactusWrapper>
      <GiveUpChall />
      <NavBtns>
        <div className="leftBtns">
          <div className="waterNsun">
            <GiveWater />
            <TodayChallBtn />
          </div>
          <NowPercent>
            {data.name}챌린지 {data.percent}%
          </NowPercent>
        </div>
        <Logout />
      </NavBtns>
      <Cactus percent={data.percent} />
      {isOpen && <SuccessFailModal status={'success'} setIsOpen={setIsOpen} />}
    </CactusWrapper>
  );
};
export const NowPercent = styled.div`
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background-color: var(--main-btn-brown);
  margin-top: 10px;
  border-radius: 10px;
  font-size: 14px;
  padding: 10px;
  font-weight: 400;
  background-color: var(--main-btn-brown);
  user-select: none;
`;
export default MainCactus;
