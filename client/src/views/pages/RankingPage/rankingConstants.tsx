import React from 'react';
import { Stamp } from 'views/components/icons/stamps';

export const STAMP_COLOR = [
  {
    bgColor: '#ffc2cc',
    borderColor: '#ff7373'
  },
  {
    bgColor: '#ffebc2',
    borderColor: '#ffa273'
  },
  {
    bgColor: '#afe2aa',
    borderColor: '#73b073'
  },
  {
    bgColor: '#bde9ec',
    borderColor: '#468dc7'
  },
  {
    bgColor: '#ead9f1',
    borderColor: '#b58fcb'
  }
] as const;

export const iconMap: JSX.Element[] = Object.entries(Stamp).map(([key, Component]) => <Component key={`${key}_stamp_key`} />);

export const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 5);
};
