import React from 'react';
import { MainBtn } from './main.style';
import TodayChallModal from '../mainpageModal/TodayChallModal';
import { setTodayOpen } from 'feature/challenge/form';
import { useDispatch } from 'react-redux';
import useSelectorTyped from 'utils/useSelectorTyped';
const TodayChallBtn = ({ status }: { status: string | null }) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelectorTyped((state) => state.chall.form_today_submit);
  return (
    <>
      <MainBtn.today
        className="material-icons"
        onClick={() => dispatch(setTodayOpen(true))}
      >
        wb_sunny
      </MainBtn.today>
      {isOpen && <TodayChallModal status={status} />}
    </>
  );
};

export default TodayChallBtn;
