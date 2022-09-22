import React from 'react';
import styled from 'styled-components';
import SadCactus from '../icons/modal/SadCactus';
import ModalPortal from './ModalPortal';
import { AlertProps, AlertMsg } from './types';
const msg: AlertMsg = {
  giveup:
    '도중 포기를 할 경우\n 이번 챌린지의 내용들이\n 모두 삭제되고\n 선인장이 죽게됩니다.\n 그래도 포기하시겠습니까?',
  logout: '로그아웃 하시겠습니까?',
  resign:
    '정말 떠나실 건가요?\n탈퇴하시면 회원 정보와 함께\n지금까지의 챌린지 기록이\n 모두 삭제됩니다.'
};
const AlertModal = ({ setIsOpen, status }: AlertProps) => {
  return (
    <ModalPortal>
      <ModalWrapper>
        <div className="bg" onClick={() => setIsOpen(false)}></div>
        <ModalConents>
          <button className="material-icons" onClick={() => setIsOpen(false)}>
            close
          </button>

          <SadCactus />
          <div className="contents">{msg[status]}</div>
          <div className="btns">
            <button>확인</button>
            <button onClick={() => setIsOpen(false)}>돌아가기</button>
          </div>
        </ModalConents>
      </ModalWrapper>
    </ModalPortal>
  );
};

export const ModalWrapper = styled.div`
  .bg {
    content: "";
    position: fixed;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  width: 80%;
  max-width: 350px;
  height: 250px;
  top: calc(50% - 70px);
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: 7;
  animation: open 0.4s forwards 1 ease-out;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  .material-icons {
    position: absolute;

    top: 5px;
    right: 0;
    background-color: transparent;
    font-weight: 600;
    color: var(--modal-gray);
    cursor: pointer;
    border: none;
    box-shadow: none;
  }
  .contents {
    margin: 10px;
    padding: 5px;
    word-break: break-all;
    font-weight: 600;
    text-align: center;
    white-space: pre-wrap;
    line-height: 1.3;
    letter-spacing: 1px;
    font-size: 0.85rem;
  }
  .btns {
    margin-top: 5px;
    padding: 5px;
    display: flex;
    justify-content: center;
    width: 80%;

    button {
      border-radius: 15px;
      border: none;
      color: white;
      font-size: 0.8rem;
      :first-child {
        background-color: var(--modal-green);
        margin-right: 10px;
        padding: 10px 20px;
      }
      :last-child {
        background-color: var(--modal-red);
        padding: 10px 15px;
      }
    }
  }
  @keyframes open {
    to {
      transform: translate(-50%, -50%) scale(1);
    }
    from {
      transform: translate(-50%, -50%) scale(0.5);
    }
  }
`;

export default AlertModal;
