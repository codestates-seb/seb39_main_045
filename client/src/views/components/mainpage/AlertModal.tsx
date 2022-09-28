import React from 'react';
import SadCactus from '../icons/modal/SadCactus';
import { ModalWrapper, ModalContents } from './modal.style';
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
        <div onClick={() => setIsOpen(false)}></div>
        <ModalContents>
          <button className="material-icons" onClick={() => setIsOpen(false)}>
            close
          </button>

          <SadCactus />
          <div>{msg[status]}</div>
          <div>
            <button>확인</button>
            <button onClick={() => setIsOpen(false)}>돌아가기</button>
          </div>
        </ModalContents>
      </ModalWrapper>
    </ModalPortal>
  );
};

export default AlertModal;
