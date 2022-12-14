import React from 'react';
import { TapHome, TapMenu, TapUserInfo } from './mypage.style';
import { MypageIcon } from 'views/components/icons/mypage';
import { useNavigate } from 'react-router-dom';
import { Layout } from 'views/components/UI/Layout.style';
import useSelectorTyped from 'utils/useSelectorTyped';
import { UserInfoType } from 'feature/profile/user';

const Mypage = () => {
  const navigate = useNavigate();
  const { username, email }: UserInfoType = useSelectorTyped(state => state.user.userInfo);

  return (
    <Layout.PageContainer>
      <TapHome>
        마이페이지
      </TapHome>
      <TapUserInfo role='button' onClick={() => navigate('/settings')}>
        <div>{username}님, 안녕하세요!</div>
        <MypageIcon.Arrow />
        <div>{email}</div>
      </TapUserInfo>
      <TapMenu role='button' onClick={() => navigate('/active-challenges')}>
        <MypageIcon.Garden />
        진행중인 챌린지
      </TapMenu>
      <TapMenu role='button' onClick={() => navigate('/previous-challenges')}>
        <MypageIcon.Notebook />
        지난 챌린지 모아보기
      </TapMenu>
      <TapMenu role='button' onClick={() => navigate('/rankings')}>
        <MypageIcon.Rank />
        실시간 도장 랭킹 확인하기
      </TapMenu>
      <TapMenu role='button' onClick={() => navigate('/credit')}>
        <MypageIcon.Credit />
        선인장 키우기를 만든 사람들
      </TapMenu>
    </Layout.PageContainer>
  );
};

export default Mypage;
