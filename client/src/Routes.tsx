import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Pages } from './views/pages';
import Loading from 'views/components/common/Loading';

const RouteModule = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Pages.IntroPage />} />
        <Route path='main' element={<Pages.MainNoCactus />} />
        <Route path='main2' element={<Pages.MainCactus />} />
        <Route path='mypage' element={<Pages.Mypage />} />
        <Route path='settings' element={<Pages.SettingsPage />} />
        <Route path='previous-challenges' element={<Pages.PreviousChallengesPage />} />
        <Route path='active-challenges' element={<Pages.CurrentChallengesPage />} />
        <Route path='rankings' element={<Pages.RankingsPage />} />
        <Route path='credit' element={<Pages.CreditPage />} />
        <Route path='login' element={<Pages.LoginPage />} />
        <Route path='signup' element={<Pages.SignupPage />} />
      </Routes>
    </Suspense>
  );
};

export default RouteModule;
