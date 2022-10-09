import React from 'react';
import { TimeDiv, Label } from '../mainpage/modal.style';
import { useDispatch } from 'react-redux';
import { setTime } from 'feature/challenge/form';

const ShowTimeInput = ({ status }: { status: string | null }) => {
  const dispatch = useDispatch();
  if (status === 'morning') {
    return (
      <>
        <Label className="label">목표 기상 시간</Label>
        <TimeDiv>
          <span>아침 </span>
          <input
            type="number"
            min="5"
            max="8"
            onChange={(e) =>
              dispatch(
                setTime({
                  targetTime: Number(e.target.value)
                })
              )
            }
          />
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
          <input
            type="number"
            min="1"
            max="23"
            onChange={(e) =>
              dispatch(
                setTime({
                  targetTime: Number(e.target.value)
                })
              )
            }
          />
          <span> 시간</span>
          <div className="desc">*1~23시간 선택 가능</div>
        </TimeDiv>
      </>
    );
  }
  return <></>;
};
export default ShowTimeInput;
