import * as React from 'react';

function Right(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={56} height={51} fill="none" {...props}>
      <g filter="url(#prefix__filter0_d_384_1447)">
        <path
          d="M28 0C3.58 0 3 28.914 3 34.638 3 40.36 14.195 45 28 45c13.81 0 25-4.639 25-10.362C53 28.914 52.424 0 28 0z"
          fill="#FCC21B"
        />
      </g>
      <path
        d="M38.339 29.428c-.43-.887-1.502-1.663-2.943-1.625-1.514.043-3.698.665-5.147.884a19.72 19.72 0 01-2.233.18 18.91 18.91 0 01-2.24-.18c-1.45-.219-3.633-.84-5.147-.884-1.441-.038-2.513.738-2.943 1.625-1.088 2.204 1.201 5.197 3.137 6.569 2.042 1.449 3.91 2.169 6.004 2.46.495.07 1.859.086 2.411-.008 2.24-.386 3.856-.999 5.902-2.452 1.932-1.372 4.286-4.365 3.199-6.569z"
        fill="#ED6C30"
      />
      <path
        d="M19.155 22.672c-1.822.017-3.316-1.831-3.336-4.125-.02-2.302 1.44-4.18 3.263-4.197 1.819-.017 3.316 1.83 3.337 4.133.02 2.298-1.441 4.171-3.264 4.189zm17.905 0c1.818-.005 3.292-1.87 3.288-4.163-.004-2.303-1.486-4.16-3.304-4.155-1.823.004-3.3 1.87-3.296 4.172.004 2.298 1.49 4.154 3.312 4.146z"
        fill="#2F2F2F"
      />
      <defs>
        <filter
          id="prefix__filter0_d_384_1447"
          x={0}
          y={0}
          width={56}
          height={51}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_384_1447"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_384_1447"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

const MemoRight = React.memo(Right);
export default MemoRight;
