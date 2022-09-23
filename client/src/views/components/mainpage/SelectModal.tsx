import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ModalWrapper } from './AlertModal';
import { ShowTimeInput } from './ChooseTime';
import ModalPortal from './ModalPortal';
import { DefaultProps, Choose } from './types';

const defaultData: Choose = { challenge: null, day: null };

const SelectModal = ({ setIsOpen }: DefaultProps) => {
  const [challenge, setChallenge] = useState(defaultData);
  const getTime = useRef<HTMLInputElement>(null);
  const getDay = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setChallenge({ ...challenge, day: target.name });
  };
  const getChall = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setChallenge({ ...challenge, challenge: target.name });
  };
  const handleSubmit = () => {
    if (challenge.challenge === null || challenge.day === null) {
      alert('제대로 선택해주세요');
    }
  };
  return (
    <ModalPortal>
      <ModalWrapper>
        <div className="bg" onClick={() => setIsOpen(false)}></div>
        <ChooseModal>
          <button className="material-icons" onClick={() => setIsOpen(false)}>
            close
          </button>
          <span className="title"> 챌린지 종류</span>
          <div className="sort">
            <button
              className={
                challenge.challenge === 'morning' ? 'active' : 'inactive'
              }
              onClick={getChall}
              name="morning"
            >
              기상
            </button>
            <button
              className={
                challenge.challenge === 'study' ? 'active' : 'inactive'
              }
              onClick={getChall}
              name="study"
            >
              공부
            </button>
            <button
              className={
                challenge.challenge === 'thanks' ? 'active' : 'inactive'
              }
              onClick={getChall}
              name="thanks"
            >
              감사
            </button>
          </div>
          <span className="title"> 챌린지선택</span>
          <div className="day">
            <button
              className={challenge.day === '3' ? 'active' : 'inactive'}
              name="3"
              onClick={getDay}
            >
              3일
            </button>
            <button
              name="5"
              className={challenge.day === '5' ? 'active' : 'inactive'}
              onClick={getDay}
            >
              5일
            </button>
            <button
              className={challenge.day === '7' ? 'active' : 'inactive'}
              name="7"
              onClick={getDay}
            >
              7일
            </button>
          </div>
          <ShowTimeInput status={challenge.challenge} ref={getTime} />
          <button className="chooseBtn" onClick={handleSubmit}>
            선택하기
          </button>
        </ChooseModal>
      </ModalWrapper>
    </ModalPortal>
  );
};
const ChooseModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
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
    font-size: 1.5rem;
  }
  .sort,
  .day {
    margin-bottom: 10px;
  }
  span.title {
    font-weight: 600;
    font-size: 0.8rem;
    margin: 5px 0px;
  }
  button {
    background-color: var(--main-btn-green);
    border-radius: 12px;
    border: none;
    color: white;
    font-size: 0.8rem;
    padding: 8px;
    margin: 5px;
    &.chooseBtn {
      width: 40%;
      padding: 15px;
      background-color: var(--main-btn-brown);
      align-self: center;
    }
    &.active {
      background-color: var(--main-emp-green);
    }
  }
  .day > button.active,
  .sort > button.active {
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
export default SelectModal;
