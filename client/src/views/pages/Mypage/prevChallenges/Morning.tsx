import React from 'react';
import { ChallengeWrapper } from 'views/components/UI/layout';
import { TitleIcon } from 'views/components/UI/atoms/icon.style';
import { Title, Content } from 'views/components/UI/molecules/text.style';

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
          <Title.Day>{el.day}</Title.Day>
          <Content.Diary>
            <TitleIcon className="material-symbols-outlined">wb_sunny</TitleIcon>
            기상 시간: {el.time}
          </Content.Diary>
        </ChallengeWrapper>
      );
    })}
    </>
  );
};

export default MorningChallenge;
