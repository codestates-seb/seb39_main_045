import React from 'react';
import Arrow from 'views/components/icons/mypage/Arrow';
import Garden from 'views/components/icons/mypage/Garden';
import Notebook from 'views/components/icons/mypage/Notebook';
import Rank from 'views/components/icons/mypage/Rank';
import Credit from 'views/components/icons/mypage/Credit';
import { TapUserInfo, TapMenu } from './mypage.style';

interface TapMenuType {
  to: string
  icon: JSX.Element
  desc: string
}

const tapMap: TapMenuType[] = [
  {
    to: 'challenge',
    icon: <Garden />,
    desc: '진행중인 챌린지'
  },
  {
    to: 'book',
    icon: <Notebook />,
    desc: '지난 챌린지 모아보기'
  }
];

const MypageHome = () => {
  return (
    <>
      <TapUserInfo to='settings'>
        <div>인장님, 안녕하세요!</div>
        <Arrow />
        <div>abc@naver.com</div>
      </TapUserInfo>
      <TapMenu to='challenge'>
        <Garden />
          진행중인 챌린지
      </TapMenu>
      <TapMenu to='book'>
        <Notebook />
        지난 챌린지 모아보기
      </TapMenu>
      <TapMenu to='rank'>
        <Rank />
        실시간 도장 랭킹 확인하기
      </TapMenu>
      <TapMenu to='credit'>
        <Credit />
        선인장 키우기를 만든 사람들
      </TapMenu>
    </>
  );
};

export default MypageHome;
