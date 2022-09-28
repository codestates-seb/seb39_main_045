import React, { useRef, useState } from 'react';
import ShowTimeInput from './ShowTimeInput';
import ModalPortal from './ModalPortal';
import { DefaultProps, Choose } from './types';
import {
  ModalWrapper,
  ModalContentWrapper,
  Label,
  ModalBtn,
  SelectModalContent
} from './modal.style';

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
    // 리팩토링 필수
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
        <div onClick={() => setIsOpen(false)}></div>
        <ModalContentWrapper>
          <h4>챌린지 선택하기</h4>
          <button className="material-icons" onClick={() => setIsOpen(false)}>
            close
          </button>
          <SelectModalContent>
            <Label>챌린지 종류</Label>
            <div>
              <ModalBtn.select
                active={challenge.challenge === 'morning'}
                onClick={getChall}
                name="morning"
              >
                기상
              </ModalBtn.select>
              <ModalBtn.select
                active={challenge.challenge === 'study'}
                onClick={getChall}
                name="study"
              >
                공부
              </ModalBtn.select>
              <ModalBtn.select
                active={challenge.challenge === 'thanks'}
                onClick={getChall}
                name="thanks"
              >
                감사
              </ModalBtn.select>
            </div>
            <Label>챌린지선택</Label>
            <div>
              <ModalBtn.select
                active={challenge.day === '3'}
                name="3"
                onClick={getDay}
              >
                3일
              </ModalBtn.select>
              <ModalBtn.select
                name="5"
                active={challenge.day === '5'}
                onClick={getDay}
              >
                5일
              </ModalBtn.select>
              <ModalBtn.select
                active={challenge.day === '7'}
                name="7"
                onClick={getDay}
              >
                7일
              </ModalBtn.select>
            </div>
            <ShowTimeInput status={challenge.challenge} ref={getTime} />
          </SelectModalContent>
          <ModalBtn.submit onClick={handleSubmit}>선택하기</ModalBtn.submit>
        </ModalContentWrapper>
      </ModalWrapper>
    </ModalPortal>
  );
};
export default SelectModal;
