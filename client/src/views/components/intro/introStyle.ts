import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100px;
  overflow: hidden;
  width: 100%;
  @media only screen and (min-width: 480px){
    display: none;
  }
`;

export const Track = styled.div`
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
  .slide {
    margin: 20px;
  }
`;
