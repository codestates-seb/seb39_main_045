import React from 'react';
import { Center } from './PreviousChallenges.style';
import useSelectorTyped from 'utils/useSelectorTyped';
import { MypageIcon } from 'views/components/icons/mypage';
import MorningItem from './MorningItem';
import { selectMorningTypeChallenge } from 'utils/selectors';

const PreviousMorning = () => {
  const filteredMorning = useSelectorTyped(selectMorningTypeChallenge);

  return (
    <>
      {filteredMorning !== undefined && filteredMorning.length > 0
        ? filteredMorning?.map((morning, morningIdx) => {
          return (
            <MorningItem key={morningIdx} morning={morning} />
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

export default PreviousMorning;
