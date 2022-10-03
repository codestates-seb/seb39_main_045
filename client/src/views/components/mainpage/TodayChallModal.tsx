import React from 'react';
import ModalPortal from './ModalPortal';
import { ModalWrapper, ModalContentWrapper } from './modal.style';
import { TodayProps } from '../../../types/mainPageTypes';
import Study from './TodayChallStudy';
import Thanks from './TodayChallThanks';
import Morning from './TodayChallMorning';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
type TodayChall = string | 'study' | 'morning' | 'thanks';
interface TodayEl {
  [index: TodayChall]: JSX.Element
  study: JSX.Element
  morning: JSX.Element
  thanks: JSX.Element
}
const todayChall: TodayEl = {
  study: <Study />,
  morning: <Morning />,
  thanks: <Thanks />
};
const TodayChallModal = ({ setIsOpen, status }: TodayProps) => {
  const { progress } = useSelector((state: RootState) => state.user.userInfo);

  // React.useEffect(() => {
  //   setIsOpen(false);
  // }, [progress]);

  return (
    <ModalPortal>
      <ModalWrapper>
        <div onClick={() => setIsOpen(false)}></div>
        <ModalContentWrapper>
          <h4>{'오늘의 챌린지'}</h4>
          <button className="material-icons" onClick={() => setIsOpen(false)}>
            close
          </button>
          {status !== null && todayChall[status]}
        </ModalContentWrapper>
      </ModalWrapper>
    </ModalPortal>
  );
};

export default TodayChallModal;
