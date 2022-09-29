import React from 'react';
import { RankBox } from './RankingsPage.style';
import { MypageIcon } from 'views/components/icons/mypage';
import { Layout } from 'views/components/UI/Layout.style';

const iconMap = [
  <MypageIcon.GoldMedal key="goldMedal" />,
  <MypageIcon.SilverMedal key="silverMedal" />,
  <MypageIcon.BronzeMedal key="bronzeMedal" />
];

const dummy = [{ username: '이름', stamps: 35 }, { username: '이름', stamps: 35 }, { username: '이름', stamps: 35 }];

const Rankers = () => {
  return (
    <Layout.ContentBox>
      <Layout.AlignCenter>
        {iconMap.map((el, idx) => {
          return (
            <RankBox key={idx}>
              {iconMap[idx]}
              <div>{dummy[idx].username}</div>
              <div>{dummy[idx].stamps}</div>
            </RankBox>
          );
        })}
        <MypageIcon.More />
        <RankBox>
          <div>50위</div>
          <div>나</div>
          <div>5</div>
        </RankBox>
      </Layout.AlignCenter>
  </Layout.ContentBox>
  );
};

export default Rankers;
