import styled from 'styled-components';
import { Bounce } from 'views/components/UI/Animation.style';

export const LetterWrapper = styled.div`
  font-family: 'MaplestoryOTFBold';
  align-self: center;
  span {
    margin: 0 2px;
    position: relative;
    top: 1px;
    animation: 0.5s ease infinite alternate ${Bounce};
    font-size: 90px;
    color: var(--intro-form-darkgreen);
    text-shadow: 0 1px 0 #3c646829,
      0 2px 0 #3c646829,
      0 3px 0 #3c646829,
      0 10px 20px rgba(0, 0, 0, 0.1);
  }
  span:nth-child(1) {
    animation-delay: 0.1s;
  } 
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }
  div:nth-child(2) {
    margin: 30px 0;
  }
`;
