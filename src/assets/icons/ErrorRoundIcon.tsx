import React from 'react';

import {Svg, Circle, Path} from 'react-native-svg';

import {IconBase} from '@components';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ErrorRoundIcon({size = 48, color = '#EA3838'}: IconBase) {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none">
      <Circle cx="24" cy="24" r="24" fill={color} />
      <Path
        d="M15 15.0004L31.2279 31.9996M15.7728 32L32 15"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
    </Svg>
  );
}
