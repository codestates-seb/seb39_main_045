import { CactusWrapper, NavBtns } from './MainNoCactus';
import React, { useState } from 'react';
import styled from 'styled-components';
interface Data {
  name: string
  percent: number
}
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
  @keyframes animate {
    0% {
      transform: scale(0.8);
      opacity: 0.5;
    }
    30%,
    50%,
    80% {
      transform: scale(1);
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;
const GiveUp = styled.span`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: white;
  background-color: var(--main-btn-green);
  padding: 10px;
  font-size: 14px;
  border-radius: 0 20px 20px 0;
  z-index: 3;
  left: -110px;
  span:first-child {
    margin-right: 10px;
  }
  top: 40%;
  transform: translate(0, -50%);
  transition: transform ease-out 0.8s;

  :active {
    transform: translate(110px, -50%);
  }
  :hover {
    transform: translate(110px, -50%);
  }
`;
const MainCactus = () => {
  const [giveWater, setGiveWater] = useState(false);

  const data: Data = {
    name: '기상',
    percent: 83
  };
  const handleGiveWater = () => {
    setGiveWater(true);
    setTimeout(() => {
      setGiveWater(false);
    }, 1200);
  };
  return (
    <CactusWrapper>
      <GiveUp>
        <span>챌린지 포기하기 </span>
        <span className="material-icons">delete</span>
      </GiveUp>
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
        <button className="material-icons" id="logout">
          logout
        </button>
      </NavBtns>
      {giveWater && (
        <Messages>
          오늘도 화잇팅입니다~! <br />
          ✨오늘 하루가 반짝반짝하길!!
        </Messages>
      )}
    </CactusWrapper>
  );
};

export default MainCactus;
