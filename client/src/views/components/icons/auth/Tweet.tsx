import * as React from 'react';

function Tweet(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={19} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_686_747)">
        <path
          d="M19.998 2.305a7.343 7.343 0 01-2.357.75c.848-.59 1.498-1.522 1.804-2.633a7.57 7.57 0 01-2.605 1.155C16.092.652 15.026.074 13.846.074c-2.266 0-4.103 2.13-4.103 4.757 0 .373.037.736.107 1.085-3.41-.199-6.432-2.093-8.456-4.97a5.326 5.326 0 00-.555 2.39c0 1.651.724 3.107 1.825 3.96a3.667 3.667 0 01-1.858-.595v.06c0 2.305 1.414 4.228 3.29 4.664a3.56 3.56 0 01-1.852.082c.522 1.89 2.037 3.265 3.832 3.304-1.404 1.276-3.173 2.036-5.095 2.036-.331 0-.658-.023-.979-.066 1.816 1.35 3.972 2.137 6.289 2.137 7.545 0 11.671-7.249 11.671-13.535 0-.206-.003-.411-.011-.615a9.197 9.197 0 002.047-2.463"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_686_747">
          <path fill="#fff" d="M0 0h20v18.93H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoTweet = React.memo(Tweet);
export default MemoTweet;
