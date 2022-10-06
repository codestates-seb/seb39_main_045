import styled from 'styled-components';

// wrapper
export const CactusWrapper = styled.div`
  background-color: var(--main-bg-skyblue);
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
// btn
const MBtn = styled.button`
  border: none;
  color: white;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background-color: var(--main-btn-brown);
  border-radius: 50%;
  cursor: pointer;
`;
const TBtn = styled(MBtn)`
  color: #ffee58;
  /* background-color: var(--main-btn-brown); */
`;
const CBtn = styled(MBtn)`
  margin-top: 5px;
  border-radius: 10px;
  font-size: 14px;
  padding: 10px;
  font-weight: 400;
`;
const GBtn = styled(MBtn)`
  color: var(--main-bg-skyblue);
`;
const LBtn = styled(MBtn)`
  margin: 5px;
  background-color: var(--main-btn-green);
  :active {
    background-color: var(--main-emp-green);
  }
  :hover {
    background-color: var(--main-emp-green);
  }
`;
// else(layout etc)
export const NavBtns = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: flex-start;
  position: absolute;
  top: 0;
  z-index: 3;
  width: 100%;

  div > div:first-child {
    display: flex;
    justify-content: space-between;
    margin: 5px;
  }
`;

export const CactusStyle = styled.div`
  position: absolute;
  bottom: 70px;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;
export const NoCactusSpan = styled.span`
  color: white;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background-color: var(--main-btn-brown);
  border-radius: 50%;
  user-select: none;
`;

export const NowPercent = styled.div`
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background-color: var(--main-btn-brown);
  margin-top: 10px;
  border-radius: 10px;
  font-size: 14px;
  padding: 10px;
  font-weight: 400;
  background-color: var(--main-btn-brown);
  user-select: none;
`;
export const Messages = styled.div`
  width: 90%;
  padding: 20px;
  background-color: var(--main-alert-blue);
  border-radius: 15px;
  box-shadow: 0 0 15px var(--main-alert-blue);
  margin: 20px auto;
  color: white;
  text-align: center;
  font-weight: 500;
  word-break: break-all;
  letter-spacing: 2px;
  line-height: 20px;
  animation: animate 2s forwards 1 ease-out;
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  @keyframes animate {
    0% {
      transform: translateX(-50%) scale(0.8);
      opacity: 0.5;
    }
    30%,
    50%,
    70% {
      transform: translateX(-50%) scale(1);
      opacity: 1;
    }

    100% {
       transform: translateX(-50%) scale(0.8);
      opacity: 0;
    }
  }
`;
export const GiveUp = styled.div`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: white;
  background-color: var(--main-btn-green);
  padding: 10px;
  font-size: 14px;
  border-radius: 0 20px 20px 0;
  z-index: 4;
  left: -110px;
  span:first-child {
    margin-right: 10px;
  }
  top: 40%;
  transform: translate(0, -50%);
  transition: transform ease-out 0.8s;

  :active {
    transform: translate(110px, -50%);
  }
  :hover {
    transform: translate(110px, -50%);
  }
`;

export const MainBtn = {
  main: MBtn,
  today: TBtn,
  choose: CBtn,
  water: GBtn,
  logout: LBtn
};
