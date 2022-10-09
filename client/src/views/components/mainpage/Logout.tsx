import React from 'react';
import AlertModal from '../mainpageModal/AlertModal';
import { MainBtn } from './main.style';
import { useDispatch } from 'react-redux';
import { setAlertOpen } from 'feature/challenge/form';
import useSelectorTyped from 'utils/useSelectorTyped';

const Logout = () => {
  const { isOpen, status } = useSelectorTyped(
    (state) => state.chall.alert_modal
  );
  const dispatch = useDispatch();

  return (
    <>
      <MainBtn.logout
        className="material-icons"
        id="logout"
        onClick={() =>
          dispatch(
            setAlertOpen({
              isOpen: true,
              status: 'logout'
            })
          )
        }
      >
        logout
      </MainBtn.logout>
      {isOpen && status === 'logout' && <AlertModal status={'logout'} />}
    </>
  );
};

export default Logout;
