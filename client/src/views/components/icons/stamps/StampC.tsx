import * as React from 'react';

function StampC(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={50} height={50} fill="none" {...props}>
      <path
        stroke="#332C2C"
        strokeWidth={0.7}
        strokeLinecap="round"
        d="M15.973 22.887l1.608.254M16.095 26.397l1.608.254M16.551 14.252l1.472 1.655"
      />
      <path
        d="M17.497 13.306c0-5.845 3.826-8.992 7.59-9.136 1.888-.072 3.77.608 5.183 2.093 1.412 1.484 2.38 3.8 2.38 7.043V45.752H17.497V13.305z"
        fill="#72B585"
        stroke="#332C2C"
        strokeWidth={0.7}
      />
      <path
        d="M25 5s7 2.875 7 9.706C32 21.535 31.315 45 31.315 45"
        stroke="#000"
        strokeOpacity={0.1}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={21.201}
        cy={18.519}
        r={2.978}
        fill="#D2D1D1"
        stroke="#332C2C"
        strokeWidth={0.7}
      />
      <circle
        cx={28.946}
        cy={18.519}
        r={2.978}
        fill="#D2D1D1"
        stroke="#332C2C"
        strokeWidth={0.7}
      />
      <path
        stroke="#332C2C"
        strokeWidth={0.7}
        strokeLinecap="round"
        d="M24.515 18.593h1.116"
      />
      <path
        d="M23.56 21.847s.23 1.694.688 1.694c.459 0 .321-1.21.871-1.15.55.061.275 1.15.78 1.15.504 0 .687-1.694.687-1.694"
        stroke="#332C2C"
        strokeWidth={0.7}
      />
      <path
        d="M20.604 16.613c-1.373.533-1.642 2.408-1.005 2.886"
        stroke="#fff"
        strokeWidth={0.7}
        strokeLinecap="round"
      />
      <circle cx={20.354} cy={20.213} r={0.424} fill="#fff" />
      <path
        fill="#0E3DE3"
        stroke="#332C2C"
        strokeWidth={0.7}
        d="M19.07 2.35h4.867v4.867H19.07z"
      />
      <circle
        cx={16.783}
        cy={7.083}
        r={2.433}
        fill="#FFFA78"
        stroke="#332C2C"
        strokeWidth={0.7}
      />
      <path
        d="M20.777 13.087c11.133-5.75 3.956 4.23 3.815-.724-.141-4.954 5.685-1.577 5.323 1.872"
        stroke="#332C2C"
        strokeWidth={0.7}
      />
      <path
        d="M17.197 8.254l4.17-2.298-.094 4.76-4.076-2.462z"
        fill="#F03C3C"
        stroke="#332C2C"
        strokeWidth={0.7}
      />
    </svg>
  );
}

const MemoStampC = React.memo(StampC);
export default MemoStampC;
