import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Pages } from './views/pages';
import LoadingPage from 'views/pages/LoadingPage';
import useSelectorTyped from 'utils/useSelectorTyped';

const RouteModule = () => {
  const { status } = useSelectorTyped((state) => state.user.userInfo);

  return (
    <Suspense fallback={<LoadingPage />}>
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
        <Route path="forgotpw" element={<Pages.ForgotPasswordPage />} />
        <Route path="*" element={<Pages.NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default RouteModule;
