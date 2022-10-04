import React from 'react';
import { ModalBtn, SuccessFailWrapper } from './modal.style';
import { AlertProps } from '../../../types/mainPageTypes';
// 나중에 수정하기~

type SuccessFailType = string | 'success' | 'fail';
interface SuccessFailMsg {
  [index: SuccessFailType]: string
  success: string
  fail: string
}
// interface SuccessFailTitle {
//   [index: SuccessFailType]: string
//   success: string
//   fail: string
// }
// interface SuccessFailEl {
//   title: SuccessFailTitle
//   msg: SuccessFailMsg
// }
// const successFailEl = {
//   title,
//   msg
// };

const msg: SuccessFailMsg = {
  success:
    '와! 챌린지 성공이라니!\n 오늘도 한걸음\n성장하셨네요!\n\n 다른 챌린지도\n성공해보세요!',
  fail: '앗! 챌린지 실패로\n선인장이 죽어버렸어요\nㅠㅠ\n\n새로 키우시겠습니까?'
};
// const title: SuccessFailTitle = {
//   success: '챌린지 성공!',
//   fail: '챌린지 실패!'
// };
const SuccessFailModal = ({ status, setIsOpen }: AlertProps) => {
  return (
    <SuccessFailWrapper>
      <h2>챌린지 테스트중!</h2>
      <div className="msg">{msg[status]}</div>
      <ModalBtn.confirm onClick={() => setIsOpen(false)}>확인</ModalBtn.confirm>
    </SuccessFailWrapper>
  );
};

export default SuccessFailModal;
