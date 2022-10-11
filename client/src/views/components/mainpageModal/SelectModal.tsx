import React from 'react';
import ShowTimeInput from './ShowTimeInput';
import ModalPortal from './ModalPortal';
import { useDispatch } from 'react-redux';
import {
  ModalWrapper,
  ModalContentWrapper,
  Label,
  ModalBtn,
  SelectModalContent
} from '../mainpage/modal.style';
import { setChall, setDate, setTodayOpen } from 'feature/challenge/form';
import challVerify from './challVerify';
import useSelectorTyped from 'utils/useSelectorTyped';

const SelectModal = () => {
  const [isInputOpen, setIsInputOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { challengeType, targetDate } = useSelectorTyped(
    (state) => state.chall.challenge_form
  );
  const verifyForm = challVerify();
  React.useEffect(() => {
    if (challengeType === 'study' || challengeType === 'morning') {
      setIsInputOpen(true);
    } else {
      setIsInputOpen(false);
    }
  }, [challengeType]);

  return (
    <ModalPortal>
      <ModalWrapper>
        <div onClick={() => dispatch(setTodayOpen(false))}></div>
        <ModalContentWrapper>
          <h4>챌린지 선택하기</h4>
          <button
            className="material-icons"
            onClick={() => dispatch(setTodayOpen(false))}
          >
            close
          </button>
          <SelectModalContent>
            <Label>챌린지 종류</Label>
            <div>
              <ModalBtn.select
                onClick={() => dispatch(setChall({ challengeType: 'morning' }))}
                active={challengeType === 'morning'}
              >
                기상
              </ModalBtn.select>
              <ModalBtn.select
                active={challengeType === 'study'}
                onClick={() => dispatch(setChall({ challengeType: 'study' }))}
              >
                공부
              </ModalBtn.select>
              <ModalBtn.select
                active={challengeType === 'thanks'}
                onClick={() => dispatch(setChall({ challengeType: 'thanks' }))}
              >
                감사
              </ModalBtn.select>
            </div>
            <Label>챌린지선택</Label>
            <div>
              <ModalBtn.select
                active={targetDate === 3}
                onClick={() => dispatch(setDate({ targetDate: 3 }))}
              >
                3일
              </ModalBtn.select>
              <ModalBtn.select
                active={targetDate === 5}
                onClick={() => dispatch(setDate({ targetDate: 5 }))}
              >
                5일
              </ModalBtn.select>
              <ModalBtn.select
                active={targetDate === 7}
                onClick={() => dispatch(setDate({ targetDate: 7 }))}
              >
                7일
              </ModalBtn.select>
            </div>

            {isInputOpen && <ShowTimeInput status={challengeType} />}
          </SelectModalContent>
          <ModalBtn.submit
            onClick={() => {
              void verifyForm();
            }}
          >
            선택하기
          </ModalBtn.submit>
        </ModalContentWrapper>
      </ModalWrapper>
    </ModalPortal>
  );
};
export default SelectModal;
