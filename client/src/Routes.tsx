import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Pages } from './views/pages';
import LoadingPage from 'views/pages/LoadingPage';
import ProtectedRoute from 'utils/ProtectRoute';
import useSelectorTyped from 'utils/useSelectorTyped';
const { status } = useSelectorTyped((state) => state.user.userInfo);
const RouteModule = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<Pages.IntroPage />} />

        <Route
          path="main"
          element={
            <ProtectedRoute>
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
            <ProtectedRoute>
              <Pages.Mypage />
            </ProtectedRoute>
          }
        />

        <Route
          path="settings"
          element={
            <ProtectedRoute>
              <Pages.SettingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="previous-challenges"
          element={
            <ProtectedRoute>
              <Pages.PreviousChallengesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="active-challenges"
          element={
            <ProtectedRoute>
              <Pages.CurrentChallengesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="rankings"
          element={
            <ProtectedRoute>
              <Pages.RankingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="credit"
          element={
            <ProtectedRoute>
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
