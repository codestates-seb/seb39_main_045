import React from 'react';
import { ChallengeWrapper } from 'views/components/UI/layout';
import { Title, Content } from 'views/components/UI/molecules/text.style';
import { TapHomeIcon } from 'views/components/UI/atoms/icon.style';

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
            <Title.Day>{el.day}</Title.Day>
            <Content.Diary>
            <TapHomeIcon className="material-symbols-outlined">notes</TapHomeIcon>
              {el.content}
            </Content.Diary>
          </ChallengeWrapper>
        );
      })}
    </>
  );
};

export default DiaryChallenge;
