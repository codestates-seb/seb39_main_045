import React from 'react';
import { StampContiner, IconWrapper } from 'views/pages/Mypage/mypage.style';
import { Stamp } from 'views/components/icons/stamps';

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

const iconMap = Object.entries(Stamp).map(([key, Component]) => <Component key={`${key}_stamp_key`} />);

const getRandomNumber = () => {
  return Math.floor(Math.random() * 5);
};

const StampList = () => {
  const dummy = { stamps: [4, 6, 2, 1, 2, 3, 4, 5, 8] };
  const nums: number[] = Array(dummy.stamps.length).fill(0).map(() => getRandomNumber());
  // {dummy.stamps.length.toString() + '개'}
  return (
    <StampContiner>
    {dummy.stamps.map((stamp, idx) => {
      return (
        <IconWrapper key={idx} bgColor={STAMP_COLOR[nums[idx]].bgColor} borderColor={STAMP_COLOR[nums[idx]].borderColor}>
          {iconMap[stamp - 1]}
        </IconWrapper>
      );
    })}
    </StampContiner>
  );
};

export default StampList;
