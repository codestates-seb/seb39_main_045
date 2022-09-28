import React, { useState } from 'react';
import { MainBtn, Messages } from './main.style';

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
      <MainBtn.water className="material-icons" onClick={handleGiveWater}>
        water_drop
      </MainBtn.water>
      {giveWater && (
        <Messages>
          {message}
        </Messages>
      )}
    </>
  );
};

export default GiveWater;
