import React from 'react';
import { TapHomeBtn } from 'views/pages/Mypage/mypage.style';
import { TapHomeIcon } from 'views/components/UI/atoms/icon.style';
import { useNavigate } from 'react-router-dom';

const MyPageNav = () => {
  const navigate = useNavigate();

  return (
    <TapHomeBtn role='button' onClick={() => navigate('/mypage')}>
      <TapHomeIcon className="material-symbols-outlined">keyboard_backspace</TapHomeIcon>
      마이페이지
    </TapHomeBtn>
  );
};

export default MyPageNav;
