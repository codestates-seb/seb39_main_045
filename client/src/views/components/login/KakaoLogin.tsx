import React from 'react';
import kakao from 'assets/img/kakao_login_medium_narrow.png';

const KakaoLogin = () => {
  const handleKaKao = () => {
    window.location.href = 'https://api.cactus-villeage.com/oauth2/authorization/kakao?redirect_uri=https://dev.cactus-villeage.com/main';
  };

  return (
    <img
    src={kakao}
    className="kakao"
    onClick={handleKaKao}
    alt="kakaoLogin"
  />
  );
};

export default KakaoLogin;
