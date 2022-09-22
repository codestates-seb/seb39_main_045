import { CactusWrapper, NavBtns } from './MainNoCactus';
import React, { useState } from 'react';
import styled from 'styled-components';
import Logout from 'views/components/mainpage/Logout';
import GiveUpChall from 'views/components/mainpage/GiveUpChall';
import { ReactComponent as Cactus } from '../components/icons/cactus/cactus1.svg';
// import Cactus from '../components/mainpage/Cactus';
interface Data {
  name: string
  percent: number
}

const CactusWithWrapper = styled(CactusWrapper)`
  .cactus {
    position: absolute;
    bottom: 70px;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const Messages = styled.div`
  width: 90%;
  padding: 20px;
  background-color: var(--main-alert-blue);
  border-radius: 15px;
  box-shadow: 0 0 15px var(--main-alert-blue);
  margin: 20px auto;
  color: white;
  text-align: center;
  font-weight: 500;
  word-break: break-all;
  letter-spacing: 2px;
  line-height: 20px;
  animation: animate 1.2s forwards 1 ease-out;
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  @keyframes animate {
    0% {
      transform: translateX(-50%) scale(0.8);
      opacity: 0.5;
    }
    30%,
    50%,
    80% {
      transform: translateX(-50%) scale(1);
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;

const MainCactus = () => {
  const [giveWater, setGiveWater] = useState(false);

  const data: Data = {
    name: '기상',
    percent: Math.floor(Math.random() * 100)
  };
  const handleGiveWater = () => {
    console.log('test');
    setGiveWater(true);
    setTimeout(() => {
      setGiveWater(false);
    }, 1200);
  };
  return (
    <CactusWithWrapper>
      <GiveUpChall />
      <NavBtns>
        <div className="leftBtns">
          <div className="waterNsun">
            <button className="material-icons" onClick={handleGiveWater}>
              water_drop
            </button>
            <button className="material-icons">wb_sunny</button>
          </div>
          <button className="choose">
            {data.name}챌린지 {data.percent}%
          </button>
        </div>
        <Logout />
      </NavBtns>
      {giveWater && (
        <Messages>
          오늘도 화잇팅입니다~! <br />
          ✨오늘 하루가 반짝반짝하길!!
        </Messages>
      )}
      <Cactus className="cactus" />
    </CactusWithWrapper>
  );
};

export default MainCactus;
