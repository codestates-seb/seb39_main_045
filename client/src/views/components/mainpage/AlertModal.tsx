import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import SadCactus from '../icons/modal/SadCactus';
import ModalPortal from './ModalPortal';
import { AlertProps } from './types';

const AlertWrapper = styled.div`
  .bg {
    content: "";
    position: fixed;
    /* 우선앱솔루트줬긴했늗네 모르겠다ㅣㅇ... */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 5;
    overflow: hidden;
  }
`;
const ModalConents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  width: 80%;
  max-width: 350px;
  height: 250px;
  top: 50%;
  left: 50%;
  position: fixed;

  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 7;
  border-radius: 10px;
  .material-icons {
    position: absolute;

    top: 5px;
    right: 0;
    background-color: transparent;
    font-weight: 600;
    color: var(--modal-gray);
    cursor: pointer;
    border: none;
    box-shadow: none;
  }
  .contents {
    margin: 10px;
    padding: 5px;
    word-break: break-all;
    font-weight: 600;
    text-align: center;
    white-space: pre-wrap;
    line-height: 1.3;
    letter-spacing: 1px;
    font-size: 0.85rem;
  }
  .btns {
    margin-top: 5px;
    padding: 5px;
    display: flex;
    justify-content: center;
    width: 80%;

    button {
      /* display: inline-block; */
      /* flex: 50%; */

      border-radius: 15px;
      border: none;
      color: white;
      font-size: 0.8rem;
      :first-child {
        background-color: var(--modal-green);
        margin-right: 10px;
        padding: 10px 20px;
      }
      :last-child {
        background-color: var(--modal-red);
        padding: 10px 15px;
      }
    }
  }
`;

const AlertModal: React.FC<AlertProps> = ({ setIsOpen, status }) => {
  return (
    <ModalPortal>
      <AlertWrapper>
        <div className="bg"></div>
        <ModalConents>
          <button className="material-icons" onClick={() => setIsOpen(false)}>
            close
          </button>

          <SadCactus />
          <div className="contents">gkdl</div>
          <div className="btns">
            <button>확인</button>
            <button onClick={() => setIsOpen(false)}>돌아가기</button>
          </div>
        </ModalConents>
      </AlertWrapper>
    </ModalPortal>
  );
};
export default AlertModal;
