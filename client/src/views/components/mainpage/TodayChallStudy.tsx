import React, { useState } from 'react';
import { ModalBtn, TimeDiv, ModalContentWithPic } from './modal.style';
import { studySubmit, photoPreview } from './todayChallFunctions';
import previewImg from '../../../assets/img/preview.png';
import { useDispatch } from 'react-redux';

const Study = () => {
  const [picPreview, setPicPreview] = useState(previewImg);
  const dispatch = useDispatch();
  const handlePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files !== null) {
      photoPreview(e.currentTarget.files[0], setPicPreview);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void studySubmit(
      dispatch,
      e.currentTarget.photo.files[0],
      e.currentTarget.time.value
    );
  };
  return (
    <ModalContentWithPic onSubmit={handleSubmit}>
      <label htmlFor="photo">사진 등록</label>
      <img src={picPreview} alt="preview" id="preview" />
      <input
        type="file"
        id="photo"
        className="photo"
        accept="image/*"
        onChange={handlePreview}
      />
      <label htmlFor="time">총 공부시간</label>
      <TimeDiv>
        <input type="number" min="1" max="23" id="time" />
        <span> 시간</span>
        <div className="desc">*시간 범위: 1 ~ 23시간</div>
      </TimeDiv>
      <ModalBtn.submit>챌린지 완료!</ModalBtn.submit>
    </ModalContentWithPic>
  );
};
export default Study;
