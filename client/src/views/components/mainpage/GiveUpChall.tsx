import React from 'react';
import AlertModal from './AlertModal';
import { GiveUp } from './main.style';
import { useDispatch } from 'react-redux';
import { setAlertOpen } from 'feature/challenge/form';
import useSelectorTyped from 'utils/useSelectorTyped';

const GiveUpChall = () => {
  const { isOpen, status } = useSelectorTyped(
    (state) => state.chall.alert_modal
  );

  const dispatch = useDispatch();
  return (
    <>
      <GiveUp>
        <span
          onClick={() =>
            dispatch(setAlertOpen({ isOpen: true, status: 'giveup' }))
          }
        >
          챌린지 포기하기
        </span>
        <span className="material-icons">delete</span>
      </GiveUp>
      {isOpen && status === 'giveup' && <AlertModal status={'giveup'} />}
    </>
  );
};

export default GiveUpChall;
