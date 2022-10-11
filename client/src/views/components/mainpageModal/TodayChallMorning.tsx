import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModalBtn, ModalContentDiv } from '../mainpage/modal.style';
import { morningSubmit } from './todayChallFunctions';
const MorningTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <div>{time.toLocaleString('ko-KR').slice(13)}</div>;
};

const Morning = () => {
  const dispatch = useDispatch();
  return (
    <ModalContentDiv>
      <div className="wrapper">
        <div>현재 시간</div>
        <MorningTime />
        <div>버튼을 눌러 챌린지를 완료하세요!</div>
      </div>
      <ModalBtn.submit
        onClick={() => {
          void morningSubmit(dispatch);
        }}
      >
        챌린지 완료!
      </ModalBtn.submit>
    </ModalContentDiv>
  );
};
export default Morning;
