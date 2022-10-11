import React from 'react';
import { StampContiner, IconWrapper } from './RankingsPage.style';
import { getRandomNumber, STAMP_COLOR, iconMap } from './rankingConstants';

const StampList = (props: { myStamps: number[] }) => {
  const nums: number[] = Array(props.myStamps.length).fill(0).map(() => getRandomNumber());

  return (
    <StampContiner>
      {
        props.myStamps.map((stamp, stampIdx) => {
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
