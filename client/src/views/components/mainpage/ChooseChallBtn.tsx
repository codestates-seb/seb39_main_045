import React from 'react';
import { MainBtn } from './main.style';
import SelectModal from './SelectModal';
import { useDispatch } from 'react-redux';
import { setTodayOpen } from 'feature/challenge/form';
import useSelectorTyped from 'utils/useSelectorTyped';

const ChooseChall = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelectorTyped((state) => state.chall.form_today_submit);

  return (
    <>
      <MainBtn.choose onClick={() => dispatch(setTodayOpen(true))}>
        챌린지 선택하기
      </MainBtn.choose>
      {isOpen && <SelectModal />}
    </>
  );
};
export default ChooseChall;
