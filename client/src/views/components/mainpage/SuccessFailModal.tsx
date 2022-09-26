import React from 'react';
import styled from 'styled-components';
import { ModalSubmitBtn } from './MainStyles';
import { DefaultProps, AlertProps } from './types';
const SuccessModal = ({ setIsOpen }: DefaultProps) => {
  return (
    <>
      <h2>챌린지 성공!</h2>
      <div className="msg">
        {
          '와! 챌린지 성공이라니!\n 오늘도 한걸음\n성장하셨네요!\n\n 다른 챌린지도\n성공해보세요!'
        }
      </div>
      <SuccessFailBtn onClick={() => setIsOpen(false)}>확인</SuccessFailBtn>
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
      <SuccessFailBtn>확인</SuccessFailBtn>
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

const SuccessFailWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 50px 0;
  z-index: 7;
  color: white;
  white-space: pre-wrap;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 30px;
  }
  div.msg {
    font-size: 1.6rem;
    line-height: 2.3rem;
    margin: 40px 0;
  }
`;
const SuccessFailBtn = styled(ModalSubmitBtn)`
  background-color: var(--main-btn-green);
  font-size: 1.7rem;
  :hover {
    background-color: var(--main-emp-green);
  }
`;
export default SuccessFailModal;
