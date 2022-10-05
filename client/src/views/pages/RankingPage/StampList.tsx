import React from 'react';
import { StampContiner, IconWrapper } from './RankingsPage.style';
import { Stamp } from 'views/components/icons/stamps';
import useSelectorTyped from 'utils/useSelectorTyped';
import type { IRankings } from 'feature/ranking';

const STAMP_COLOR = [
  {
    bgColor: '#ffc2cc',
    borderColor: '#ff7373'
  },
  {
    bgColor: '#ffebc2',
    borderColor: '#ffa273'
  },
  {
    bgColor: '#afe2aa',
    borderColor: '#73b073'
  },
  {
    bgColor: '#bde9ec',
    borderColor: '#468dc7'
  },
  {
    bgColor: '#ead9f1',
    borderColor: '#b58fcb'
  }
] as const;

const iconMap: JSX.Element[] = Object.entries(Stamp).map(([key, Component]) => <Component key={`${key}_stamp_key`} />);

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 5);
};

const StampList = () => {
  const { myStamps }: Pick<IRankings, 'myStamps'> = useSelectorTyped(state => state.rankingReducer);
  const nums: number[] = Array(myStamps.length).fill(0).map(() => getRandomNumber());

  return (
    <StampContiner>
      {myStamps.map((stamp, stampIdx) => {
        return (
          <IconWrapper
            key={stampIdx}
            bgColor={STAMP_COLOR[nums[stampIdx]].bgColor}
            borderColor={STAMP_COLOR[nums[stampIdx]].borderColor}
          >
            {iconMap[stamp - 1]}
          </IconWrapper>
        );
      })}
    </StampContiner>
  );
};

export default StampList;
