import styled from 'styled-components';
// 공통
export const MainBtn = styled.button`
  border: none;
  color: white;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background-color: var(--main-btn-brown);
  border-radius: 50%;
  cursor: pointer;
`;
export const CactusWrapper = styled.div`
  background-color: var(--main-bg-skyblue);
  height: 100vh;
  overflow: hidden;
  position: relative;
  .cactus {
    position: absolute;
    bottom: 70px;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
  }
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
  .leftBtns {
    .waterNsun {
      display: flex;
      justify-content: space-between;
      margin: 5px;
    }
  }
`;
export const ModalWrapper = styled.div`
  .bg {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 5;
    overflow: hidden;
  }
`;
export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  width: 80%;
  max-width: 500px;
  top: calc(50% - 70px);
  left: 50%;
  position: fixed;
  animation: open 0.4s forwards 1 ease-out;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 7;
  border-radius: 10px;
  .title {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--main-btn-brown);
    font-weight: 700;
  }
  .material-icons {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    font-weight: 600;
    color: var(--modal-gray);
    cursor: pointer;
    border: none;
    box-shadow: none;
    font-size: 1.5rem;
  }

  @keyframes open {
    to {
      transform: translate(-50%, -50%) scale(1);
    }
    from {
      transform: translate(-50%, -50%) scale(0.5);
    }
  }
`;
export const ModalSubmitBtn = styled.button`
  width: 40%;
  padding: 15px;
  background-color: var(--main-btn-brown);
  align-self: center;
  border-radius: 12px;
  border: none;
  color: white;
  /* font-size: 0.75rem; */
  margin: 5px;
`;
export const TimeDiv = styled.div`
  padding: 5px 10px;
  font-size: 0.88rem;
  input {
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin: 0 5px;
    font-weight: 700;
    outline: var(--main-btn-green);
  }
  .desc {
    font-size: 0.7rem;
    padding: 5px;
  }
`;
