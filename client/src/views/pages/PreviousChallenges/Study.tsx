import React from 'react';
import { Center } from './PreviousChallenges.style';
import useSelectorTyped from 'utils/useSelectorTyped';
import { MypageIcon } from 'views/components/icons/mypage';
import { selectStudyTypeChallenge } from 'utils/selectors';
import StudyItem from './StudyItem';

const PreviousStudy = () => {
  const filteredStudy = useSelectorTyped(selectStudyTypeChallenge);

  return (
    <>
      {filteredStudy !== undefined && filteredStudy.length > 0
        ? filteredStudy?.map((study, studyIdx) => {
          return (
            <StudyItem key={studyIdx} study={study} />
          );
        })
        : <Center>
          <MypageIcon.SadCactus />
          제출한 기록이 없어요
        </Center>
      }
    </>);
};

export default PreviousStudy;
