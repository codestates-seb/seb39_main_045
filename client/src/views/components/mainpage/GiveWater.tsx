import React, { useState } from 'react';
import { handleGiveWater } from '../mainpageModal/alertFunction';
import { MainBtn, Messages } from './main.style';
const GiveWater = () => {
  const [giveWater, setGiveWater] = useState(false);
  const [message, setMessage] = useState('야호~');
  return (
    <>
      <MainBtn.water
        className="material-icons"
        onClick={() => {
          void handleGiveWater(setMessage, setGiveWater);
        }}
      >
        water_drop
      </MainBtn.water>
      {giveWater && <Messages>{message}</Messages>}
    </>
  );
};

export default GiveWater;
