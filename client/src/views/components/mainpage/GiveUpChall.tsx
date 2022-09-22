import React, { useState } from 'react';
import styled from 'styled-components';
import AlertModal from './AlertModal';

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
const GiveUpChall = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <GiveUp>
        <span onClick={() => setIsOpen(true)}>챌린지 포기하기 </span>
        <span className="material-icons">delete</span>
      </GiveUp>
      {isOpen && <AlertModal setIsOpen={setIsOpen} status={'logout'} />}
    </>
  );
};
export default GiveUpChall;
