import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Pages } from './views/pages';
import LoadingPage from 'views/pages/LoadingPage';
import ProtectedRoute from 'utils/ProtectRoute';
import useSelectorTyped from 'utils/useSelectorTyped';
const RouteModule = () => {
  // 셀렉터는 import { createSelector } from '@reduxjs/toolkit'; 를 사용하여 만들어야 한다.
  const status = useSelectorTyped((state) => state.user.userInfo.status);
  const isLoggedIn = useSelectorTyped((state) => state.user.loginStatus);
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<Pages.IntroPage />} />

        <Route
          path="main"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              {status === 'none'
                ? (
                <Pages.MainNoCactus />
                  )
                : (
                <Pages.MainCactus />
                  )}
            </ProtectedRoute>
          }
        />

        <Route
          path="mypage"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Pages.Mypage />
            </ProtectedRoute>
          }
        />

        <Route
          path="settings"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Pages.SettingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="previous-challenges"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Pages.PreviousChallengesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="active-challenges"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Pages.CurrentChallengesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="rankings"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Pages.RankingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="credit"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Pages.CreditPage />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Pages.LoginPage />} />
        <Route path="signup" element={<Pages.SignupPage />} />
        <Route path="forgotpw" element={<Pages.ForgotPasswordPage />} />
        <Route path="*" element={<Pages.NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default RouteModule;
