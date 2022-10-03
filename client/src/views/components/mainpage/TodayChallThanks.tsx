import { setThanksText } from 'feature/challenge/form';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ModalBtn, TextArea, ModalContent } from './modal.style';
import { RootState } from 'store/store';
import { thanksSubmit } from './todayChallFunctions';

const Thanks = () => {
  const dispatch = useDispatch();
  const { text } = useSelector((state: RootState) => state.chall.thanks_form);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void thanksSubmit(dispatch, text);
  };
  return (
    <ModalContent onSubmit={handleSubmit}>
      <label>감사일기</label>
      <TextArea
        onChange={(e) => dispatch(setThanksText({ text: e.target.value }))}
      ></TextArea>
      <ModalBtn.submit>챌린지 완료!</ModalBtn.submit>
    </ModalContent>
  );
};
export default Thanks;
