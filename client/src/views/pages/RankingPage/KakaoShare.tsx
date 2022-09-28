import React from 'react';
import { KakaoBtn } from './RankingsPage.style';

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

export default KakaoShare;
