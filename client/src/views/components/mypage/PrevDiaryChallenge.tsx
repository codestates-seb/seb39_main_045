import React from 'react';
import { Title, ChallengeWrapper } from './mypageStyle';

const DiaryChallenge = () => {
  const dummy = [{ day: '2022년 5월 5일', content: '오늘은 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날이다 감사합니다 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 ' },
    { day: '2022년 5월 5일', content: '오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 ' },
    { day: '2022년 5월 5일', content: '오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 ' },
    { day: '2022년 5월 5일', content: '오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 ' },
    { day: '2022년 5월 5일', content: '오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 ' },
    { day: '2022년 5월 5일', content: '오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 ' }];

  return (
    <>
      {dummy.map((el, idx) => {
        return (
          <ChallengeWrapper key={idx}>
            <Title paddingTop='20px' fontSize='1rem'>{el.day}</Title>
            <Title paddingTop='20px' fontSize='1.1rem' lineHeight='1.7rem'>
            <span className="material-symbols-outlined">notes</span>
              {el.content}
            </Title>
          </ChallengeWrapper>
        );
      })}
    </>
  );
};

export default DiaryChallenge;
