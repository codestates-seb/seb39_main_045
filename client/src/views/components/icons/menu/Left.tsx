import * as React from 'react';

function Left(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={56} height={56} fill="none" {...props}>
      <g filter="url(#prefix__filter0_d_384_1383)">
        <path
          d="M46.75 7.636c-1.658 0-3.247.594-4.42 1.651-1.172 1.057-1.83 2.49-1.83 3.985V26.13c0 1.53-1.386 2.762-3.125 3.45V10.453c0-2.242-.988-4.392-2.746-5.978C32.871 2.891 30.486 2 28 2c-2.486 0-4.871.89-6.63 2.476-1.757 1.586-2.745 3.736-2.745 5.978v24.84c-1.753-.669-3.125-1.931-3.125-3.528v-7.221c0-1.495-.659-2.929-1.83-3.986-1.173-1.056-2.762-1.65-4.42-1.65s-3.247.594-4.42 1.65C3.659 21.616 3 23.05 3 24.546v9.863c0 3.113 2.734 5.46 5.273 6.78 1.944 1.012 7.393 2.255 10.352 2.327v4.984c0 4.668 18.75 4.668 18.75 0V37.862c3.095-.168 8.267-1.343 10.123-2.31 2.54-1.32 5.502-3.667 5.502-6.78v-15.5c0-1.494-.658-2.928-1.83-3.985-1.173-1.057-2.762-1.65-4.42-1.65z"
          fill="#77B255"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_384_1383"
          x={0}
          y={0}
          width={56}
          height={56}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_384_1383"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_384_1383"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

const MemoLeft = React.memo(Left);
export default MemoLeft;
