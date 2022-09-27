import React from 'react';
import { Title, ChallengeWrapper } from './mypageStyle';

const MorningChallenge = () => {
  const dummy = [{ day: '2022년 5월 5일', time: '0시 0분 0초' },
    { day: '2022년 5월 5일', time: '0시 0분 0초' },
    { day: '2022년 5월 5일', time: '0시 0분 0초' },
    { day: '2022년 5월 5일', time: '0시 0분 0초' },
    { day: '2022년 5월 5일', time: '0시 0분 0초' },
    { day: '2022년 5월 5일', time: '0시 0분 0초' }];

  return (
    <>
    {dummy.map((el, idx) => {
      return (
          <ChallengeWrapper key={idx}>
            <Title paddingTop='20px' fontSize='1rem'>{el.day}</Title>
            <Title paddingTop='20px' fontSize='1.2rem'>
              <span className="material-symbols-outlined">wb_sunny</span>
              기상 시간: {el.time}
            </Title>
          </ChallengeWrapper>
      );
    })}
    </>
  );
};

export default MorningChallenge;
