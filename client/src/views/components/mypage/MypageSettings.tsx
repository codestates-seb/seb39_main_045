import React from 'react';
import styled from 'styled-components';
import { Title } from './mypageStyle';

const MypageSettings = () => {
  return (
    <>
    <Title>내 정보 수정</Title>
    <>form 들어올 자리</>
    <Exit>선인장 키우기를 떠나실 건가요?</Exit>
    </>
  );
};

const Exit = styled.button`
background: none;
font-size: 1rem;
width: fit-content;
text-align: right;
`;

export default MypageSettings;
