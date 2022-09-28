import React, { useRef, useState, useEffect } from 'react';
import ModalPortal from './ModalPortal';
import preview from '../../../assets/img/preview.png';
import {
  ModalWrapper,
  ModalContentWrapper,
  ModalBtn,
  TimeDiv,
  TextArea,
  ModalContent,
  ModalContentDiv,
  ModalContentWithPic
} from './modal.style';
import { AlertProps } from './types';

const Thanks = () => {
  const thanksText = useRef<HTMLTextAreaElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const text = thanksText.current?.value;
  };
  return (
    <ModalContent onSubmit={handleSubmit}>
      <label>감사일기</label>
      <TextArea ref={thanksText}></TextArea>
      <ModalBtn.submit>챌린지 완료!</ModalBtn.submit>
    </ModalContent>
  );
};
const Study = () => {
  const [picPreview, setPicPreview] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handlePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    // const form = new FormData();
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
      <ModalBtn.submit>챌린지 완료!</ModalBtn.submit>
    </ModalContentWithPic>
  );
};
const MorningTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <div>{time.toLocaleString().slice(13)}</div>;
};
const Morning = () => {
  const handleSubmit = () => {
    /// histories
    const time = new Date();
    alert(time);
  };
  return (
    <ModalContentDiv>
      <div className="wrapper">
        <div>현재 시간</div>
        <MorningTime />
        <div>버튼을 눌러 챌린지를 완료하세요!</div>
      </div>
      <ModalBtn.submit onClick={handleSubmit}>챌린지 완료!</ModalBtn.submit>
    </ModalContentDiv>
  );
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
  return (
    <ModalPortal>
      <ModalWrapper>
        <div onClick={() => setIsOpen(false)}></div>
        <ModalContentWrapper>
          <h4>{'오늘의 챌린지'}</h4>
          <button className="material-icons" onClick={() => setIsOpen(false)}>
            close
          </button>
          <TodayModal status={status} />
        </ModalContentWrapper>
      </ModalWrapper>
    </ModalPortal>
  );
};

export default TodayChallModal;
