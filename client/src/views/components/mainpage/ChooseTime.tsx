import React from 'react';

export const ShowTimeInput = React.forwardRef<
HTMLInputElement,
{ status: string | null }
>(({ status }, ref) => {
  if (status === 'morning') {
    return (
      <div>
        <input type="number" min="5" max="8" ref={ref} /> 시
      </div>
    );
  } else if (status === 'study') {
    return (
      <div>
        <input type="number" min="1" max="23" ref={ref} /> 시간
      </div>
    );
  }
  return <></>;
});
ShowTimeInput.displayName = 'ShowTimeInput';
