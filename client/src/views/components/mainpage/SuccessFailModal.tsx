import React from 'react';
import { ModalBtn, SuccessFailWrapper } from './modal.style';
import { DefaultProps, AlertProps } from './types';
// 나중에 수정하기~
const SuccessModal = ({ setIsOpen }: DefaultProps) => {
  return (
    <>
      <h2>챌린지 성공!</h2>
      <div className="msg">
        {
          '와! 챌린지 성공이라니!\n 오늘도 한걸음\n성장하셨네요!\n\n 다른 챌린지도\n성공해보세요!'
        }
      </div>
      <ModalBtn.confirm onClick={() => setIsOpen(false)}>확인</ModalBtn.confirm>
    </>
  );
};
const FailModal = ({ setIsOpen }: DefaultProps) => {
  return (
    <>
      <h2>챌린지 실패!</h2>
      <div className="msg">
        {
          '앗! 챌린지 실패로\n선인장이 죽어버렸어요\nㅠㅠ\n\n새로 키우시겠습니까?'
        }
      </div>
      <ModalBtn.confirm onClick={() => setIsOpen(false)}>확인</ModalBtn.confirm>
    </>
  );
};

const SuccessFail = ({ status, setIsOpen }: AlertProps) => {
  switch (status) {
    case 'success':
      return <SuccessModal setIsOpen={setIsOpen} />;
    case 'fail':
      return <FailModal setIsOpen={setIsOpen} />;
    default:
      return <></>;
  }
};
const SuccessFailModal = ({ status, setIsOpen }: AlertProps) => {
  return (
    <SuccessFailWrapper>
      <SuccessFail status={status} setIsOpen={setIsOpen} />
    </SuccessFailWrapper>
  );
};

export default SuccessFailModal;
