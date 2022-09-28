import React from 'react';
import Tweet from 'views/components/icons/auth/Tweet';
import { TweetBtn } from '../mypage.style';

const TwitterShare = () => {
  const handleShareBtn = () => {
    window.open('https://twitter.com/intent/tweet?text=ㅇㅇ님이 벌써 5개의 도장을 모았어요! 여러분도 지금 챌린지를 시작하고 선인장을 키워보세요🌵 &hashtags=선인장키우기',
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
