import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';
import preview from '../../../assets/img/preview.png';
import {
  ModalWrapper,
  ModalContentWrapper,
  ModalSubmitBtn,
  TimeDiv
} from './MainStyles';
import { AlertProps } from './types';

const Thanks = () => {
  return <textarea></textarea>;
};
const Study = () => {
  const [picPreview, setPicPreview] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handlePreview = (e: React.ChangeEvent<HTMLInputElement | null>) => {
    const reader = new FileReader();
    if (e.target.files != null) {
      const file = e.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setPicPreview(reader.result);
        }
      };
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
  };
  return (
    <ModalContentWithPic onSubmit={handleSubmit}>
      <label htmlFor="photo">사진 등록</label>
      <img
        src={picPreview === '' ? preview : picPreview}
        alt="preview"
        id="preview"
      />
      <input
        type="file"
        id="photo"
        className="photo"
        accept="image/*"
        ref={fileInputRef}
        onChange={handlePreview}
      />
      <label htmlFor="time">총 공부시간</label>
      <TimeDiv>
        <input type="number" min="1" max="23" id="time" />
        <span> 시간</span>
        <div className="desc">*시간 범위: 1 ~ 23시간</div>
      </TimeDiv>
      <ModalSubmitBtn>챌린지 완료!</ModalSubmitBtn>
    </ModalContentWithPic>
  );
};
const Morning = () => {
  return <textarea></textarea>;
};
const TodayModal = ({ status }: { status: string }) => {
  if (status === 'study') {
    return <Study />;
  } else if (status === 'morning') {
    return <Morning />;
  } else {
    return <Thanks />;
  }
};

const TodayChallModal = ({ setIsOpen, status }: AlertProps) => {
  let krStatus = '';
  if (status === 'morning') {
    krStatus = '기상';
  } else if (status === 'study') {
    krStatus = '공부';
  } else {
    krStatus = '감사';
  }
  return (
    <ModalPortal>
      <ModalWrapper>
        <div className="bg" onClick={() => setIsOpen(false)}></div>
        <ModalContentWrapper>
          <span className="title">{`오늘의 ${krStatus} 챌린지`}</span>
          <button className="material-icons" onClick={() => setIsOpen(false)}>
            close
          </button>
          <TodayModal status={status} />
        </ModalContentWrapper>
      </ModalWrapper>
    </ModalPortal>
  );
};
const ModalContent = styled.form`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  label {
    margin: 10px 0;
    font-weight: 600;
    font-size: 0.88rem;
    margin-bottom: 5px;
  }
`;
const ModalContentWithPic = styled(ModalContent)`
  #preview {
    width: 80%;
    margin: 5px auto;
    align-self: center;
    border-radius: 3px;
  }
  input.photo {
    padding: 10px;
  }
`;
export default TodayChallModal;
