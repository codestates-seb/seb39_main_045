import styled from 'styled-components';

const IntroContainer = styled.div`
  background-color: var(--intro-bg-green);
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EnterBtn = styled.button`
  background-color: var(--intro-btn-yellow);
  padding: 15px 20px;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  align-self: center;
  margin: 30px 0;
  font-size: 2rem;
  transition: all 0.3s;
  z-index: 1;
  &:hover {
    padding: 20px 25px;
}
`;

const Wrapper = styled.div`
  height: 100px;
  overflow: hidden;
  width: 100%;
  position: absolute;
  top: 0;
  @media only screen and (min-width: 480px) {
    display: none;
  }
`;

const BigWrapper = styled.div`
  height: 150px;
  overflow: hidden;
  width: 100%;
  position: absolute;
  top: 0;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const BtmWrapper = styled(Wrapper)`
  top: auto;
  bottom: 0;
`;

const BigBtmWrapper = styled(BigWrapper)`
  top: auto;
  bottom: 0;
`;

const Track = styled.div`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-80px)
    }
  }
  width: calc(60px * 8);
  animation: 2s linear infinite scroll;
  > * {
    margin: 20px;
  }
`;

const BigTrack = styled.div`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-160px)
    }
  }
  width: calc(120px * 8);
  animation: 2s linear infinite scroll;
  > * {
    margin: 30px;
  }
`;

export {
  IntroContainer,
  EnterBtn,
  Wrapper,
  BtmWrapper,
  Track,
  BigTrack,
  BigWrapper,
  BigBtmWrapper
};
