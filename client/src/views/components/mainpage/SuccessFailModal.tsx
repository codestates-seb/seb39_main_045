import React from 'react';
import { ModalBtn, SuccessFailWrapper } from './modal.style';
import { AlertProps, SuccessFail } from '../../../types/mainPageTypes';
import { useDispatch } from 'react-redux';
import { confirmSuccessFail } from './alertFunction';
const successFail: SuccessFail = {
  title: { success: '챌린지 성공!', fail: '챌린지 실패!' },
  msg: {
    success:
      '와! 챌린지 성공이라니!\n 오늘도 한걸음\n성장하셨네요!\n\n 다른 챌린지도\n성공해보세요!',
    fail: '앗! 챌린지 실패로\n선인장이 죽어버렸어요\nㅠㅠ\n\n새로 키우시겠습니까?'
  }
};

const SuccessFailModal = ({ status, setIsOpen }: AlertProps) => {
  const dispatch = useDispatch();
  return (
    <SuccessFailWrapper>
      <h2>{successFail.title[status]}</h2>
      <div className="msg">{successFail.msg[status]}</div>
      <ModalBtn.confirm
        onClick={() => {
          void confirmSuccessFail(dispatch, setIsOpen);
        }}
      >
        확인
      </ModalBtn.confirm>
    </SuccessFailWrapper>
  );
};

export default SuccessFailModal;
