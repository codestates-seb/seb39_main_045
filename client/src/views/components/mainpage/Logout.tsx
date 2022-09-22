import React, { useState } from 'react';
import styled from 'styled-components';
import AlertModal from './AlertModal';
const LogoutBtn = styled.button`
  &#logout {
    border-radius: 50%;
    margin: 5px;
    background-color: var(--main-btn-green);
    :active {
      background-color: var(--main-emp-green);
    }
    :hover {
      background-color: var(--main-emp-green);
    }
  }
`;
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

export default Logout;
