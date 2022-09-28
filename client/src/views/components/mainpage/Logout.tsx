import React, { useState } from 'react';
import AlertModal from './AlertModal';
import { MainBtn } from './main.style';

const Logout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MainBtn.logout
        className="material-icons"
        id="logout"
        onClick={() => setIsOpen(true)}
      >
        logout
      </MainBtn.logout>
      {isOpen && <AlertModal setIsOpen={setIsOpen} status={'logout'} />}
    </>
  );
};

export default Logout;
