import React, { useState } from 'react';
import styled from 'styled-components';
import { MainBtn } from './MainStyles';
import TodayChallModal from './TodayChallModal';

const TodayChallBtn = () => {
  const status = 'morning';
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <TodayBtn className="material-icons" onClick={() => setIsOpen(true)}>
        wb_sunny
      </TodayBtn>
      {isOpen && <TodayChallModal setIsOpen={setIsOpen} status={status} />}
    </>
  );
};
const TodayBtn = styled(MainBtn)`
  color: #ffee58;
  /* background-color: var(--main-btn-brown); */
`;
export default TodayChallBtn;
