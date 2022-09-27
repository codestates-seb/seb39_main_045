import React from 'react';
import styled from 'styled-components';

const KakaoShare = () => {
  const handleShareBtn = () => {
    window.Kakao.Share.sendCustom({
      templateId: 83427,
      templateArgs: {
        description: '벌써 0번의 챌린지에 성공한 ㅇㅇㅇㅇ님이 선인장 키우기에 초대하셨어요.'
      }
    });
  };

  return (
    <KakaoBtn id="kakaotalk-sharing-btn" onClick={handleShareBtn}>
      <img
      width={20}
      src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
      alt="카카오톡 공유 보내기 버튼"
      />
      <span>카카오톡</span>
    </KakaoBtn>
  );
};

const KakaoBtn = styled.button`
  font-size: 0.8rem;
  background-color: var(--mypage-btn-beige);
  padding: 3px 10px;
  border-radius: 15px;
  border: 0.5px solid var(--mypage-btn-yellow);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05), 0 2px 10px rgba(0, 0, 0, 0.03);
  margin-right: 5px;
  span {
    vertical-align: 7px;
    padding-left: 5px;
  }
  &:hover {
    background-color: var(--mypage-btn-yellow);
  }
`;

export default KakaoShare;
