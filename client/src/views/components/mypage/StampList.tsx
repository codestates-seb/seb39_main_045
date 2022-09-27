import React from 'react';
import styled from 'styled-components';
import StampA from '../icons/mypage/stamps/StampA';
import StampB from '../icons/mypage/stamps/StampB';
import StampC from '../icons/mypage/stamps/StampC';
import StampD from '../icons/mypage/stamps/StampD';
import StampE from '../icons/mypage/stamps/StampE';
import StampF from '../icons/mypage/stamps/StampF';
import StampG from '../icons/mypage/stamps/StampG';
import StampH from '../icons/mypage/stamps/StampH';

const iconMap = [<StampA key="stampA"/>, <StampB key="stampB"/>, <StampC key="stampC" />, <StampD key="stampD" />,
<StampE key="stampE"/>, <StampF key="stampF" />, <StampG key="stampG"/>, <StampH key="stampH"/>];

const colorMap = [
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
];

const StampList = () => {
  const dummy = { stamps: [4, 6, 2, 1, 2, 3, 4, 5, 8] };
  // {dummy.stamps.length.toString() + '개'}
  return (
    <StampContiner>
    {dummy.stamps.map((stamp, idx) => {
      const num = Math.floor(Math.random() * 5);
      return (
        <IconWrapper key={idx} bgColor={colorMap[num].bgColor} borderColor={colorMap[num].borderColor}>
          {iconMap[stamp - 1]}
        </IconWrapper>
      );
    })}
    </StampContiner>
  );
};

interface IconProps {
  bgColor: string
  borderColor: string
}

const IconWrapper = styled.div<IconProps>`
  border-radius: 50%;
  background-color: ${p => p.bgColor};
  width: fit-content;
  padding: 10px;
  border: ${p => `6px ridge ${p.borderColor}`};
  margin: 15px;
  align-self: center;
  justify-self: center;
`;

const StampContiner = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  width: 100%;
  grid-template-columns: 20% repeat(auto-fill, 20%);
  margin: 10px 0 0 0;
`;

export default StampList;
