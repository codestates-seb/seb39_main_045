import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Pages } from './views/pages';
import Loading from 'views/components/common/Loading';
import { RootState } from './store/store';
import { useSelector } from 'react-redux';
const RouteModule = () => {
  const { status } = useSelector((state: RootState) => state.user.userInfo);
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Pages.IntroPage />} />
        <Route
          path="main"
          element={
            status === 'none' ? <Pages.MainNoCactus /> : <Pages.MainCactus />
          }
        />
        <Route path="mypage" element={<Pages.Mypage />} />
        <Route path="settings" element={<Pages.SettingsPage />} />
        <Route
          path="previous-challenges"
          element={<Pages.PreviousChallengesPage />}
        />
        <Route
          path="active-challenges"
          element={<Pages.CurrentChallengesPage />}
        />
        <Route path="rankings" element={<Pages.RankingsPage />} />
        <Route path="credit" element={<Pages.CreditPage />} />
        <Route path="login" element={<Pages.LoginPage />} />
        <Route path="signup" element={<Pages.SignupPage />} />
      </Routes>
    </Suspense>
  );
};

export default RouteModule;
