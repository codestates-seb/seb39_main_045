import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ShowTimeInput from './ShowTimeInput';
import ModalPortal from './ModalPortal';
import { DefaultProps, Choose } from './types';
import {
  ModalWrapper,
  ModalContentWrapper,
  ModalSubmitBtn
} from './MainStyles';

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
    const name: string | null = challenge.challenge;
    const days: string | null = challenge.day;
    const times = getTime.current?.value;
    if (name === null || days === null) {
      return alert('챌린지를 선택해주세요');
    } else {
      if (name !== 'thanks') {
        if (times === '') {
          return alert('시간을 입력해주세요');
        } else {
          const time = Number(times);
          if (name === 'morning') {
            if (time < 5 || time > 8) {
              return alert('선택 가능한 시간을 입력해주세요');
            } else {
              // axios
              alert(`${name} ${days} ${time}`);
            }
          } else {
            if (time < 0 || time > 23) {
              return alert('선택 가능한 시간을 입력해주세요');
            } else {
              alert(`${name} ${days} ${time}`);
            }
          }
        }
      } else {
        alert(`${name} ${days}`);
      }
    }
  };
  return (
    <ModalPortal>
      <ModalWrapper>
        <div className="bg" onClick={() => setIsOpen(false)}></div>
        <ModalContentWrapper>
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
        </ModalContentWrapper>
      </ModalWrapper>
    </ModalPortal>
  );
};
export const Label = styled.span`
  display: inline-block;
  font-weight: 600;
  font-size: 0.88rem;
  margin-bottom: 5px;
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

export default SelectModal;
