import React, { useState } from 'react';
import { MainBtn } from './main.style';
import SelectModal from './SelectModal';

const ChooseChall = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MainBtn.choose onClick={() => setIsOpen(true)}>
        챌린지 선택하기
      </MainBtn.choose>
      {isOpen && <SelectModal setIsOpen={setIsOpen} />}
    </>
  );
};
export default ChooseChall;
