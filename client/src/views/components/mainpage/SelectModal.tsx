import React from 'react';
import ShowTimeInput from './ShowTimeInput';
import ModalPortal from './ModalPortal';
import { DefaultProps } from '../../../types/mainPageTypes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import {
  ModalWrapper,
  ModalContentWrapper,
  Label,
  ModalBtn,
  SelectModalContent
} from './modal.style';
import { setChall, setDate, setIsSubmit } from 'feature/challenge/form';
import challVerify from './challVerify';

const SelectModal = ({ setIsOpen }: DefaultProps) => {
  const [isInputOpen, setIsInputOpen] = React.useState(false);
  const dispatch = useDispatch();
  const challenge = useSelector(
    (state: RootState) => state.chall.challenge_form
  );
  const { isSubmit } = useSelector(
    (state: RootState) => state.chall.form_today_submit
  );
  const verifyForm = challVerify();
  React.useEffect(() => {
    if (
      challenge.challengeType === 'study' ||
      challenge.challengeType === 'morning'
    ) {
      setIsInputOpen(true);
    } else {
      setIsInputOpen(false);
    }
  }, [challenge.challengeType]);
  React.useEffect(() => {
    if (isSubmit) {
      setIsOpen(false);
      dispatch(setIsSubmit({ isSubmit: false }));
    }
  }, [isSubmit]);

  const handleSubmit = () => {
    void verifyForm();
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
                onClick={() => dispatch(setChall({ challengeType: 'morning' }))}
                active={challenge.challengeType === 'morning'}
              >
                기상
              </ModalBtn.select>
              <ModalBtn.select
                active={challenge.challengeType === 'study'}
                onClick={() => dispatch(setChall({ challengeType: 'study' }))}
              >
                공부
              </ModalBtn.select>
              <ModalBtn.select
                active={challenge.challengeType === 'thanks'}
                onClick={() => dispatch(setChall({ challengeType: 'thanks' }))}
              >
                감사
              </ModalBtn.select>
            </div>
            <Label>챌린지선택</Label>
            <div>
              <ModalBtn.select
                active={challenge.targetDate === 3}
                onClick={() => dispatch(setDate({ targetDate: 3 }))}
              >
                3일
              </ModalBtn.select>
              <ModalBtn.select
                active={challenge.targetDate === 5}
                onClick={() => dispatch(setDate({ targetDate: 5 }))}
              >
                5일
              </ModalBtn.select>
              <ModalBtn.select
                active={challenge.targetDate === 7}
                onClick={() => dispatch(setDate({ targetDate: 7 }))}
              >
                7일
              </ModalBtn.select>
            </div>

            {isInputOpen && <ShowTimeInput status={challenge.challengeType} />}
          </SelectModalContent>
          <ModalBtn.submit onClick={handleSubmit}>선택하기</ModalBtn.submit>
        </ModalContentWrapper>
      </ModalWrapper>
    </ModalPortal>
  );
};
export default SelectModal;
