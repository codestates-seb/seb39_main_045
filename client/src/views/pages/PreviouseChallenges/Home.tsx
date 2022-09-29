import React from 'react';
import { Title } from 'views/components/UI/molecules/Text.style';
import { MypageIcon } from 'views/components/icons/mypage';

const PreviousHome = () => {
  return (
    <>
      <Title.Day>
        <MypageIcon.NoticeCactus />
      </Title.Day>
      <Title.Day>대단해요!</Title.Day>
      <Title.Day>50일동안 10번의 도전을 하셨어요🥳</Title.Day>
    </>
  );
};

export default PreviousHome;
