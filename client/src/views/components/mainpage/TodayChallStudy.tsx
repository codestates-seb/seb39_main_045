import React, { useState } from 'react';
import { ModalBtn, TimeDiv, ModalContentWithPic } from './modal.style';
import { studyPreview, studySubmit } from './todayChallFunctions';
import previewImg from '../../../assets/img/preview.png';
import { useDispatch, useSelector } from 'react-redux';
import { setStudyTime } from 'feature/challenge/form';
import { RootState } from 'store/store';

const Study = () => {
  const [picPreview, setPicPreview] = useState(previewImg);
  const [file, setFile] = useState<string | File>('');
  const { time } = useSelector((state: RootState) => state.chall.study_form);

  const dispatch = useDispatch();
  const handlePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      void studyPreview(e.target.files[0], setPicPreview, setFile);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target[0].files[0]);
    void studySubmit(dispatch, file, time);
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
        <input
          type="number"
          min="1"
          max="23"
          id="time"
          onChange={(e) =>
            dispatch(setStudyTime({ time: Number(e.target.value) }))
          }
        />
        <span> 시간</span>
        <div className="desc">*시간 범위: 1 ~ 23시간</div>
      </TimeDiv>
      <ModalBtn.submit>챌린지 완료!</ModalBtn.submit>
    </ModalContentWithPic>
  );
};
export default Study;
