import React, { useState } from 'react';
import styled from 'styled-components';
import { MainBtn } from './MainStyles';
import SelectModal from './SelectModal';
const ChooseBtn = styled(MainBtn)`
  margin-top: 5px;
  border-radius: 10px;
  font-size: 14px;
  padding: 10px;
  font-weight: 400;
`;
const ChooseChall = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ChooseBtn className="choose" onClick={() => setIsOpen(true)}>
        챌린지 선택하기
      </ChooseBtn>
      {isOpen && <SelectModal setIsOpen={setIsOpen} />}
    </>
  );
};
export default ChooseChall;
