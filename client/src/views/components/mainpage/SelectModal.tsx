import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ModalWrapper } from './AlertModal';
import ShowTimeInput from './ShowTimeInput';
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
  }; // 이부분 수정하기
  const handleSubmit = () => {
    if (challenge.challenge === null || challenge.day === null) {
      return alert('챌린지를 선택해주세요');
    } else {
      if (challenge.challenge !== 'thanks') {
        if (getTime.current !== null) {
          if (getTime.current.value === '') {
            return alert('시간을 입력해주세요');
          }
          alert(
            `${challenge.challenge} ${challenge.day} ${getTime.current.value}`
          );
        }
      } else {
        alert(`${challenge.challenge} ${challenge.day}`);
      }
    }
  };
  return (
    <ModalPortal>
      <ModalWrapper>
        <div className="bg" onClick={() => setIsOpen(false)}></div>
        <ChooseModal>
          <span className="title">챌린지 선택하기</span>
          <button className="material-icons" onClick={() => setIsOpen(false)}>
            close
          </button>
          <ModalContent>
            <Label>챌린지 종류</Label>
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
            <Label>챌린지선택</Label>
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
          </ModalContent>
          <ModalSubmitBtn onClick={handleSubmit}>선택하기</ModalSubmitBtn>
        </ChooseModal>
      </ModalWrapper>
    </ModalPortal>
  );
};
export const Label = styled.span`
  display: inline-block;
  font-weight: 600;
  font-size: 0.88rem;
  margin-bottom : 5px;
`;
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
  .title {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--main-btn-brown);
    font-weight: 700;
  }
  .material-icons {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    font-weight: 600;
    color: var(--modal-gray);
    cursor: pointer;
    border: none;
    box-shadow: none;
    font-size: 1.5rem;
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
const ModalContent = styled.div`
  padding: 20px 0;
  .sort,
  .day {
    margin-bottom: 20px;
  }

  button {
    background-color: var(--main-btn-green);
    border-radius: 12px;
    border: none;
    color: white;
    font-size: 0.75rem;
    padding: 8px 10px;
    margin: 5px;
    &.active {
      background-color: var(--main-emp-green);
    }
  }
`;
const ModalSubmitBtn = styled.button`
  width: 40%;
  padding: 15px;
  background-color: var(--main-btn-brown);
  align-self: center;
  border-radius: 12px;
  border: none;
  color: white;
  /* font-size: 0.75rem; */
  margin: 5px;
`;

export default SelectModal;
