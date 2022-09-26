import * as React from 'react';

function LeftArrow(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={15} height={10} fill="none" {...props}>
      <path
        d="M5.255 9.477L.96 5.182 5.255.886l.99.98-2.596 2.596h6.08v1.44H3.65l2.595 2.59-.989.985z"
        fill="#3C685E"
      />
    </svg>
  );
}

const MemoLeftArrow = React.memo(LeftArrow);
export default MemoLeftArrow;
