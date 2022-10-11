import * as React from 'react';

function Arrow(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={11} height={21} fill="none" {...props}>
      <path
        d="M1.46 20.46a1.458 1.458 0 01-1.122-2.392l6.533-7.817-6.3-7.831A1.458 1.458 0 01.791.363a1.458 1.458 0 012.128.22l7.044 8.75a1.458 1.458 0 010 1.851l-7.292 8.75a1.458 1.458 0 01-1.21.525z"
        fill="#888"
      />
    </svg>
  );
}

const MemoArrow = React.memo(Arrow);
export default MemoArrow;
