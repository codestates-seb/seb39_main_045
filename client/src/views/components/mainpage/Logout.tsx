import React, { useState } from 'react';
import styled from 'styled-components';
import AlertModal from './AlertModal';
import { MainBtn } from './MainStyles';

const Logout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <LogoutBtn
        className="material-icons"
        id="logout"
        onClick={() => setIsOpen(true)}
      >
        logout
      </LogoutBtn>
      {isOpen && <AlertModal setIsOpen={setIsOpen} status={'logout'} />}
    </>
  );
};
const LogoutBtn = styled(MainBtn)`
  margin: 5px;
  background-color: var(--main-btn-green);
  :active {
    background-color: var(--main-emp-green);
  }
  :hover {
    background-color: var(--main-emp-green);
  }
`;
export default Logout;
