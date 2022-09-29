import React from 'react';
import { Layout } from 'views/components/UI/Layout.style';
import { Title, Content } from 'views/components/UI/molecules/Text.style';
import { TapHomeIcon } from 'views/components/UI/atoms/Icon.style';

const PreviousDiary = () => {
  const dummy = [{ day: '2022년 5월 5일', content: '오늘은 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날이다 감사합니다 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 ' },
    { day: '2022년 5월 5일', content: '오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 ' },
    { day: '2022년 5월 5일', content: '오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 ' },
    { day: '2022년 5월 5일', content: '오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 ' },
    { day: '2022년 5월 5일', content: '오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 ' },
    { day: '2022년 5월 5일', content: '오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 오늘은 어린이날 ' }];

  return (
    <>
      {
        dummy.map((el, idx) => {
          return (
            <Layout.ChallengeWrapper key={idx}>
              <Title.Day>{el.day}</Title.Day>
              <Content.Diary>
              <TapHomeIcon className="material-symbols-outlined">notes</TapHomeIcon>
                {el.content}
              </Content.Diary>
            </Layout.ChallengeWrapper>
          );
        })}
    </>
  );
};

export default PreviousDiary;
