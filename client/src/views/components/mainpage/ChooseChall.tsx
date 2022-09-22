import React, { useState } from 'react';
import styled from 'styled-components';
import SelectModal from './SelectModal';
const ChooseBtn = styled.button`
  border: none;
  background-color: var(--main-btn-brown);
  color: white;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
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
