import { UserInfoType } from 'feature/profile/user';
import React from 'react';
import useSelectorTyped from 'utils/useSelectorTyped';
import Tweet from 'views/components/icons/auth/Tweet';
import { TweetBtn } from './RankingsPage.style';

const TwitterShare = (props: { stampsCount: number }) => {
  const { username }: Pick<UserInfoType, 'username'> = useSelectorTyped((state) => state.user.userInfo);

  const handleShareBtn = () => {
    window.open(`https://twitter.com/intent/tweet?text=${username}님이 벌써 ${props.stampsCount}개의 도장을 모았어요! 여러분도 지금 챌린지를 시작하고 선인장을 키워보세요🌵 &hashtags=선인장키우기`,
      'Tweet', 'popup, width=500, height=500');
  };
  return (
    <TweetBtn onClick={handleShareBtn}>
      <Tweet />
      <span>Tweet</span>
    </TweetBtn>
  );
};

export default TwitterShare;
