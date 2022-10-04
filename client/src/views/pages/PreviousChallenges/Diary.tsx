import React from 'react';
import { Center } from './PreviousChallenges.style';
import useSelectorTyped from 'utils/useSelectorTyped';
import { MypageIcon } from 'views/components/icons/mypage';
import { selectDiaryTypeChallenge } from 'utils/selectors';
import DiaryItem from './DiaryItem';

const PreviousDiary = () => {
  const filteredDiaries = useSelectorTyped(selectDiaryTypeChallenge);

  return (
    <>
      {filteredDiaries !== undefined && filteredDiaries.length > 0
        ? filteredDiaries?.map((diary, diaryIdx) => {
          return (
            <DiaryItem key={diaryIdx} diary={diary} />
          );
        })
        : <Center>
          <MypageIcon.SadCactus />
          제출한 기록이 없어요
        </Center>
      }
    </>
  );
};

export default PreviousDiary;
