import React from 'react';
import styled from 'styled-components';
import { Label } from './SelectModal';
const TimeDiv = styled.div`
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
const ShowTimeInput = React.forwardRef<
HTMLInputElement,
{ status: string | null }
>(({ status }, ref) => {
  if (status === 'morning') {
    return (
      <>
        <Label className="label">목표 기상 시간</Label>
        <TimeDiv>
          <span>아침 </span>
          <input type="number" min="5" max="8" ref={ref} />
          <span> 시</span>
          <div className="desc">*5시~8시 선택 가능</div>
        </TimeDiv>
      </>
    );
  } else if (status === 'study') {
    return (
      <>
        <Label className="label">목표 공부 시간</Label>
        <TimeDiv>
          <span>총 </span>
          <input type="number" min="1" max="23" ref={ref} />
          <span> 시간</span>
          <div className="desc">*1~23시간 선택 가능</div>
        </TimeDiv>
      </>
    );
  }
  return <></>;
});
ShowTimeInput.displayName = 'ShowTimeInput';
export default ShowTimeInput;
