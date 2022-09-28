import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { TapHome, TapHomeBtn, Container } from 'views/pages/Mypage/mypage.style';
import { TapHomeIcon } from 'views/components/UI/atoms/icon.style';
import MypageHome from 'views/pages/Mypage/Home';
import MypageSettings from 'views/pages/Mypage/userinfo';
import NowChallenge from 'views/pages/Mypage/currChallenges';
import ChallengeBook from 'views/pages/Mypage/prevChallenges';
import MypageRanking from 'views/pages/Mypage/ranking';
import MypageCredit from 'views/pages/Mypage/credit';

const Mypage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      {location.pathname === '/mypage'
        ? <TapHome>마이페이지</TapHome>
        : <TapHomeBtn as='button' onClick={() => navigate('/mypage')}>
        <TapHomeIcon className="material-symbols-outlined">keyboard_backspace</TapHomeIcon>
        마이페이지
      </TapHomeBtn>
    }
      <Routes>
        <Route path='/' element={<MypageHome />} />
        <Route path='settings' element={<MypageSettings />} />
        <Route path='challenge' element={<NowChallenge />} />
        <Route path='book/*' element={<ChallengeBook />} />
        <Route path='rank' element={<MypageRanking />} />
        <Route path='credit' element={<MypageCredit />} />
      </Routes>
    </Container>
  );
};

export default Mypage;
