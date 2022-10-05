import React from 'react';
import { RankBox } from './RankingsPage.style';
import { MypageIcon } from 'views/components/icons/mypage';
import { Layout } from 'views/components/UI/Layout.style';
import useSelectorTyped from 'utils/useSelectorTyped';
import type { IRankings, Ranker } from 'feature/ranking';

const iconMap = [
  <MypageIcon.GoldMedal key="goldMedal" />,
  <MypageIcon.SilverMedal key="silverMedal" />,
  <MypageIcon.BronzeMedal key="bronzeMedal" />
];

const Rankers = () => {
  const { requestStatus, rankers, myRanking }: Partial<IRankings> = useSelectorTyped(state =>
    state.rankingReducer);

  return (
    <Layout.ContentBox>
      <Layout.AlignCenter>
        {rankers.map((ranker: Ranker, rankIdx: number) => {
          const { rank, username, stamps }: Ranker = ranker;

          return (
            <RankBox key={rankIdx}>
              {iconMap[rank - 1]}
              <div>{username}</div>
              <div>{stamps}</div>
            </RankBox>
          );
        })}
        {
          myRanking !== null
            ? (
              <>
                <MypageIcon.More />
                <RankBox>
                  <div>{myRanking.rank}위</div>
                  <div>{myRanking.username}</div>
                  <div>{myRanking.stamps}</div>
                </RankBox>
              </>)
            : null}
        <div>
          {myRanking !== null && requestStatus === ''
            ? '축하합니다! Top3에 들어갔어요!'
            : null}
        </div>
      </Layout.AlignCenter>
    </Layout.ContentBox>
  );
};

export default Rankers;
