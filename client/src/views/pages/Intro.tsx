import React from 'react';
import styled from 'styled-components';

const Intro = () => {
  return <IntroContainer>
    선인장 만들기 인트로
  </IntroContainer>;
};

const IntroContainer = styled.div`
background-color: var(--intro-bg-green);
height: 100%;
`;

export default Intro;
