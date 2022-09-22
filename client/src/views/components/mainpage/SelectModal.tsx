import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalWrapper } from './AlertModal';
import ModalPortal from './ModalPortal';
import { DefaultProps, Choose } from './types';
const ChooseModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 80%;
  max-width: 500px;
  top: calc(50% - 70px);
  left: 50%;
  position: fixed;
  animation: open 0.4s forwards 1 ease-out;

  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 7;
  border-radius: 10px;
  .material-icons {
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    font-weight: 600;
    color: var(--modal-gray);
    cursor: pointer;
    border: none;
    box-shadow: none;
    font-size: 16px;
  }
  span {
    font-weight: 600;
    font-size: 0.9rem;
    margin: 15px 0px;
  }
  button {
    background-color: var(--main-btn-green);
    border-radius: 8px;
    border: none;
    color: white;
    font-size: 0.8rem;
    padding: 8px;
    margin: 5px;
  }
  @keyframes open {
    to {
      transform: translate(-50%, -50%) scale(1);
    }
    from {
      transform: translate(-50%, -50%) scale(0.5);
    }
  }
`;
const defaultData: Choose = { challenge: null, day: null };
const SelectModal = ({ setIsOpen }: DefaultProps) => {
  const [challenge, setChallenge] = useState(defaultData);
  const getDay = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setChallenge({ ...challenge, day: target.name });
  };
  const getChall = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setChallenge({ ...challenge, challenge: target.name });
  };
  return (
    <ModalPortal>
      <ModalWrapper>
        <div className="bg" onClick={() => setIsOpen(false)}></div>
        <ChooseModal>
          <button className="material-icons" onClick={() => setIsOpen(false)}>
            close
          </button>
          <span> 챌린지 종류</span>
          <div>
            <button onClick={getChall} name="morning">
              기상
            </button>
            <button onClick={getChall} name="study">
              공부
            </button>
            <button onClick={getChall} name="thanks">
              감사
            </button>
          </div>
          <span> 챌린지선택</span>
          <div>
            <button name="3" onClick={getDay}>
              3일
            </button>
            <button name="5" onClick={getDay}>
              5일
            </button>
            <button name="7" onClick={getDay}>
              7일
            </button>
          </div>
          <div>각 폼에 맞는 폼자리!</div>
        </ChooseModal>
      </ModalWrapper>
    </ModalPortal>
  );
};

export default SelectModal;
