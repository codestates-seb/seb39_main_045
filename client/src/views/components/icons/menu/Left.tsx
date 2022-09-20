import * as React from 'react';

function Left(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={50} height={50} fill="none" {...props}>
      <g filter="url(#prefix__filter0_d_264_510)">
        <path
          d="M39 4.509c-1.326 0-2.598.475-3.535 1.32C34.526 6.676 34 7.823 34 9.019v10.286c0 1.224-1.109 2.21-2.5 2.76v-15.3c0-1.794-.79-3.515-2.197-4.783C27.897.713 25.99 0 24 0c-1.99 0-3.897.713-5.303 1.981C17.29 3.249 16.5 4.97 16.5 6.763v19.873C15.098 26.1 14 25.09 14 23.813v-5.777c0-1.196-.527-2.343-1.464-3.188-.938-.846-2.21-1.321-3.536-1.321s-2.598.475-3.536 1.32C4.527 15.694 4 16.84 4 18.037v7.89c0 2.49 2.188 4.369 4.219 5.425 1.555.81 5.914 1.803 8.281 1.861v3.987c0 3.735 15 3.735 15 0v-8.51c2.476-.134 6.614-1.074 8.099-1.847C41.63 25.786 44 23.908 44 21.418v-12.4c0-1.196-.527-2.343-1.465-3.188-.937-.846-2.209-1.321-3.535-1.321z"
          fill="#77B255"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_264_510"
          x={0}
          y={0}
          width={50}
          height={50}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_264_510"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_264_510"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

const MemoLeft = React.memo(Left);
export default MemoLeft;
