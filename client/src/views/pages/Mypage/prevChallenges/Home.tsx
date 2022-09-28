import React from 'react';
import { Title } from '../../../components/UI/molecules/text.style';
import NoticeCactus from 'views/components/icons/mypage/NoticeCactus';

const PrevChallengeHome = () => {
  return (
    <>
      <Title.Day>
        <NoticeCactus />
      </Title.Day>
      <Title.Day>대단해요!</Title.Day>
      <Title.Day>50일동안 10번의 도전을 하셨어요🥳</Title.Day>
    </>
  );
};

export default PrevChallengeHome;
