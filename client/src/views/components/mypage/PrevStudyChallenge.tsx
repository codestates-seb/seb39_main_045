import React from 'react';
import styled from 'styled-components';
import { Title, DefaultBox } from './mypageStyle';

const StudyChallenge = () => {
  const dummy = [{ day: '2022년 5월 5일', content: '어린이날', img: 'https://yt3.ggpht.com/jNJ6FV83KdlgTHor9nqmxPQi6zDMhXZJl9wBNWHVgixbUUZikFg_TGrxJ9CK7ZXW_2zzWvmi1g=s176-c-k-c0x00ffffff-no-rj' },
    { day: '2022년 5월 5일', content: '어린이날', img: 'https://yt3.ggpht.com/jNJ6FV83KdlgTHor9nqmxPQi6zDMhXZJl9wBNWHVgixbUUZikFg_TGrxJ9CK7ZXW_2zzWvmi1g=s176-c-k-c0x00ffffff-no-rj' },
    { day: '2022년 5월 5일', content: '어린이날', img: 'https://yt3.ggpht.com/jNJ6FV83KdlgTHor9nqmxPQi6zDMhXZJl9wBNWHVgixbUUZikFg_TGrxJ9CK7ZXW_2zzWvmi1g=s176-c-k-c0x00ffffff-no-rj' },
    { day: '2022년 5월 5일', content: '어린이날', img: 'https://yt3.ggpht.com/jNJ6FV83KdlgTHor9nqmxPQi6zDMhXZJl9wBNWHVgixbUUZikFg_TGrxJ9CK7ZXW_2zzWvmi1g=s176-c-k-c0x00ffffff-no-rj' },
    { day: '2022년 5월 5일', content: '어린이날', img: 'https://yt3.ggpht.com/jNJ6FV83KdlgTHor9nqmxPQi6zDMhXZJl9wBNWHVgixbUUZikFg_TGrxJ9CK7ZXW_2zzWvmi1g=s176-c-k-c0x00ffffff-no-rj' },
    { day: '2022년 5월 5일', content: '어린이날', img: 'https://yt3.ggpht.com/jNJ6FV83KdlgTHor9nqmxPQi6zDMhXZJl9wBNWHVgixbUUZikFg_TGrxJ9CK7ZXW_2zzWvmi1g=s176-c-k-c0x00ffffff-no-rj' }];

  return (
  <>
    {dummy.map((el, idx) => {
      return (
      <>
        <Title paddingTop='50px' fontSize='1rem' key={idx}>{el.day}</Title>
        <Title paddingTop='15px' fontSize='1.2rem'>{el.content}</Title>
        <ImageBox as='img' src={el.img} border='1px solid var(--graph-bg-green)' bgColor='none' />
      </>
      );
    })}
  </>);
};

const ImageBox = styled(DefaultBox)`
  width: 50%;
  max-height: 300px;
  max-width: 300px;
  padding: 8px;
  object-fit: cover;
  margin: 20px 0;
`;

export default StudyChallenge;
