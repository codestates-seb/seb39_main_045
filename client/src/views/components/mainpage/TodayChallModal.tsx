import React from 'react';
import ModalPortal from './ModalPortal';
import { ModalWrapper, ModalContentWrapper } from './modal.style';
import { TodayEl } from '../../../types/mainPageTypes';
import Study from './TodayChallStudy';
import Thanks from './TodayChallThanks';
import Morning from './TodayChallMorning';
import { useDispatch } from 'react-redux';
import { setTodayOpen } from 'feature/challenge/form';

const todayChall: TodayEl = {
  study: <Study />,
  morning: <Morning />,
  thanks: <Thanks />
};
const TodayChallModal = ({ status }: { status: string | null }) => {
  const dispatch = useDispatch();

  return (
    <ModalPortal>
      <ModalWrapper>
        <div onClick={() => dispatch(setTodayOpen(false))}></div>
        <ModalContentWrapper>
          <h4>{'오늘의 챌린지'}</h4>
          <button
            className="material-icons"
            onClick={() => dispatch(setTodayOpen(false))}
          >
            close
          </button>
          {status !== null && todayChall[status]}
        </ModalContentWrapper>
      </ModalWrapper>
    </ModalPortal>
  );
};

export default TodayChallModal;
