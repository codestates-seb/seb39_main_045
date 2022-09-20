import React from 'react';
import styled from 'styled-components';

const AlertWrapper = styled.div`
  .bg {
    content: "";
    position: absolute;
    /* 우선앱솔루트줬긴했늗네 모르겠다ㅣㅇ... */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 5;
    overflow: hidden;
  }
`;
const ModalConents = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 400px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 7;
  padding: 30px;
  border-radius: 10px;
  img {
    width: 50px;
    height: 50px;
  }
  .contents {
    margin: 10px;
    word-break: break-all;
    font-weight: 600;
    text-align: center;
    white-space: pre-wrap;
    line-height: 1.2;
    letter-spacing: 1px;
  }
  .btns {
    margin-top: 10px;
    padding: 10px;
    button {
      /* display: inline-block; */
      padding: 10px 15px;
      border-radius: 15px;
      border: none;
      margin: 10px;
      color: white;
      :first-child {
        background-color: var(--modal-green);
      }
      :last-child {
        background-color: var(--modal-red);
      }
    }
  }
`;
const AlertModal = () => {
  return (
    <AlertWrapper>
      <div className="bg"></div>
      <ModalConents>
        <img src="" alt="" />
        <div className="contents">
          도중 포기를 할 경우
          <br /> 이번 챌린지의 내용들이
          <br />
          모두 삭제되고
          <br />
          선인장이 죽게됩니다.
          <br /> 그래도 포기하시겠습니까?
        </div>
        <div className="btns">
          <button>확인</button>
          <button>돌아가기</button>
        </div>
      </ModalConents>
    </AlertWrapper>
  );
};
export default AlertModal;
