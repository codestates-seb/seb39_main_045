import React, { useState } from 'react';
import styled from 'styled-components';
import { MainBtn } from './MainStyles';
import SelectModal from './SelectModal';
const TodayBtn = styled(MainBtn)`
  color: #ffee58;
  /* background-color: var(--main-btn-brown); */
`;
const TodayChallBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <TodayBtn className="material-icons" onClick={() => setIsOpen(true)}>
        wb_sunny
      </TodayBtn>
      {isOpen && <SelectModal setIsOpen={setIsOpen} />}
    </>
  );
};
export default TodayChallBtn;
