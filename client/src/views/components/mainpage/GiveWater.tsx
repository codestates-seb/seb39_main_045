import React, { useState } from 'react';
import styled from 'styled-components';
import { MainBtn } from './MainStyles';

const GiveWater = () => {
  const [giveWater, setGiveWater] = useState(false);
  const [message, setMessage] = useState('야호~');
  const handleGiveWater = () => {
    // '/challenges/water'
    setMessage('야호~');
    setGiveWater(true);
    setTimeout(() => {
      setGiveWater(false);
    }, 1200);
  };
  return (
    <>
      <GiveWaterBtn className="material-icons" onClick={handleGiveWater}>
        water_drop
      </GiveWaterBtn>
      {giveWater && (
        <Messages>
          오늘도 화잇팅입니다~! <br />
          ✨오늘 하루가 반짝반짝하길!!
          {message}
        </Messages>
      )}
    </>
  );
};
const GiveWaterBtn = styled(MainBtn)`
  color: var(--main-bg-skyblue);
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
export default GiveWater;
