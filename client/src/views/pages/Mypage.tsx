import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Container, TapHome, TapHomeBtn } from 'views/components/mypage/mypage';
import MypageHome from 'views/components/mypage/MypageHome';
import MypageSettings from 'views/components/mypage/MypageSettings';
import NowChallenge from 'views/components/mypage/MypageNowChallenge';
import ChallengeBook from 'views/components/mypage/MypagePrevChallenges';
import MypageRanking from 'views/components/mypage/MypageRanking';
import MypageCredit from 'views/components/mypage/MypageCredit';

const Mypage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      {location.pathname === '/mypage'
        ? <TapHome>마이페이지</TapHome>
        : <TapHomeBtn as='button' onClick={() => navigate('/mypage')}>
        <span className="material-symbols-outlined">
        keyboard_backspace
        </span>
        마이페이지
      </TapHomeBtn>
    }
      <Routes>
        <Route path='/' element={<MypageHome />} />
        <Route path='settings' element={<MypageSettings />} />
        <Route path='challenge' element={<NowChallenge />} />
        <Route path='book' element={<ChallengeBook />} />
        <Route path='rank' element={<MypageRanking />} />
        <Route path='credit' element={<MypageCredit />} />
      </Routes>
    </Container>
  );
};

export default Mypage;
