import React, { useRef, useState, useEffect } from 'react';
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
  const thanksText = useRef<HTMLTextAreaElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const text = thanksText.current?.value;
  };
  return (
    <ModalContent onSubmit={handleSubmit}>
      <label>감사일기</label>
      <TextArea ref={thanksText}></TextArea>
      <ModalSubmitBtn>챌린지 완료!</ModalSubmitBtn>
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
      <ModalSubmitBtn>챌린지 완료!</ModalSubmitBtn>
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
      <ModalSubmitBtn onClick={handleSubmit}>챌린지 완료!</ModalSubmitBtn>
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
  let krStatus = '';
  switch (status) {
    case 'morning':
      krStatus = '기상';
      break;
    case 'study':
      krStatus = '공부';
      break;
    default:
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
const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: none;
  margin: 10px auto;
  border-radius: 5px;
  resize: none;
  &:focus {
    outline: 2px solid #ffbe28;
  }
`;
const ModalContent = styled.form`
  padding: 20px 0 10px;
  display: flex;
  justify-content: space-between;
  min-height: 300px;
  flex-direction: column;
  label {
    margin: 10px 0;
    font-weight: 600;
    font-size: 0.88rem;
    margin-bottom: 5px;
  }
`;
const ModalContentDiv = styled.div`
  padding: 20px 0 10px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  justify-content: space-between;
  .wrapper > div {
    margin: 10px;
    text-align: center;
  }
`;

const ModalContentWithPic = styled(ModalContent)`
  justify-content: unset;
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
