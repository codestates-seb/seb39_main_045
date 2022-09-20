import React from 'react';
import styled from 'styled-components';
export const CactusWrapper = styled.div`
  background-color: var(--main-bg-skyblue);
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
export const NavBtns = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: flex-start;
  position: absolute;
  top: 0;
  z-index: 3;
  width: 100%;
  button {
    border: none;
    background-color: var(--main-btn-brown);
    color: white;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
  .leftBtns {
    .waterNsun {
      display: flex;
      justify-content: space-between;
      margin: 5px;
      button {
        border-radius: 50%;
      }
      button:first-child {
        color: var(--main-bg-skyblue);
      }
      button:last-child {
        color: #ffee58;
      }
    }
    .choose {
      margin-top: 5px;
      border-radius: 10px;
      font-size: 14px;
      padding: 10px;
      font-weight: 400;
    }
  }

  #logout {
    border-radius: 50%;
    margin: 5px;
    background-color: var(--main-btn-green);
  }
`;
const MainNoCactus = () => {
  return (
    <CactusWrapper>
      <NavBtns>
        <div className="leftBtns">
          <div className="waterNsun">
            <button className="material-icons">water_drop</button>
            <button className="material-icons">wb_sunny</button>
          </div>
          <button className="choose">챌린지 선택하기</button>
        </div>
        <button className="material-icons" id="logout">
          logout
        </button>
      </NavBtns>
    </CactusWrapper>
  );
};

export default MainNoCactus;
