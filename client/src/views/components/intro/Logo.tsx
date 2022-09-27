import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <LetterWrapper>
      <div>
        <span>선</span>
        <span>인</span>
        <span>장</span>
      </div>
      <div>
        <span>키</span>
        <span>우</span>
        <span>기</span>
      </div>
    </LetterWrapper>
  );
};

const LetterWrapper = styled.div`
  font-family: 'MaplestoryOTFBold';
  align-self: center;
  @keyframes bounce {
    100% {
      top: -10px;
      text-shadow: 0 0px 0 #5c8a8e29,
          0 2px 0 #3c646829,
          0 3px 0 #3c646829,
          0 4px 0 #3c646829,
          0 5px 0 #426c7031,
          0 6px 0 #466f722c,
          0 20px 25px rgba(0, 0, 0, 0.1);
      }
    }
  span {
    margin: 0 2px;
    position: relative;
    top: 1px;
    animation: 0.5s ease infinite alternate bounce;
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

export default Logo;
