import React from 'react';
import google from 'assets/img/btn_google_signin_light_normal_web.png';
const GoogleLogin = () => {
  const handleGoogle = () => {
    window.location.href =
      'https://api.cactus-villeage.com/oauth2/authorization/google?redirect_uri=https://dev.cactus-villeage.com/main/';
  };

  return <img src={google} onClick={handleGoogle} alt="googleLogin" />;
};

export default GoogleLogin;
