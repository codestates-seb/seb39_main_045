import React from 'react';
import { Title } from 'views/components/UI/molecules/text.style';
import { MypageIcon } from 'views/components/icons/mypage';
import { Center } from './PreviousChallenges.style';

const PreviousHome = () => {
  return (
    <Center>
      <MypageIcon.NoticeCactus />
      <Title.Day>대단해요!</Title.Day>
      <Title.Day>50일동안 10번의 도전을 하셨어요🥳</Title.Day>
    </Center>
  );
};

export default PreviousHome;
