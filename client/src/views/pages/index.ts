import { lazy } from 'react';

const SettingsPage = lazy(async () => await import('./SettingsPage'));
const CurrentChallengesPage = lazy(
  async () => await import('./CurrentChallengesPage')
);
const RankingsPage = lazy(async () => await import('./RankingPage'));
const CreditPage = lazy(async () => await import('./CreditPage'));
const MainCactus = lazy(async () => await import('./MainCactus'));
const MainNoCactus = lazy(async () => await import('./MainNoCactus'));
const IntroPage = lazy(async () => await import('./IntroPage'));
const Mypage = lazy(async () => await import('./Mypage'));
const PreviousChallengesPage = lazy(
  async () => await import('./PreviousChallenges')
);
const LoginPage = lazy(async () => await import('./LoginPage'));
const SignupPage = lazy(async () => await import('./SignupPage'));
const NotFoundPage = lazy(async() => await import('./NotFoundPage'));

export const Pages = {
  SettingsPage,
  CurrentChallengesPage,
  RankingsPage,
  CreditPage,
  MainCactus,
  MainNoCactus,
  IntroPage,
  Mypage,
  PreviousChallengesPage,
  LoginPage,
  SignupPage,
  NotFoundPage
};
