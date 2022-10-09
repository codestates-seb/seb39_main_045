import React from 'react';
import ExplanationModal from '../mainpageModal/ExplanationModal';
import { MainBtn } from '../mainpage/main.style';

const Explanation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <MainBtn.explain
        className="material-icons"
        onClick={() => setIsOpen(true)}
      >
        question_mark
      </MainBtn.explain>
      {isOpen && <ExplanationModal setIsOpen={setIsOpen} />}
    </>
  );
};
export default Explanation;
