import React, { useState } from 'react';
import AlertModal from './AlertModal';
import { GiveUp } from './main.style';

const GiveUpChall = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <GiveUp>
        <span onClick={() => setIsOpen(true)}>챌린지 포기하기 </span>
        <span className="material-icons">delete</span>
      </GiveUp>
      {isOpen && <AlertModal setIsOpen={setIsOpen} status={'giveup'} />}
    </>
  );
};

export default GiveUpChall;
