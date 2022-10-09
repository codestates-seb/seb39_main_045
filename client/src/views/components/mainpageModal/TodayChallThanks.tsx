import React from 'react';
import { useDispatch } from 'react-redux';
import { ModalBtn, TextArea, ModalContent } from '../mainpage/modal.style';
import { thanksSubmit } from './todayChallFunctions';
const Thanks = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void thanksSubmit(dispatch, e.currentTarget.text.value);
  };
  return (
    <ModalContent onSubmit={handleSubmit}>
      <label>감사일기</label>
      <TextArea id="text"></TextArea>
      <ModalBtn.submit>챌린지 완료!</ModalBtn.submit>
    </ModalContent>
  );
};
export default Thanks;
