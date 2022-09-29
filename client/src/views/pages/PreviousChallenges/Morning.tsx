import React from 'react';
import { Layout } from 'views/components/UI/Layout.style';
import { TitleIcon } from 'views/components/UI/atoms/icon.style';
import { Title, Content } from 'views/components/UI/molecules/text.style';

const PreviousMorning = () => {
  const dummy = [{ day: '2022년 5월 5일', time: '2' },
    { day: '2022년 5월 5일', time: '12' },
    { day: '2022년 5월 5일', time: '2' },
    { day: '2022년 5월 5일', time: '2' },
    { day: '2022년 5월 5일', time: '2' },
    { day: '2022년 5월 5일', time: '2' }];

  return (
    <>
    {dummy.map((el, idx) => {
      return (
        <Layout.ChallengeWrapper key={idx}>
          <Title.Day>{el.day}</Title.Day>
          <Content.Diary>
            <TitleIcon className="material-symbols-outlined">wb_sunny</TitleIcon>
            목표: {el.time}시
            <div>00시 00분 0에 일어났어요</div>
          </Content.Diary>
        </Layout.ChallengeWrapper>
      );
    })}
    </>
  );
};

export default PreviousMorning;
