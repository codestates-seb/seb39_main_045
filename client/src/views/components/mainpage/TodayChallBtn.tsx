import React, { useState } from 'react';
import { MainBtn } from './main.style';
import TodayChallModal from './TodayChallModal';

const TodayChallBtn = ({ status }: { status: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MainBtn.today className="material-icons" onClick={() => setIsOpen(true)}>
        wb_sunny
      </MainBtn.today>
      {isOpen && <TodayChallModal setIsOpen={setIsOpen} status={status} />}
    </>
  );
};

export default TodayChallBtn;
