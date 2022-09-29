import { keyframes } from 'styled-components';

export const Bounce = keyframes`
  100% {
    top: -10px;
    text-shadow: 0 0px 0 #5c8a8e29,
        0 2px 0 #3c646829,
        0 3px 0 #3c646829,
        0 4px 0 #3c646829,
        0 5px 0 #426c7031,
        0 6px 0 #466f722c,
        0 20px 25px rgba(0, 0, 0, 0.1);
    }
`;

export const SmallTrackScroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-80px)
  }
`;

export const BigTrackScroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-160px)
  }
`;
